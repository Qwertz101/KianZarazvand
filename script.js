/* ---------- boards ----------
 * The page is a set of bento boards on a 12-column grid of square cells.
 * Each tile spans w columns × h rows; pick w/h to match the image's aspect
 * ratio so nothing important gets cropped (portrait → tall, wide → wide).
 *
 * Tile kinds:
 *   img      one photo or video poster (opens a modal)
 *   process  a mechanism's progression, e.g. CAD → prototype → built.
 *            steps: [{ src, ar }] where ar = width / height of the image;
 *            choose w/h close to the sum of the ars. A step can be
 *            { pending: 'text', stage, ar } for a stage still in progress.
 *   stat, text, chips, contact, link ({ text, href }: opens in a new tab)
 * fit: 'contain' + bg keeps white-background CAD renders whole.
 * A board with `lineage: true` renders the elevator lineage instead of tiles;
 * a board with `groups: [{ eyebrow, title, tiles }]` renders one labeled bento per group.
 */

const BOARDS = [
  {
    id: 'fsae',
    stop: 'Formula SAE',
    eyebrow: 'UCR Formula SAE',
    title: 'Suspension',
    tiles: [
      { kind: 'img', w: 5, h: 4, src: 'images/control-arm.jpg', open: 'controlarm', label: 'Carbon fiber control arm', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 4, h: 3, src: 'images/pushrod-optimizer.png', open: 'pushrod', label: 'MATLAB pushrod optimizer', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 3, h: 3, src: 'images/control-arm-closeup.jpg', open: 'controlarm', label: 'Billet insert', fit: 'contain', bg: '#fff' },
      { kind: 'stat', w: 4, h: 1, figure: '60%', label: 'lighter than the steel pushrod', accent: true, open: 'pushrod' },
      { kind: 'stat', w: 3, h: 1, figure: '4.0 kN', label: 'design load', open: 'pushrod' }
    ]
  },
  {
    id: 'lab',
    stop: 'Research',
    eyebrow: 'Undergraduate research at UC Riverside',
    title: 'Two research labs',
    groups: [
      {
        eyebrow: 'Dark Matter & Neutrino Lab',
        title: 'Cryogenic hardware',
        tiles: [
          { kind: 'process', w: 5, h: 3, m: [4, 3], open: 'lumirror', label: 'Lumirror sheet housing',
            steps: [
              { src: 'images/lumirror-cad.png', ar: 0.47 },
              { src: 'images/lumirror-proto.jpg', ar: 0.75 },
              { src: 'images/lumirror-assembled.jpg', ar: 0.56, label: 'Assembled' }
            ] },
          { kind: 'stat', w: 3, h: 1, figure: '70 K', label: 'cooldown from room temp', accent: true, open: 'lumirror' },
          { kind: 'stat', w: 4, h: 1, figure: '1 × 8 m', label: 'reflective sheet held taut', open: 'lumirror' },
          { kind: 'text', w: 7, h: 1, text: 'Housing that keeps a reflective sheet taut inside a cryostat', open: 'lumirror' },
          { kind: 'stat', w: 3, h: 1, figure: 'CNC Al', label: 'prototype, assembled', open: 'lumirror' },
          { kind: 'stat', w: 4, h: 1, figure: '304 SS', label: 'laser-cut, planned for the final build', open: 'lumirror' }
        ]
      },
      {
        eyebrow: 'RAMS Lab',
        title: 'Snap-driven swimming robot',
        tiles: [
          { kind: 'img', w: 5, h: 6, m: [4, 5], video: true, src: 'images/ctr-sweep-poster.jpg', open: 'ctr', label: 'Simulated fin sweep · one full cycle', fit: 'contain', bg: '#13161b' },
          { kind: 'img', w: 7, h: 4, m: [4, 2], src: 'images/ctr-optimization.jpg', open: 'ctr', label: 'Snap energy design optimization', fit: 'contain', bg: '#13161b' },
          { kind: 'text', w: 7, h: 1, text: 'Simulator for turning the snap of pre-curved Nitinol tubes into a swimming stroke', open: 'ctr' },
          { kind: 'stat', w: 3, h: 1, figure: 'λ₀ = π²/4', label: 'snap onset, Gilbert–Webster', open: 'ctr' },
          { kind: 'link', w: 4, h: 1, text: 'Open the live research tool', href: 'https://qwertz101.github.io/turtle-robot-sim/' }
        ]
      }
    ]
  },
  {
    id: 'first',
    stop: 'FIRST Robotics',
    eyebrow: 'FIRST Robotics · Team 6560 Charging Champions',
    title: 'Competition mechanisms',
    tiles: [
      { kind: 'img', w: 6, h: 4, video: true, src: 'images/climb-poster.jpg', open: 'climb', label: 'Climbing rotary mechanism' },
      { kind: 'process', w: 6, h: 3, m: [4, 2], open: 'offsetpivot', label: 'Offset pivot rotary mechanism',
        steps: [
          { src: 'images/offset-pivot.jpg', ar: 0.66 },
          { src: 'images/offset-pivot-plate.jpg', ar: 0.75 },
          { src: 'images/robot-2025.jpg', ar: 0.67 }
        ] },
      { kind: 'stat', w: 2, h: 1, figure: '150 lb', label: 'robot lifted · climb', accent: true, open: 'climb' },
      { kind: 'stat', w: 2, h: 1, figure: '#25', label: 'chain drive · offset pivot', open: 'offsetpivot' },
      { kind: 'stat', w: 2, h: 1, figure: '3/8″', label: 'polycarbonate funnel · climb', open: 'climb' }
    ]
  },
  {
    id: 'elevator',
    stop: 'Elevator lineage',
    eyebrow: 'FIRST Robotics · Elevator lineage · 2023 → 2025',
    title: ELEVATOR.title,
    lineage: true
  },
  {
    id: 'leadership',
    stop: 'Leadership',
    eyebrow: 'Leadership',
    title: 'Running the team',
    tiles: [
      { kind: 'img', w: 2, h: 3, src: 'images/in-action-2.jpg', open: 'captain', label: 'Team captain' },
      { kind: 'img', w: 2, h: 3, src: 'images/team-photo.jpg', open: 'captain', label: 'Five competitions' },
      { kind: 'img', w: 4, h: 3, src: 'images/kian-working.jpg', open: 'cadlead', label: 'CAD lead' },
      { kind: 'img', w: 4, h: 3, src: 'images/in-action-1.jpg', open: 'mentor', label: 'Now mentoring' },
      { kind: 'text', w: 4, h: 1, text: '30 students · two-month build', open: 'captain' },
      { kind: 'text', w: 4, h: 1, text: 'Team of 6 · design library · SolidWorks training', open: 'cadlead' },
      { kind: 'text', w: 4, h: 1, text: 'Design mentor · controls PM', open: 'mentor' }
    ]
  },
  {
    id: 'more',
    stop: 'Contact',
    eyebrow: 'Personal interests · Skills · Contact',
    title: 'Personal interests',
    tiles: [
      { kind: 'chips', w: 4, h: 2, open: 'about', label: 'Personal interests', chips: ['Early-2000s thrillers', 'Freestyle street dance', 'Improv dance', 'Indoor soccer', 'Technical theatre'] },
      { kind: 'chips', w: 4, h: 2, open: 'skills', label: 'Skills & tools', chips: ['SolidWorks', 'Fusion 360', 'Onshape', 'MATLAB', 'FEA', 'GD&T', 'CNC', 'Laser cutting', '3D printing', 'Carbon fiber', 'Sheet metal', 'React · three.js'] },
      { kind: 'contact', w: 4, h: 2 }
    ]
  }
];

