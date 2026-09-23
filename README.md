# Kian Zarazvand — engineering portfolio

Static site. No build step, no dependencies.

```
index.html     nav, full-screen About (wigglegram), bento boards, modal shell
styles.css     Vault design tokens and all layout
data.js        ALL content: SECTIONS, LEADERSHIP, PANELS, TIMELINE
script.js      BOARDS (bento layout) + tiles, modal, gallery, nav
print.html/.js/.css   printable version of the whole site, built from data.js
build-pdf.ps1  renders print.html -> Kian-Zarazvand-Portfolio.pdf
images/        renders and photos (images/print/ = smaller copies for the PDF)
video/         climb.mp4, xy-trainer.mp4
```

## Run it

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Edit content

Content lives in `data.js`; the page layout lives in `BOARDS` in `script.js`:

- `SECTIONS`, `LEADERSHIP`, `PANELS` — the detail that opens in the modal
  (lead paragraph, Design elements, Functionality, gallery, tags), keyed by `id`.
- `BOARDS` — what is actually on the page. Each board is one bento grid;
  each tile is `{ kind, w, h, ... }` where `w`/`h` are spans on a 12-column
  grid of square cells. Pick `w`/`h` to match the image's aspect ratio
  (a 3:4 portrait → `w: 3, h: 4`; a 16:9 clip → `w: 4, h: 2` or `w: 6, h: 4`).

Tile kinds:

```js
{ kind: 'img',  w: 5, h: 4, src: 'images/x.jpg', open: 'controlarm', label: 'Caption',
  fit: 'contain', bg: '#fff' }   // fit/bg keep white-background CAD renders whole
{ kind: 'img',  w: 6, h: 4, video: true, src: 'images/poster.jpg', open: 'climb', label: '…' }
{ kind: 'stat', w: 2, h: 1, figure: '150 lb', label: 'robot lifted', accent: true, open: 'climb' }
{ kind: 'text', w: 4, h: 1, text: 'Short phrase', open: 'twostage' }
{ kind: 'chips', w: 4, h: 2, label: 'Skills', chips: [...], open: 'skills' }
{ kind: 'name' } / { kind: 'contact' }
```

Tiles pack with `grid-auto-flow: dense`, so design each board in 12-wide
blocks of equal height (e.g. 5×4 + 4×3/4×1 + 3×3/3×1) and it fills with no
holes. On phones the grid drops to two columns and every tile keeps its
`w:h` aspect ratio, so nothing is cropped differently than on desktop.

## The PDF

The "Export site to PDF" buttons download `Kian-Zarazvand-Portfolio.pdf`, a
pre-built file, so it is one click and identical on every browser and phone.
It is generated from `data.js`, so **after editing content, rebuild it**:

```
powershell -ExecutionPolicy Bypass -File build-pdf.ps1
```

(needs Python and Edge or Chrome). New images also need a print copy in
`images/print/` (≤ 900 px JPEG, same base name) — the PDF uses those.

When you change `styles.css`, `data.js` or `script.js`, bump the `?v=` number
on them in `index.html` so returning visitors don't get a stale cached copy.

## Adding images

Drop files in `images/`. Keep them ≤ 1600 px on the long edge and JPEG unless
transparency or a plot needs PNG. Tiles crop with `object-fit: cover`; the modal
shows the full image with `object-fit: contain`.

## Design system — Vault

Single dark theme; tokens are CSS custom properties on `:root` in `styles.css`.

- Ground `#000`, panels `#0a0a0a`, cards `#131313`, hover `#1c1c1c`
- Edges, not shadows: `#1f1f1f` hairlines, `#2e2e2e` borders. Shadow only on the modal.
- One accent, rose `#be5784` — links, focus, GPA figure, eyebrows, bullets, active thumbnail
- Inter for interface and prose, JetBrains Mono for machine-written text
- Radii 4 / 6 / 10 / 16 px; 4 px spacing grid

## Deploy

GitHub Pages: push this folder, then Settings → Pages → deploy from branch, root.
Vercel or Netlify: drag the folder in; no build command, output directory `.`.

## Accessibility

Tiles are real `<button>` elements. The modal closes on the X, on a click
outside, and on Escape; ← / → step through the gallery; focus moves to the close
button on open and returns to the trigger on close. Every image has alt text.
