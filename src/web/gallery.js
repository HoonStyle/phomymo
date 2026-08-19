/**
 * Built-in template gallery for Phomymo label designer
 *
 * Loads the bundled template library (template-library.json), renders live
 * thumbnails using the real canvas renderer (WYSIWYG), and instantiates
 * templates onto the canvas — either at the template's native label size or
 * scaled to fit the currently selected label.
 *
 * Template coordinates use the same base resolution as the editor: 8 px/mm.
 */

import { CanvasRenderer } from './canvas.js?v=116';
import {
  generateId,
  createTextElement,
  createImageElement,
  createBarcodeElement,
  createQRElement,
  createShapeElement,
} from './elements.js?v=100';
import { evaluateExpressions } from './templates.js?v=101';
import { STORAGE_KEYS } from './constants.js?v=106';

// Extra per-type properties that the renderer understands but the element
// factories don't create. These survive normalization so templates can use them.
const EXTRA_PROPS = {
  barcode: ['showText', 'textFontSize', 'textBold'],
};

let library = null; // { categories: [], templates: [] }

/**
 * Normalize a raw template element through the element factories so every
 * property the renderer expects is present, while unknown keys are dropped.
 * IDs are made deterministic per template so thumbnail render caches stay warm.
 */
function normalizeElement(raw, stableId) {
  let el;
  switch (raw.type) {
    case 'text':
      el = createTextElement(raw.text ?? '', raw);
      break;
    case 'barcode':
      el = createBarcodeElement(raw.barcodeData ?? '123456789012', raw);
      break;
    case 'qr':
      el = createQRElement(raw.qrData ?? 'https://example.com', raw);
      break;
    case 'shape':
      el = createShapeElement(raw.shapeType ?? 'rectangle', raw);
      break;
    case 'image':
      el = createImageElement(raw.imageData ?? '', raw);
      break;
    default:
      return null;
  }

  // Carry over renderer-only extras
  const extras = EXTRA_PROPS[raw.type] || [];
  for (const key of extras) {
    if (raw[key] !== undefined) el[key] = raw[key];
  }

  el.id = stableId;
  return el;
}

/**
 * Load and normalize the built-in template library.
 * Safe to call multiple times — the library is cached after the first load.
 * @returns {Promise<{categories: Array, templates: Array}>}
 */
export async function loadTemplateLibrary() {
  if (library) return library;

  try {
    const resp = await fetch('./template-library.json');
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();

    const templates = (data.templates || [])
      .filter(t => t && t.id && t.labelSize && Array.isArray(t.elements))
      .map(t => ({
        ...t,
        elements: t.elements
          .map((el, i) => normalizeElement(el, `tpl_${t.id}_${i}`))
          .filter(Boolean),
      }));

    library = {
      categories: data.categories || [],
      templates,
    };
  } catch (e) {
    console.error('Failed to load template library:', e);
    library = { categories: [], templates: [] };
  }

  return library;
}

/**
 * Get the cached library (empty until loadTemplateLibrary resolves).
 */
export function getTemplateLibrary() {
  return library || { categories: [], templates: [] };
}

// =============================================================================
// USER TEMPLATES (saved from the user's own designs, stored in localStorage)
// =============================================================================

export const USER_TEMPLATE_CATEGORY = { id: 'custom', name: 'My Templates', icon: '⭐' };

function getRawUserTemplates() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_TEMPLATES);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load user templates:', e);
    return {};
  }
}

function setRawUserTemplates(raw) {
  localStorage.setItem(STORAGE_KEYS.USER_TEMPLATES, JSON.stringify(raw));
}

/**
 * Get all user-saved templates in gallery template shape, newest first.
 * Element IDs are made deterministic so thumbnail caches stay warm.
 */
export function getUserTemplates() {
  return Object.values(getRawUserTemplates())
    .sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0))
    .map(t => ({
      id: t.id,
      name: t.name,
      category: USER_TEMPLATE_CATEGORY.id,
      isUserTemplate: true,
      tags: [],
      labelSize: t.labelSize,
      elements: (t.elements || []).map((el, i) => ({ ...el, id: `usertpl_${t.id}_${i}` })),
    }));
}

/**
 * Save the current design as a user template.
 * @returns {string} the new template's id
 */
export function saveUserTemplate(name, elements, labelSize) {
  if (!name || !name.trim()) throw new Error('Template name is required');
  if (!elements || elements.length === 0) throw new Error('Nothing to save — the canvas is empty');

  const raw = getRawUserTemplates();
  const id = 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  raw[id] = {
    id,
    name: name.trim(),
    labelSize: { ...labelSize },
    // Deep-clone and normalize to single-label space
    elements: JSON.parse(JSON.stringify(elements)).map(el => ({ ...el, zone: 0 })),
    savedAt: Date.now(),
  };

  try {
    setRawUserTemplates(raw);
  } catch (e) {
    throw new Error('Failed to save template (storage may be full)');
  }
  return id;
}

/**
 * Delete a user template by id.
 */
export function deleteUserTemplate(id) {
  const raw = getRawUserTemplates();
  if (!(id in raw)) return false;
  delete raw[id];
  setRawUserTemplates(raw);
  return true;
}