/* ---------- index ---------- */

const ENTRIES = {};
SECTIONS.forEach((s) => s.projects.forEach((p) => { ENTRIES[p.id] = p; }));
LEADERSHIP.forEach((p) => { ENTRIES[p.id] = p; });
Object.keys(PANELS).forEach((k) => { ENTRIES[k] = PANELS[k]; });

/* Engineering-process stages, in order. Every media item in data.js has one. */
const STAGES = ['analysis', 'cad', 'prototype', 'built', 'field'];
const STAGE_LABEL = { analysis: 'Analysis', cad: 'CAD', prototype: 'Prototype', built: 'Built', field: 'In competition' };

const CUBE = '<svg class="media__glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 21 7.5v9L12 21 3 16.5v-9z"/><path d="M3 7.5 12 12l9-4.5"/><path d="M12 12v9"/></svg>';
const PLAY = '<svg class="media__play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
const ARROW_OUT = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>';
const CHEVRON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* The media item (and so its stage) for an image path, searching the entry. */
function mediaFor(entryId, src) {
  const e = ENTRIES[entryId];
  return e && (e.media || []).find((m) => m.src === src || m.poster === src);
}

function stageChip(stage, extra, text) {
  return stage ? '<span class="stage stage--' + stage + (extra ? ' ' + extra : '') + '">' + (text || STAGE_LABEL[stage]) + '</span>' : '';
}

