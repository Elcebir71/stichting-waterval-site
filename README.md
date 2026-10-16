# Stichting Waterval — website prototype

A responsive static homepage concept for the Stichting Waterval website.

## Preview locally
Open `index.html` in a browser, or run a local static server.

## Publish with GitHub Pages
1. Create a new **public** repository on GitHub (for example `stichting-waterval-site`).
2. Upload all files and folders from this project to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The URL will be shown on the Pages settings page.

A workflow file is included in `.github/workflows/pages.yml` for GitHub's Pages deployment flow. If you use this workflow, enable **Settings → Pages → Build and deployment → GitHub Actions**.

## Before public launch
- This is a design prototype, not a finished migration of the live WordPress website.
- Confirm all copy, organizational details, activity descriptions and links with Stichting Waterval.
- Check the actual donation URL and privacy policy URL; current links are placeholders or link to the existing site.
- Replace the abstract hero illustration with approved, authentic photos only when consent and usage rights are confirmed.
- Check all old URLs and configure redirects before moving the real domain.
- Do not put passwords, API keys, private donor information or other secrets in this repository.
- GitHub Pages hosts static files; it does not run WordPress or PHP. The existing WordPress site remains unchanged by this prototype.


## Update: official logos and documented activities
- The header uses the supplied compact logo on narrow screens and the supplied wide logo on larger screens.
- Activity cards now reflect activities documented on the existing Stichting Waterval website, including Ark van Noach, iftar gatherings, cooking workshops, homework support and Bezoek je Buren.
- Some activity images reference the existing website's WordPress media URLs. Check that those URLs still work and confirm image usage rights before launch.
- Past events should be displayed as archive/recap items, not as upcoming events.
