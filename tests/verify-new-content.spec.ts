import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

const slugs = [
  '/blog/realistic-logo-mockup-guide',
  '/mockups/coffee-cup-logo-mockup',
  '/mockups/t-shirt-logo-mockup',
  '/mockups/stationery-logo-mockup',
  '/mockups/billboard-logo-mockup',
  '/mockups/signage-logo-mockup',
  '/mockups/product-packaging-mockup',
  '/industries/fashion-logo-mockup',
  '/industries/food-beverage-logo-mockup',
  '/industries/tech-startup-logo-mockup'
];

test.describe('Tier 1 and Tier 2 Content Verification', () => {
  for (const slug of slugs) {
    test(`Verify ${slug} returns 200 OK and has valid schema`, async ({ page }) => {
      const response = await page.goto(`${BASE_URL}${slug}`);
      expect(response?.status()).toBe(200);

      // Check for JSON-LD schema
      const jsonLd = await page.locator('script[type="application/ld+json"]').first();
      await expect(jsonLd).toBeAttached();

      const content = await jsonLd.innerHTML();
      const schema = JSON.parse(content);

      if (slug.startsWith('/blog/')) {
        expect(schema['@type']).toBe('Article');
        expect(schema.headline).toBeDefined();
      } else {
        expect(schema['@type']).toBe('FAQPage');
        expect(schema.mainEntity).toBeDefined();
        expect(schema.mainEntity.length).toBeGreaterThan(0);
      }
    });
  }
});

test('Verify homepage functionality', async ({ page }) => {
  await page.goto(BASE_URL);

  // Verify hero section
  await expect(page.locator('h1')).toContainText('Turn any logo into premium real-world mockups');

  // Verify templates section
  await expect(page.locator('#templates')).toBeVisible();

  // Basic check for logo upload input (hidden by default usually, but should be in the DOM if on a mockup page)
  await page.goto(`${BASE_URL}/mockup/coffee-cup`);
  const uploadInput = page.locator('input[type="file"]');
  await expect(uploadInput).toBeAttached();
});
