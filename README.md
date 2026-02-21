# Leonardo Camilo Portfolio (`leoweb`)

Portfolio website focused on telecom engineering, automation, data workflows, AI-assisted delivery, and selected real-world projects.

## Stack
- Static site (no framework)
- `index.html` + `styles.css` + `script.js`
- Client-side i18n (EN/PT)
- GitHub Pages deployment via GitHub Actions

## Main Features
- Language switch (`English` / `Português`)
- Dynamic content by expertise button:
  - `RAN Optimization`
  - `Python + SQL`
  - `FastAPI / Flask`
  - `Power BI`
  - `AI-assisted delivery`
  - `Personal Projects`
- Topic-based filtering for `Selected Projects`
- `Knowledge Sharing` section (PDF presentations)
- `Certifications` section (credential links)
- Optional web analytics:
  - GoatCounter
  - Cloudflare Web Analytics

## Project Structure
- `index.html`: layout, sections, cards, external links, analytics config object
- `script.js`: translations, language logic, section visibility rules, project filtering, analytics initialization
- `styles.css`: visual styles/responsiveness
- `Knowledge Sharing/`: presentation PDFs
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow

## Local Editing
Open `index.html` directly in browser for quick checks, or run a local static server if preferred.

## Deploy
Deployment is automatic on push to `main` through GitHub Actions.

Useful pages:
- Repo: `https://github.com/leoccamilo/leoweb`
- Actions: `https://github.com/leoccamilo/leoweb/actions`
- Site: `https://leoccamilo.github.io/leoweb/`

## Content Update Guide
### 1) Update text
- Edit translation keys in `script.js` (`en` and `pt`)
- Keep keys mirrored in both languages

### 2) Add or remove project cards
- Edit HTML cards in `#selected-projects-section`
- Set `data-project-topics` so filtering works

### 3) Add certification
- Add card in `#certifications-section` (`index.html`)
- Add i18n keys in `script.js` (`en` and `pt`)

### 4) Update analytics
In `index.html`:
```html
window.PORTFOLIO_ANALYTICS = {
  goatcounterUrl: "https://YOUR-SITE.goatcounter.com/count",
  cloudflareToken: ""
};
```

## Notes
- If changes appear outdated in production, bump script version in `index.html`:
  - `script.js?v=...`
- This project intentionally avoids frameworks to keep maintenance simple.

