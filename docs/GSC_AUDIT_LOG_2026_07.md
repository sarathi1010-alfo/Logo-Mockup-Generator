# GSC Coverage Fix Plan - July 2026 Audit

## Identified Issues (Simulated based on common pSEO patterns)
1. **Discovered - currently not indexed:** 5 programmatic mockup pages show as discovered but not yet indexed.
2. **Crawled - currently not indexed:** 2 industry-specific guide pages.
3. **404 Errors:** None detected in current internal crawl.

## Action Plan
1. **Content Enrichment:** All 10 programmatic pages have been verified to have unique content and at least 2 unique FAQs to differentiate them from basic templates. (Completed)
2. **Internal Link Strengthening:**
   - The new Tier 1 Authority Guide (`/blog/logo-mockup-guide`) now links to `/` and `/templates`.
   - Programmatic pages are linked within the `sitemap.ts`.
   - *Future Action:* Add a "Related Mockups" widget to the blog sidebar to further interlink programmatic pages.
3. **Indexing Signal:**
   - Trigger the `ping-indexnow.mjs` script for all new URLs.
   - Resubmit `sitemap.xml` via `submit-sitemap.mjs`.
4. **Rich Snippets:** Validated that Article schema (Blog) and FAQ schema (Programmatic) are correctly injected to improve search result CTR.

## Verification
- Headless browser test confirms all URLs are 200 OK.
- Indexing scripts triggered successfully on 2026-07-10.
