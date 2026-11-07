# MASARP STUDIO website redesign

Prepared from supplied October 13, 2026 GitHub Pages archive. No external image assets reused.

## New design
- Game-art collage hero with original cover assets; dark editorial visual identity matching the gold/black studio logo.
- Dedicated Games & Apps index with working search and Games/Browser/Mobile/Apps filters.
- All 21 original project URLs preserved and revamped with source descriptions, feature lists and platform links.
- New /studio/ and /press/ pages, including a downloadable press-assets ZIP.
- Developer and contact pages rebuilt. Existing contact form and its FormSubmit JavaScript remain in place; actual email delivery must be tested after publication.
- Existing privacy-policy text preserved (only presentation updated).
- Updated on-page title, description, canonical metadata, structured data and sitemap. Google determines actual visible snippets after recrawl.
- Responsive layouts, semantic HTML, keyboard navigation, reduced-motion support, lazy images and no JavaScript rendering requirement for content.

## Deploy to GitHub Pages
1. Back up your current repository.
2. Copy the **contents** of this archive into the GitHub Pages repository root, replacing matching files. Do not put this folder inside another folder.
3. Commit and push to the configured default publishing branch. Existing CNAME (masarpstudio.com) is retained.
4. Test https://masarpstudio.com, /games/, /studio/, /press/, /contact/, individual project pages, and download links. Test contact form using a disposable message; email sending relies on the pre-existing FormSubmit integration.
5. In Google Search Console, inspect https://masarpstudio.com/ and request indexing. Resubmit sitemap at https://masarpstudio.com/sitemap.xml. Search snippets and favicons are selected by Google and may take days/weeks to refresh.

## Please review before deployment
- Confirm each public game listing URL is still active, especially platform-specific Facebook destinations and Rival Guys on CrazyGames.
- The Rival Guys official gameplay preview is now embedded via a click-to-load, privacy-enhanced YouTube player on the homepage and on /games/rival-guys/. Video ID: 2oYJUocPD7E. Verify YouTube embedding is enabled for the video; the external YouTube link provides a fallback.
- Browser/Android categories are based on the supplied original archive; adjust any product category or publishing status that changes.
- Display fonts load through Google Fonts but fall back to system fonts; removing the @import makes the site fully offline-font capable.
- Unregistered status: all copy calls MASARP STUDIO an independent development **brand**, never a corporation.

## October 24 gameplay-preview addition
- Rival Guys official video: https://youtu.be/2oYJUocPD7E
- Added homepage featured preview, dedicated Rival Guys gameplay section and Watch gameplay CTA, using the existing sharp game cover as poster.
- No YouTube network calls until viewers activate the player; direct YouTube links remain available.
- Added VideoObject structured data without inventing publication date or video duration.

## Files
- assets/css/design.css — new design system
- assets/js/design.js — navigation/search/filter/reveal behaviors
- index.html — redesigned homepage
- games/index.html — searchable project catalog
- games/*/index.html — revamped project pages
- studio/index.html, press/index.html, press/press-assets.zip

## Mobile QA refresh (October 24)
- Corrected a 320px horizontal-overflow issue on the MomuBloom detail image and guarded narrow grid children.
- Rebuilt legacy /404.html and /privacy/ using the current navigation and mobile design.
- Mobile reveal items are displayed immediately instead of depending on scroll-triggered animation.
- Enhanced mobile navigation to close on outside tap, Escape, and resize, with minimum 44px touch targets.
- Updated privacy text to describe click-to-load YouTube previews and Google Fonts requests.
- Mobile QA used a local isolated browser document preview. Third-party YouTube playback and real FormSubmit delivery must still be checked after deployment.
