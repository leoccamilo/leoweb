# claude.md

Context file for future assistant sessions on this repository.

## Repository Goal
Technical portfolio for Leonardo Camilo, positioned as an Engineering Authority Hub with practical telecom + automation + data + AI emphasis.

## Runtime Architecture
- Static only: `index.html`, `script.js`, `styles.css`
- No framework and no build step
- GitHub Pages deployment from `main`

## Core Behavior
### i18n
- Defined in `script.js` under `translations.en` and `translations.pt`
- HTML elements bind with `data-i18n`
- Language switch updates:
  - `document.documentElement.lang`
  - `document.title`
  - `meta[name="description"]`
  - `localStorage["preferred-language"]`

### Topic buttons and filtering
- Buttons use `data-detail-topic`
- `setActiveDetail()` toggles active detail panel
- `updateProjectFilter()` filters project cards via `data-project-topics`
- `updateSectionVisibility()` applies compact mode by topic

Current active topics:
- `ran`
- `python-sql` (label shown as `Python + SQL + BI`)
- `api`
- `ai-delivery`
- `certifications`
- `personal-projects`

### Important UX decisions (current)
- `BI` was merged into `Python + SQL + BI` (no separate BI topic button)
- `Certifications` is a standalone section and also has its own top topic button
- `AI-assisted delivery` should keep only relevant sections visible when active
- Avoid repeating generic narrative in topic-specific views

### Certifications
- Section: `#certifications-section`
- Cards include title, institution label, and credential link
- Keep EN/PT labels translated and links valid

### Analytics
- Optional config object in `index.html`:
  - `window.PORTFOLIO_ANALYTICS.goatcounterUrl`
  - `window.PORTFOLIO_ANALYTICS.cloudflareToken`
- GoatCounter can be enabled without changing page layout

## Deployment
- Workflow: `.github/workflows/deploy-pages.yml`
- Main actions: `configure-pages`, `upload-pages-artifact`, `deploy-pages`
- URL: `https://leoccamilo.github.io/leoweb/`

## Editing Guardrails
- Keep existing layout architecture
- Do not rename i18n keys without updating all references
- Keep EN/PT parity for every key used in HTML
- Keep copy practical and specific
- Avoid repeated blocks across topic modes

## Quick Validation After Edits
1. Load page locally and switch EN/PT
2. Click each topic button and validate visible sections
3. Confirm project filtering and certifications visibility
4. Check browser console for errors
