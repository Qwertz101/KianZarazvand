/* Builds the printable portfolio from data.js.
 * One image per project (the first still in its media list), full detail text.
 */

const SITE_URL = 'kian-zarazvand.vercel.app';

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function printSrc(src) {
  // images/foo.png -> images/print/foo.jpg (smaller copies made for the PDF)
  return src.replace(/^images\/(.+)\.\w+$/, 'images/print/$1.jpg');
}

const STAGES = ['analysis', 'cad', 'prototype', 'built', 'field'];
const STAGE_LABEL = { analysis: 'Analysis', cad: 'CAD', prototype: 'Prototype', built: 'Built', field: 'In competition' };

/* One still per stage, in process order (CAD → Prototype → Built …), max 3. */
function stagesOf(entry) {
  const media = entry.media || [];
  return STAGES.map((st) => {
    const m = media.find((x) => x.stage === st);
    if (!m) return null;
    return { stage: st, src: printSrc(m.video ? m.poster : m.src), alt: m.alt || '' };
  }).filter(Boolean).slice(0, 3);
}

// Keep each section header on the same page as its first project.
function group(eyebrow, title, entries) {
  const [first, ...rest] = entries;
  return `
<section class="group">
  <div class="keep">
    <header class="group__head">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h2>${esc(title)}</h2>
    </header>
    ${project(first)}
  </div>
  ${rest.map(project).join('')}
</section>`;
}

function bullets(items) {
  return '<ul>' + items.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul>';
}

function project(p) {
  const shots = p.media && p.media.some((m) => m.stage) ? stagesOf(p)
    : (p.media || []).filter((m) => !m.video).slice(0, 1).map((m) => ({ src: printSrc(m.src), alt: m.alt || '' }));
  const labels = p.labels || ['Design elements', 'Functionality'];
  return `
  <article class="proj${shots.length ? '' : ' proj--noimg'}">
    ${shots.length ? `<div class="shots shots--${shots.length}">${shots.map((x, i) =>
      `<figure>${x.stage ? `<figcaption>${shots.length > 1 ? '<b>' + String(i + 1).padStart(2, '0') + '</b> ' : ''}${STAGE_LABEL[x.stage]}</figcaption>` : ''}<img src="${x.src}" alt="${esc(x.alt)}"></figure>`).join('')}</div>` : ''}
    <div class="proj__body">
      <h3>${esc(p.title)}</h3>
      <p class="meta">${esc(p.meta)}</p>
      <p class="lead">${esc(p.lead)}</p>
      <div class="cols">
        <div><p class="label">${esc(labels[0])}</p>${bullets(p.design || [])}</div>
        <div><p class="label">${esc(labels[1])}</p>${bullets(p.functionality || [])}</div>
      </div>
    </div>
  </article>`;
}

const about = PANELS.about;
const skills = PANELS.skills;

const cover = `
<section class="cover">
  <figure class="cover__photo"><img src="images/print/wigglegram.jpg" alt="Kian Zarazvand"></figure>
  <div class="cover__text">
    <p class="eyebrow">Mechanical engineering · UC Riverside</p>
    <h1>Kian Zarazvand</h1>
    <p class="cover__lead">I design suspension, mechanisms and cryostat hardware — then build them in house and find out what breaks.</p>
    <p>${esc(about.lead)}</p>
    <dl class="facts">
      <div><dt>Degree</dt><dd>BS Mechanical Engineering, UC Riverside · expected June 2029</dd></div>
      <div><dt>GPA</dt><dd>3.83</dd></div>
      <div><dt>Contact</dt><dd>kianzarazvand@gmail.com · 949.315.8322</dd></div>
      <div><dt>Web</dt><dd><a href="https://${SITE_URL}">${SITE_URL}</a></dd></div>
    </dl>
  </div>
</section>

<section class="grid2">
  <div>
    <h2 class="h">Experience</h2>
    <table class="tl">
      ${TIMELINE.map((t) => `<tr><td class="when">${esc(t.when)}</td><td><strong>${esc(t.role)}</strong><br><span>${esc(t.org)}</span></td></tr>`).join('')}
    </table>
  </div>
  <div>
    <h2 class="h">Skills &amp; tools</h2>
    ${bullets(skills.design.concat(skills.functionality))}
    <h2 class="h">Education</h2>
    ${bullets(about.design)}
  </div>
</section>`;

const sections = SECTIONS.map((s) => group(s.eyebrow, s.title, s.projects)).join('');
const leadership = group('Leadership', 'Running the team', LEADERSHIP);

const ENTRY = {};
SECTIONS.forEach((s) => s.projects.forEach((p) => { ENTRY[p.id] = p; }));

const lineage = `
<section class="group lineage">
  <header class="group__head">
    <p class="eyebrow">FIRST Robotics · Elevator lineage · 2023 → 2025</p>
    <h2>${esc(ELEVATOR.title)}</h2>
  </header>
  <p class="lead">${esc(ELEVATOR.intro)}</p>
  <table class="matrix">
    <thead><tr><th></th>${TRAITS.map((t) => `<th>${esc(t)}</th>`).join('')}</tr></thead>
    <tbody>${ELEVATOR.versions.map((v) => `<tr><th><span class="v">${v.v}</span> ${esc(v.title)} <span class="when">${esc(v.when)}</span></th>${
      TRAITS.map((t) => `<td>${v.drivers.includes(t) ? '<span class="dot"></span>' : ''}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>
  <div class="versions">
    ${ELEVATOR.versions.map((v) => {
      const st = stagesOf(ENTRY[v.open] || {});
      const pic = st.find((x) => x.stage === 'built') || st[st.length - 1];
      return `<div class="version">
        ${pic ? `<figure><figcaption>${STAGE_LABEL[pic.stage]}</figcaption><img src="${pic.src}" alt="${esc(pic.alt)}"></figure>` : ''}
        <p class="v">${v.v} · ${esc(v.when)}</p>
        <h3>${esc(v.title)}</h3>
        <p class="req"><strong>Requirement:</strong> ${esc(v.requirement)}</p>
        <ul>${v.changes.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
      </div>`;
    }).join('')}
  </div>
</section>`;

document.getElementById('doc').innerHTML = cover + sections + lineage + leadership +
  `<footer class="end">Kian Zarazvand · kianzarazvand@gmail.com · ${SITE_URL}</footer>`;
