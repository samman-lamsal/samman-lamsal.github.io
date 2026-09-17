# MASARP Studio — GitHub Pages site v2

Professional portfolio for **MASARP Studio**, the independent game label of **Samman Lamsal**.

## Included
- 14 public game/app project pages
- Official public platform/store links
- Public cover/app images from Google Play, Playgama and iDev.Games where exposed by those platforms
- Facebook app-image endpoints where an App ID is available, with local branded fallback artwork if Meta blocks hotlinking
- Samman Lamsal developer page using the selected profile photo
- Person/Organization/Game structured data
- Image sitemap entry for the Samman Lamsal profile photo
- `robots.txt`, `sitemap.xml`, responsive design and accessible navigation

## Upload
Upload the **contents of this folder** to the root of the `samman-lamsal.github.io` repository. GitHub Pages is already configured for `main` / `(root)`.

## Important before connecting masarpstudio.com
This build currently uses `https://samman-lamsal.github.io` for canonical URLs and structured data. After the custom domain is connected, replace every occurrence of:

`https://samman-lamsal.github.io`

with:

`https://masarpstudio.com`

Then create a file named `CNAME` containing exactly:

`masarpstudio.com`

Also re-submit the new domain property/sitemap in Google Search Console.

## Cover images
Platform-hosted images remain remote so they stay true to the public listing. Every title also has a local SVG fallback to avoid broken layouts. For any Facebook/itch.io title where you have a higher-resolution official cover file, replace `/assets/img/covers/<slug>.svg` with your own cover and update the corresponding HTML if desired.

## Privacy
No analytics/tracking scripts are included.
