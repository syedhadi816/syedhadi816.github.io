# Syed Hadi — Portfolio

Personal portfolio site. Built with React, Vite, and Tailwind. Deployed on [GitHub Pages](https://syedhadi816.github.io).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Deploy to GitHub Pages

### Option A: Deploy via GitHub Actions (recommended)

1. Push your code to the `main` branch of [syedhadi816/syedhadi816.github.io](https://github.com/syedhadi816/syedhadi816.github.io).
2. In the repo: **Settings → Pages → Build and deployment**
   - **Source:** GitHub Actions
3. Each push to `main` will build and deploy. The site will be at **https://syedhadi816.github.io**.

### Option B: Deploy from your machine

1. In the repo: **Settings → Pages → Build and deployment**
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/(root)`
2. Run:
   ```bash
   npm run deploy
   ```
3. The site will be at **https://syedhadi816.github.io**.

## Replacing placeholder images

Placeholder SVGs are in `public/assets/`. Replace them with your own images (e.g. exported from Figma) and update the filenames in `src/app/App.tsx` if needed:

- `headshot.svg` — hero photo
- `safescribe.svg`, `cred.svg` — project images
- `woodworking.svg`, `gerald.svg` — passion project images
