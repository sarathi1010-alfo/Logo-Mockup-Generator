# SEO Maintenance & Google Search Console Check Plan

This document outlines the standard operating procedure for monitoring and maintaining the health of the alfo.online property (MockupForge sub-directory/domain) within Google Search Console (GSC) after major content or programmatic SEO updates.

## 1. Post-Deployment Verification (Immediate)

*   **Sitemap Submission:** Ensure the automated CI/CD pipeline successfully submitted the updated `sitemap.xml` to GSC via the API (`scripts/submit-sitemap.mjs`).
*   **IndexNow Ping:** Verify that the `scripts/ping-indexnow.mjs` script ran successfully, notifying Bing and other participating engines of the new URLs.
*   **Live URL Inspection:** Use the "URL Inspection" tool in GSC on the newly published Tier 1 article (`/blog/realistic-logo-mockup-guide`) to request immediate indexing and verify that Googlebot can fetch the page without errors (Status: 200). Ensure the rendered HTML contains the valid Article schema and AEO text.

## 2. Weekly Coverage Check (7-14 Days Post-Deploy)

*   **Page Indexing Report:** Navigate to the "Pages" section under "Indexing" in GSC.
*   **Identify Issues:** Look for spikes in the following categories:
    *   **Excluded by 'noindex' tag:** Ensure no Tier 1 or Tier 2 pages are accidentally blocked (this is expected for `/api/`, `/admin/`, etc., as per our `middleware.ts` rules, but *not* for `/mockups/` or `/blog/`).
    *   **Not found (404):** Check if any of the older URLs we updated internal links on are throwing 404s. If so, implement 301 redirects immediately in `next.config.ts`.
    *   **Crawled - currently not indexed:** If the new programmatic pages appear here, it indicates a potential quality or internal linking issue. We may need to increase internal links to these pages or improve their unique content depth.
    *   **Discovered - currently not indexed:** Indicates Google knows about the URLs (likely via the sitemap) but hasn't crawled them yet. Monitor this queue; if it persists past 14 days, check crawl budget or server performance.

## 3. Schema & Enhancements Verification

*   **Rich Results Report:** Check the "Enhancements" section in GSC for "FAQ" and "Articles".
*   **Validation:** Verify that the 10 new Tier 2 programmatic pages are registering valid FAQ schema without warnings. Verify the Tier 1 article registers valid Article schema.
*   **Fix Plan:** If errors are reported (e.g., missing required fields), debug the JSON-LD payload in the respective page templates (`app/mockups/[slug]/page.tsx`, etc.), deploy a fix, and use the "Validate Fix" button in GSC.

## 4. Performance Monitoring (30 Days Post-Deploy)

*   **Search Results Report:** Filter the Performance report by the exact URL of the new Tier 1 article.
*   **Query Analysis:** Check if the page is ranking for the target query ("how to create realistic logo mockups for your brand") and related long-tail variations.
*   **Click-Through Rate (CTR):** If impressions are high but CTR is low, consider A/B testing the `<title>` and `<meta description>` tags.
