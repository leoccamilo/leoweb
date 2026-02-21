# Leonardo Camilo Portfolio (`leoweb`)

Static portfolio positioned as an engineering authority hub for telecom, automation, data workflows, AI-assisted delivery, and practical software products.

## Stack
- Static site (no framework)
- `index.html`, `styles.css`, `script.js`
- Client-side i18n (`en`/`pt`)
- GitHub Pages via GitHub Actions

## Current Scope
- Language switch: `English` / `Português`
- Main topic buttons:
  - `RAN Optimization`
  - `Python + SQL + BI`
  - `FastAPI / Flask`
  - `AI-assisted delivery`
  - `Certifications`
  - `Personal Projects`
- Topic-specific technical details panel
- Topic-based filtering for `Selected Projects`
- Standalone `Knowledge Sharing` section (PDFs)
- Standalone `Certifications` section (credential links)
- Optional analytics (GoatCounter / Cloudflare)

## Topic Visibility Rules
- `Certifications`:
  - Shows `Technical Details by Focus Area` and `Certifications`
  - Hides `Selected Projects`
- `AI-assisted delivery`:
  - Shows `Technical Details by Focus Area`, `Knowledge Sharing`, and `Selected Projects`
  - Hides `Engineering Focus`, `How I Build`, `Career Trajectory`, and `Certifications`
- `Python + SQL + BI`, `FastAPI / Flask`, `Personal Projects`:
  - Run in compact mode (hide narrative sections) while keeping topic-relevant content

## Project Structure
- `index.html`: layout, sections, topic buttons, cards, external links
- `script.js`: translations, language switching, section visibility, project filter logic, analytics init
- `styles.css`: visual styles and responsive rules
- `Knowledge Sharing/`: presentation files (`.pdf`)
- `.github/workflows/deploy-pages.yml`: Pages workflow

## Local Run
Use a local static server (recommended):

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open:
- `http://127.0.0.1:4173/index.html`

## Deployment
- Push to `main` triggers deploy automatically.
- Repo: `https://github.com/leoccamilo/leoweb`
- Actions: `https://github.com/leoccamilo/leoweb/actions`
- Site: `https://leoccamilo.github.io/leoweb/`

## Content Maintenance
1. Update copy:
- Edit both `translations.en` and `translations.pt` in `script.js`.
- Keep keys mirrored in both languages.

2. Update selected projects:
- Edit cards in `#selected-projects-section` (`index.html`).
- Keep `data-project-topics` accurate so filters work.

3. Update certifications:
- Edit cards in `#certifications-section` (`index.html`).
- Keep credential links public and valid.

4. Update analytics:
- Use `window.PORTFOLIO_ANALYTICS` config in `index.html`.

## Notes
- If production seems stale, hard-refresh and/or bump `script.js?v=...` in `index.html`.
- Keep wording specific and non-repetitive across topic views.