/**
 * Categories to show in the gallery: My Templates first (when any exist),
 * then the built-in categories.
 */
export function getGalleryCategories() {
  const cats = [...getTemplateLibrary().categories];
  if (getUserTemplates().length > 0) {
    cats.unshift(USER_TEMPLATE_CATEGORY);
  }
  return cats;
}

/**
 * Filter templates by category and/or free-text query (name + tags).
 * User templates list before built-ins.
 * @param {object} opts - { category: string|null, query: string }
 */
export function filterTemplates({ category = null, query = '' } = {}) {
  const all = [...getUserTemplates(), ...getTemplateLibrary().templates];
  const q = query.trim().toLowerCase();

  return all.filter(t => {
    if (category && t.category !== category) return false;
    if (q) {
      const haystack = [t.name, t.category, ...(t.tags || [])].join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

/**
 * Find a template (built-in or user) by id.
 */
export function getTemplateById(id) {
  return (
    getTemplateLibrary().templates.find(t => t.id === id) ||
    getUserTemplates().find(t => t.id === id) ||
    null
  );
}

const PX_PER_MM = 8;
const THUMB_SCALE = 2; // render thumbnails at 2x base resolution for crispness

/**
 * Create a shared offscreen renderer for thumbnails. Element rendering is
 * independent of the renderer's own canvas dimensions, so one instance can
 * serve every thumbnail; its barcode/QR caches stay warm across renders.
 * @param {Function} onAsyncLoad - called when async content (barcode/QR) finishes
 */
export function createThumbnailRenderer(onAsyncLoad) {
  const renderer = new CanvasRenderer(document.createElement('canvas'));
  renderer.onAsyncLoad = onAsyncLoad;
  return renderer;
}

/**
 * Draw a template preview into the given canvas at base-resolution * THUMB_SCALE.
 * The canvas CSS size is left to the caller/stylesheet; only the bitmap is set.
 * @param {CanvasRenderer} renderer - shared thumbnail renderer
 * @param {object} template - normalized template
 * @param {HTMLCanvasElement} canvas - target canvas
 */
export function drawTemplateThumbnail(renderer, template, canvas) {
  const { width, height, round } = template.labelSize;
  const w = Math.round(width * PX_PER_MM);
  const h = Math.round(height * PX_PER_MM);

  canvas.width = w * THUMB_SCALE;
  canvas.height = h * THUMB_SCALE;

  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.scale(THUMB_SCALE, THUMB_SCALE);

  // Round labels: clip to circle so the preview matches the die-cut shape
  if (round) {
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, Math.min(w, h) / 2, 0, Math.PI * 2);
    ctx.clip();
  }

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);

  // Evaluate [[date]]-style expressions so previews show real values;
  // {{Field}} placeholders stay literal to signal they are batch fields.
  renderer.renderAllToContext(ctx, evaluateExpressions(template.elements), []);
  ctx.restore();

  // Subtle outline so white labels read against the card background
  ctx.save();
  ctx.strokeStyle = 'rgba(0,0,0,0.08)';
  ctx.lineWidth = 2;
  if (round) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2 - 1, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
  }
  ctx.restore();
}

// Numeric element properties that scale with the label when fitting a
// template to a different label size.
const SCALED_PROPS = ['x', 'y', 'width', 'height', 'fontSize', 'strokeWidth', 'cornerRadius', 'textFontSize'];

/**
 * Instantiate a template for the editor: fresh element IDs, optionally scaled
 * to fit a target label size.
 * @param {object} template - normalized template
 * @param {object|null} fitToSize - { width, height } in mm to scale into, or null
 *                                   to use the template's native size
 * @returns {{ elements: Array, labelSize: object }}
 */
export function instantiateTemplate(template, fitToSize = null) {
  let elements = template.elements.map(el => ({ ...el, id: generateId() }));
  let labelSize = { ...template.labelSize };

  if (fitToSize && (fitToSize.width !== labelSize.width || fitToSize.height !== labelSize.height)) {
    const srcW = labelSize.width * PX_PER_MM;
    const srcH = labelSize.height * PX_PER_MM;
    const dstW = fitToSize.width * PX_PER_MM;
    const dstH = fitToSize.height * PX_PER_MM;

    // Uniform scale preserves the design; center the scaled artwork
    const scale = Math.min(dstW / srcW, dstH / srcH);
    const offsetX = (dstW - srcW * scale) / 2;
    const offsetY = (dstH - srcH * scale) / 2;

    elements = elements.map(el => {
      const scaled = { ...el };
      for (const prop of SCALED_PROPS) {
        if (typeof scaled[prop] === 'number') scaled[prop] = scaled[prop] * scale;
      }
      scaled.x += offsetX;
      scaled.y += offsetY;
      // Keep stroke widths and font sizes usable after downscaling
      if (typeof scaled.strokeWidth === 'number') scaled.strokeWidth = Math.max(1, scaled.strokeWidth);
      if (typeof scaled.fontSize === 'number') scaled.fontSize = Math.max(6, scaled.fontSize);
      return scaled;
    });

    labelSize = { ...fitToSize };
  }

  return { elements, labelSize };
}
