import { test, expect } from '@playwright/test';
import { waitForAppReady, dismissInfoDialog, dismissCompatibilityWarning, screenshot } from './helpers/app';

const CH = '07-template-gallery';

test.describe.serial('Template Gallery', () => {
  test('gallery opens with template cards and categories', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    await page.click('#templates-btn');
    await expect(page.locator('#template-gallery-dialog')).toBeVisible();

    // Category chips render (All + 18 categories; My Templates chip only shows when user templates exist)
    await expect(page.locator('#template-category-chips .gallery-chip')).toHaveCount(19);

    // Template cards render with thumbnails
    const cards = page.locator('#template-grid .template-card');
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThanOrEqual(160);

    // Wait for async barcode/QR thumbnails to settle
    await page.waitForTimeout(1000);
    await screenshot(page, CH, 1, 'gallery-open');
  });

  test('library manifest stays internally consistent', async ({ request }) => {
    const response = await request.get('/template-library.json');
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data.categories).toHaveLength(18);
    expect(data.templates).toHaveLength(160);

    const categoryIds = new Set(data.categories.map((category: any) => category.id));
    const templateIds = data.templates.map((template: any) => template.id);
    expect(new Set(templateIds).size).toBe(templateIds.length);

    for (const template of data.templates) {
      expect(categoryIds.has(template.category)).toBeTruthy();
      expect(template.elements.length).toBeGreaterThan(0);

      const canvasWidth = template.labelSize.width * 8;
      const canvasHeight = template.labelSize.height * 8;
      for (const element of template.elements) {
        expect(['text', 'shape', 'barcode', 'qr', 'image']).toContain(element.type);
        if ((element.rotation ?? 0) === 0) {
          expect(element.x).toBeGreaterThanOrEqual(0);
          expect(element.y).toBeGreaterThanOrEqual(0);
          expect(element.x + element.width).toBeLessThanOrEqual(canvasWidth);
          expect(element.y + element.height).toBeLessThanOrEqual(canvasHeight);
        }
      }
    }
  });

  test('category filter narrows the grid', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    await page.click('#templates-btn');
    await expect(page.locator('#template-grid .template-card').first()).toBeVisible();
    const allCount = await page.locator('#template-grid .template-card').count();

    await page.click('#template-category-chips .gallery-chip[data-category="food"]');
    const foodCards = page.locator('#template-grid .template-card');
    await expect(foodCards.first()).toBeVisible();
    const foodCount = await foodCards.count();
    expect(foodCount).toBeGreaterThan(0);
    expect(foodCount).toBeLessThan(allCount);

    await screenshot(page, CH, 2, 'category-filtered');
  });

  test('search filters templates by name and tags', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    await page.click('#templates-btn');
    await expect(page.locator('#template-grid .template-card').first()).toBeVisible();

    await page.fill('#template-search', 'Wi-Fi QR');
    const cards = page.locator('#template-grid .template-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Wi-Fi QR');

    // No-match message
    await page.fill('#template-search', 'zzzznope');
    await expect(page.locator('#template-grid')).toContainText('No templates match');

    await page.fill('#template-search', '');
    expect(await page.locator('#template-grid .template-card').count()).toBeGreaterThanOrEqual(160);
  });

  test('applying a template loads elements and label size', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    await page.click('#templates-btn');
    await expect(page.locator('#template-grid .template-card').first()).toBeVisible();

    await page.click('.template-card[data-template-id="price-tag"]');
    await expect(page.locator('#template-gallery-dialog')).toBeHidden();

    // Elements applied and label size switched to the template's 40x30
    const state = await page.evaluate(() => {
      const anyWin = window as any;
      return {
        count: anyWin.state?.elements?.length,
        labelSize: anyWin.state?.labelSize,
      };
    });
    if (state.count !== undefined) {
      expect(state.count).toBe(4);
      expect(state.labelSize.width).toBe(40);
      expect(state.labelSize.height).toBe(30);
    }
    await expect(page.locator('#status-message')).toContainText('applied');
    await expect(page.locator('#label-size')).toHaveValue('40x30');

    await page.waitForTimeout(500);
    await screenshot(page, CH, 3, 'template-applied');
  });

  test('template with fields activates template toolbar', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    await page.click('#templates-btn');
    await expect(page.locator('#template-grid .template-card').first()).toBeVisible();

    // Applying over an existing design asks for confirmation
    page.once('dialog', d => d.accept());
    await page.click('.template-card[data-template-id="name-tag"]');
    await expect(page.locator('#template-gallery-dialog')).toBeHidden();

    // {{Name}} field should be detected and surface the Manage Data button
    await expect(page.locator('#template-toolbar-btn')).toBeVisible();

    await screenshot(page, CH, 4, 'field-template-applied');
  });

  test('korean category renders localized templates', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    await page.click('#templates-btn');
    await expect(page.locator('#template-grid .template-card').first()).toBeVisible();

    await page.click('#template-category-chips .gallery-chip[data-category="korean"]');
    const cards = page.locator('#template-grid .template-card');
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThanOrEqual(20);
    await expect(page.locator('#template-grid')).toContainText('이름표');

    await page.waitForTimeout(500);
    await screenshot(page, CH, 6, 'korean-category');

    // Korean search works via tags (택배 라벨 + 택배 취급주의)
    await page.fill('#template-search', '택배');
    await expect(page.locator('#template-grid .template-card')).toHaveCount(2);
    await expect(page.locator('#template-grid')).toContainText('택배 라벨');
  });

  test('save current design as user template and delete it', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    // Create a simple design
    await page.click('#add-text');
    await page.waitForTimeout(300);

    await page.click('#templates-btn');
    await expect(page.locator('#template-grid .template-card').first()).toBeVisible();

    // Save it as a template (prompt returns the name)
    page.once('dialog', d => d.accept('My Test Label'));
    await page.click('#template-save-current');

    // My Templates chip appears and the grid shows the saved template
    await expect(page.locator('#template-category-chips .gallery-chip[data-category="custom"]')).toBeVisible();
    const userCard = page.locator('#template-grid .template-card');
    await expect(userCard).toHaveCount(1);
    await expect(userCard.first()).toContainText('My Test Label');

    await screenshot(page, CH, 7, 'user-template-saved');

    // Delete it — chip disappears, grid falls back to All
    page.once('dialog', d => d.accept());
    await page.click('.user-template-delete');
    await expect(page.locator('#template-category-chips .gallery-chip[data-category="custom"]')).toHaveCount(0);
    expect(await page.locator('#template-grid .template-card').count()).toBeGreaterThanOrEqual(160);
  });

  test('fit to current label size scales the template', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    // Switch to 60x40 first
    await page.selectOption('#label-size', '60x40');
    await page.waitForTimeout(300);

    await page.click('#templates-btn');
    await expect(page.locator('#template-grid .template-card').first()).toBeVisible();
    await page.check('#template-fit-size');

    // price-tag is natively 40x30; with fit enabled the label stays 60x40
    await page.click('.template-card[data-template-id="price-tag"]');
    await expect(page.locator('#template-gallery-dialog')).toBeHidden();
    await expect(page.locator('#label-size')).toHaveValue('60x40');

    await page.waitForTimeout(500);
    await screenshot(page, CH, 5, 'fit-to-size-applied');
  });
});
