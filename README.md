# AB-100 Exam Prep

[![Exam](https://img.shields.io/badge/Exam-AB--100-0078D4?logo=microsoft&logoColor=white)](https://learn.microsoft.com/credentials/certifications/exams/ab-100/)
[![Study modules](https://img.shields.io/badge/Study%20Modules-11-742774)](https://revathymanims.github.io/AB-100-Exam-Prep/#modules)
[![Practice questions](https://img.shields.io/badge/Practice%20Questions-110-2ea44f)](https://revathymanims.github.io/AB-100-Exam-Prep/exam.html)
[![GitHub Pages](https://img.shields.io/badge/Study%20Site-Live-181717?logo=github)](https://revathymanims.github.io/AB-100-Exam-Prep/)

A free, independent study hub for **AB-100: Architect AI solutions for business productivity**. It combines topic-by-topic study notes, official training links, focused revision material, and a 110-question interactive mock exam.

The content follows the eleven modules in the Microsoft Learn path [Architect AI solutions for business productivity](https://learn.microsoft.com/training/paths/architect-agentic-ai-business-solutions/).

> [!IMPORTANT]
> This is an unofficial study aid based on public Microsoft Learn and product documentation. It is not affiliated with, endorsed by, or sponsored by Microsoft. It contains no recalled, leaked, or official live exam questions.

## Open the study hub

**[Launch the AB-100 Exam Prep site](https://revathymanims.github.io/AB-100-Exam-Prep/)**

Everything runs locally in your browser. No account, installation, dependency, or network API is required to use the study pages and mock exam.

## What's included

| Resource | Description |
| --- | --- |
| [Study guide](https://revathymanims.github.io/AB-100-Exam-Prep/#modules) | Eleven module-aligned study pages covering key concepts, architecture decisions, common traps, and readiness checks. |
| [Interactive mock exam](https://revathymanims.github.io/AB-100-Exam-Prep/exam.html) | 110 original questions with practice and timed exam modes, module filtering, explanations, progress saving, and detailed results. |
| [Printable mock exam](https://github.com/RevathyManiMS/AB-100-Exam-Prep/blob/main/AB-100-Mock-Exam.md) | Markdown version of the practice exam with an answer key for offline or printed study. |
| [Topic information](https://revathymanims.github.io/AB-100-Exam-Prep/topic-information.html) | Nine commonly under-prepared or frequently confused areas, linked to current Microsoft documentation. |
| [Official video-course map](https://revathymanims.github.io/AB-100-Exam-Prep/video-course.html) | Maps Microsoft's 16-part, 9-hour 27-minute AB-100 video course to the eleven study modules. |
| [Cram sheet](https://revathymanims.github.io/AB-100-Exam-Prep/cram-sheet.html) | Printable final-review guide covering high-yield rules, commonly confused concepts, frameworks, and module summaries. |

## Recommended study plan

The site is designed around three passes:

1. **Learn** — Work through the eleven modules in order. Start with the corresponding Microsoft Learn module or official video episode, then use the study page to consolidate the main concepts and design decisions.
2. **Practise** — Run the mock exam in practice mode one module at a time. Review every explanation and return to the study page for anything you missed.
3. **Simulate** — Take all 110 questions in timed exam mode. Use the per-module results to identify weak areas, then finish with the topic information and cram sheet.

The mock exam uses a 70% study target. This is a practice threshold and is **not** Microsoft's scaled exam score or a guarantee of passing the certification exam.

## Interactive exam features

- **Practice mode** with immediate feedback and answer explanations
- **Exam mode** with a 150-minute timer and feedback after submission
- Full 110-question exam or module-specific practice
- Configurable lengths of 10, 20, 30, 55, or 110 questions
- Sequential or randomized question order
- Question map and flags for questions to revisit
- Overall and per-module score breakdowns
- Filterable review of correct, incorrect, skipped, or all responses
- Retry mode containing only previously incorrect questions
- Browser `localStorage` support for resuming an unfinished attempt
- Keyboard navigation: <kbd>A</kbd>–<kbd>D</kbd>, <kbd>←</kbd>, <kbd>→</kbd>, and <kbd>F</kbd>

## Module coverage

| # | Module |
| ---: | --- |
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

## Topics for deeper review

The topic-information guide provides focused revision for areas that are easy to confuse or have changed recently:

- Azure Monitor, Application Insights, and Log Analytics
- Copilot Studio monitoring and agent evaluations
- Connection references after production deployment
- Managed solutions and application lifecycle management
- Dynamics 365 Field Service and Customer Service design components
- Voice agents
- Return-on-investment measurement tools
- Microsoft Foundry model router
- Semantic indexing

## Run locally

Clone the repository:

```bash
git clone https://github.com/RevathyManiMS/AB-100-Exam-Prep.git
cd AB-100-Exam-Prep
```

Open `index.html` in a modern browser, or serve the directory with any static web server.

No installation or build step is required to view the site.

## Repository structure

```text
AB-100-Exam-Prep/
├── index.html                 # Study hub home page
├── exam.html                  # Interactive mock exam
├── AB-100-Mock-Exam.md        # Printable mock exam and answer key
├── topic-information.html     # Focused topic guidance
├── video-course.html          # Official video-course map
├── cram-sheet.html            # Printable final review
├── study/                     # Eleven generated study pages
├── assets/
│   └── theme.css              # Shared styling
└── tools/                     # Content sources and page generator
```

## Editing the content

The study pages, topic information, video-course page, cram sheet, and home page are generated from source files in `tools/`.

Edit:

```text
tools/modules-01-04.js
tools/modules-05-08.js
tools/modules-09-11.js
tools/content.js
```

Then regenerate the static pages:

```bash
node tools/build.js
```

This rewrites:

```text
index.html
topic-information.html
video-course.html
cram-sheet.html
study/*.html
```

Do not edit those generated files directly because the next build will overwrite the changes. The interactive `exam.html` file is the exception and is maintained directly.

## Contributing

Corrections and improvements are welcome, especially when supported by current Microsoft Learn or product documentation.

1. Fork the repository.
2. Create a branch for your change.
3. Update the relevant source content.
4. Run `node tools/build.js` when changing generated study content.
5. Verify navigation, layout, and exam behavior locally.
6. Open a pull request with the public source supporting the change.

Please do not submit recalled, confidential, or real exam content. All practice questions must be original and based on public documentation.

## Feedback

Found an outdated reference, incorrect explanation, accessibility issue, or missing topic? [Open an issue](https://github.com/RevathyManiMS/AB-100-Exam-Prep/issues).

If this project helps you, consider starring the repository so other learners can discover it.

## Official resources

- [AB-100 exam page](https://learn.microsoft.com/credentials/certifications/exams/ab-100/)
- [Architect AI solutions for business productivity learning path](https://learn.microsoft.com/training/paths/architect-agentic-ai-business-solutions/)
- [Official AB-100 video course](https://aka.ms/AB-100onYouTube)
- [Microsoft Copilot Studio documentation](https://learn.microsoft.com/microsoft-copilot-studio/)
- [Microsoft credentials support](https://learn.microsoft.com/credentials/support/help)

---

Good luck with your AB-100 preparation!
