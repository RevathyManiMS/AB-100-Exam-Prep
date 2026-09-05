/* Modules 5-8 */
module.exports = [
{
  n: 5,
  title: "Design AI agents for business solutions",
  navTitle: "Agent design",
  short: "Design task, autonomous, and prompt-driven agents in Copilot Studio, plus Copilot customisations across Dynamics 365.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/design-ai-agents-business-solutions/",
  qFrom: 41, qTo: 50,
  units: [
    "Introduction",
    "Define core tenets of responsible AI guidelines for AI business solutions",
    "Design business terms for Copilot in Dynamics 365 Customer Service",
    "Design customizations for Copilot in Dynamics 365 apps",
    "Design connectors for Copilot in Dynamics 365 Sales",
    "Design AI agents for Dynamics 365 Contact Center",
    "Design task agents in Microsoft Copilot Studio",
    "Design autonomous agents in Copilot Studio",
    "Design prompt-driven agents using Copilot Studio",
    "Propose Foundry tools given a requirement",
    "Propose code first generative pages and agent feed applications",
    "Design topics for Copilot Studio, including fallback",
    "Design data processing workflows for grounded AI",
    "Design business processes with AI in Power Apps canvas apps",
    "Apply the Microsoft Power Platform Well-Architected Framework to intelligent application workloads",
    "Determine the use of standard natural language processing",
    "Design agents and agent flows with Copilot Studio",
    "Design prompt actions in Copilot Studio",
    "Define success criteria and adoption goals for AI business solutions",
    "Module assessment",
    "Summarize AI agent design for business solutions"
  ],
  overview: [
    "Twenty-one units make this the second-heaviest module. It is where abstract architecture becomes concrete: instructions, knowledge, tools, triggers, topics, fallback, and agent flows.",
    "The recurring exam skill is **component selection**. Given a requirement, you must say whether it calls for a knowledge source, a tool or action, a topic, a trigger, an agent flow, or a prompt action — and the distinctions are precise."
  ],
  bigIdea: "Knowledge answers questions. Tools take actions. Topics handle known conversational paths. Triggers decide when the agent wakes up. Confusing these is the most common design error.",
  concepts: [
    ["Agent instructions", "The system prompt defining role, scope, tone, and guardrails. This is what the agent is *for* and what constrains it."],
    ["Knowledge source", "Content the agent retrieves from to answer questions accurately — SharePoint, Dataverse, public websites, Graph connectors, uploaded files."],
    ["Tool / action", "A callable operation that does something outside the conversation — read an ERP order, create a case, send a message. Actions change state; knowledge does not."],
    ["Topic", "A defined conversational path triggered by phrases or events, with explicit steps. Use for known, structured journeys."],
    ["Fallback topic", "What happens when nothing matches. Must state the limitation and offer escalation or handoff — never silence or an empty reply."],
    ["Task agent", "Performs a bounded, well-defined job on request. The safest starting shape."],
    ["Autonomous agent", "Triggered by an event or schedule rather than a user prompt; acts without someone typing. Needs tight permissions and monitoring."],
    ["Prompt-driven agent", "Behaviour shaped principally by natural-language instruction rather than authored topics."],
    ["Agent flow", "Deterministic, orchestrated steps the agent invokes when reliability matters more than model improvisation."],
    ["Prompt action", "A reusable, parameterised generative step — summarise, classify, extract — invoked as a building block."],
    ["Power Platform Well-Architected Framework", "The pillars for evaluating workload quality: reliability, security, operational excellence, performance efficiency, and experience optimisation."],
    ["Delegated (user-context) authentication", "The agent acts as the signed-in user, so existing permissions are enforced. Preferred over a shared service account."]
  ],
  guidance: [
    { h: "Choosing the right component", items: [
      "Needs to **answer from content** → knowledge source. Never paste the content into the instructions.",
      "Needs to **fetch or change data in another system** → a tool/action with a typed parameter schema.",
      "Needs a **known, repeatable conversational path** → a topic.",
      "Needs to **start without a user** → an event or schedule trigger.",
      "Needs **deterministic multi-step execution** → an agent flow rather than free-form reasoning."
    ]},
    { h: "Making tool selection reliable", items: [
      "Give tools **clear, distinct names and descriptions that state when to use them**, plus precise parameter schemas. Vague descriptions are the main cause of wrong-tool errors.",
      "Fewer, well-described tools beat many overlapping ones.",
      "Validate tool inputs; never let retrieved content dictate which tool runs or with what arguments."
    ]},
    { h: "Splitting agents and adding safety", items: [
      "Split into multiple agents when **scope, knowledge, permissions, or ownership diverge** — not merely because the agent is large.",
      "Require confirmation before any action that is **irreversible or has financial, legal, or customer-facing impact**.",
      "Use delegated authentication so the user's own permissions apply; avoid broad shared service accounts.",
      "Define success criteria and adoption goals as part of the design, not after launch."
    ]}
  ],
  doDont: {
    do: [
      "Write tight, role-scoped instructions with explicit guardrails.",
      "Design an explicit fallback with escalation.",
      "Confirm before irreversible or high-impact actions.",
      "Use user-context auth so permissions are enforced."
    ],
    dont: [
      "Embed bulk data in the system prompt instead of grounding it.",
      "Register many similar tools with vague descriptions.",
      "Let an out-of-scope question be answered from general model knowledge.",
      "Run agents under a broad shared account for convenience."
    ]
  },
  traps: [
    "Looking up live data from an external system is a **tool/action**, not a knowledge source and not a bigger prompt.",
    "The right reason to split an agent is divergent scope, knowledge, permissions, or ownership — not token limits and not licensing.",
    "For an out-of-scope question, the correct behaviour is a **defined fallback that states the limitation and offers escalation** — not silent general-knowledge answering, not an empty response.",
    "Reliability of tool choice comes from better tool **descriptions and schemas**, not from more tools or a larger model."
  ],
  checklist: [
    "Given five requirements, assign each to knowledge, tool, topic, trigger, or agent flow.",
    "Write the criteria you would use to split one agent into several.",
    "Describe what a good fallback does, in one sentence.",
    "Explain why delegated authentication beats a service account for user-data scenarios.",
    "Name the pillars of the Power Platform Well-Architected Framework."
  ],
  cram: [
    "**Knowledge answers, tools act, topics script, triggers start.**",
    "Live external lookup = **tool/action**.",
    "Split agents on scope / knowledge / permissions / ownership.",
    "Confirm before irreversible, financial, legal, or customer-facing actions.",
    "Tool reliability = distinct names, clear \"when to use\" descriptions, typed parameters.",
    "Fallback must state the limit and offer escalation."
  ]
},

{
  n: 6,
  title: "Design extensibility of AI solutions",
  navTitle: "Extensibility",
  short: "Extend Microsoft 365 Copilot and Copilot Studio with connectors, MCP, Computer Use, and Foundry custom models.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/",
  qFrom: 51, qTo: 60,
  units: [
    "Introduction",
    "Design AI solutions with custom models in Microsoft Foundry",
    "Design agents in Microsoft 365 Copilot",
    "Design extensible agents in Microsoft Copilot Studio",
    "Design extensible agents using MCP in Copilot Studio",
    "Design agents to automate tasks in apps and websites with Computer Use in Copilot Studio",
    "Design agent behaviors in Copilot Studio",
    "Optimize solution design for agents in Microsoft 365",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "Extensibility is about meeting users where they already work. Rather than building a separate destination, you extend Microsoft 365 Copilot so the agent inherits its orchestration, identity model, and grounding — and users need learn nothing new.",
    "The key architectural distinction, tested repeatedly, is **declarative agent versus custom engine agent**. Learn what each gives you and what each costs you."
  ],
  bigIdea: "Extend the host when you can; own the engine only when you must. Every capability you take over — orchestration, model hosting, identity — becomes yours to secure, monitor, and maintain.",
  concepts: [
    ["Declarative agent", "Runs on the **host Copilot's orchestrator and model**. You supply instructions, knowledge, and actions declaratively. Fast, governed, and the default choice."],
    ["Custom engine agent", "You provide your own model and orchestration logic. Choose only for a specific model requirement, bespoke orchestration, or hosting constraints."],
    ["Graph connector", "Indexes external content into Microsoft Graph so Microsoft 365 Copilot can ground on it with permissions honoured."],
    ["Model Context Protocol (MCP)", "A standard way for agents to discover and call external tools and data sources, so integrations are reusable rather than bespoke per agent."],
    ["Computer Use", "Copilot Studio capability that drives applications and websites through their user interface — for systems with no usable API."],
    ["Agent behaviours", "Configurable characteristics such as reasoning depth and voice mode that shape how the agent operates."],
    ["Microsoft Foundry custom model", "A model you select, tune, or host yourself when platform defaults genuinely cannot meet the requirement."],
    ["Loose coupling", "Components interact through well-defined, versioned contracts, so they can be reused across agents and changed independently."],
    ["Token exchange / on-behalf-of", "Passing the user's identity to a downstream API so least-privilege scopes and per-user authorisation are enforced."],
    ["Contract versioning", "Publishing `/v1`, `/v2` style versions with a deprecation window and consumer communication, rather than changing an endpoint in place."]
  ],
  guidance: [
    { h: "Choosing an extensibility route", items: [
      "External content that should be searchable and grounded in Microsoft 365 Copilot → **Graph connector**.",
      "Reusable tool or data integration consumed by several agents → expose it over **MCP**.",
      "Legacy system with an API → put a **governed API layer** in front (gateway or connector, authentication, throttling) and call it.",
      "Legacy system with **no** usable API → **Computer Use** as a pragmatic last resort, accepting its fragility.",
      "Requirement pins a specific model or bespoke orchestration → **custom engine agent** in Foundry."
    ]},
    { h: "Security of extensions", items: [
      "When calling downstream on a user's behalf, design **token exchange, consent, least-privilege scopes, and per-user authorisation** — not just the request format.",
      "Never widen access to make an integration simpler. An extension must not become a permissions bypass.",
      "Treat anything retrieved from an external system as untrusted data, never as instructions."
    ]},
    { h: "Designing for reuse and change", items: [
      "Aim for loose coupling with explicit contracts so one component serves many agents.",
      "Version contracts and run a deprecation window; do not overwrite endpoints in place.",
      "Design within host limits: response size, latency budgets, supported authentication types, throttling, and capability caps."
    ]}
  ],
  doDont: {
    do: [
      "Default to declarative agents on the host platform.",
      "Standardise integrations behind MCP or governed connectors.",
      "Enforce per-user authorisation on every downstream call.",
      "Version contracts and communicate deprecations."
    ],
    dont: [
      "Own an engine you do not need to own.",
      "Expose a database directly to an agent.",
      "Assume the host has unlimited response size or no throttling.",
      "Duplicate the same integration logic inside every agent."
    ]
  },
  traps: [
    "**Declarative agent** = host's orchestrator and model. If an option says it requires you to host your own model, that is a *custom engine* agent.",
    "Graph connectors are the answer for grounding Microsoft 365 Copilot in external data — not Power Automate, not Dataverse plug-ins.",
    "MCP is a **tool and data-source integration standard**, not a model training framework, billing meter, or UI library.",
    "Extensions do **not** bypass permissions. Host limits — latency, response size, auth types, throttling — always exist and must be designed around."
  ],
  checklist: [
    "State the difference between a declarative and a custom engine agent, and when each is justified.",
    "Choose the right extensibility mechanism for four different integration scenarios.",
    "Explain what MCP standardises and why that reduces long-term cost.",
    "Describe the auth design for a downstream call made on a user's behalf.",
    "Name four host limits an extension must respect."
  ],
  cram: [
    "**Declarative** = host orchestrator + host model. **Custom engine** = your model + your orchestration.",
    "Ground Microsoft 365 Copilot in external content with **Graph connectors**.",
    "**MCP** = standard tool/data discovery and invocation.",
    "**Computer Use** = UI automation for systems with no API.",
    "Downstream calls: token exchange, consent, least privilege, per-user authorisation.",
    "Version contracts; respect latency, size, auth, and throttling limits."
  ]
},

{
  n: 7,
  title: "Orchestrate configuration of prebuilt agents and apps",
  navTitle: "Prebuilt agents",
  short: "Enable, configure, and orchestrate the AI already shipped in Dynamics 365 and Microsoft 365 before building anything new.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/orchestrate-configuration-prebuilt-agents-apps/",
  qFrom: 61, qTo: 70,
  units: [
    "Introduction",
    "Orchestrate AI features in Dynamics 365 Finance and Supply Chain",
    "Design AI solutions for Dynamics 365 Customer Service",
    "Propose Microsoft 365 agents for business scenarios",
    "Orchestrate and configure Microsoft 365 Copilot for sales and service",
    "Propose Microsoft Power Platform AI features",
    "Design interoperable agent experiences for Finance and Operations",
    "Recommend process knowledge sources for in-app help in Dynamics 365",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "This module is the practical counterpart to the strategy modules. A great deal of AI capability already exists inside Dynamics 365 and Microsoft 365; the architect's job is to know it exists, confirm the prerequisites, and orchestrate it coherently across apps.",
    "Exam questions here reward restraint. The correct answer is usually to check whether the out-of-the-box capability meets the need before proposing anything custom."
  ],
  bigIdea: "Configure before you extend, and extend before you build. Most \"we need an agent\" requests are satisfied by enabling something that already ships.",
  concepts: [
    ["Prebuilt / OOB capability", "AI shipped inside the product, enabled by an administrator and tuned through supported configuration."],
    ["Feature enablement gates", "What determines whether a user sees a capability: **licensing, admin feature enablement, security roles and privileges, and environment/region availability**."],
    ["Process knowledge source", "Curated procedural content powering in-app help and guidance inside Dynamics 365."],
    ["Interoperable agent experience", "Agents that work coherently across Finance and Operations and Customer Experience apps rather than in isolation."],
    ["Power Platform AI features", "AI capabilities available across Power Apps, Power Automate, and Copilot Studio that often satisfy a requirement without custom development."],
    ["Routing ambiguity", "When several agents claim overlapping scope, users and orchestrators cannot tell which should answer. Fixed by curating scope, naming, and discovery."],
    ["Configuration baseline", "The documented, intended configuration of a capability across environments, used to detect and correct drift."],
    ["Configuration drift", "Environments diverging over time through manual, undocumented changes."]
  ],
  guidance: [
    { h: "Rollout sequence", items: [
      "Validate prerequisites and licensing → enable in a **non-production** environment → configure and test → pilot with real users → broad rollout with training and comms.",
      "Never enable broadly in production first and communicate afterwards.",
      "Before broad enablement, complete a data-access review, confirm DLP policies, agree the environment strategy, and record a named owner."
    ]},
    { h: "Tailoring without building", items: [
      "Adapt answers to company terminology through **grounding sources, custom instructions, and supported configuration** — not by fine-tuning a base model.",
      "Progression when a capability nearly fits: **configure → extend → build custom**, in that order.",
      "For in-app help, recommend curated process knowledge sources rather than pointing at unstructured document dumps."
    ]},
    { h: "Orchestrating multiple agents", items: [
      "Curate the catalogue: distinct scopes, clear naming, and controlled discovery so users are not choosing blindly.",
      "Manage configuration through documented baselines and automated deployment or validation where supported.",
      "Validate success by adoption **plus** movement in the targeted business metric, supported by user feedback."
    ]}
  ],
  doDont: {
    do: [
      "Check the out-of-the-box capability first.",
      "Test in a non-production environment before pilot.",
      "Review source permissions before broad enablement.",
      "Curate agent scope and naming to avoid overlap."
    ],
    dont: [
      "Fine-tune a model to teach it company vocabulary.",
      "Enable in production and figure out governance later.",
      "Configure each environment by hand.",
      "Measure success by licences assigned or settings changed."
    ]
  },
  traps: [
    "If a prebuilt agent surfaces data a user should not see, the cause is almost always **overly broad source permissions** that the agent faithfully honours — not hallucination and not model size.",
    "Visibility of a prebuilt feature is governed by licensing, admin enablement, security roles, and environment/region — not by browser, device, or display language.",
    "Prebuilt does **not** mean pre-governed. DLP, data-access review, environment strategy, and ownership still apply.",
    "The near-fit progression is configure → extend → build. Any option that jumps straight to custom development is wrong."
  ],
  checklist: [
    "List the four gates that determine whether a user sees a prebuilt Copilot feature.",
    "Give the correct rollout sequence for enabling a prebuilt capability.",
    "Explain how to tailor terminology without touching the model.",
    "Diagnose why an agent is exposing data it should not.",
    "Describe how to prevent configuration drift across environments."
  ],
  cram: [
    "Visibility gates: **licensing · admin enablement · security roles · environment/region**.",
    "Rollout: prerequisites → non-prod → configure/test → pilot → broad + training.",
    "Near fit? **configure → extend → build**.",
    "Oversharing by an agent = **source permissions**, not hallucination.",
    "Prebuilt ≠ pre-governed: DLP, access review, owner still required."
  ]
},

{
  n: 8,
  title: "Monitor, analyze, and tune AI agents",
  navTitle: "Monitor and tune",
  short: "Instrument agents, read the telemetry, and run a continuous improvement loop that keeps quality rising.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/analyze-monitor-tune-ai-powered-business-solutions/",
  qFrom: 71, qTo: 80,
  units: [
    "Introduction",
    "Recommend process tools for monitoring agents",
    "Analyze backlog and user feedback for AI agent usage",
    "Apply AI-based tools to analyze, identify issues, and perform tuning",
    "Monitor AI agent performance metrics",
    "Interpret telemetry data to tune AI performance",
    "Module assessment",
    "Ensure reliable AI agent operations"
  ],
  overview: [
    "An agent is never finished. Content ages, models are updated beneath you, and user behaviour shifts. This module is about the operational loop that keeps quality from quietly eroding.",
    "The exam focuses on metric interpretation: given a symptom, identify the likely cause and the correct corrective action. Learn to read the *pattern*, not just the number."
  ],
  bigIdea: "Monitor → analyse failures → adjust knowledge, instructions, or tools → re-evaluate → release. Continuously. Tuning once at go-live is not an operating model.",
  concepts: [
    ["Containment / resolution rate", "The share of interactions resolved without human escalation. The clearest single measure of whether the agent actually helps."],
    ["Engagement vs. resolution", "High engagement with low resolution means people try the agent but leave unsatisfied — typically knowledge gaps or unclear instructions."],
    ["Groundedness", "Whether responses are supported by retrieved sources. Confident answers with no citation support indicate hallucination."],
    ["Evaluation dataset", "Representative inputs with expected outcomes, used to measure quality consistently over time. It tests the agent; it does not train the model."],
    ["Telemetry / tracing", "Logged reasoning and tool-selection detail — inputs, chosen tool, parameters, outcome — the primary evidence for diagnosing wrong-tool behaviour."],
    ["Escalation / fallback rate", "How often the agent gives up or hands off. A spike is an early warning of regression."],
    ["Agent scorecard", "A balanced view across **quality, adoption, efficiency (cost and latency), and safety/compliance**. Any single metric can be gamed."],
    ["A/B testing", "Running two variants — for example two instruction sets — to determine empirically which performs better before full rollout."],
    ["Content decay", "The gradual staleness of grounding sources that silently degrades answer quality."]
  ],
  guidance: [
    { h: "Reading the symptoms", items: [
      "**High engagement, low resolution** → knowledge coverage gaps or ambiguous instructions.",
      "**Confident answers without citations** → grounding failure; tighten retrieval and require citation.",
      "**Wrong tool chosen** → inspect tracing logs, then improve tool descriptions and parameter schemas.",
      "**Rising fallback rate after a release** → regression; compare against your evaluation baseline.",
      "**Good quality, poor adoption** → discovery, training, or workflow-fit problem, not a model problem."
    ]},
    { h: "Improving retrieval", items: [
      "Curate, chunk, and maintain authoritative content with accurate metadata. Adding more unrelated documents makes retrieval worse, not better.",
      "Retire superseded content actively.",
      "Narrow retrieval scope where possible — it improves both accuracy and cost."
    ]},
    { h: "Alerting and cadence", items: [
      "Alert on **spikes in fallback or escalation rate, error rate, latency, and content-filter triggers** — not on ordinary successful responses.",
      "Re-run the evaluation suite whenever the model version, instructions, knowledge, or tools change.",
      "Feed user feedback and the backlog into a prioritised improvement queue rather than ad-hoc fixes."
    ]}
  ],
  doDont: {
    do: [
      "Maintain a curated evaluation dataset with expected outcomes.",
      "Trace tool selection so failures are diagnosable.",
      "Score quality, adoption, efficiency, and safety together.",
      "A/B test instruction changes before rolling out."
    ],
    dont: [
      "Judge success on session counts or token averages.",
      "Add documents indiscriminately to fix accuracy.",
      "Wait for loud complaints before tuning.",
      "Alert on every successful interaction."
    ]
  },
  traps: [
    "An evaluation dataset **measures** the agent; it does not train the base model.",
    "More documents is not better grounding. Curation, chunking, and metadata are what improve retrieval.",
    "Tuning is a continuous loop, not a go-live activity and not an annual ritual.",
    "A balanced scorecard needs all four dimensions. Cost-only, latency-only, or satisfaction-only answers are distractors."
  ],
  checklist: [
    "Map four common symptoms to their likely causes and fixes.",
    "Explain the purpose of an evaluation dataset in one sentence.",
    "Name the four dimensions of a balanced agent scorecard.",
    "Say which telemetry you need to diagnose a wrong-tool error.",
    "List the conditions that justify a production alert."
  ],
  cram: [
    "**Containment/resolution rate** = did the agent actually help.",
    "High engagement + low resolution = **knowledge gaps or unclear instructions**.",
    "Confident + uncited = **hallucination / grounding failure**.",
    "Scorecard = quality + adoption + efficiency + safety.",
    "Alert on fallback, error, latency, and content-filter spikes.",
    "Loop: monitor → analyse → adjust → re-evaluate → release."
  ]
}
];
