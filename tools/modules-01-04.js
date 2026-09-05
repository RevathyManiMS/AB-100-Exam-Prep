/* Modules 1-4 */
module.exports = [
{
  n: 1,
  title: "Introduction to agentic AI business solutions",
  navTitle: "Agentic AI foundations",
  short: "Align AI solutions with business goals, know the Microsoft AI stack, and recognise which out-of-the-box agent already solves the problem.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/introduction-agentic-ai-business-solution-architecture/",
  qFrom: 1, qTo: 10,
  units: [
    "Introduction",
    "Drive AI transformation with architect strategies",
    "Explore Microsoft AI technologies for business",
    "Identify Microsoft AI technologies for business solutions",
    "Identify out-of-box Microsoft AI agent resources for business solutions",
    "Identify out-of-box Microsoft AI agents for business",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "This module sets the vocabulary for everything that follows. The exam repeatedly asks you to place a requirement on the Microsoft AI stack — is this a Microsoft 365 Copilot job, a Copilot Studio job, a Dynamics 365 feature that just needs enabling, or genuine pro-code work in Microsoft Foundry?",
    "It also establishes the architect's posture. You are not asked to be the person who builds the agent; you are the person who decides **whether** an agent is the right answer, **which** platform it belongs on, and **what** has to be true about data, governance, and process before it can work."
  ],
  bigIdea: "An agent is worth building when a task is repetitive, judgement-light, well-grounded in trusted data, and has a clear owner and escalation path. If any of those four is missing, fix that first.",
  concepts: [
    ["Agentic AI", "AI that reasons over a **goal**, plans multiple steps, and invokes tools or takes actions — as opposed to generative AI, which produces content in response to a single prompt."],
    ["Microsoft 365 Copilot", "The AI experience embedded in Word, Excel, Outlook, Teams and the rest of Microsoft 365. Grounded in your tenant's Microsoft Graph data and enforces existing permissions."],
    ["Microsoft 365 Copilot Chat", "The chat surface for Copilot, available more broadly than full Microsoft 365 Copilot. Useful as the delivery surface for declarative agents."],
    ["Microsoft Copilot Studio", "The low-code environment for authoring, extending, and publishing agents — topics, knowledge, tools/actions, triggers, and agent flows."],
    ["Microsoft Foundry", "The pro-code environment for custom models, custom orchestration, and Foundry tools. Reach for it when platform defaults are genuinely insufficient."],
    ["Microsoft Power Platform", "Power Apps, Power Automate, Power Pages, and Dataverse — the application and automation fabric agents plug into."],
    ["Out-of-the-box (OOB) agent", "A prebuilt agent shipped inside Dynamics 365 or Microsoft 365 that you enable and configure rather than build."],
    ["Grounding", "Anchoring model output in trusted organisational data so responses are accurate, current, and attributable rather than invented."],
    ["Orchestration", "Deciding which knowledge, tool, or child agent handles a given user goal, and composing the result."],
    ["Human in the loop", "A defined checkpoint where a person reviews or approves an agent action before it takes effect."]
  ],
  guidance: [
    { h: "Placing a requirement on the stack", items: [
      "**Already exists in Dynamics 365 or Microsoft 365?** Enable and configure the OOB capability. This is the cheapest, fastest, most governed path and is very often the intended exam answer.",
      "**Exists but needs your data or your terminology?** Extend — add knowledge sources, Graph connectors, custom instructions, or a declarative agent.",
      "**Needs bespoke orchestration, a specific model, or non-standard hosting?** Only then build custom, in Copilot Studio for low-code or Microsoft Foundry for pro-code.",
      "Ask *who owns the outcome* at every level. An agent without a named business owner will not survive contact with production."
    ]},
    { h: "Autonomy levels", items: [
      "**Assistive** — the user prompts, the agent responds, the user acts. Lowest risk, fastest to approve.",
      "**Semi-autonomous** — the agent proposes an action and a human approves it. The right default for anything with financial, legal, or customer-facing consequence.",
      "**Autonomous** — an event triggers the agent and it acts without a prompt. Requires strong grounding, tight permissions, monitoring, and a rollback story.",
      "Autonomy is a spectrum you move along as evidence accumulates, not a setting you choose on day one."
    ]},
    { h: "Scaling adoption", items: [
      "Stand up an **AI Center of Excellence** before proliferation, not after: standards, reusable patterns, review gates, and a shared backlog.",
      "Measure adoption with **active usage** and **task completion**, not tokens consumed or number of agents deployed.",
      "Treat prompts, instructions, and knowledge curation as maintained assets with owners — they decay just like code."
    ]}
  ],
  doDont: {
    do: [
      "Start from the business process and its pain, then choose technology.",
      "Prefer configuring an existing agent over building a new one.",
      "Define escalation and fallback behaviour before go-live.",
      "Name a business owner for every agent."
    ],
    dont: [
      "Choose a platform because it is new or interesting.",
      "Assume a bigger model fixes a grounding or data-quality problem.",
      "Let each team build its own overlapping agent unsupervised.",
      "Give an agent autonomy over irreversible decisions on day one."
    ]
  },
  traps: [
    "**\"Agentic\" does not mean \"large model.\"** The distinguishing feature is goal-directed reasoning plus tool use and action-taking, not model size.",
    "When a question offers *build a custom agent* alongside *configure the existing capability*, and the existing capability plausibly fits, the configure answer is correct.",
    "Beware answers that measure success in technical units — tokens, models deployed, environments provisioned. Business-outcome metrics win.",
    "A scenario describing an irreversible, legally binding, or unreviewable decision is signalling that full autonomy is the **wrong** answer."
  ],
  checklist: [
    "Name the four main Microsoft surfaces for AI work and say what each is for.",
    "Given a requirement, choose between enable, configure, extend, and build — and justify it.",
    "Explain the difference between generative AI and agentic AI to a non-technical sponsor.",
    "Describe the three autonomy levels and the risk controls each one needs.",
    "List two leading indicators of adoption success that a business sponsor would accept."
  ],
  cram: [
    "Agentic = **goal + plan + tools + action**. Not model size.",
    "Decision order: **enable → configure → extend → build**.",
    "Autonomy ladder: assistive → human-approved → event-triggered autonomous.",
    "Success metrics are **business** metrics: adoption rate, task completion, cycle time.",
    "Every agent needs a named owner, a fallback, and an escalation path."
  ]
},

{
  n: 2,
  title: "Analyze requirements for AI-powered business solutions",
  navTitle: "Requirements analysis",
  short: "Decide where agents genuinely add value, then prove the underlying data is fit to ground them.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/",
  qFrom: 11, qTo: 20,
  units: [
    "Introduction",
    "Assess the use of agents in task automation, data analytics, and decision-making",
    "Review data for grounding accuracy, relevance, timeliness, cleanliness, and availability",
    "Organize business solution data for AI systems",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "Two things dominate this module, and both appear heavily in the exam. First, classifying a candidate scenario as **task automation**, **data analytics**, or **decision support** — because each implies different grounding, different risk, and a different degree of human oversight.",
    "Second, the five data-quality dimensions. Microsoft names them explicitly, and questions test them by describing a symptom and asking which dimension has failed. Learn them as a list you can recite."
  ],
  bigIdea: "Most failed agent projects are data projects that were not recognised as data projects. Assess grounding data before you commit to a design.",
  concepts: [
    ["Task automation", "The agent performs repeatable, rules-light work — routing, drafting, summarising, data entry. Highest volume, lowest risk, usually the best first scenario."],
    ["Data analytics", "The agent interprets and explains data, surfacing trends and anomalies. Value depends almost entirely on data quality and freshness."],
    ["Decision-making", "The agent recommends or takes a consequential decision. Requires explainability, human oversight, and audit."],
    ["Accuracy", "Is the grounding content factually correct and authoritative? Symptom of failure: confidently wrong answers traced to a wrong source."],
    ["Relevance", "Does the content actually relate to the questions being asked? Symptom: correct-but-useless answers, or retrieval returning noise."],
    ["Timeliness", "Is the content current? Symptom: the agent quotes a superseded policy or last quarter's price list."],
    ["Cleanliness", "Is it deduplicated, consistently formatted, and free of contradiction? Symptom: two conflicting answers to the same question."],
    ["Availability", "Can the agent actually reach it, at the right time, with the right permissions? Symptom: gaps, timeouts, or empty retrieval."],
    ["Functional requirement", "What the solution must **do** — answer policy questions, create a case, send a summary."],
    ["Non-functional requirement", "How well it must do it — latency, throughput, availability, accuracy thresholds, language support."],
    ["Authoritative source", "The single system or document set designated as the truth for a topic, with a named owner accountable for its currency."]
  ],
  guidance: [
    { h: "Running discovery", items: [
      "Map the process at task level with **volume, time per task, and pain points**. Value is volume × time saved × confidence, not enthusiasm.",
      "Interview the **frontline workers who do the task today** — the most commonly overlooked and most informative stakeholder group.",
      "For every knowledge requirement, ask: *which source is authoritative, who owns it, and how often does it change?*",
      "Write scope boundaries explicitly, including what the agent should do when asked something out of scope."
    ]},
    { h: "Setting success criteria", items: [
      "Agree the **baseline** before build. Without a before-measurement you cannot claim an after-improvement.",
      "Define target metrics, how each is measured, and how improvement will be attributed to the agent rather than to seasonality or other changes.",
      "Include a quality bar (for example groundedness and task success) alongside adoption, so a popular but inaccurate agent cannot be declared a success."
    ]},
    { h: "Organising data for grounding", items: [
      "Consolidate to a small number of curated, authoritative sources rather than pointing the agent at everything.",
      "Chunk long documents sensibly and attach metadata — owner, effective date, region, audience — so retrieval can filter.",
      "Retire superseded content. Leaving it discoverable is a direct cause of contradictory answers.",
      "Confirm permissions on the source are correct **before** connecting it: an agent inherits and amplifies whatever oversharing already exists."
    ]}
  ],
  doDont: {
    do: [
      "Quantify current-state volume and effort during discovery.",
      "Name an owner for every knowledge source.",
      "Define out-of-scope behaviour and escalation.",
      "Assess the five data-quality dimensions explicitly."
    ],
    dont: [
      "Accept \"the agent should answer HR questions\" as a requirement.",
      "Point an agent at an entire SharePoint tenant and hope.",
      "Defer success measurement until after go-live.",
      "Treat regulated personal data as an implementation detail."
    ]
  },
  traps: [
    "A latency, throughput, or accuracy-threshold requirement is **non-functional**, even though it sounds technical and specific.",
    "When a stakeholder gives a one-line request, the best next step is almost always a clarifying question about **authoritative sources and ownership**, not a technology choice.",
    "Personal data of EU residents pulls in **two** things: data residency/processing location *and* lawful basis, purpose limitation, and data subject rights. Questions often expect both.",
    "\"Users like it\" and \"the vendor's benchmark\" are never acceptable success criteria."
  ],
  checklist: [
    "Recite the five grounding data-quality dimensions and give a failure symptom for each.",
    "Classify a scenario as task automation, analytics, or decision-making and say what oversight each needs.",
    "Turn a vague stakeholder request into three sharp clarifying questions.",
    "Distinguish functional from non-functional requirements in a mixed list.",
    "Explain why source permissions must be reviewed before connecting a knowledge source."
  ],
  cram: [
    "Data quality dimensions: **accuracy, relevance, timeliness, cleanliness, availability**.",
    "Scenario types: task automation, data analytics, decision-making — rising risk, rising oversight.",
    "Latency/accuracy targets = **non-functional** requirements.",
    "Always identify the **authoritative source and its owner**.",
    "Agents inherit oversharing. Fix source permissions first."
  ]
},

{
  n: 3,
  title: "Design overall AI strategy for business solutions",
  navTitle: "AI strategy",
  short: "Use the Cloud Adoption Framework to build an enterprise AI strategy, and decide when to extend Copilot versus build custom.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/design-overall-ai-strategy-business-solutions/",
  qFrom: 21, qTo: 30,
  units: [
    "Introduction",
    "Implement AI adoption process with Azure",
    "Design AI agents for business solutions",
    "Design a multi-agent solution",
    "Develop use cases for prebuilt Microsoft 365 Copilot agents",
    "Define solution rules and constraints for AI components",
    "Determine generative AI knowledge sources for agents built in Copilot Studio",
    "Determine when to build custom agents or extend Microsoft 365 Copilot",
    "Determine when custom AI models should be created",
    "Provide guidelines for creating a prompt library",
    "Develop use cases for customized small language models",
    "Provide prompt engineering guidelines and techniques",
    "Identify key business user roles for AI workloads",
    "Evaluate regional and local AI data regulation compliance requirements",
    "Include elements in a Microsoft AI Center of Excellence",
    "Design AI solutions using multiple Dynamics 365 apps",
    "Design user prompt training for AI solution adoption",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "This is the largest module in the path — nineteen units — and it is the one most likely to be over-represented in the exam. It spans the Cloud Adoption Framework, multi-agent design, knowledge source selection, prompt libraries, small language models, the AI Center of Excellence, and regional data regulation.",
    "The connective tissue is **standardisation**. Almost every correct answer favours a governed, reusable, centrally-supported approach over per-team improvisation."
  ],
  bigIdea: "Strategy questions reward the answer that scales: shared governance, reusable patterns, a portfolio prioritised on value and risk, and a Center of Excellence that makes the good path the easy path.",
  concepts: [
    ["Cloud Adoption Framework (CAF)", "Azure's adoption methodology. The stages you must recognise: **Strategy** (motivations, outcomes, justification), **Plan**, **Ready** (landing zones), **Adopt**, **Govern**, **Secure**, **Manage**."],
    ["Landing zone", "A pre-configured, governed environment baseline — identity, network, policy, monitoring — that workloads deploy into so every team inherits the same controls."],
    ["AI agent lifecycle", "Ideate → design → build → test → deploy → operate → improve or retire. Strategy must fund and govern all of it, not just the build."],
    ["Multi-agent solution", "An orchestrator agent interprets the goal and delegates to specialised child agents, then composes the result. Split when scope, knowledge, permissions, or ownership genuinely diverge."],
    ["AI Center of Excellence", "The cross-functional body owning standards, reusable patterns, review gates, enablement, and the shared backlog. Establish it **before** scaling."],
    ["Prompt library", "A curated, versioned, owned collection of approved prompts and instructions, shared so teams do not each reinvent them."],
    ["Small language model (SLM)", "A smaller, cheaper, faster model suited to narrow, well-defined, high-volume tasks — and to latency- or cost-sensitive scenarios."],
    ["Model router", "Routes each request to the most suitable model for that task, balancing quality against cost and latency."],
    ["Shadow agent", "An ungoverned agent built outside the standard path. Causes inconsistent data access, duplicated cost, and compliance exposure."],
    ["Solution rules and constraints", "The explicit boundaries — what the AI component may and may not do, which data it may touch, which actions need approval."]
  ],
  guidance: [
    { h: "Extend Microsoft 365 Copilot, or build custom?", items: [
      "**Extend** when users already work in Microsoft 365, the need is knowledge or a modest action, and you want to inherit Copilot's orchestration, identity, and grounding.",
      "**Build custom** when you need bespoke orchestration logic, a specific or fine-tuned model, a non-Microsoft surface, or behaviour the host cannot express.",
      "Custom models are a last resort. Prefer grounding, retrieval, and prompt engineering first — they are cheaper, faster, and easier to govern than training."
    ]},
    { h: "Portfolio and funding", items: [
      "Prioritise initiatives by scoring **value, feasibility, risk, and strategic alignment** — not by who asked first.",
      "Fund in stages with go/no-go gates after pilot and after scaled rollout, rather than one large upfront request.",
      "Consider opportunity cost explicitly: capacity spent on a low-value agent is capacity denied to a high-value one."
    ]},
    { h: "People and compliance", items: [
      "Define roles, upskilling paths, and a maker-enablement plan supported by pro-dev capability. Skills do not emerge on their own.",
      "Invest in **user prompt training** — adoption failures are frequently prompt-literacy failures, not product failures.",
      "Evaluate regional and local AI data regulation early: residency, cross-border movement, sector rules, and how they constrain architecture."
    ]}
  ],
  doDont: {
    do: [
      "Standardise on a common platform and governance baseline.",
      "Establish the Center of Excellence before proliferation.",
      "Version and own prompts like code.",
      "Right-size the model per task; consider SLMs and a model router."
    ],
    dont: [
      "Let each business unit pick its own stack and controls.",
      "Jump to fine-tuning before exhausting grounding and prompting.",
      "Treat strategy as a one-off document rather than a governed portfolio.",
      "Ignore residency rules until deployment."
    ]
  },
  traps: [
    "**Strategy** is the CAF stage about motivations, outcomes, and business justification. Do not confuse it with Plan, Govern, or Manage.",
    "\"Always build\" and \"always buy\" are both wrong. The expected answer is *build for differentiation, buy for commodity, decided case by case on total cost and time to value*.",
    "A landing zone is an environment baseline, not a physical place, a Dataverse table, or a project phase.",
    "When a question describes multiple teams each creating overlapping agents, the risk being tested is ungoverned proliferation — inconsistent access, duplicated cost, compliance exposure."
  ],
  checklist: [
    "Name the CAF stage that owns business justification, and what the others own.",
    "Give three concrete triggers for splitting one agent into a multi-agent design.",
    "State when to extend Microsoft 365 Copilot and when to build custom.",
    "Explain when a small language model beats a frontier model.",
    "List four elements an AI Center of Excellence must provide."
  ],
  cram: [
    "CAF **Strategy** = motivations, outcomes, justification.",
    "Landing zone = governed environment baseline (identity, network, policy, monitoring).",
    "Extend Copilot by default; build custom for bespoke orchestration, specific models, or other surfaces.",
    "Custom model = last resort, after grounding and prompt engineering.",
    "CoE before scale. Prompt library is versioned and owned.",
    "SLM + model router = cost/latency control for narrow, high-volume tasks."
  ]
},

{
  n: 4,
  title: "Evaluate costs and benefits of AI solutions",
  navTitle: "Costs and ROI",
  short: "Build a defensible ROI case, decide build versus buy versus extend, and control the variable cost of generative AI.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/",
  qFrom: 31, qTo: 40,
  units: [
    "Introduction",
    "Evaluate ROI criteria for AI-powered solutions",
    "Create ROI analysis for a proposed AI solution",
    "Analyze whether to build, buy, or extend AI components",
    "Implement a model router to intelligently route requests to the most suitable model",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "AI economics differ from traditional software economics in one crucial way: a large share of cost is **variable and usage-driven**. Licences are predictable; tokens, tool calls, and retrieval are not. Architecture decisions therefore have direct, ongoing financial consequences.",
    "The exam tests whether you can construct an honest business case — including the costs teams habitually forget, and the discipline of comparing against a do-nothing baseline."
  ],
  bigIdea: "ROI is net quantified benefit over total cost of ownership across a defined period — always compared against the cost of doing nothing.",
  concepts: [
    ["Total cost of ownership (TCO)", "Build cost plus licensing, consumption, integration, monitoring, content maintenance, support, and change management, over the solution's life."],
    ["ROI", "Net quantified benefit — time saved, revenue gained, cost avoided — relative to TCO over a defined period."],
    ["Hard benefit", "Directly measurable in currency: reduced handling time, avoided headcount, lower error rework, retired licences."],
    ["Soft benefit", "Real but harder to price: employee experience, reduced cognitive load, faster onboarding, improved consistency. Still belongs in the case, stated honestly."],
    ["Do-nothing baseline", "The quantified cost of the status quo. Always include it — it is what the proposal is actually competing against."],
    ["Variable cost drivers", "Request volume, input and output tokens, retrieval scope, tool and connector calls, and model choice."],
    ["Model router", "Directs each request to the most suitable model, so cheap tasks do not pay frontier-model prices."],
    ["Build / buy / extend", "Build for competitive differentiation not available off the shelf; buy for commodity capability; extend when a platform capability is close and configuration or a connector closes the gap."],
    ["Opportunity cost", "The value forgone by spending scarce delivery capacity on this initiative rather than the next best one."],
    ["Staged funding", "Releasing budget in tranches tied to value checkpoints, with go/no-go gates after pilot and after scaled rollout."]
  ],
  guidance: [
    { h: "Costs teams routinely forget", items: [
      "**Ongoing operations** — monitoring, evaluation runs, incident response. The single most under-estimated category.",
      "**Content maintenance** — someone must keep grounding sources accurate and current, forever.",
      "**Change management and training** — adoption does not happen by itself, and unadopted agents have infinite cost per unit of value.",
      "**Re-evaluation after model updates** — platform model changes force regression testing."
    ]},
    { h: "Making the pilot honest", items: [
      "Before extrapolating pilot savings enterprise-wide, confirm the pilot population, task mix, and measurement method are representative.",
      "Model an **adoption ramp** rather than assuming instant full uptake.",
      "State assumptions explicitly and show the case at conservative, expected, and optimistic adoption."
    ]},
    { h: "Reducing cost without losing quality", items: [
      "Right-size the model per task and route intelligently; do not send every request to the largest model.",
      "Constrain retrieval scope — narrower, curated sources cost less **and** answer better.",
      "Cache repeated work and cap output length where long answers add no value.",
      "Never cut cost by removing logging, monitoring, or grounding. Those are controls, not overheads."
    ]}
  ],
  doDont: {
    do: [
      "Include a do-nothing baseline in every business case.",
      "Fund in stages against value checkpoints.",
      "Quantify soft benefits explicitly rather than silently.",
      "Use a model router and right-size per task."
    ],
    dont: [
      "Extrapolate pilot results without validating representativeness.",
      "Express ROI in tokens, agents deployed, or model accuracy.",
      "Treat operations and content upkeep as one-off costs.",
      "Save money by disabling observability."
    ]
  },
  traps: [
    "The most under-estimated cost is **ongoing operations** — monitoring, evaluation, content maintenance, change management. Not licences, not hardware.",
    "ROI must be expressed as net benefit against TCO. Answers phrased as token counts, deployment counts, or accuracy percentages are distractors.",
    "The do-nothing baseline is **always** included, not only in regulated industries and not only on request.",
    "Opportunity cost still applies when the budget is fixed — arguably it matters most then, because capacity is the binding constraint."
  ],
  checklist: [
    "Construct an ROI statement with benefit, TCO, period, and baseline.",
    "Name four cost categories teams commonly omit.",
    "Decide build, buy, or extend for a given capability and defend it.",
    "Explain what a model router does and when it pays for itself.",
    "Describe three ways to reduce cost that do not degrade quality or control."
  ],
  cram: [
    "ROI = net benefit ÷ **TCO**, over a defined period, vs. a **do-nothing baseline**.",
    "Most under-estimated cost: **ongoing operations and content maintenance**.",
    "Build = differentiation · Buy = commodity · Extend = platform is close.",
    "Variable cost = volume × tokens + tool calls; control with model routing, scope, caching.",
    "Fund in stages with go/no-go gates. Validate pilots before extrapolating."
  ]
}
];
