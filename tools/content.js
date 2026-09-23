/* Content index: merges module content and defines cram-sheet material. */

const MODULES = [
  ...require("./modules-01-04.js"),
  ...require("./modules-05-08.js"),
  ...require("./modules-09-11.js")
];

/* Official Microsoft Learn video course for AB-100, published on the Microsoft Learn
   YouTube channel. Titles, durations, and channel confirmed against each video. */
const VIDEOS = {
  playlistId: "PLWkuMDqdJEw4",
  playlistUrl: "https://www.youtube.com/playlist?list=PLWkuMDqdJEw4",
  shortUrl: "https://aka.ms/AB-100onYouTube",
  channel: "Microsoft Learn",
  channelUrl: "https://www.youtube.com/@MicrosoftLearn",
  runtime: "9 hours 27 minutes",
  items: [
    { id: "PXrv_8v65hk", ep: null, title: "Course Preview", secs: 335, module: null,
      blurb: "Five minutes on who the exam is for and how the course is structured. Watch this first to decide whether the full series is worth your time." },
    { id: "xHIu7S9uhcY", ep: 1, title: "Course Introduction", secs: 404, module: null,
      blurb: "How the eleven modules map to the skills measured, and how the instructors suggest pacing the series." },
    { id: "vroI1gWHNFE", ep: 2, title: "Introduction to agentic AI business solutions", secs: 1242, module: 1 },
    { id: "G5xFHBU3478", ep: 3, title: "Analyze requirements for AI-powered business solutions", secs: 1823, module: 2 },
    { id: "1EOrrWRZRLo", ep: 4, title: "Design overall AI strategy for business solutions, part 1", secs: 2935, module: 3 },
    { id: "ACqD5EcApn8", ep: 5, title: "Design overall AI strategy for business solutions, part 2", secs: 2668, module: 3 },
    { id: "qFBj_83epp4", ep: 6, title: "Evaluate costs and benefits of AI solutions", secs: 2780, module: 4 },
    { id: "hiwsDBujqoE", ep: 7, title: "Design AI agents for business solutions, part 1", secs: 3088, module: 5 },
    { id: "LUmzpAMpBLo", ep: 8, title: "Design AI agents for business solutions, part 2", secs: 3037, module: 5 },
    { id: "DLFusBnEAZ0", ep: 9, title: "Design extensibility of AI solutions", secs: 2968, module: 6 },
    { id: "252woHA8Jf4", ep: 10, title: "Orchestrate configuration of prebuilt agents and apps", secs: 3143, module: 7 },
    { id: "JR6C87ZEtws", ep: 11, title: "Monitor, analyze, and tune AI agents", secs: 2383, module: 8 },
    { id: "a5BJ6b41obk", ep: 12, title: "Manage testing AI-powered business solutions", secs: 1927, module: 9 },
    { id: "bcKJaKNRT1c", ep: 13, title: "Design ALM process for AI-powered business solutions", secs: 2503, module: 10 },
    { id: "yG_Rq-VNJaU", ep: 14, title: "Design responsible AI security, governance, risk management, and compliance", secs: 2464, module: 11 },
    { id: "V6UsWLkoHoI", ep: 15, title: "Course Closing", secs: 326, module: null,
      blurb: "Closing summary and the instructors' suggestions for what to do between finishing the course and booking the exam." }
  ]
};

