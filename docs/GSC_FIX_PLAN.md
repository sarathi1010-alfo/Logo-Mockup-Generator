# Google Search Console (GSC) Coverage Fix Plan

This document outlines the strategy for identifying and resolving indexing issues for the MockupForge logo mockup generator.

## 1. Audit Existing Coverage Issues
- **Action:** Export the "Page Indexing" report from GSC for `https://mockupforge.alfo.online`.
- **Target Categories:**
  - `Discovered - currently not indexed`
  - `Crawled - currently not indexed`
  - `Blocked by robots.txt`
  - `Not found (404)`

## 2. Resolve "Discovered/Crawled - Not Indexed"
These are often caused by low perceived value or duplicate content.
- **Fix:**
  - Ensure all programmatic pages have unique, high-quality content and unique FAQs (implemented in `lib/programmatic-data.ts`).
  - Strengthen internal linking from high-authority pages (e.g., Tier 1 blog posts) to these programmatic pages.
  - Use the IndexNow API to signal content updates (scripts implemented in `scripts/ping-indexnow.mjs`).

## 3. Resolve "Blocked by robots.txt"
- **Action:** Verify `app/robots.ts` to ensure no critical paths (like `/mockups/` or `/industries/`) are accidentally disallowed.
- **Current Status:** Verified that only `/admin` and `/api` are disallowed.

## 4. Resolve "Not Found (404)"
- **Action:** Check for legacy URLs or broken internal links.
- **Fix:**
  - Implement 301 redirects in `next.config.ts` for any moved pages.
  - Regularly run Playwright tests to detect and fix broken links (implemented in `tests/verify-urls.spec.ts`).

## 5. Continuous Improvement
- **Sitemap Maintenance:** `app/sitemap.ts` automatically updates as new blog posts or programmatic pages are added.
- **Schema Validation:** Ensure JSON-LD (Article, FAQ, etc.) is valid to qualify for rich snippets and improve visibility.

## 6. Audit Simulation (Date: [Current Date])
- **Issue Found:** 2 old test subdomain pages showing "Crawled - currently not indexed" (old draft mockups).
- **Fix Plan Generated:**
  - Add internal links from the new Tier 1 article to those 2 legacy pages to boost their perceived importance.
  - Request re-crawling via the GSC URL Inspection tool for those specific paths.
  - Ensure they are not blocked by robots.txt (they aren't).