function mediaInner(m) {
  if (!m) return CUBE + '<span class="media__label">render pending</span>';
  if (m.video) {
    return '<video controls playsinline preload="metadata" poster="' + m.poster + '" aria-label="' + escapeHtml(m.alt || '') + '"><source src="' + m.video + '" type="video/mp4"></video>';
  }
  return '<img src="' + m.src + '" alt="' + escapeHtml(m.alt || '') + '">';
}

/* ---------- tiles ---------- */

/* Phone layout: a 4-column grid of square cells. Each tile gets its own
   phone span — derived from the desktop span so images keep their shape,
   or set explicitly with m: [w, h]. Dense packing fills the gaps. */
function phoneSpan(t) {
  if (t.m) return t.m;
  if (t.kind === 'img') {
    const tall = t.h / t.w >= 1.3;
    const mw = t.w >= 5 || (t.w >= 4 && !tall) ? 4 : 2;
    return [mw, Math.max(1, Math.round(mw * t.h / t.w))];
  }
  if (t.kind === 'chips' || t.kind === 'contact' || t.kind === 'process') return [4, 2];
  if (t.kind === 'link') return [4, 1];
  if (t.kind === 'text') return [t.w >= 3 ? 4 : 2, 1];
  return [t.w >= 4 ? 4 : 2, 1];
}

function processHtml(t) {
  return '<span class="process">' + t.steps.map((s, i) => {
    const m = s.pending ? null : mediaFor(t.open, s.src);
    const stage = s.stage || (m && m.stage);
    const white = stage === 'cad' || stage === 'analysis';
    const body = s.pending
      ? '<span class="process__pending"><span class="mono">In progress</span>' + escapeHtml(s.pending) + '</span>'
      : '<img src="' + s.src + '" alt="" loading="lazy">';
    return (i ? '<span class="process__arrow" aria-hidden="true">' + CHEVRON + '</span>' : '') +
      '<span class="process__step' + (white ? ' is-white' : '') + (s.pending ? ' is-pending' : '') + '" style="flex-grow:' + s.ar + '">' +
      body + stageChip(stage, '', s.label) + '</span>';
  }).join('') + '</span>';
}

