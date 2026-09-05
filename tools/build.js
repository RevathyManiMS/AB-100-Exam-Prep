/* Static site generator for AB-100 Exam Prep.
   Run: node tools/build.js
   Reads tools/content.js and writes index.html, cram-sheet.html, study/*.html */

const fs = require("fs");
const path = require("path");
const { MODULES, SITE } = require("./content.js");

const ROOT = path.join(__dirname, "..");
const esc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

/* inline markup: **bold**, `code`, [text](url) */
function md(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

const THEME_SCRIPT = `<script>
  (() => {
    const param = new URLSearchParams(window.location.search).get("scoutTheme");
    const theme =
      param || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  })();
</script>`;

const THEME_TOGGLE = `<script>
  document.getElementById("themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
  });
</script>`;

function shell({ title, desc, base, nav, body, extraHead = "" }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
${THEME_SCRIPT}
<link rel="stylesheet" href="${base}assets/theme.css" />
${extraHead}
</head>
<body>
<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="${base}index.html">
      <div class="badge-dot">AB</div>
      <div style="min-width:0">
        <div class="brand-title">AB-100 Exam Prep</div>
        <div class="brand-sub">Architect AI solutions for business productivity</div>
      </div>
    </a>
    <a class="navlink${nav === "home" ? " active" : ""}" href="${base}index.html">Study guide</a>
    <a class="navlink${nav === "cram" ? " active" : ""}" href="${base}cram-sheet.html">Cram sheet</a>
    <a class="navlink${nav === "exam" ? " active" : ""}" href="${base}exam.html">Mock exam</a>
    <button class="btn btn-sm btn-ghost" id="themeBtn" title="Toggle light/dark theme">Theme</button>
  </div>
</header>
${body}
${THEME_TOGGLE}
</body>
</html>
`;
}

const FOOT = base => `<p class="footnote">
  Unofficial study aid built from the public
  <a href="${SITE.pathUrl}">Microsoft Learn path outline</a>.
  Not affiliated with or endorsed by Microsoft. No real exam items are reproduced.
</p>`;

/* ---------------- study page ---------------- */
function studyPage(m, prev, next) {
  const base = "../";
  const blocks = [];
  const toc = [];
  const add = (id, label, html) => { toc.push([id, label]); blocks.push(`<section class="block" id="${id}"><h2>${esc(label)}</h2>${html}</section>`); };

  add("overview", "Why this module matters",
    m.overview.map(p => `<p>${md(p)}</p>`).join("") +
    (m.bigIdea ? `<div class="note"><span class="lbl">The one big idea</span>${md(m.bigIdea)}</div>` : ""));

  add("syllabus", "What Microsoft Learn covers",
    `<p class="lead">Units in this module, as published on Microsoft Learn:</p><ul>` +
    m.units.map(u => `<li>${esc(u)}</li>`).join("") + `</ul>` +
    `<p><a class="btn btn-sm" href="${m.learnUrl}" target="_blank" rel="noopener">Open module on Microsoft Learn →</a></p>`);

  add("concepts", "Key concepts and definitions",
    `<table class="deftable"><tbody>` +
    m.concepts.map(([t, d]) => `<tr><td>${md(t)}</td><td>${md(d)}</td></tr>`).join("") +
    `</tbody></table>`);

  if (m.guidance && m.guidance.length) {
    add("guidance", "Design guidance",
      m.guidance.map(g =>
        `<h3>${esc(g.h)}</h3><ul>` + g.items.map(i => `<li>${md(i)}</li>`).join("") + `</ul>`
      ).join(""));
  }

  if (m.doDont) {
    add("practice", "Good practice vs. anti-pattern",
      `<div class="compare">
        <div class="do"><h4>Do</h4><ul>${m.doDont.do.map(i => `<li>${md(i)}</li>`).join("")}</ul></div>
        <div class="dont"><h4>Avoid</h4><ul>${m.doDont.dont.map(i => `<li>${md(i)}</li>`).join("")}</ul></div>
      </div>`);
  }

  add("traps", "Exam traps to watch for",
    m.traps.map(t => `<div class="note warn"><span class="lbl">Trap</span>${md(t)}</div>`).join(""));

  add("checklist", "Readiness checklist",
    `<p class="lead">You are ready to move on when you can do all of these without notes.</p>
     <ul class="checklist">${m.checklist.map(c => `<li>${md(c)}</li>`).join("")}</ul>`);

  const body = `<main class="wrap">
  <div class="study-grid">
    <article class="card pad">
      <div class="eyebrow">Module ${m.n} of ${MODULES.length}</div>
      <h1 style="font-size:27px;margin:6px 0 10px">${esc(m.title)}</h1>
      <p class="lead">${md(m.short)}</p>
      <p style="margin-top:14px">
        <span class="pill">Exam questions Q${m.qFrom}–Q${m.qTo}</span>
        <span class="pill pill-muted">${m.units.length} units on Learn</span>
      </p>
      <div style="margin-top:26px">${blocks.join("")}</div>
      <div class="pagenav">
        ${prev ? `<a class="btn" href="module-${String(prev.n).padStart(2, "0")}.html">← ${esc(prev.title)}</a>` : `<a class="btn" href="${base}index.html">← Study guide</a>`}
        <span class="spacer"></span>
        <a class="btn btn-primary" href="${base}exam.html">Test this module →</a>
        ${next ? `<a class="btn" href="module-${String(next.n).padStart(2, "0")}.html">${esc(next.title)} →</a>` : `<a class="btn" href="${base}cram-sheet.html">Cram sheet →</a>`}
      </div>
    </article>
    <nav class="toc card pad">
      <h3>On this page</h3>
      ${toc.map(([id, l]) => `<a href="#${id}">${esc(l)}</a>`).join("")}
      <h3 style="margin-top:18px">All modules</h3>
      ${MODULES.map(x => `<a href="module-${String(x.n).padStart(2, "0")}.html"${x.n === m.n ? ' style="color:var(--cp-accent);font-weight:600"' : ""}>${x.n}. ${esc(x.navTitle || x.title)}</a>`).join("")}
    </nav>
  </div>
  ${FOOT(base)}
</main>`;

  return shell({
    title: `${m.title} — AB-100 Exam Prep`,
    desc: m.short,
    base, nav: "study", body
  });
}

/* ---------------- home ---------------- */
function homePage() {
  const base = "";
  const body = `<main class="wrap">
  <div class="stack">
    <section class="card pad stack">
      <div>
        <div class="eyebrow">AB-100 · Unofficial study site</div>
        <h1 style="font-size:31px;margin:8px 0 12px">Architect AI solutions for business productivity</h1>
        <p class="lead">Topic-by-topic study notes, a pre-exam cram sheet, and a 110-question mock exam —
        all mapped to the eleven modules of the Microsoft Learn path. Everything runs in your browser;
        nothing is sent anywhere.</p>
      </div>
      <div class="stat-grid">
        <div class="stat"><div class="k">Study pages</div><div class="v">${MODULES.length}</div></div>
        <div class="stat"><div class="k">Practice questions</div><div class="v">110</div></div>
        <div class="stat"><div class="k">Mock exam time</div><div class="v">150 min</div></div>
        <div class="stat"><div class="k">Pass mark</div><div class="v">70%</div></div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-primary" href="study/module-01.html">Start studying</a>
        <a class="btn" href="cram-sheet.html">Cram sheet</a>
        <a class="btn" href="exam.html">Take the mock exam</a>
      </div>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">How to use this site</h2>
      <p class="lead" style="margin-bottom:16px">A three-pass approach works well if you have roughly a week.</p>
      <table>
        <thead><tr><th style="width:90px">Pass</th><th>What to do</th></tr></thead>
        <tbody>
          <tr><td><strong>First</strong></td><td>Read all eleven study pages in order. Do not memorise — aim to recognise the vocabulary and the decision points.</td></tr>
          <tr><td><strong>Second</strong></td><td>Take the mock exam in <strong>practice mode</strong>, one module at a time. After each module, re-read the study page sections you got wrong.</td></tr>
          <tr><td><strong>Third</strong></td><td>Take the full 110-question <strong>exam mode</strong> run under time. Anything below 70% in a module sends you back to that page. Read the cram sheet the morning of the exam.</td></tr>
        </tbody>
      </table>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:4px">Study guide by topic</h2>
      <p class="lead" style="margin-bottom:18px">One page per module, each with key concepts, design guidance, exam traps, and a readiness checklist.</p>
      <div class="modcards">
        ${MODULES.map(m => `<a class="modcard" href="study/module-${String(m.n).padStart(2, "0")}.html">
          <span class="n">MODULE ${m.n} · Q${m.qFrom}–Q${m.qTo}</span>
          <span class="t">${esc(m.title)}</span>
          <span class="d">${esc(m.short)}</span>
        </a>`).join("")}
      </div>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Before you sit the exam</h2>
      <p class="lead">The <a href="cram-sheet.html">cram sheet</a> condenses all eleven modules into one printable page:
      the highest-yield facts, the decision rules examiners love to test, and the distinctions that are most often confused.</p>
      <p><a class="btn btn-primary" href="cram-sheet.html">Open the cram sheet →</a></p>
    </section>
  </div>
  ${FOOT(base)}
</main>`;

  return shell({
    title: "AB-100 Exam Prep — Architect AI solutions for business productivity",
    desc: "Free study guide, cram sheet, and 110-question mock exam for AB-100: Architect AI solutions for business productivity.",
    base, nav: "home", body
  });
}

/* ---------------- cram sheet ---------------- */
function cramPage() {
  const base = "";
  const body = `<main class="wrap">
  <div class="stack">
    <section class="card pad">
      <div class="eyebrow">Final review</div>
      <h1 style="font-size:29px;margin:8px 0 12px">Most important concepts to review before the exam</h1>
      <p class="lead">Everything below is high-yield: the decision rules, distinctions, and named frameworks that
      carry the most marks. If you only have an hour left, read this page. It prints cleanly on paper too.</p>
      <p style="margin-top:12px"><button class="btn btn-sm" onclick="window.print()">Print this page</button></p>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">The ten rules that answer most questions</h2>
      <p class="lead" style="margin-bottom:16px">When a question is ambiguous, these defaults are almost always the intended answer.</p>
      <ol style="padding-left:22px">
        ${SITE.goldenRules.map(r => `<li style="margin-bottom:9px">${md(r)}</li>`).join("")}
      </ol>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Easily confused pairs</h2>
      <p class="lead" style="margin-bottom:16px">Distinguishing these correctly is worth a surprising number of marks.</p>
      <table>
        <thead><tr><th style="width:26%">Term</th><th>Not to be confused with</th></tr></thead>
        <tbody>
          ${SITE.confusions.map(([a, b]) => `<tr><td><strong>${md(a)}</strong></td><td>${md(b)}</td></tr>`).join("")}
        </tbody>
      </table>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Named things you must recognise</h2>
      <p class="lead" style="margin-bottom:16px">Frameworks, principles, and products that appear by name in questions.</p>
      <table class="deftable">
        <tbody>${SITE.namedThings.map(([t, d]) => `<tr><td>${md(t)}</td><td>${md(d)}</td></tr>`).join("")}</tbody>
      </table>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Module-by-module recap</h2>
      <p class="lead" style="margin-bottom:18px">The few points from each module most likely to be tested.</p>
      <div class="cram-grid">
        ${MODULES.map(m => `<div class="cram">
          <h3><span class="num">${m.n}</span> <a href="study/module-${String(m.n).padStart(2, "0")}.html">${esc(m.navTitle || m.title)}</a></h3>
          <ul>${m.cram.map(c => `<li>${md(c)}</li>`).join("")}</ul>
        </div>`).join("")}
      </div>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Exam-day technique</h2>
      <ul>${SITE.technique.map(t => `<li>${md(t)}</li>`).join("")}</ul>
      <p style="margin-top:16px"><a class="btn btn-primary" href="exam.html">Do a final timed run →</a></p>
    </section>
  </div>
  ${FOOT(base)}
</main>`;

  return shell({
    title: "Cram sheet — AB-100 Exam Prep",
    desc: "The most important AB-100 concepts to review before the exam: golden rules, confused pairs, named frameworks, and a module-by-module recap.",
    base, nav: "cram", body
  });
}

/* ---------------- write ---------------- */
fs.mkdirSync(path.join(ROOT, "study"), { recursive: true });
let count = 0;
MODULES.forEach((m, i) => {
  const html = studyPage(m, MODULES[i - 1], MODULES[i + 1]);
  fs.writeFileSync(path.join(ROOT, "study", `module-${String(m.n).padStart(2, "0")}.html`), html);
  count++;
});
fs.writeFileSync(path.join(ROOT, "index.html"), homePage());
fs.writeFileSync(path.join(ROOT, "cram-sheet.html"), cramPage());
console.log(`built ${count} study pages + index.html + cram-sheet.html`);
