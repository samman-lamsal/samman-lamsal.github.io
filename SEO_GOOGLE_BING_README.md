# MASARP STUDIO — Google, Bing & Other Search Engine SEO Setup (2026-10-24)

The website is the independent creative brand of Samman Lamsal, not a claimed registered company.

## Implemented in this ZIP

- Unique titles and meta descriptions for all 28 indexable pages, with clear genres and project keywords.
- Consistent HTTPS canonical URLs at https://masarpstudio.com/ and proper hreflang omission for English-only content.
- Open Graph and Twitter/X metadata with correct project cover art, dimensions, and a dedicated MASARP studio share image.
- Google site-name compatible WebSite schema; author Person and independent Brand schema, avoiding unsupported incorporated-company claims.
- Project VideoGame/SoftwareApplication and BreadcrumbList markup; catalogue CollectionPage and ItemList markup.
- Accurate XML sitemap with 28 existing pages and their locally available images. All pages in this build were updated on October 24, 2026.
- Root robots.txt permitting crawling with a sitemap reference; 404 retains noindex.
- IndexNow verification key (57de1df3295cc6c38881a2ef85258fe2.txt) and optional manual submitter (scripts/submit-indexnow.py).
- Original project/game pages, assets, domain settings, existing contact workflow and mobile CSS left intact.

## Important video caveat

The Rival Guys gameplay clip (https://youtu.be/2oYJUocPD7E) is still embedded via click-to-load on its project page. Its precise YouTube upload date was not verified, so this build removes an incomplete VideoObject schema rather than falsely presenting a date. Google video-rich-result eligibility is NOT validated. For rich video indexing, verify the real uploadDate and ensure the video player is discoverable by Googlebot in a primary watch-page position; then add complete VideoObject data.

## Publish and register with search engines

1. **GitHub Pages:** Deploy the *contents* of this ZIP to the site repository root. Do not accidentally nest the contents inside another folder. Preserve CNAME containing masarpstudio.com.
2. **Inspect the live site:** https://masarpstudio.com/ ; /robots.txt ; /sitemap.xml ; /assets/img/masarp-studio-social-preview.jpg ; /favicon.ico. Each must return the intended content with a successful HTTP response. The live website could not be fetched from the tool used during preparation, so it is NOT verified here.
3. **Google Search Console** https://search.google.com/search-console : Verify your Domain property via DNS, submit https://masarpstudio.com/sitemap.xml, inspect the homepage and the key game pages, request indexing for significant updated pages. Check Pages / Core Web Vitals / Video indexing reports.
4. **Bing Webmaster Tools** https://www.bing.com/webmasters : Verify the property or import it from Google Search Console, submit https://masarpstudio.com/sitemap.xml, use URL Inspection to check canonical/indexing status.
5. **IndexNow (Bing + participating engines):** After the ZIP is live, run `python3 scripts/submit-indexnow.py` to validate the published key, then `python3 scripts/submit-indexnow.py --send` to notify participating engines of the updated pages. This is NOT a Google indexing submission mechanism and does not guarantee indexing.
6. **www/non-www and redirects:** Configure your GitHub Pages/DNS to consolidate alternate hostnames onto https://masarpstudio.com/ and ensure HTTP redirects to HTTPS. Verify with actual live HTTP responses; rel=canonical alone is a hint, not a forced redirect.
7. **Verification tokens:** Do not invent Google/Bing HTML verification values. Use the real tokens provided inside each webmaster account if you select meta-tag verification instead of DNS verification.
8. **Social share QA:** Test a link preview from homepage, /games/rival-guys/, and /studio/ on social platforms; caches may require refresh. Facebook/LinkedIn social previews use Open Graph; it is separate from Google/Bing indexing.
9. **Search visibility:** Track branded queries like “MASARP STUDIO” and project-specific search queries via Search Console and Bing Webmaster Tools. Search engines decide rankings, snippets, site names, and indexing timing independently.

No payment, ranking guarantees, fake reviews, fake company registration, fabricated video publication date, or invented business address were added.