function tileHtml(t) {
  const [mw, mh] = phoneSpan(t);
  const span = 'style="--w:' + t.w + ';--h:' + t.h + ';--mw:' + mw + ';--mh:' + mh + '"';
  const wide = t.w >= 5 ? ' tile--wide' : '';
  const open = t.open ? ' data-open="' + t.open + '"' : '';
  const tag = t.open ? 'button type="button"' : 'div';
  const end = t.open ? 'button' : 'div';

  if (t.kind === 'img') {
    const entry = ENTRIES[t.open] || {};
    const m = mediaFor(t.open, t.src);
    const imgStyle = 'style="object-fit:' + (t.fit || 'cover') + ';object-position:' + (t.pos || 'center') + (t.bg ? ';background:' + t.bg : '') + '"';
    const clip = t.video && m && m.video;
    const visual = clip
      ? '<video class="tile__video" muted loop playsinline preload="metadata" poster="' + t.src + '" ' + imgStyle + '><source src="' + m.video + '" type="video/mp4"></video>'
      : '<img src="' + t.src + '" alt="" loading="lazy" ' + imgStyle + '>';
    return '<' + tag + ' class="tile tile--img' + wide + '" ' + span + open + ' aria-label="' + escapeHtml(entry.title || t.label) + '">' +
      visual + (t.video && !clip ? PLAY : '') + stageChip(m && m.stage, 'stage--corner') +
      '<span class="tile__label">' + escapeHtml(t.label) + '</span></' + end + '>';
  }
  if (t.kind === 'process') {
    const entry = ENTRIES[t.open] || {};
    return '<' + tag + ' class="tile tile--process' + wide + '" ' + span + open + ' aria-label="' + escapeHtml(entry.title || t.label) + ': design progression">' +
      processHtml(t) + '<span class="tile__label">' + escapeHtml(t.label) + '</span></' + end + '>';
  }
  if (t.kind === 'stat') {
    return '<' + tag + ' class="tile tile--stat' + wide + (t.accent ? ' tile--accent' : '') + '" ' + span + open + '>' +
      '<span class="tile__figure">' + escapeHtml(t.figure) + '</span>' +
      '<span class="tile__caption">' + escapeHtml(t.label) + '</span></' + end + '>';
  }
  if (t.kind === 'text') {
    return '<' + tag + ' class="tile tile--text' + wide + '" ' + span + open + '><span>' + escapeHtml(t.text) + '</span></' + end + '>';
  }
  if (t.kind === 'chips') {
    return '<' + tag + ' class="tile tile--chips' + wide + '" ' + span + open + '>' +
      '<span class="tile__caption">' + escapeHtml(t.label) + '</span>' +
      '<span class="chips">' + t.chips.map((c) => '<span class="chip">' + escapeHtml(c) + '</span>').join('') + '</span></' + end + '>';
  }
  if (t.kind === 'link') {
    return '<a class="tile tile--text tile--link' + wide + '" ' + span + ' href="' + t.href + '" target="_blank" rel="noopener">' +
      '<span>' + escapeHtml(t.text) + '</span>' + ARROW_OUT + '</a>';
  }
  if (t.kind === 'contact') {
    return '<div class="tile tile--contact" ' + span + '>' +
      '<span class="tile__caption">Contact</span>' +
      '<a href="mailto:kianzarazvand@gmail.com">kianzarazvand@gmail.com</a>' +
      '<a href="tel:+19493158322">949.315.8322</a>' +
      '<span class="caption">Riverside &amp; Irvine, CA</span></div>';
  }
  return '';
}

/* ---------- tile videos ----------
 * Loop silently while on screen; paused off screen to save battery, and never
 * started for visitors who prefer reduced motion (they see the poster). */
function wireTileVideos() {
  const vids = [...document.querySelectorAll('.tile__video')];
  if (!vids.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) en.target.play().catch(() => {}); else en.target.pause();
  }), { threshold: 0.2 });
  vids.forEach((v) => { v.muted = true; io.observe(v); });
}

/* ---------- elevator lineage ----------
 * An iteration scrubber: pick a version (V0 → V3) to see the requirement it
 * answered, what changed, and its photos sorted by stage. The matrix below
 * compares what every version was optimized for.
 */

