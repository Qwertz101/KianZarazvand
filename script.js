/* ---------- boards ----------
 * The page is a set of bento boards on a 12-column grid of square cells.
 * Each tile spans w columns × h rows; pick w/h to match the image's aspect
 * ratio so nothing important gets cropped (portrait → tall, wide → wide).
 * Tile kinds: img (opens a modal), stat, text, contact, chips.
 * fit: 'contain' + bg keeps white-background CAD renders whole.
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
    eyebrow: 'Research & robotics at UCR',
    title: 'Dark Matter & Neutrino Lab · ACM Robotics',
    tiles: [
      { kind: 'img', w: 3, h: 4, src: 'images/lumirror-proto.jpg', open: 'lumirror', label: 'Lumirror sheet housing' },
      { kind: 'img', w: 2, h: 4, src: 'images/lumirror-cad.png', open: 'lumirror', label: 'Clamping tab', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 4, h: 3, src: 'images/forearm.jpg', open: 'forearm', label: 'Robotic arm forearm', fit: 'contain', bg: '#fff' },
      { kind: 'stat', w: 3, h: 2, figure: '70 K', label: 'cooldown from room temp', accent: true, open: 'lumirror' },
      { kind: 'text', w: 4, h: 1, text: 'Servo + belt drive · ACM Robotics', open: 'forearm' },
      { kind: 'stat', w: 3, h: 2, figure: '1 × 8 m', label: 'reflective sheet, kept taut', open: 'lumirror' }
    ]
  },
  {
    id: 'first',
    stop: 'FIRST Robotics',
    eyebrow: 'FIRST Robotics · Team 6560 Charging Champions',
    title: 'Competition mechanisms',
    tiles: [
      { kind: 'img', w: 6, h: 4, video: true, src: 'images/climb-poster.jpg', open: 'climb', label: 'Climbing rotary mechanism' },
      { kind: 'img', w: 2, h: 3, src: 'images/robot-2025.jpg', open: 'offsetpivot', label: '2025 robot' },
      { kind: 'img', w: 2, h: 3, src: 'images/offset-pivot.jpg', open: 'offsetpivot', label: 'Offset pivot', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 2, h: 3, src: 'images/offset-pivot-plate.jpg', open: 'offsetpivot', label: 'Turntable plate' },
      { kind: 'stat', w: 2, h: 1, figure: '150 lb', label: 'robot lifted', accent: true, open: 'climb' },
      { kind: 'text', w: 2, h: 1, text: '#25 chain drive', open: 'offsetpivot' },
      { kind: 'text', w: 2, h: 1, text: 'Turnbuckle tensioner', open: 'offsetpivot' },

      { kind: 'img', w: 5, h: 4, src: 'images/launch-angle-1.jpg', open: 'launchangle', label: 'Launch angle rotary mechanism', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 4, h: 2, src: 'images/transfer-1.jpg', open: 'transfer', label: 'Transfer mechanism', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 3, h: 4, src: 'images/robot-2024.jpg', open: 'launchangle', label: '2024 robot' },
      { kind: 'img', w: 4, h: 2, src: 'images/robot-2024-proto.jpg', open: 'transfer', label: 'Shop prototype' },

      { kind: 'img', w: 4, h: 3, src: 'images/two-stage-2.jpg', open: 'twostage', label: '2-stage elevator + gearbox', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 5, h: 3, src: 'images/three-stage-1.jpg', open: 'threestage', label: '3-stage cascade elevator', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 3, h: 4, src: 'images/three-stage-robot.jpg', open: 'threestage', label: '2023 robot' },
      { kind: 'text', w: 4, h: 1, text: 'Bevel gearbox · constant-force spring', open: 'twostage' },
      { kind: 'stat', w: 5, h: 1, figure: '60 in / 0.4 s', label: 'elevator travel', accent: true, open: 'threestage' },

      { kind: 'img', w: 5, h: 4, src: 'images/three-stage-comp.jpg', open: 'threestage', label: 'On the field' },
      { kind: 'img', w: 3, h: 3, src: 'images/xy-trainer.jpg', open: 'xytrainer', label: 'XY gantry trainer', fit: 'contain', bg: '#fff' },
      { kind: 'img', w: 2, h: 4, video: true, src: 'images/xy-trainer-poster.jpg', open: 'xytrainer', label: 'First moves' },
      { kind: 'stat', w: 2, h: 2, figure: '300 lb', label: 'lifting capacity', open: 'threestage' },
      { kind: 'text', w: 3, h: 1, text: 'Belts inside 6061 tube', open: 'xytrainer' },
      { kind: 'stat', w: 2, h: 2, figure: '12', label: 'elevator revisions', accent: true, open: 'threestage' }
    ]
  },
  {
    id: 'leadership',
    stop: 'Leadership',
    eyebrow: 'Leadership',
    title: 'Running the team',
    tiles: [
      { kind: 'img', w: 4, h: 3, src: 'images/kian-working.jpg', open: 'captain', label: 'Team captain' },
      { kind: 'img', w: 4, h: 3, src: 'images/in-action-1.jpg', open: 'cadlead', label: 'CAD lead' },
      { kind: 'img', w: 2, h: 3, src: 'images/team-photo.jpg', open: 'captain', label: 'Five competitions' },
      { kind: 'img', w: 2, h: 3, src: 'images/in-action-2.jpg', open: 'mentor', label: 'Now mentoring' },
      { kind: 'text', w: 4, h: 1, text: '30 students · two-month build', open: 'captain' },
      { kind: 'text', w: 4, h: 1, text: 'Team of 6 · design library · SolidWorks training', open: 'cadlead' },
      { kind: 'text', w: 4, h: 1, text: 'Design mentor · controls PM', open: 'mentor' }
    ]
  },
  {
    id: 'more',
    stop: 'Contact',
    eyebrow: 'Personal · Skills · Contact',
    title: 'Off the clock',
    tiles: [
      { kind: 'stat', w: 4, h: 2, figure: '12 ft', label: 'balsa glider wingspan', open: 'glider' },
      { kind: 'chips', w: 4, h: 2, open: 'skills', label: 'Skills & tools', chips: ['SolidWorks', 'Fusion 360', 'Onshape', 'MATLAB', 'FEA', 'GD&T', 'CNC', 'Laser cutting', '3D printing', 'Carbon fiber', 'Sheet metal'] },
      { kind: 'contact', w: 4, h: 2 }
    ]
  }
];

/* ---------- index ---------- */