const SITE = {
  pathUrl: "https://learn.microsoft.com/en-us/training/paths/architect-agentic-ai-business-solutions/",

  goldenRules: [
    "**Configure before you extend; extend before you build.** When an out-of-the-box Dynamics 365 or Microsoft 365 capability plausibly fits, that is the answer.",
    "**Business outcomes beat technical outputs.** Adoption, task completion, and cycle time win over tokens consumed, models deployed, or environments provisioned.",
    "**Grounding and prompt engineering come before fine-tuning.** A custom or fine-tuned model is a last resort, not a first response.",
    "**Agents inherit permissions, they do not create them.** If an agent overshares, the source permissions were already wrong.",
    "**Treat retrieved content as data, never as instructions.** This single rule is the heart of prompt-injection defence.",
    "**Anything irreversible, financial, legal, or customer-facing gets a human checkpoint.** Full autonomy is rarely the right answer in an exam scenario.",
    "**Standardise and govern centrally.** The answer that scales — shared platform, CoE, reusable patterns, review gates — beats per-team improvisation.",
    "**Never edit production directly.** Managed solutions, environment variables, pipelines, and progressive rollout with rollback.",
    "**Quality is measured against a curated evaluation dataset**, continuously, and re-measured whenever the model version changes.",
    "**When in doubt, ask the clarifying question about data.** Which source is authoritative, who owns it, how current is it, and who may see it?"
  ],

  confusions: [
    ["Generative AI", "**Agentic AI** — agentic adds goal-directed reasoning, planning, tool use, and action. Model size is irrelevant to the distinction."],
    ["Knowledge source", "**Tool / action** — knowledge answers questions from content; a tool reads or changes state in another system. Live external lookup is always a tool."],
    ["Declarative agent", "**Custom engine agent** — declarative runs on the host's orchestrator and model; custom engine means you bring your own model and orchestration."],
    ["Functional requirement", "**Non-functional requirement** — latency, throughput, availability, and accuracy thresholds are non-functional however technical they sound."],
    ["Managed solution", "**Unmanaged solution** — managed goes to production and blocks in-place edits; unmanaged is the development format."],
    ["Environment variable", "**Key Vault secret** — variables parameterise configuration; secrets and API keys belong in Azure Key Vault."],
    ["DLP policy", "**Permission trimming** — DLP restricts which connectors and data sources may combine; permission trimming enforces user entitlement at retrieval time."],
    ["Responsible AI principles", "**CIA triad** — fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability. Not confidentiality/integrity/availability."],
    ["Evaluation dataset", "**Training data** — an evaluation dataset measures the agent; it does not train the model."],
    ["Landing zone", "**Environment** — a landing zone is the governed baseline (identity, network, policy, monitoring) that environments and workloads deploy into."],
    ["Engagement", "**Resolution** — high engagement with low resolution means users try the agent and leave unsatisfied: knowledge gaps or unclear instructions."],
    ["Hallucination", "**Oversharing** — confident uncited answers are a grounding failure; showing data a user should not see is a permissions failure."]
  ],

  namedThings: [
    ["Cloud Adoption Framework — Strategy", "The stage owning motivations, outcomes, and business justification. Do not confuse with Plan, Ready, Govern, or Manage."],
    ["Landing zone", "Pre-configured governed environment baseline: identity, network, policy, monitoring."],
    ["AI Center of Excellence", "Cross-functional body owning standards, reusable patterns, review gates, enablement, and the shared backlog. Stand it up **before** scaling."],
    ["Power Platform Well-Architected Framework", "Reliability, security, operational excellence, performance efficiency, experience optimisation."],
    ["Model Context Protocol (MCP)", "Standardised discovery and invocation of external tools and data sources by agents."],
    ["Graph connector", "Indexes external content into Microsoft Graph so Microsoft 365 Copilot can ground on it with permissions honoured."],
    ["Computer Use (Copilot Studio)", "Drives apps and websites through their UI when no usable API exists."],
    ["Model router", "Routes each request to the most suitable model, balancing quality against cost and latency."],
    ["Small language model (SLM)", "Cheaper, faster model for narrow, high-volume, latency-sensitive tasks."],
    ["Microsoft Purview", "eDiscovery, retention, audit, and information protection across Copilot interactions."],
    ["Microsoft Entra ID", "Identity, conditional access, and least-privilege authorisation."],
    ["Microsoft Foundry", "Pro-code custom models, custom orchestration, and Foundry tools."],
    ["Five data-quality dimensions", "Accuracy, relevance, timeliness, cleanliness, availability."],
    ["Balanced agent scorecard", "Quality, adoption, efficiency (cost and latency), safety and compliance."]
  ],

  examNotes: {
    format: {
      summary: "Microsoft's exams mix **single-answer multiple choice** with **multiple-response (\"select all that apply\")** questions, wrapped in short business scenarios. Prepare as though **half your marks depend on multi-select**, because that is the format most candidates under-practise.",
      points: [
        "Single-answer questions usually test a **decision rule** — configure vs. extend vs. build, managed vs. unmanaged, tool vs. knowledge source, autonomous vs. human-in-the-loop.",
        "Multiple-response questions usually test a **set** — the components of a design, the steps of a deployment, the metrics on a dashboard, the settings an admin must enable.",
        "The skills outline is written in terms of product surfaces, so knowing **where a setting lives** (the Copilot Studio Monitor page, Power Platform admin center, Application Insights, Azure Key Vault) matters as much as knowing what it does.",
        "Scenario stems are long but the last sentence carries the requirement. Read it first, then scan the stem only for the constraint it names — cost, latency, compliance, region, or existing licences.",
        "Product naming has shifted recently (**Copilot Credits** not messages, **Monitor** not Analytics, **customer service representative** not agent). Learn both the old and the current term; documentation and any current assessment will use the current one.",
        "Check the official [skills measured document](https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/) before you sit — it is versioned, and Microsoft publishes the change log when it is updated."
      ]
    },

    multiSelect: [
      "**Count the answers you are asked for.** \"Select two\" and \"select all that apply\" behave differently — the second gives no clue how many are correct.",
      "**Assume no partial credit.** Three right out of four scores zero, so an extra plausible-but-wrong tick is as costly as a missing one.",
      "**Test each option independently against the stem**, as a true/false question in its own right. Do not compare options with each other.",
      "**Reject options that are true in general but not required by the scenario.** This is the most common multiple-response trap: a correct statement that does not answer the question asked.",
      "**Watch for two options that say the same thing differently.** If both cannot be wrong and both cannot be right, one of them is worded to fail on a detail — usually a wrong product, wrong environment, or wrong lifecycle stage.",
      "**Prefer the complete, governed set.** If one option covers monitoring, one covers alerting and one covers dashboards, the intended answer is often all three, not the single most powerful one.",
      "**On \"which components would you include\" questions**, include the security and lifecycle components. It is easy to remember the agent and the data source and forget the connection reference, environment variable, or DLP policy."
    ],

    hotspots: [
      {
        h: "Azure Monitor, Application Insights and Log Analytics",
        modules: [8],
        why: "Three services with overlapping names that candidates routinely mix up. The useful knowledge is which service does what, and how telemetry gets out of Copilot Studio in the first place — not how to write a query.",
        facts: [
          "**Azure Monitor** is the umbrella observability platform (metrics, logs, traces, alerts, dashboards, workbooks). **Application Insights** is its application performance monitoring capability. A **Log Analytics workspace** is the underlying data store for log and trace tables. Queries are written in **Kusto Query Language (KQL)**.",
          "**Agent-level telemetry:** in Copilot Studio, `Settings → Advanced → Application Insights`, paste the Application Insights **connection string**. Optional toggles log messages and events, conversation details, sensitive activity properties and node execution. Test-pane traffic is included unless you filter on `designMode`.",
          "**Environment-level export (preview):** in the Power Platform admin center, `Manage → Data export → App Insights → New data export`, for a **Managed Environment**. Choose Copilot Studio, Power Automate or Dataverse diagnostics and a target Application Insights resource. First delivery can take up to 24 hours.",
          "Environment-level Copilot Studio export writes OpenTelemetry-aligned spans — `InvokeAgent`, `ExecuteTool`, `OutputMessages` — mostly into the `dependencies` table. `operation_Id` correlates one turn; `gen_ai.conversation.id` joins turns into a conversation.",
          "The Power Platform admin center **Monitor** area gives operational health, logs, alerts and recommendations across apps, flows and agents. Copilot Studio agents there are public preview; recommendations need Managed Environments; the data is aggregated, not real time.",
          "For **performance** specifically, watch: request and run volume, throughput, p50/p95/p99 latency, tool and dependency duration, success and error rate, exceptions, timeouts, **HTTP 429 throttling**, queue backlog, token use and Copilot Credit consumption.",
          "Act on it with **KQL log alerts**, Azure Monitor alert rules and action groups, Application Insights **workbooks** and dashboards. Copilot Studio ships a **Copilot Studio Dashboard** workbook covering conversations, latency, exceptions, tool usage and topic analytics."
        ],
        answer: [
          "\"Which service stores the logs?\" → the **Log Analytics workspace**. \"Which service do you configure in the agent?\" → **Application Insights** (via its connection string). \"Which platform raises the alert?\" → **Azure Monitor**.",
          "If a scenario mentions a **Managed Environment** and tenant-wide reporting, the fit is the admin-center **data export**, not per-agent configuration.",
          "If it mentions diagnosing one slow tool call, the fit is Application Insights **dependencies** / the activity map — not the Copilot Studio Monitor page."
        ],
        trap: "Application Insights is not an alternative to a Log Analytics workspace — modern Application Insights resources are **workspace-based** and store their data in one. Treating them as competing choices is wrong.",
        sources: [
          ["Azure Monitor overview", "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview"],
          ["Log Analytics workspace", "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview"],
          ["Agent-level telemetry", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry"],
          ["Environment-level agent telemetry", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-environment-level-agent-telemetry"],
          ["Monitor Power Platform resources", "https://learn.microsoft.com/en-us/power-platform/admin/monitoring/monitoring-overview"]
        ]
      },

      {
        h: "The Copilot Studio analytics surface — testing and evaluation",
        modules: [9, 8],
        why: "Microsoft renamed and restructured this surface recently, so a lot of older study material is now actively wrong. Worth relearning from current documentation rather than memory.",
        facts: [
          "The page is now documented as **Monitor** (some UI still says Analytics). Its areas are **Summary, Overview, Savings, Custom metrics, Effectiveness and Use**.",
          "Current conversational metrics: **Average DAU/MAU**; **conversation outcomes** of `Resolved`, `Escalated`, `Abandoned` and `Unengaged` (with resolved split into confirmed and implied); **reactions** (thumbs up/down and comments); **Satisfaction score** as a CSAT average out of 5; **Sentiment** (preview); connected/child agent calls, success rate and status; **answer rate** and **answer quality** (Good/Poor); knowledge source use and errors.",
          "**Autonomous agents are measured differently**: run outcomes, run duration, trigger use, tool use and knowledge source error rate — not conversational resolution.",
          "The **Savings** calculator estimates time or money saved per run or per tool against a comparison method. This is the in-product ROI instrument.",
          "**Test your agent** pane: interactive conversation, node highlighting, cross-topic tracking, variable inspection, connection management and downloadable diagnostic snapshots. Generative orchestration adds a real-time **activity map** showing the plan, inputs, outputs, errors and execution time.",
          "**Agent evaluations are GA.** A test set holds up to **100 cases**, authored manually, captured from test chat, drawn from production themes, generated from knowledge and topics, or imported from CSV. Single-response and multi-turn evaluations are both supported.",
          "Graders: **General quality** (relevance, groundedness, completeness, abstention), **Compare meaning, Tool use, Keyword match, Text similarity, Exact match, Custom**. Evaluations can compare agent versions and be automated via Power Automate or the Power Platform REST API."
        ],
        answer: [
          "Pre-deployment quality gate → **agent evaluations against a test set**. Post-deployment quality signal → **Monitor** outcomes, reactions and answer quality.",
          "\"High engagement, low resolution\" → a knowledge gap or unclear instructions, diagnosed from unresolved outcomes and transcripts.",
          "Proving savings to a sponsor → the **Savings** calculator plus adoption data, not raw session counts."
        ],
        trap: "Do not assume the old card names — *total sessions, engagement rate, resolution rate, escalation rate, abandon rate* — are still what the product shows. And the test pane does not reproduce every published-channel behaviour, so it never replaces validation in the real channel.",
        sources: [
          ["Monitor overview", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-overview"],
          ["Agent effectiveness metrics", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-improve-agent-effectiveness"],
          ["Savings calculator", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-cost-savings"],
          ["Create evaluation test sets", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-agent-evaluation-create"],
          ["Test your agent", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-test-bot"]
        ]
      },

      {
        h: "Connections and connection references after a production deployment",
        modules: [10],
        why: "A precise, factual distinction that is easy to get half-right. \"Does this solution have connections, and what has to be reconfigured in production?\" is a genuine architecture question, and the answer is more nuanced than most people expect.",
        facts: [
          "A **connection** stores the authentication credentials for a connector. It is **environment-specific** and is *not* a solution component.",
          "A **connection reference** *is* a solution component. It is the indirection layer that apps, flows and agents point at, so the artefact does not hard-code a credential.",
          "On export and import, the **connection reference metadata travels with the solution; the underlying connection does not**. Every connection reference must be bound to a valid connection that exists in the target environment.",
          "That binding can be supplied three ways: chosen **interactively** during import, supplied by a **Power Platform pipeline** stage, or prepopulated from a **deployment settings JSON file** (`ConnectionId` / `ConnectorId` values) in an automated pipeline.",
          "So the precise position is: **yes, connections must be configured for production — but not necessarily manually after the fact.** A properly automated deployment binds them during import, and an existing valid connection in the target can be reused.",
          "**Environment variables** are a different mechanism: they parameterise configuration (URLs, IDs, JSON, data source parameters), not connector authentication. A solution normally needs both.",
          "**Secrets never go in the solution or the settings file.** Keep them in **Azure Key Vault** and use a secret-type environment variable that stores the vault and secret reference only."
        ],
        answer: [
          "\"What must you configure in the target environment?\" → connection references bound to connections, environment variable values, and security roles.",
          "\"How do you avoid manual steps on every deployment?\" → a **deployment settings file** with pipelines or Azure DevOps / GitHub Actions.",
          "\"Where does the API key go?\" → **Azure Key Vault**, referenced by an environment variable."
        ],
        trap: "\"Connections are included in the solution and deploy automatically\" is wrong, and so is \"connection references remove the need for connections\". The reference still resolves to a real, environment-specific, credential-bearing connection.",
        sources: [
          ["Connection references", "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-connection-reference"],
          ["Deployment settings file", "https://learn.microsoft.com/en-us/power-platform/alm/conn-ref-env-variables-build-tools"],
          ["Environment variables", "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables"],
          ["Key Vault secrets", "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables-azure-key-vault-secrets"]
        ]
      },

      {
        h: "ALM — managed solutions in production",
        modules: [10],
        why: "The companion topic to connection references, and the place where \"what would you actually do\" and \"what is technically possible\" diverge most sharply.",
        facts: [
          "**Unmanaged** is the development and source-control form. **Managed** is the build artefact you ship to test, UAT and production. The answer to \"managed in production?\" is **yes**.",
          "Inside a managed solution components cannot be edited directly, managed solutions cannot be exported, and uninstalling one **removes its customisations** — which is what makes clean rollback possible.",
          "Managed is not absolute immutability: editing a managed component through an unmanaged solution creates an **unmanaged layer** above it, which then shadows future updates. This is the classic production-drift failure.",
          "**Managed properties** let the publisher restrict what downstream customisers may change.",
          "**Power Platform pipelines** give in-product governed deployment with sequential stages, approvals, pre-validation and target configuration — and they deploy connections, connection references and environment variables alongside the solution.",
          "**Azure DevOps Power Platform Build Tools** (v2 is PAC CLI based) and **GitHub Actions for Power Platform** cover source control, export/unpack/build/import, solution checker and environment provisioning for a fuller CI/CD pipeline."
        ],
        answer: [
          "Small team, wants governance without building a pipeline → **Power Platform pipelines**.",
          "Enterprise with existing engineering practice and source control → **Azure DevOps or GitHub Actions** with the build tools.",
          "\"A maker fixed a bug directly in production\" → an **unmanaged layer** was created; remove it and redeploy from source."
        ],
        trap: "Never accept an option that edits production directly, ships unmanaged to production, or treats production as the place to author. Also keep the distinction between an unmanaged *layer* and an unmanaged *solution* clear — they are different things.",
        sources: [
          ["Solution concepts", "https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm"],
          ["Power Platform pipelines", "https://learn.microsoft.com/en-us/power-platform/alm/pipelines"],
          ["Azure DevOps build tools", "https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools"],
          ["GitHub Actions", "https://learn.microsoft.com/en-us/power-platform/alm/devops-github-actions"]
        ]
      },

      {
        h: "Dynamics 365 design components — Field Service and Customer Service",
        modules: [7, 5],
        why: "Choosing the components of a Dynamics 365 design depends on knowing the real, current feature names — and this area has had a lot of renaming and several retirements, so half-remembered names will let you down.",
        facts: [
          "**Field Service Copilot** covers: natural-language questions in the web app via the **Copilot side pane**; **work order and booking summaries**; **AI-powered work order update** on mobile (preview); inspection template creation; form fill assistance; AI filtering and charting of views; row summaries; timeline highlights; and the **agent feed** (preview).",
          "Field Service side pane requires at least the **Field Service – Dispatcher** or **Field Service – Resource** role and is on by default unless disabled. Work order summaries need a **paid** environment — trials are not supported — and admins can replace the default summary with custom configurations.",
          "The named scheduling agent is the **Scheduling Operations Agent**. There is no current \"Work Order Agent\" in the Field Service Copilot overview.",
          "**Retired — no longer current capabilities:** the Field Service **Outlook add-in**, Field Service Teams app, Viva Connections and Planner integrations became unsupported after 30 October 2025, and the Field Service plugin for Copilot in Teams was removed in January 2025. Creating work orders from Outlook email via the add-in is therefore not a current option.",
          "**Customer Service** representative-facing Copilot: the help pane's **Ask a question**, **Write an email** and **Draft a response**, plus optional immersive Copilot (preview), translation, suggested prompts and enhanced case analysis. **Case summaries** draw on case and customer fields, emails, notes and prior conversation summaries; **conversation summaries** can fire on join, on end, or on demand.",
          "Named Customer Service / Contact Center agents: **Customer Support Agent** (representative-facing), **Case Management Agent** (Customer Service only — creates, updates, resolves and closes cases; needs pay-as-you-go), **Customer Knowledge Management Agent** (turns resolved cases into draft knowledge articles), **Customer Intent Agent** (builds an intent library from interactions), **Customer Assist Agent**, **Quality Assurance Agent**, **Service Operations Agent**, and the **Admin Management Agent** (preview).",
          "**Dynamics 365 Contact Center** supplies the omnichannel engagement layer — voice, chat, digital messaging, routing, workstreams, queues, supervision — standalone or embedded. **Customer Service** supplies the CRM case and knowledge management layer.",
          "Custom agents are built in **Copilot Studio**, connected to the omnichannel instance and added to a **push-based workstream/queue**. **One agent per workstream.** One agent serves multiple channels without channel-specific code, and transfers transcript plus collected variables on escalation.",
          "Admin configuration is a recurring set: enable Copilot features in the **Power Platform admin center**, opt in per feature in the **Copilot Service admin center**, publish knowledge sources, assign **experience profiles**, grant Copilot table privileges to custom roles, and enable **cross-region data movement** where required."
        ],
        answer: [
          "\"Which components make up the solution?\" → name the agent, the channel/workstream, the knowledge source, the connection reference, and the security role. Component questions reward completeness.",
          "\"Configure or build?\" → if a named prebuilt agent covers it (case management, knowledge drafting, intent), configure that. Build in Copilot Studio only when no prebuilt agent fits.",
          "Watch region wording: several Copilot features are GA in North America and preview elsewhere."
        ],
        trap: "Retired features (the Field Service Outlook add-in) and superseded names are the easiest way to lose marks here. Microsoft now says **Copilot agent / AI agent** rather than \"Copilot Studio bot\", and **customer service representative** rather than \"human agent\".",
        sources: [
          ["Field Service Copilot overview", "https://learn.microsoft.com/en-us/dynamics365/field-service/copilot-overview"],
          ["Field Service deprecations", "https://learn.microsoft.com/en-us/dynamics365/field-service/deprecations-field-service"],
          ["Configure Copilot features (Customer Service)", "https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/configure-copilot-features"],
          ["Contact Center agents", "https://learn.microsoft.com/en-us/dynamics365/contact-center/administer/overview-contact-center-agents"],
          ["Add a Copilot Studio agent to omnichannel", "https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/configure-bot-virtual-agent"]
        ]
      },

      {
        h: "Voice in a Copilot Studio agent",
        modules: [5, 7],
        why: "Voice is explicitly in scope and is genuinely a different design problem from text — the modality, the telephony stack and the conversation design all change. It is easy to skip while revising.",
        facts: [
          "A voice-enabled agent uses the **Speech & DTMF** modality, which is **mutually exclusive with Text**. It gains voice system topics for silence, unrecognised speech and unknown keypad input. Enabling voice authoring is not enough — you must also configure the **Telephony channel** and publish.",
          "Two documented voice agent types: a **basic voice agent** (classic, deterministic — speech-to-text → NLU → topic flow → text-to-speech) and a **real-time agent** (generative, context aware, low latency).",
          "**Telephony:** the standard path connects the agent to a **Dynamics 365 Contact Center voice workstream**, with the phone number obtained or reused through **Azure Communication Services**. Existing carrier infrastructure connects via **ACS Direct Routing** through a certified Session Border Controller using TLS/SIP with number-pattern voice routes.",
          "**DTMF** supports global single-key commands, mapped menu options, multi-digit collection, optional `*`/`#` termination, interdigit and termination timeouts, caching, and a customisable *Unknown dial pad press* topic.",
          "**Speech handling** (basic voice): customised recognition from trigger phrases, speech sensitivity, utterance-end timeout, recognition timeout and silence detection. Real-time agents trade these controls for natural turn-taking and much lower latency.",
          "**Barge-in** lets speech or DTMF interrupt playback, controllable per message. Disable it for essential or compliance messages; leave it on for long familiar menus.",
          "**Latency controls:** silence timeout and reprompts, latency-message delay, minimum playback time. Use a latency message around long-running actions, and a static greeting to cut first-response time.",
          "**SSML** is supported on voice-channel message nodes. GPT-Realtime offers a limited built-in voice set; GPT-5-Chat (preview) uses Microsoft Neural TTS with a broader catalogue and custom branded voices, at higher latency.",
          "**Escalation:** Transfer Conversation routes to a representative or an external phone number, passing conversation history and variables. **Recording/transcription** is configured per voice workstream; Copilot Studio still produces an agent transcript even when Contact Center recording is off, and recording requires consent where law demands it.",
          "**Design guidance for voice:** short turns, one question at a time, deterministic confirmation before acting, tool-grounded facts, explicit escalation, standardised closing. On Error should transfer or end the call rather than leave the caller in silence."
        ],
        answer: [
          "Existing SIP trunks → **ACS Direct Routing** with a certified SBC, rather than porting numbers.",
          "Callers interrupting a compliance disclosure → disable **barge-in** on that message only.",
          "Long backend lookup → a **latency message**, plus a check on the tool's own timeout.",
          "Caller must enter an account number → **DTMF** multi-digit collection with a termination key, not free speech."
        ],
        trap: "Speech & DTMF and Text are mutually exclusive — there is no single agent that is simply \"both\". And an agent that authors fine in the test pane still fails on a call if the telephony channel and workstream are not configured.",
        sources: [
          ["Voice overview", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-overview"],
          ["Voice configuration", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-configuration"],
          ["Get started with voice", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-get-started"],
          ["DTMF", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-dtmf"],
          ["Voice agent prompt guidance", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/voice-agents-prompt-best-practices"]
        ]
      },

      {
        h: "ROI — which tool measures what",
        modules: [4],
        why: "ROI at architect level is rarely arithmetic. It is knowing which Microsoft surface produces which number, for which audience — and that is a mapping worth memorising.",
        facts: [
          "**Copilot Studio → Monitor → Savings**: estimated time or money saved per run or per tool, against a stated comparison method. Best for per-agent business cases.",
          "**Microsoft Copilot Dashboard in Viva Insights**: readiness, adoption, impact and sentiment, with benchmarks, surveys and group-level analysis. Best for organisation-wide value reporting to a sponsor.",
          "**Microsoft 365 admin center Copilot usage report**: enabled users, active users and rate, prompts submitted, prompts per user, adoption by app, trends and agent engagement. Best for adoption tracking.",
          "**Power Platform admin center → Licensing → Copilot Studio**: prepaid and pay-as-you-go consumption, trends by environment, product and agent, billed versus non-billable credits, limits and nearing-limit status. Best for cost control. **Capacity** separately covers Dataverse database, file and log storage.",
          "**Microsoft Cost Management** for Azure-side pay-as-you-go spend, with budgets, anomaly detection, exports and alerts.",
          "The consumption unit is **Copilot Credits**, not \"messages\". Rates are feature-based — for example 1 credit for a classic answer, 2 for a generative answer, 5 for an agent action, 10 for tenant graph grounding, with separate rates for agent flow actions, AI tools and tokens, content processing and voice. **One interaction can consume several credit categories.**",
          "Build the business case on **baseline → intervention → measured delta**, and report business outcomes (deflection, handle time, cycle time, task completion) rather than technical outputs."
        ],
        answer: [
          "Audience is an executive sponsor → **Copilot Dashboard** / business outcome language. Audience is an admin watching spend → **PPAC licensing and capacity**. Audience is the product owner of one agent → **Monitor → Savings**.",
          "\"Costs are higher than forecast\" → check credit consumption by agent in PPAC, then look at what the agent does per turn (generative answers, graph grounding, tool calls)."
        ],
        trap: "\"Messages\" is legacy terminology — the current unit is **Copilot Credits**, and they are metered per feature, so estimating cost by counting conversations alone is wrong.",
        sources: [
          ["Savings calculator", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-cost-savings"],
          ["Copilot Dashboard (Viva Insights)", "https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard"],
          ["Copilot usage report", "https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage"],
          ["Manage Copilot Credits capacity", "https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"],
          ["Billing rates", "https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management"]
        ]
      },

      {
        h: "Model router",
        modules: [4, 6],
        why: "A specific named Foundry capability that answers cost-and-latency optimisation questions — and that is easy to confuse with load balancing, failover or fine-tuning.",
        facts: [
          "A **model router** in Microsoft Foundry is itself a **deployed, trained model** that selects an eligible underlying model **per request**.",
          "Modes: **Balanced** weighs quality against cost; **Cost** accepts a wider quality band to reduce spend; **Quality** always selects the highest-rated model.",
          "It removes the need to hand-write routing logic, and can improve both cost and latency while holding quality roughly comparable — but Microsoft explicitly recommends **evaluating it against your own workload** rather than assuming the gain.",
          "It fits when a workload has a **mix of easy and hard requests**. It does not fit when every request needs the same frontier-model quality, or when the real problem is grounding rather than model choice."
        ],
        answer: [
          "Mixed workload, cost pressure, quality must not regress → model router in **Balanced** mode, validated with an evaluation set.",
          "High-volume, narrow, latency-sensitive task → a **small language model (SLM)** is often the better fit.",
          "Answers are wrong or uncited → that is grounding, not routing. Fix the knowledge source."
        ],
        trap: "A model router is not a load balancer, not a failover mechanism, and not a fine-tuning strategy. It also does not remove the need for evaluation — it makes evaluation more important, because the serving model can change per request.",
        sources: [
          ["Model router", "https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router"]
        ]
      },

      {
        h: "Semantic indexing",
        modules: [6],
        why: "A grounding and permissions concept that shares a word with a completely different Azure AI Search feature. The confusion is extremely common and worth deliberately clearing up.",
        facts: [
          "Semantic indexing builds a **conceptual, contextual representation** of Microsoft 365 and connected external content so retrieval can match on meaning and relationships rather than exact keywords.",
          "Copilot grounds by reaching organisational data through **Microsoft Graph in the signed-in user's context**. It only ever surfaces content that user is already authorised to see — indexing does **not** grant tenant-wide visibility.",
          "**Synced Copilot connectors** ingest and index external content into Microsoft Graph and support semantic indexing. **Federated connectors** retrieve at query time (via MCP) and do **not** semantically index into Graph. External item **ACLs must be configured** to control visibility.",
          "Retrieval and generation are separate stages: semantic index retrieval supplies passages, the model then generates the grounded answer. That is the retrieval half of **RAG**.",
          "Current documentation increasingly uses **Work IQ** for the broader permission-aware workplace intelligence layer spanning Microsoft 365 and external systems. Semantic indexing remains an active term in connector documentation, and the two are **not** exact synonyms — Work IQ is broader than an index.",
          "**Azure AI Search semantic ranker is a different thing.** It reranks an initial BM25 or RRF result set at query time using language understanding models, and can return captions, answers and rewritten queries. It runs over an Azure AI Search index that *you* build and manage."
        ],
        answer: [
          "\"An agent surfaced a document the user shouldn't see\" → a **permissions/ACL** failure at the source, not an indexing failure.",
          "External system, content must be searchable by meaning inside Microsoft 365 Copilot → a **synced Copilot connector** with ACLs.",
          "External system, data must always be live and must not be copied → a **federated connector** (no semantic index in Graph).",
          "Improve relevance of results from an Azure AI Search index → **semantic ranker**, not the Microsoft 365 semantic index."
        ],
        trap: "The Microsoft 365 semantic index and Azure AI Search semantic ranking share a word and nothing else. One is a permission-trimmed tenant-wide grounding layer you do not manage; the other is a query-time reranking feature on an index you own.",
        sources: [
          ["Microsoft 365 Copilot architecture", "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture"],
          ["Copilot connectors overview", "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-copilot-connector"],
          ["Work IQ", "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/"],
          ["Azure AI Search semantic ranking", "https://learn.microsoft.com/en-us/azure/search/semantic-search-overview"]
        ]
      }
    ],

    revisionOrder: [
      "**Connection references and environment variables** — what moves with a solution and what does not. Precise, factual, and easy to half-learn.",
      "**Managed vs. unmanaged, and unmanaged layers.** Pair it with pipelines and the deployment settings file.",
      "**Azure Monitor vs. Application Insights vs. Log Analytics workspace**, and the two routes for getting Copilot Studio telemetry into them.",
      "**The Copilot Studio Monitor page and agent evaluations** — current metric names, and evaluation as a pre-deployment gate.",
      "**Dynamics 365 named capabilities and prebuilt agents** for Field Service and Customer Service, including which ones are retired.",
      "**Voice agent design** — Speech & DTMF modality, telephony via Contact Center and ACS, barge-in, latency messages, escalation.",
      "**Copilot Credits and the ROI toolset** — which surface answers which audience's question.",
      "**Semantic indexing vs. Azure AI Search semantic ranking**, and synced vs. federated connectors.",
      "**Model router modes**, and when an SLM is the better answer.",
      "Finally, re-read the [cram sheet](cram-sheet.html) golden rules — they resolve most of the judgement-based scenarios the topics above do not cover."
    ]
  },

  technique: [
    "**Read the last line of the scenario first.** It tells you what is actually being asked, which often makes half the detail irrelevant.",
    "**Eliminate absolutes.** Options containing *always*, *never*, *all*, or *none* are usually wrong in architecture questions — except when they restate a hard governance rule such as never storing secrets in a solution.",
    "**Prefer the governed, reversible, lower-blast-radius option.** Exam scenarios reward caution over speed.",
    "**Watch for the cheapest path that still meets the requirement.** If configuring satisfies the need, building is wrong even though it would also work.",
    "**Note who the stakeholder is.** An answer aimed at an executive sponsor should be in business language; one aimed at an admin should be operational.",
    "**On \"choose two\" questions, confirm the pair is complementary**, not two phrasings of the same idea.",
    "**Flag and move on.** Do not lose four easy marks at the end defending one hard question.",
    "**Budget your time**: roughly 80 seconds per question leaves a review pass at the end."
  ]
};

module.exports = { MODULES, SITE, VIDEOS };