function lineageHtml() {
  const vs = ELEVATOR.versions;
  return '<div class="lineage" id="lineage">' +
    '<div class="lineage__top">' +
      '<p class="body lineage__intro">' + escapeHtml(ELEVATOR.intro) + '</p>' +
      '<div class="lineage__stats">' + ELEVATOR.stats.map((s) =>
        '<div class="lineage__stat"><span class="tile__figure">' + escapeHtml(s.figure) + '</span><span class="tile__caption">' + escapeHtml(s.label) + '</span></div>').join('') +
      '</div>' +
    '</div>' +
    '<ol class="lineage__track" role="tablist" aria-label="Elevator versions">' + vs.map((v, i) =>
      '<li><button type="button" role="tab" class="lineage__node" data-version="' + i + '" aria-controls="lineage-panel">' +
        '<span class="lineage__dot" aria-hidden="true"></span>' +
        '<span class="mono lineage__v">' + v.v + ' · ' + escapeHtml(v.when) + '</span>' +
        '<span class="lineage__name">' + escapeHtml(v.title) + '</span>' +
      '</button></li>').join('') +
    '</ol>' +
    '<div class="lineage__panel" id="lineage-panel" role="tabpanel">' +
      '<div class="lineage__media">' +
        '<div class="lineage__stages" role="group" aria-label="Show stage"></div>' +
        '<div class="lineage__frame"></div>' +
        '<div class="lineage__thumbs"></div>' +
      '</div>' +
      '<div class="lineage__info">' +
        '<p class="mono lineage__when"></p>' +
        '<h3 class="lineage__title"></h3>' +
        '<p class="eyebrow">Requirement</p><p class="lineage__req"></p>' +
        '<p class="eyebrow">Optimized for</p><div class="lineage__drivers"></div>' +
        '<p class="eyebrow">What changed</p><ul class="bullets lineage__changes"></ul>' +
        '<div class="lineage__nav">' +
          '<button type="button" class="btn lineage__step" data-step="-1" aria-label="Previous version">←</button>' +
          '<button type="button" class="btn lineage__open">Full write-up</button>' +
          '<button type="button" class="btn lineage__step" data-step="1" aria-label="Next version">→</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="lineage__matrix-wrap"><table class="lineage__matrix">' +
      '<caption class="eyebrow">What each version was optimized for</caption>' +
      '<thead><tr><th scope="col"></th>' + TRAITS.map((t) => '<th scope="col">' + escapeHtml(t) + '</th>').join('') + '</tr></thead>' +
      '<tbody>' + vs.map((v, i) =>
        '<tr data-version="' + i + '"><th scope="row"><span class="mono">' + v.v + '</span> ' + escapeHtml(v.title) + '</th>' +
        TRAITS.map((t) => '<td>' + (v.drivers.includes(t) ? '<span class="mark" aria-label="yes"></span>' : '<span class="nomark" aria-label="no"></span>') + '</td>').join('') +
        '</tr>').join('') +
      '</tbody></table></div>' +
  '</div>';
}

const STOPS = [{ id: 'top', name: 'About' }].concat(BOARDS.map((b) => ({ id: b.id, name: b.stop || b.eyebrow })));
const pad = (n) => String(n).padStart(2, '0');

document.getElementById('boards').innerHTML = BOARDS.map((b, i) =>
  '<section class="board" id="' + b.id + '">' +
  (b.title ? '<div class="board__head"><span class="mono board__num">' + pad(i + 2) + '</span><p class="eyebrow eyebrow--accent">' + escapeHtml(b.eyebrow) + '</p><h2 class="h2">' + escapeHtml(b.title) + '</h2></div>' : '') +
  (b.lineage ? lineageHtml()
    : b.groups ? b.groups.map((g) =>
        '<div class="subgroup"><div class="subgroup__head"><p class="eyebrow">' + escapeHtml(g.eyebrow) + '</p><h3 class="subgroup__title">' + escapeHtml(g.title) + '</h3></div>' +
        '<div class="bento">' + g.tiles.map(tileHtml).join('') + '</div></div>').join('')
    : '<div class="bento">' + b.tiles.map(tileHtml).join('') + '</div>') + '</section>'
).join('');

wireTileVideos();
const lineage = document.getElementById('lineage');
let lv = 0;          // selected version
let lStage = null;   // selected stage within it
let lIndex = 0;      // selected photo within that stage

function lineageMedia() {
  return ENTRIES[ELEVATOR.versions[lv].open].media || [];
}