const ENTRIES = {};
SECTIONS.forEach((s) => s.projects.forEach((p) => { ENTRIES[p.id] = p; }));
LEADERSHIP.forEach((p) => { ENTRIES[p.id] = p; });
Object.keys(PANELS).forEach((k) => { ENTRIES[k] = PANELS[k]; });

const CUBE = '<svg class="media__glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 21 7.5v9L12 21 3 16.5v-9z"/><path d="M3 7.5 12 12l9-4.5"/><path d="M12 12v9"/></svg>';
const PLAY = '<svg class="media__play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
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
  if (t.kind === 'chips' || t.kind === 'contact') return [4, 2];
  if (t.kind === 'text') return [t.w >= 3 ? 4 : 2, 1];
  return [t.w >= 4 ? 4 : 2, 1];
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
    const imgStyle = 'style="object-fit:' + (t.fit || 'cover') + ';object-position:' + (t.pos || 'center') + (t.bg ? ';background:' + t.bg : '') + '"';
    return '<' + tag + ' class="tile tile--img' + wide + '" ' + span + open + ' aria-label="' + escapeHtml(entry.title || t.label) + '">' +
      '<img src="' + t.src + '" alt="" loading="lazy" ' + imgStyle + '>' +
      (t.video ? PLAY : '') +
      '<span class="tile__label">' + escapeHtml(t.label) + '</span></' + end + '>';
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
  if (t.kind === 'contact') {
    return '<div class="tile tile--contact" ' + span + '>' +
      '<span class="tile__caption">Contact</span>' +
      '<a href="mailto:kianzarazvand@gmail.com">kianzarazvand@gmail.com</a>' +
      '<a href="tel:+19493158322">949.315.8322</a>' +
      '<span class="caption">Riverside &amp; Irvine, CA</span></div>';
  }
  return '';
}

const STOPS = [{ id: 'top', name: 'About' }].concat(BOARDS.map((b) => ({ id: b.id, name: b.stop || b.eyebrow })));
const pad = (n) => String(n).padStart(2, '0');

document.getElementById('boards').innerHTML = BOARDS.map((b, i) =>
  '<section class="board" id="' + b.id + '">' +
  (b.title ? '<div class="board__head"><span class="mono board__num">' + pad(i + 2) + '</span><p class="eyebrow eyebrow--accent">' + escapeHtml(b.eyebrow) + '</p><h2 class="h2">' + escapeHtml(b.title) + '</h2></div>' : '') +
  '<div class="bento">' + b.tiles.map(tileHtml).join('') + '</div></section>'
).join('');

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
  sheetMedia.innerHTML = mediaInner(media[currentIndex]);
  sheetThumbs.querySelectorAll('button').forEach((b, idx) => {
    b.setAttribute('aria-current', idx === currentIndex ? 'true' : 'false');
  });
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

  const labels = e.labels || ['Design elements', 'Functionality'];
  document.getElementById('sheet-label-a').textContent = labels[0];
  document.getElementById('sheet-label-b').textContent = labels[1];
  list(document.getElementById('sheet-design'), e.design || []);
  list(document.getElementById('sheet-function'), e.functionality || []);
  document.getElementById('sheet-tags').innerHTML =
    (e.tags || []).map((t) => '<li class="chip">' + escapeHtml(t) + '</li>').join('');

  const media = e.media || [];
  sheetThumbs.hidden = media.length < 2;
  sheetThumbs.innerHTML = media.map((m, i) =>
    '<button type="button" class="thumb" data-index="' + i + '" aria-label="Show media ' + (i + 1) + ' of ' + media.length + '">' +
    '<img src="' + (m.video ? m.poster : m.src) + '" alt="" loading="lazy">' + (m.video ? PLAY : '') + '</button>'
  ).join('');
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
  const thumb = ev.target.closest('.thumb');
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
