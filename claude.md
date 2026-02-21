# claude.md

This file is context for future assistant sessions on this repository.

## Repository Purpose
Personal engineering portfolio for Leonardo Camilo, positioned as an engineering authority hub.

## Current Architecture
- Static website only (`index.html`, `script.js`, `styles.css`)
- No framework, no build step
- GitHub Pages + GitHub Actions deploy from `main`

## Core Behavior
### i18n
- Implemented in `script.js` under `translations.en` and `translations.pt`
- Elements use `data-i18n` keys in HTML
- Language switch updates:
  - `document.documentElement.lang`
  - `document.title`
  - `<meta name="description">`
  - localStorage key: `preferred-language`

### Topic buttons + visibility rules
- Buttons use `data-detail-topic`
- `setActiveDetail()` toggles detail panel visibility and project filtering
- `updateProjectFilter()` uses `data-project-topics` on project cards
- `updateSectionVisibility()` hides/shows narrative sections per topic
  - Important: `ai-delivery` should show only:
    - Technical Details by Focus Area
    - Knowledge Sharing
    - Selected Projects

### Certifications
- Section ID: `#certifications-section`
- Each certification is a project card with issuer and credential link
- Translation keys for certification titles/issuers must exist in EN/PT

### Analytics
- Config object in `index.html`:
  - `window.PORTFOLIO_ANALYTICS.goatcounterUrl`
  - `window.PORTFOLIO_ANALYTICS.cloudflareToken`
- Runtime injection handled by `initAnalytics()` in `script.js`
- GoatCounter currently enabled for `https://leoccamilo.goatcounter.com/count`

## Deployment
- Workflow file: `.github/workflows/deploy-pages.yml`
- Uses `actions/configure-pages`, `upload-pages-artifact`, `deploy-pages`
- Deploy triggers on push to `main`
- Site URL: `https://leoccamilo.github.io/leoweb/`

## Operational Gotchas
1. Browser cache can keep old `script.js`
- If behavior seems stale, bump `script.js?v=...` in `index.html`

2. Topic filtering errors
- Usually caused by missing/incorrect `data-project-topics`

3. i18n regressions
- Always add keys in both `en` and `pt`

4. LinkedIn data extraction
- Public scraping is blocked by authwall
- Manual login may be needed for extraction
- Always validate credential links before publishing

## Editing Guardrails
- Keep existing layout structure
- Do not rename existing i18n keys without updating all references
- Avoid repetitive copy between topic-specific views
- Keep text practical and specific to telecom + automation + data + AI + real apps

