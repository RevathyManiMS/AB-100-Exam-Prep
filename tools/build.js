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
    <a class="navlink${nav === "notes" ? " active" : ""}" href="${base}exam-notes.html">Exam notes</a>
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
      <p style="margin-top:12px">
        <a class="btn btn-sm" href="${m.learnUrl}" target="_blank" rel="noopener">Open module ${m.n} on Microsoft Learn ↗</a>
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
        <a class="btn" href="exam-notes.html">Exam notes</a>
        <a class="btn" href="cram-sheet.html">Cram sheet</a>
        <a class="btn" href="exam.html">Take the mock exam</a>
        <a class="btn btn-ghost" href="${SITE.pathUrl}" target="_blank" rel="noopener">Official Learn path ↗</a>
      </div>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Notes from a real sitting</h2>
      <p class="lead">Roughly <strong>half the questions are single-answer multiple choice and half are multi-select</strong>,
      and a handful of topics come up far more often than the module weighting suggests — Azure Monitor and Log Analytics,
      connection references after a production deployment, the Copilot Studio analytics tab, Dynamics 365 design components,
      voice agents, managed solutions, and semantic indexing.</p>
      <p style="margin-top:12px"><a class="btn btn-primary" href="exam-notes.html">Read the exam notes →</a></p>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">How to use this site</h2>
      <p class="lead" style="margin-bottom:16px">A three-pass approach works well if you have roughly a week.</p>
      <table>
        <thead><tr><th style="width:90px">Pass</th><th>What to do</th></tr></thead>
        <tbody>
          <tr><td><strong>First</strong></td><td>Read all eleven study pages in order. Do not memorise — aim to recognise the vocabulary and the decision points.</td></tr>
          <tr><td><strong>Second</strong></td><td>Take the mock exam in <strong>practice mode</strong>, one module at a time. After each module, re-read the study page sections you got wrong.</td></tr>
          <tr><td><strong>Third</strong></td><td>Take the full 110-question <strong>exam mode</strong> run under time. Anything below 70% in a module sends you back to that page. Read the <strong><a href="exam-notes.html">exam notes</a></strong> and the cram sheet the morning of the exam.</td></tr>
        </tbody>
      </table>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:4px">Study guide by topic</h2>
      <p class="lead" style="margin-bottom:18px">One page per module, each with key concepts, design guidance, exam traps, and a readiness checklist.
      Every card also links straight to the matching module on
      <a href="${SITE.pathUrl}" target="_blank" rel="noopener">Microsoft Learn</a> — read the official module first, then these notes.</p>
      <div class="modcards">
        ${MODULES.map(m => {
          const slug = `study/module-${String(m.n).padStart(2, "0")}.html`;
          return `<div class="modcard">
          <span class="n">MODULE ${m.n} · Q${m.qFrom}–Q${m.qTo}</span>
          <span class="t"><a href="${slug}">${esc(m.title)}</a></span>
          <span class="d">${esc(m.short)}</span>
          <span class="modlinks">
            <a href="${slug}">Study notes →</a>
            <a class="muted" href="${m.learnUrl}" target="_blank" rel="noopener">Microsoft Learn module ↗</a>
          </span>
        </div>`;
        }).join("")}
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
      <h2 style="font-size:20px;margin-bottom:6px">Highest-frequency topics on the real exam</h2>
      <p class="lead" style="margin-bottom:16px">Reported after an actual sitting. If any of these are shaky, fix them before anything else —
      full detail is on the <a href="exam-notes.html">exam notes page</a>.</p>
      <div class="modcards">
        ${SITE.examNotes.hotspots.map((h, i) => `<div class="modcard">
          <span class="t"><a href="exam-notes.html#hs-${i + 1}">${md(h.h)}</a></span>
          <span class="d">${md(h.trap || "")}</span>
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

/* ---------------- exam notes ---------------- */
function notesPage() {
  const base = "";
  const N = SITE.examNotes;
  const modLink = n => {
    const m = MODULES.find(x => x.n === n);
    return m ? `<a href="study/module-${String(n).padStart(2, "0")}.html">Module ${n} · ${esc(m.navTitle || m.title)}</a>` : "";
  };

  const hotspots = N.hotspots.map((h, i) => `<div class="hotspot" id="hs-${i + 1}">
    <h3>${md(h.h)}</h3>
    <div class="whence">Studied on ${h.modules.map(modLink).join(" · ")}</div>
    ${h.why ? `<p style="font-size:14px">${md(h.why)}</p>` : ""}
    <h4>What you actually need to know</h4>
    <ul>${h.facts.map(f => `<li>${md(f)}</li>`).join("")}</ul>
    ${h.answer && h.answer.length ? `<h4>How it is asked</h4><ul>${h.answer.map(a => `<li>${md(a)}</li>`).join("")}</ul>` : ""}
    ${h.trap ? `<div class="note warn"><span class="lbl">Trap</span>${md(h.trap)}</div>` : ""}
    ${h.sources && h.sources.length ? `<div class="srclinks">${h.sources.map(([l, u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(l)} ↗</a>`).join("")}</div>` : ""}
  </div>`).join("");

  const body = `<main class="wrap">
  <div class="stack">
    <section class="card pad">
      <div class="eyebrow">Field notes</div>
      <h1 style="font-size:29px;margin:8px 0 12px">What the real exam actually asks</h1>
      <p class="lead">These notes come from someone who sat and passed AB-100. They do not reproduce any exam item —
      they record the <strong>question format</strong> and the <strong>topics that came up far more often than the
      module weighting suggests</strong>. Use them to decide where to spend your last few days of revision.</p>
      <div class="note"><span class="lbl">Format</span>${md(N.format.summary)}</div>
      <div class="splitbar">
        <span class="one">≈50% single answer</span>
        <span class="many">≈50% select all that apply</span>
      </div>
      <ul style="font-size:14px;margin-top:12px">${N.format.points.map(p => `<li>${md(p)}</li>`).join("")}</ul>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Answering multi-select questions</h2>
      <p class="lead" style="margin-bottom:16px">Half your marks sit here, and multi-select is where most people lose them.
      There is normally no partial credit, so a near-miss scores the same as a blank.</p>
      <ul style="font-size:14px">${N.multiSelect.map(p => `<li>${md(p)}</li>`).join("")}</ul>
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">High-frequency topics</h2>
      <p class="lead" style="margin-bottom:18px">Nine areas that carried noticeably more questions than expected.
      Each links to the study page that covers it and to the official Microsoft documentation.</p>
      ${hotspots}
    </section>

    <section class="card pad">
      <h2 style="font-size:20px;margin-bottom:6px">Last-week revision order</h2>
      <p class="lead" style="margin-bottom:16px">If time is short, work down this list rather than re-reading all eleven modules.</p>
      <ol style="padding-left:22px;font-size:14px">${N.revisionOrder.map(r => `<li style="margin-bottom:8px">${md(r)}</li>`).join("")}</ol>
      <p style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-primary" href="exam.html">Practise on the mock exam →</a>
        <a class="btn" href="cram-sheet.html">Cram sheet</a>
      </p>
    </section>
  </div>
  ${FOOT(base)}
</main>`;

  return shell({
    title: "Exam notes — AB-100 Exam Prep",
    desc: "Question format and the highest-frequency AB-100 topics, recorded after a real sitting: Azure Monitor, connection references, Copilot Studio analytics, Dynamics 365 design components, voice agents, ALM, ROI, and semantic indexing.",
    base, nav: "notes", body
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
fs.writeFileSync(path.join(ROOT, "exam-notes.html"), notesPage());
fs.writeFileSync(path.join(ROOT, "cram-sheet.html"), cramPage());
console.log(`built ${count} study pages + index.html + exam-notes.html + cram-sheet.html`);
