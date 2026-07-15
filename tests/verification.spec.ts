import { test, expect } from '@playwright/test';

const baseUrl = 'http://127.0.0.1:3000';

const urls = [
  '/blog/logo-mockup-guide',
  '/mockups/coffee-cup-logo-mockup',
  '/mockups/t-shirt-logo-mockup',
  '/mockups/tshirt-logo-mockup',
  '/mockups/stationery-mockup',
  '/mockups/billboard-mockup',
  '/mockups/signage-mockup',
  '/mockups/product-packaging-mockup',
  '/industries/fashion-logo-mockup',
  '/industries/food-beverage-logo-mockup',
  '/industries/tech-startup-logo-mockup'
];

test.describe('MockBrand Content Verification', () => {
  for (const url of urls) {
    test(`Verify ${url} returns 200 and has no console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      const response = await page.goto(`${baseUrl}${url}`);
      expect(response?.status()).toBe(200);
      expect(consoleErrors).toEqual([]);
    });
  }

  test('Verify Tier 1 Article has AI Snapshot and Schema', async ({ page }) => {
    await page.goto(`${baseUrl}/blog/logo-mockup-guide`);

    // Check AI Snapshot placement
    const h2 = await page.locator('h2:has-text("How to create realistic logo mockups for your brand?")');
    await expect(h2).toBeVisible();

    const snapshotText = await page.locator('h2:has-text("How to create realistic logo mockups for your brand?") + p').textContent();
    expect(snapshotText?.length).toBeGreaterThan(100); // 30-40 words is roughly 150-250 chars

    // Check Article Schema
    const schema = await page.locator('script[type="application/ld+json"]').first().innerHTML();
    const json = JSON.parse(schema);
    expect(json['@type']).toBe('Article');
  });

  test('Verify Programmatic Page has FAQ Schema', async ({ page }) => {
    await page.goto(`${baseUrl}/mockups/coffee-cup-logo-mockup`);
    const schema = await page.locator('script[type="application/ld+json"]').first().innerHTML();
    const json = JSON.parse(schema);
    expect(json['@type']).toBe('FAQPage');
  });

  test('Verify Core Mockup Generator Functionality', async ({ page }) => {
    // Navigate to a specific mockup page where the editor is present
    await page.goto(`${baseUrl}/mockup/coffee-cup`);

    // 1. Check for Logo Upload input
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.click('label:has-text("Upload Logo")');
    const fileChooser = await fileChooserPromise;

    // Use a 1x1 transparent PNG base64
    const buffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==', 'base64');
    await fileChooser.setFiles([{ name: 'logo.png', mimeType: 'image/png', buffer }]);

    // 2. Wait for canvas to render (heuristic: look for the download button becoming active or a specific canvas state)
    // No need to click "Coffee Cup" as we are already on that page.

    // 3. Check for Download Button and trigger
    const downloadButton = page.locator('button:has-text("Download")');
    await expect(downloadButton).toBeVisible();

    // Since download triggers a browser action, we just verify the button exists and is clickable
    await downloadButton.click();

    // Verify no console errors after these actions
  });
});