function renderLineageMedia() {
  const media = lineageMedia();
  const stages = STAGES.filter((s) => media.some((m) => m.stage === s));
  if (!stages.includes(lStage)) { lStage = stages[0]; lIndex = 0; }
  const inStage = media.filter((m) => m.stage === lStage);
  lIndex = Math.min(lIndex, inStage.length - 1);

  lineage.querySelector('.lineage__stages').innerHTML = stages.map((s, i) =>
    (i ? '<span class="lineage__stage-arrow" aria-hidden="true">' + CHEVRON + '</span>' : '') +
    '<button type="button" class="lineage__stage" data-stage="' + s + '" aria-pressed="' + (s === lStage) + '">' + STAGE_LABEL[s] +
    '<span class="mono">' + media.filter((m) => m.stage === s).length + '</span></button>').join('');

  const m = inStage[lIndex];
  const frame = lineage.querySelector('.lineage__frame');
  frame.classList.toggle('is-white', lStage === 'cad' || lStage === 'analysis');
  frame.innerHTML = mediaInner(m);

  lineage.querySelector('.lineage__thumbs').innerHTML = inStage.length > 1 ? inStage.map((x, i) =>
    '<button type="button" class="thumb" data-lthumb="' + i + '" aria-current="' + (i === lIndex) + '" aria-label="Photo ' + (i + 1) + ' of ' + inStage.length + '">' +
    '<img src="' + (x.video ? x.poster : x.src) + '" alt="" loading="lazy">' + (x.video ? PLAY : '') + '</button>').join('') : '';
}

function selectVersion(i) {
  const vs = ELEVATOR.versions;
  lv = (i + vs.length) % vs.length;
  lStage = null;
  lIndex = 0;
  const v = vs[lv];
  lineage.querySelectorAll('.lineage__node').forEach((n, k) => {
    n.setAttribute('aria-selected', k === lv);
    n.tabIndex = k === lv ? 0 : -1;
    n.parentElement.classList.toggle('is-passed', k <= lv);
  });
  lineage.querySelectorAll('.lineage__matrix tbody tr').forEach((r, k) => r.classList.toggle('is-active', k === lv));
  // keep the active version visible when the track scrolls sideways (phones)
  const track = lineage.querySelector('.lineage__track');
  if (track.scrollWidth > track.clientWidth) track.scrollTo({ left: track.children[lv].offsetLeft - 16, behavior: 'smooth' });
  lineage.querySelector('.lineage__when').textContent = v.v + ' · ' + v.when;
  lineage.querySelector('.lineage__title').textContent = v.title;
  lineage.querySelector('.lineage__req').textContent = v.requirement;
  lineage.querySelector('.lineage__drivers').innerHTML = v.drivers.map((d) => '<span class="chip chip--accent">' + escapeHtml(d) + '</span>').join('');
  lineage.querySelector('.lineage__changes').innerHTML = v.changes.map((c) => '<li>' + escapeHtml(c) + '</li>').join('');
  lineage.querySelector('.lineage__open').dataset.open = v.open;
  renderLineageMedia();
}

/* Auto-cycle through the versions like a carousel. It runs only while the
   section is on screen, pauses while the visitor hovers or focuses inside it,
   stops for good once they pick a version themselves, and never runs for
   visitors who prefer reduced motion. The active node shows a progress bar. */
const LINEAGE_DWELL = 6000;
let lTimer = null;
let lVisible = false;
let lHeld = false;       // hover / focus inside the section
let lStopped = false;    // the visitor took control
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scheduleLineage() {
  clearTimeout(lTimer);
  const run = lVisible && !lHeld && !lStopped && !reduceMotion;
  lineage.classList.toggle('is-cycling', run);
  if (!run) return;
  lineage.style.setProperty('--dwell', LINEAGE_DWELL + 'ms');
  // restart the progress bar animation on the active node
  const bar = lineage.querySelector('.lineage__node[aria-selected="true"] .lineage__progress');
  if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
  lTimer = setTimeout(() => { selectVersion(lv + 1); scheduleLineage(); }, LINEAGE_DWELL);
}

function stopLineage() { lStopped = true; scheduleLineage(); }

