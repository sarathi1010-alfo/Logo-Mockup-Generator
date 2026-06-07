# SEO Master Strategy

This document outlines the master SEO strategy for dominating search utilizing programmatic SEO and topical authority clusters.

## 1. Technical Architecture
- **Next.js App Router**: Utilizing SSR for dynamic tools and ISR/SSG for static utility pages.
- **Sitemap Generator**: Automated XML index generated dynamic routing. Max 50,000 URLs.
- **JSON-LD Schema**: `SoftwareApplication` for tools, `Article` for guides, `FAQPage` for Q&As.

## 2. Indexing Domination
- Optimize crawl budget by restricting non-public routes (`/api`, `/admin`) via `robots.txt`.
- Weekly checks for "Crawled - currently not indexed" via Google Search Console.
- Post-deploy GSC API sitemap submission for immediate pings.

## 3. Data Feedback Loops
- Connect GA4 and GSC to identify breakout tools (high impressions, high CTR).
- Review high impression / low CTR queries for metadata optimization.
- **Content Pruning Framework**: If page age > 6mo + <50 impressions + no clicks => Update -> Merge -> Deindex.

## 4. Topical Authority Cluster Engine
- Organize tools into clusters: `/tools/color`, `/tools/pdf`, `/tools/resume`, etc.
- Dense internal linking: Every tool links back to its cluster hub page and 2-3 sibling tool pages.
- EEAT Optimization: Adding 'How it works' and clear functional transparency.

## 5. Automated Systems (Execution)
- **Metadata Pipeline**: Automatic generation of `title`, `description`, `canonical` for newly generated pages based on a unified template.
- **Tool Components**: React component abstractions for standard tool archetypes (`Converter`, `Generator`, `Calculator`).

## OKRs

**Phase 1 (Months 1-3): Indexing Domination**
- Objective: Rapidly index first 100 high-quality tool pages.
- KRs: 100 pages indexed, <2.5s LCP, zero `noindex` errors in production.

**Phase 2 (Months 4-6): Cluster Expansion**
- Objective: Deepen semantic relevance.
- KRs: Launch 2 new clusters, cross-link 50+ inter-cluster opportunities.
