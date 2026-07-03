# Google Search Console (GSC) Fix Plan - July 2026

## Executive Summary
This report identifies potential coverage issues and outlines remediation steps for the alfo.online property following the Tier 1 and Tier 2 content deployment.

## 1. Identified Potential Issues
Based on the current technical audit and the standard GSC "Page Indexing" behavior, the following categories require monitoring:
- **Discovered - currently not indexed:** High risk for the 10 new programmatic pages if internal linking is weak.
- **Crawled - currently not indexed:** Risk for programmatic pages if content uniqueness is perceived as low by Googlebot.
- **Not found (404):** Potential for legacy links or deleted assets.

## 2. Remediation Strategy

### A. Boosting Indexing Speed
- **Internal Linking:** We have inserted 2 links from the high-authority Tier 1 article to the home and templates sections. We also retroactively linked from 2 older articles (`/blog/what-is-a-logo-mockup` and `/blog/common-logo-mockup-mistakes`) to the new guide to pass authority.
- **Indexing Pings:** The `scripts/submit-sitemap.mjs` and `scripts/ping-indexnow.mjs` scripts have been executed to notify search engines of the 11 new URLs.

### B. Resolving "Not Indexed" Issues
- **Uniqueness Check:** Verified that all 10 programmatic pages in `lib/programmatic-data.ts` have unique H1s, descriptions, and custom-tailored FAQs to avoid duplicate content flags.
- **Manual Request:** Action item for the webmaster to use the GSC "URL Inspection" tool to manually request indexing for `/blog/logo-mockup-guide`.

### C. 404 Management
- **Broken Link Audit:** Playwright tests (`tests/verify-urls.spec.ts`) confirmed that all 11 new URLs are 200 OK. No immediate 404s detected.
- **Future-proofing:** Any future slug changes must be accompanied by a 301 redirect in `next.config.ts`.

## 3. Schema & Rich Results
- **Article Schema:** Valid JSON-LD Article schema implemented on `/blog/logo-mockup-guide`.
- **FAQ Schema:** Valid JSON-LD FAQPage schema implemented on all 10 programmatic pages.
- **Verification:** Webmaster should monitor the "Enhancements" report in GSC for any schema errors or warnings.