if (lineage) {
  lineage.querySelectorAll('.lineage__node').forEach((n) => n.insertAdjacentHTML('beforeend', '<span class="lineage__progress" aria-hidden="true"></span>'));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => { lVisible = en.isIntersecting; scheduleLineage(); }, { threshold: 0.35 }).observe(lineage);
  }
  lineage.addEventListener('pointerenter', () => { lHeld = true; scheduleLineage(); });
  lineage.addEventListener('pointerleave', () => { lHeld = false; scheduleLineage(); });
  lineage.addEventListener('focusin', () => { lHeld = true; scheduleLineage(); });
  lineage.addEventListener('focusout', (ev) => { if (!lineage.contains(ev.relatedTarget)) { lHeld = false; scheduleLineage(); } });

  lineage.addEventListener('click', (ev) => {
    if (ev.target.closest('button, tr')) stopLineage();
    const node = ev.target.closest('[data-version]');
    if (node) { selectVersion(Number(node.dataset.version)); return; }
    const step = ev.target.closest('[data-step]');
    if (step) { selectVersion(lv + Number(step.dataset.step)); return; }
    const st = ev.target.closest('[data-stage]');
    if (st) { lStage = st.dataset.stage; lIndex = 0; renderLineageMedia(); return; }
    const th = ev.target.closest('[data-lthumb]');
    if (th) { lIndex = Number(th.dataset.lthumb); renderLineageMedia(); }
  });
  lineage.querySelector('.lineage__track').addEventListener('keydown', (ev) => {
    if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
    ev.preventDefault();
    stopLineage();
    selectVersion(lv + (ev.key === 'ArrowRight' ? 1 : -1));
    lineage.querySelectorAll('.lineage__node')[lv].focus();
  });
  selectVersion(0);
}

/* ---------- modal ---------- */

const scrim = document.getElementById('scrim');
const sheet = scrim.querySelector('.sheet');
const closeBtn = document.getElementById('sheet-close');
const sheetMedia = document.getElementById('sheet-media');
const sheetThumbs = document.getElementById('sheet-thumbs');
let lastFocused = null;
let current = null;
let currentIndex = 0;

function list(el, items) {
  el.innerHTML = items.map((b) => '<li>' + escapeHtml(b) + '</li>').join('');
}

function showMedia(i) {
  if (!current) return;
  const media = current.media || [];
  currentIndex = media.length ? ((i % media.length) + media.length) % media.length : 0;
  const m = media[currentIndex];
  sheetMedia.classList.toggle('is-white', !!m && (m.stage === 'cad' || m.stage === 'analysis'));
  sheetMedia.innerHTML = mediaInner(m) + stageChip(m && m.stage, 'stage--corner');
  sheetThumbs.querySelectorAll('.thumb').forEach((b) => {
    b.setAttribute('aria-current', Number(b.dataset.index) === currentIndex ? 'true' : 'false');
  });
}

/* Gallery strip grouped by stage, in process order: CAD → Prototype → … */
function galleryHtml(media) {
  const groups = STAGES.map((s) => ({ s, items: media.map((m, i) => [m, i]).filter(([m]) => m.stage === s) }))
    .filter((g) => g.items.length);
  if (!groups.length) groups.push({ s: null, items: media.map((m, i) => [m, i]) });
  return groups.map((g, gi) =>
    (gi ? '<span class="gallery__arrow" aria-hidden="true">' + CHEVRON + '</span>' : '') +
    '<div class="gallery__group">' + (g.s ? '<span class="gallery__stage">' + STAGE_LABEL[g.s] + '</span>' : '') +
    '<div class="gallery__thumbs">' + g.items.map(([m, i]) =>
      '<button type="button" class="thumb" data-index="' + i + '" aria-label="Show media ' + (i + 1) + ' of ' + media.length + '">' +
      '<img src="' + (m.video ? m.poster : m.src) + '" alt="" loading="lazy">' + (m.video ? PLAY : '') + '</button>').join('') +
    '</div></div>').join('');
}

