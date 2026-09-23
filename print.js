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

function stillOf(entry) {
  const m = (entry.media || []).find((x) => !x.video);
  return m ? { src: printSrc(m.src), alt: m.alt || '' } : null;
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
  const img = stillOf(p);
  const labels = p.labels || ['Design elements', 'Functionality'];
  return `
  <article class="proj${img ? '' : ' proj--noimg'}">
    ${img ? `<figure><img src="${img.src}" alt="${esc(img.alt)}"></figure>` : ''}
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

document.getElementById('doc').innerHTML = cover + sections + leadership +
  `<footer class="end">Kian Zarazvand · kianzarazvand@gmail.com · ${SITE_URL}</footer>`;
