# AB-100 Exam Prep

Unofficial practice material for **AB-100: Architect AI solutions for business productivity**, built from the Microsoft Learn path [Architect AI solutions for business productivity](https://learn.microsoft.com/en-us/training/paths/architect-agentic-ai-business-solutions/) (11 modules).

## Contents

| Path | What it is |
|---|---|
| `index.html` | Home — study guide index and how to use the site |
| `study/module-01..11.html` | One study page per module: key concepts, design guidance, exam traps, readiness checklist |
| `cram-sheet.html` | Final-review page: golden rules, easily confused pairs, named frameworks, module recap (printable) |
| `exam.html` | Interactive self-scoring 110-question mock exam |
| `AB-100-Mock-Exam.md` | Printable exam with answer key |
| `assets/theme.css` | Shared stylesheet |
| `tools/` | Content source and static page generator |

Everything is static HTML — no build step needed to *view* it, no dependencies, no network calls.

## Editing content

Study page and cram sheet copy lives in `tools/modules-01-04.js`, `tools/modules-05-08.js`,
`tools/modules-09-11.js`, and `tools/content.js`. After editing, regenerate the pages:

```bash
node tools/build.js
```

That rewrites `index.html`, `cram-sheet.html`, and `study/*.html`. Don't hand-edit those files —
your changes will be overwritten on the next build.

## Using the exam

Open `exam.html` in any modern browser.

- **Practice mode** — instant feedback and the correct answer after each question.
- **Exam mode** — timed (150 minutes for the full set), feedback withheld until you submit.
- **Scope** — take all 110 questions or drill a single module.
- **Length** — 10, 20, 30, 55, or the full set, sequential or randomized.
- **Question map** — jump between questions, flag ones to revisit.
- **Results** — overall score, per-module breakdown, and a filterable answer review (all / incorrect / skipped / correct).
- **Retry incorrect only** — rebuild an attempt from just the questions you missed.
- Progress is saved in `localStorage`, so you can resume an unfinished attempt.
- Keyboard: `A`–`D` to answer, `←`/`→` to move, `F` to flag.

## Coverage

Eleven study pages and 110 questions, 10 per module.

| # | Module |
|---|---|
| 1 | Introduction to agentic AI business solutions |
| 2 | Analyze requirements for AI-powered business solutions |
| 3 | Design overall AI strategy for business solutions |
| 4 | Evaluate costs and benefits of AI solutions |
| 5 | Design AI agents for business solutions |
| 6 | Design extensibility of AI solutions |
| 7 | Orchestrate configuration of prebuilt agents and apps |
| 8 | Monitor, analyze, and tune AI agents |
| 9 | Manage testing AI-powered business solutions |
| 10 | Design ALM process for AI-powered business solutions |
| 11 | Design responsible AI security, governance, risk management, and compliance |

Pass mark is set at 70%.

---

> **Disclaimer:** This is an unofficial study aid written from the public learning path outline. It is not affiliated with, endorsed by, or sourced from Microsoft, and it does not reproduce real exam items.