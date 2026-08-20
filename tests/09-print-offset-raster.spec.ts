import { test, expect } from '@playwright/test';

// Regression: print offset must shift the label inside the print
// head width instead of clipping content at the label's right edge.
test('print offset shifts raster without clipping the frame', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const result = await page.evaluate(async () => {
    const { CanvasRenderer } = await import('./canvas.js?v=121');
    const { createShapeElement } = await import('./elements.js?v=101');

    const renderer = new CanvasRenderer(document.createElement('canvas'));
    renderer.setDimensions(40, 30, 1, false); // 40x30mm label -> 320x240 px

    const border = createShapeElement('border', {
      x: 0, y: 0, width: 320, height: 240,
      strokeWidth: 2,
    });
    border.borderStyle = 'victorian-corners';
    const elements = [border];

    // widthBytes=48 (M110 head, 384 dots), threshold mode, center alignment
    const measure = (offsetPx: number) => {
      const { data, widthBytes, heightLines } = renderer.getRasterData(
        elements, 48, 203, 'threshold', 'center', offsetPx, 0
      );
      // scan the middle row for leftmost/rightmost black dot
      const y = Math.floor(heightLines / 2);
      let minX = -1, maxX = -1;
      for (let b = 0; b < widthBytes; b++) {
        const byte = data[y * widthBytes + b];
        if (!byte) continue;
        for (let bit = 0; bit < 8; bit++) {
          if (byte & (1 << (7 - bit))) {
            const x = b * 8 + bit;
            if (minX < 0) minX = x;
            maxX = x;
          }
        }
      }
      return { minX, maxX };
    };

    return {
      off0: measure(0),
      off16: measure(16),  // +2mm
      off40: measure(40),  // +5mm
    };
  });

  // Base: 320px label centered in 384 dots; frame outer line is inset ~unit
  expect(result.off0.minX).toBeGreaterThanOrEqual(30);
  expect(result.off0.maxX).toBeGreaterThanOrEqual(335);

  // The whole frame must shift by exactly the offset — right edge included
  expect(result.off16.minX).toBe(result.off0.minX + 16);
  expect(result.off16.maxX).toBe(result.off0.maxX + 16);
  expect(result.off40.minX).toBe(result.off0.minX + 40);
  expect(result.off40.maxX).toBe(Math.min(383, result.off0.maxX + 40));
});
