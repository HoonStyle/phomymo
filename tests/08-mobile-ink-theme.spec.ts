import { test, expect } from '@playwright/test';
import { waitForAppReady, dismissInfoDialog, dismissCompatibilityWarning, screenshot } from './helpers/app';

const CH = '08-mobile-ink-theme';

test.describe.serial('Mobile Ink Studio theme', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile viewport gets the dark Ink Studio skin', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    // Dark body background
    const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bodyBg).toBe('rgb(20, 19, 24)');

    // Floating tool dock styling
    const dock = page.locator('#mobile-toolbar');
    await expect(dock).toBeVisible();
    const dockRadius = await dock.evaluate(el => getComputedStyle(el).borderRadius);
    expect(dockRadius).toBe('26px');

    // Renderer switched to the dark canvas chrome
    const theme = await page.evaluate(() => {
      const anyWin = window as any;
      return anyWin.state?.renderer?.theme;
    });
    if (theme !== undefined) expect(theme).toBe('dark');

    await page.click('#mobile-add-text');
    await page.waitForTimeout(500);
    await screenshot(page, CH, 1, 'mobile-editor-dark');
  });

  test('desktop viewport keeps the light theme', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bodyBg).toBe('rgb(243, 244, 246)');
  });

  test('mobile dialogs and props panel are dark-skinned', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await waitForAppReady(page);
    await dismissCompatibilityWarning(page);
    await dismissInfoDialog(page);

    // Template gallery dialog surface
    await page.click('#mobile-menu-btn');
    await page.waitForTimeout(400);
    await page.click('#mobile-templates-btn');
    await page.waitForSelector('#template-grid .template-card');
    const dialogBg = await page.locator('#template-gallery-dialog > div').evaluate(
      el => getComputedStyle(el).backgroundColor);
    expect(dialogBg).toBe('rgb(35, 33, 41)');
    await page.waitForTimeout(1500);
    await screenshot(page, CH, 2, 'mobile-gallery-dark');
    await page.click('#template-gallery-close');

    // Props panel
    await page.click('#mobile-add-text');
    await page.waitForTimeout(400);
    await page.click('#mobile-edit-btn');
    await page.waitForTimeout(500);
    const panelBg = await page.locator('#mobile-props-panel').evaluate(
      el => getComputedStyle(el).backgroundColor);
    expect(panelBg).toBe('rgb(30, 28, 36)');
    await screenshot(page, CH, 3, 'mobile-props-dark');
  });
});
