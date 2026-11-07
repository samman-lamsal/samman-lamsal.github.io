# MASARP STUDIO — Mobile compatibility and QA report

Date: 2026-10-24

## Browser checks performed

- Isolated Chromium rendering of all 29 HTML pages at 320px and 390px viewport widths (58 page/viewport combinations): 0 horizontal scroll overflows, 0 missing inline-rendered local images, 0 uncaught JavaScript errors.
- 59 interaction assertions passed, including homepage widths 320, 390, 428, 768, and 1024px; mobile menu open/close by Escape and outside tap; touch target; lazy YouTube iframe creation on click; catalogue search, empty-state and Apps filter; individual Rival Guys video buttons; MomuBloom narrow viewport; contact form mocked response; 404 and privacy page layouts.
- 29 HTML files and 961 local asset/navigation references statically checked: no missing local targets or duplicate HTML IDs.
- JavaScript syntax verified using Node.js (`design.js`, `contact.js`).
- Visually inspected screenshots of homepage, Games & Apps catalogue, Rival Guys detail and contact page at narrow mobile widths.

## Issues fixed

- MomuBloom detail image overflow at 320px. Improved min-width handling on mobile CSS grid children.
- Removed legacy layout from 404 page; aligned it with the new studio design.
- Removed legacy styling/scripts from privacy page and updated wording for YouTube click-to-load embeds and Google Fonts.
- Disabled hidden scroll-reveal presentation on phones so cards render immediately even on slower devices.
- Added 44px minimum mobile navigation targets, Escape/outside-tap handling and menu close on resize.
- Made very long contact text fit narrow screens more naturally.

## Things requiring live checks after publishing

- Actual YouTube playback (testing confirms iframe is correctly created; YouTube network playback was not tested).
- Real FormSubmit email receipt (only client-side behavior was tested using a mocked successful response).
- Destination availability and access permissions for game/platform links; these are external sites and may change.
- iOS Safari, actual Android devices, slow 3G mobile performance, and Search Console indexing were not tested here.

**Deployment:** Back up your existing repository before replacing files. Keep the `CNAME` file (`masarpstudio.com`); upload the archive contents into the GitHub Pages repository root.
