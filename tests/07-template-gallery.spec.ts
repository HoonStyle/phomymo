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

    // Category chips render (All + 8 categories)
    await expect(page.locator('#template-category-chips .gallery-chip')).toHaveCount(9);

    // Template cards render with thumbnails
    const cards = page.locator('#template-grid .template-card');
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThanOrEqual(30);

    // Wait for async barcode/QR thumbnails to settle
    await page.waitForTimeout(1000);
    await screenshot(page, CH, 1, 'gallery-open');
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

    await page.fill('#template-search', 'wifi');
    const cards = page.locator('#template-grid .template-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Wi-Fi QR');

    // No-match message
    await page.fill('#template-search', 'zzzznope');
    await expect(page.locator('#template-grid')).toContainText('No templates match');

    await page.fill('#template-search', '');
    expect(await page.locator('#template-grid .template-card').count()).toBeGreaterThanOrEqual(30);
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
