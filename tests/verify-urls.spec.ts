import { test, expect } from '@playwright/test';

const URLS_TO_TEST = [
  '/blog/realistic-logo-mockup-guide',
  '/features',
  '/mockups/coffee-cup-logo-mockup',
  '/mockups/t-shirt-logo-mockup',
  '/mockups/stationery-logo-mockup',
  '/mockups/billboard-logo-mockup',
  '/mockups/signage-logo-mockup',
  '/mockups/hat-cap-logo-mockup',
  '/mockups/product-packaging-mockup',
  '/industries/fashion-logo-mockup',
  '/industries/food-beverage-logo-mockup',
  '/industries/tech-startup-logo-mockup',
];

const BASE_URL = 'http://127.0.0.1:3000';

test.describe('Verify New URLs and Functionality', () => {
  for (const url of URLS_TO_TEST) {
    test(`URL should return 200 OK: ${url}`, async ({ request }) => {
      const response = await request.get(`${BASE_URL}${url}`);
      expect(response.status()).toBe(200);
    });
  }

  test('Main page mockup generation functionality works', async ({ page }) => {
    // 1. Navigate to main page
    await page.goto(BASE_URL);

    // 2. Click "Generate Your Mockup Free" to go to the first template (coffee-cup)
    await page.click('text=Generate Your Mockup Free');

    // Wait for the editor to load
    await page.waitForSelector('canvas');

    // 3. Upload a logo
    // Since we don't have a real logo file handy in the test context, we'll create a dummy one
    const buffer = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
      'base64'
    );

// Since I don't know the exact DOM of the editor, I'll write a generic approach
    // If this fails, we will need to inspect the editor DOM
    const fileInput = await page.$('input[type="file"]');
    if (fileInput) {
       await fileInput.setInputFiles({
         name: 'logo.png',
         mimeType: 'image/png',
         buffer: buffer,
       });
    } else {
      const fileChooserPromise = page.waitForEvent('filechooser');
      await page.locator('button:has-text("Upload")').click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles({
         name: 'logo.png',
         mimeType: 'image/png',
         buffer: buffer,
      });
    }

    // 4. Wait for template preview to render with logo applied
    // We just wait a bit for the canvas to update.
    await page.waitForTimeout(1000);

    // 5. Test Download Functionality
    // Looking for a download button
    const downloadPromise = page.waitForEvent('download');
    await page.locator('button:has-text("Download")').click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toContain('.png');
  });
});