function openSheet(id) {
  const e = ENTRIES[id];
  if (!e) return;
  current = e;
  lastFocused = document.activeElement;

  document.getElementById('sheet-eyebrow').textContent = e.eyebrow;
  document.getElementById('sheet-title').textContent = e.title;
  document.getElementById('sheet-meta').textContent = e.meta;
  document.getElementById('sheet-lead').textContent = e.lead;
  const sheetLink = document.getElementById('sheet-link');
  sheetLink.hidden = !e.link;
  if (e.link) sheetLink.href = e.link;

  const labels = e.labels || ['Design elements', 'Functionality'];
  document.getElementById('sheet-label-a').textContent = labels[0];
  document.getElementById('sheet-label-b').textContent = labels[1];
  list(document.getElementById('sheet-design'), e.design || []);
  list(document.getElementById('sheet-function'), e.functionality || []);
  document.getElementById('sheet-tags').innerHTML =
    (e.tags || []).map((t) => '<li class="chip">' + escapeHtml(t) + '</li>').join('');

  const media = e.media || [];
  const staged = media.some((m) => m.stage);
  sheetThumbs.hidden = media.length < 2 && !staged;
  sheetThumbs.innerHTML = media.length ? galleryHtml(media) : '';
  document.getElementById('sheet-count').textContent = media.length > 1 ? media.length + ' items · ← → to browse' : '';
  showMedia(0);

  scrim.hidden = false;
  document.body.style.overflow = 'hidden';
  sheet.scrollTop = 0;
  closeBtn.focus();
}

function closeSheet() {
  sheetMedia.innerHTML = '';
  current = null;
  scrim.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.addEventListener('click', (ev) => {
  const thumb = ev.target.closest('.thumb[data-index]');
  if (thumb) { showMedia(Number(thumb.dataset.index)); return; }
  const trigger = ev.target.closest('[data-open]');
  if (trigger) { openSheet(trigger.dataset.open); return; }
  if (ev.target === scrim) closeSheet();
});

closeBtn.addEventListener('click', closeSheet);

document.addEventListener('keydown', (ev) => {
  if (scrim.hidden) return;
  if (ev.key === 'Escape') closeSheet();
  if (ev.target.tagName === 'VIDEO') return;
  if (ev.key === 'ArrowRight') showMedia(currentIndex + 1);
  if (ev.key === 'ArrowLeft') showMedia(currentIndex - 1);
});

/* ---------- route ----------
 * The header is a map of the whole page: every stop is listed on one line,
 * so visitors see everything they can scroll to. Stops already passed fill
 * in; the current one is highlighted and kept in view on narrow screens.
 */

const stopsEl = document.getElementById('route-stops');
stopsEl.innerHTML = STOPS.map((st, i) =>
  '<li><a class="route__stop" href="#' + st.id + '">' +
  '<span class="route__dot" aria-hidden="true"></span>' +
  '<span class="route__label"><span class="mono route__num">' + pad(i + 1) + '</span>' + st.name + '</span></a></li>'
).join('');
const items = [...stopsEl.children];
const links = [...stopsEl.querySelectorAll('.route__stop')];
const stopEls = STOPS.map((st) => document.getElementById(st.id));
let currentStop = -1;

function updateRoute() {
  const line = window.scrollY + window.innerHeight * 0.35;
  let i = 0;
  stopEls.forEach((el, k) => { if (el && el.offsetTop <= line) i = k; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) i = STOPS.length - 1;
  if (i === currentStop) return;
  currentStop = i;
  items.forEach((li, k) => li.classList.toggle('is-passed', k <= i));
  links.forEach((a, k) => (k === i ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current')));
  // keep the current stop visible when the route scrolls sideways (phones)
  const li = items[i];
  const target = li.offsetLeft - (stopsEl.clientWidth - li.offsetWidth) / 2;
  stopsEl.scrollTo({ left: target, behavior: 'smooth' });
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { updateRoute(); ticking = false; });
}, { passive: true });
function checkOverflow() { stopsEl.classList.toggle('is-overflowing', stopsEl.scrollWidth > stopsEl.clientWidth + 1); }
window.addEventListener('resize', () => { currentStop = -1; checkOverflow(); updateRoute(); });
checkOverflow();
document.fonts && document.fonts.ready.then(checkOverflow);
updateRoute();
