# AB-100 Mock Exam

**Exam title:** Architect AI solutions for business productivity (AB-100)
**Based on:** [Architect AI solutions for business productivity](https://learn.microsoft.com/en-us/training/paths/architect-agentic-ai-business-solutions/) learning path (11 modules)

> **Interactive version:** open `index.html` in a browser for a timed, self-scoring version of this exam.

| | |
|---|---|
| Questions | 110 |
| Format | Multiple choice (single answer unless stated) |
| Suggested time | 150 minutes |
| Passing score | 70% (77 of 110 correct) |
| Answer key | See [Answer key](#answer-key) at the end |

**Instructions:** Choose the single best answer unless the question says "Choose two." Do not consult the answer key until you finish.

---

## Section 1 — Introduction to agentic AI business solutions (Q1–Q10)

**Q1.** What most clearly distinguishes an *agentic* AI solution from a traditional generative AI chat experience?

- A. It uses Microsoft 365 Copilot only to summarize documents a user selects
- B. It relies on a larger model instead of planning steps or using tools
- C. It can reason over a goal, plan steps, and take autonomous actions using tools
- D. It can answer user questions faster by keeping every response inside a single chat turn

**Q2.** A solution architect is asked to justify an agent program to an executive sponsor. Which artifact best demonstrates alignment with business goals?

- A. A business value map linking agent scenarios to measurable KPIs
- B. A connector inventory grouped by owner and licensing tier
- C. A model card describing the selected foundation model limits
- D. A Dataverse schema diagram for tables used by the prototype

**Q3.** Which scenario is the *weakest* candidate for an autonomous agent?

- A. Reviewing new support emails, classifying intent, and routing low-risk cases to the right queue
- B. Preparing a draft RFP response from approved content sources for a salesperson to review
- C. Making a final legally binding decision on an insurance claim denial without review
- D. Summarizing weekly sales pipeline changes for account managers

**Q4.** In the agent maturity progression, which order best reflects increasing autonomy?

- A. Assistive (human-prompted) → semi-autonomous (human-approved) → autonomous (event-triggered)
- B. Semi-autonomous → autonomous → assistive
- C. Autonomous (event-triggered) → semi-autonomous (human-approved) → assistive (human-prompted) workflows
- D. Assistive (event-triggered) → autonomous (human-approved) → semi-autonomous prompts

**Q5.** Which statement best describes "human in the loop" in an agentic design?

- A. A maker manually writes and publishes every prompt template the agent may use at design time
- B. An administrator restricts the agent to business hours but allows all triggered actions to run automatically
- C. A person reviews or approves defined agent actions before they take effect
- D. A compliance officer reviews only monthly audit logs after the agent has already completed its actions

**Q6.** An organization wants to scale from a few pilot agents to enterprise-wide adoption. What should be established *first*?

- A. A center of excellence with governance, standards, and reusable patterns
- B. A production-only environment strategy that lets each business unit define its own security rules
- C. A separate Azure landing zone for every individual agent
- D. A custom fine-tuned language model trained before repeatable intake and governance processes exist

**Q7.** Which combination best matches Microsoft technology to purpose?

- A. Copilot Studio for low-code agent authoring; Azure AI Foundry only once all scenarios need code
- B. Copilot Studio for low-code agent authoring; Azure AI Foundry for pro-code model and agent development
- C. Power BI for agent dashboards; Dataverse for records, before scoping the agent pattern
- D. Microsoft 365 Copilot for user productivity; Copilot Studio only for a later support handoff

**Q8.** What is the primary purpose of grounding an agent in enterprise knowledge?

- A. To centralize knowledge-source ownership so one content team can approve every department's answer style
- B. To make every response longer by requiring citations even when users ask for a brief summary
- C. To increase response accuracy and relevance by anchoring output in trusted organizational data
- D. To simplify kickoff workshops by using the same source list for every department

**Q9.** A stakeholder claims "agents will replace the process." What is the best architect response?

- A. Position agents as augmenting and reshaping the process, with clear boundaries, ownership, and escalation paths
- B. Wait to deploy any agent until the entire process can run end-to-end without exception handling, escalation, or human accountability
- C. Keep the current process unchanged and use the agent only as a passive FAQ surface
- D. Treat the agent as a replacement for process ownership, remove the existing control points, and let outcomes define the new workflow

**Q10.** Which metric is *most* appropriate as a leading indicator of early agent adoption success?

- A. Total Copilot Credits consumed across every agent during the pilot
- B. Number of model endpoints deployed across dev, test, and production
- C. Active usage rate and task completion rate among the target user population
- D. Number of Power Platform environments provisioned by the tenant admins

---

## Section 2 — Analyze requirements for AI-powered business solutions (Q11–Q20)

**Q11.** During discovery, which technique best identifies where an agent will add value in an existing business process?

- A. Model latency benchmarking that is unrelated to a business task
- B. Process mapping with task-level time, volume, and pain-point analysis
- C. SharePoint and Teams site inventory estimating how much content the tenant contains
- D. License price comparison used to choose the least expensive Copilot SKU for the department

**Q12.** Which requirement type captures "the agent must respond within 3 seconds for 95% of requests"?

- A. Functional requirement describing a required user interface behavior
- B. Business requirement
- C. Non-functional requirement
- D. Regulatory constraint

**Q13.** A customer says "the agent should answer HR policy questions." What is the most important clarifying question?

- A. Which authoritative policy sources are in scope, and who owns their accuracy and currency?
- B. Which foundation model family should we select before confirming the governed source systems and content owners?
- C. How many tokens should every HR answer contain if the policy documents have not been identified yet?
- D. Which Teams app color, chat icon, and welcome-message style should be finalized before source scoping?

**Q14.** Which of the following is a valid *data readiness* concern that could block an agent project?

- A. Content is unstructured, duplicated, out of date, and lacks access labeling
- B. Delivery planning is based on two-week agile sprints instead of a waterfall approach
- C. Sponsorship sits with a vice president rather than a director
- D. Collaboration happens in Microsoft Teams for most employee communications across departments

**Q15.** What is the best way to define success criteria for an agent before build starts?

- A. Adopt the vendor's public productivity benchmark as the success target without collecting local baseline data
- B. Wait until go-live and report whichever telemetry fields are easiest to export
- C. Define success as positive user sentiment in comments after launch
- D. Agree on baseline metrics, target metrics, and how each will be measured and attributed

**Q16.** Which stakeholder group is most often overlooked but critical for agent requirements?

- A. Frontline workers who perform the task today
- B. Executive sponsors funding the program
- C. Procurement managers negotiating contracts
- D. Cloud platform engineers supporting hosting

**Q17.** A requirement states the agent must handle personal data of EU residents. What must the architecture explicitly address? (Choose two.) *(Choose two.)*

- A. Lawful basis, purpose limitation, and data subject rights
- B. Whether the model temperature is set high enough for varied wording
- C. Whether the chat window branding matches the HR portal theme
- D. Data residency and processing location

**Q18.** What is the purpose of a feasibility assessment in requirements analysis?

- A. To confirm the technology, data, skills, and budget can realistically deliver the intended outcome
- B. To select a front-end UI framework and visual design system for the chat surface
- C. To assign production license SKUs and purchase capacity before confirming that the required data is usable
- D. To finalize the Git branching model, pull request policy, and release cadence before validating the use case

**Q19.** Which output best documents scope boundaries for an agent?

- A. A project cost estimate grouped by environment, license, and implementation phase
- B. A prioritized backlog of user stories that assumes every submitted request will be handled by the agent
- C. A network architecture diagram showing subnets, private endpoints, and firewall rules
- D. An explicit in-scope/out-of-scope list with fallback and escalation behavior for out-of-scope requests

**Q20.** A business unit requests an agent that duplicates a capability already available in Microsoft 365 Copilot. What should the architect recommend first?

- A. Approve a separate custom agent and plan migration to Microsoft 365 Copilot only after user adoption is proven
- B. Evaluate whether configuring or extending the existing capability meets the need before building new
- C. Start by rebuilding the capability in Azure AI Foundry so the business unit can avoid Microsoft 365 Copilot dependencies
- D. Reject the request unless it uses a brand-new standalone agent

---

## Section 3 — Design overall AI strategy for business solutions (Q21–Q30)

**Q21.** Which Cloud Adoption Framework stage focuses on defining motivations, outcomes, and business justification for AI?

- A. Strategy
- B. Manage stage
- C. Adopt stage
- D. Secure stage

**Q22.** An enterprise AI strategy should primarily be owned by:

- A. A cross-functional governance body with executive sponsorship
- B. A central IT operations team that approves agents only after deployment
- C. The external integrator leading the first implementation
- D. Individual project sponsors without enterprise oversight

**Q23.** Which phases best represent the AI agent lifecycle?

- A. Train → deploy → archive → rebuild after each model update
- B. License → install → enable users → close the project
- C. Prompt → answer → export transcript → repeat for each use case
- D. Ideate → design → build → test → deploy → operate → improve/retire

**Q24.** What is the strongest argument for standardizing on a common agent platform across business units?

- A. It removes the need for automated tests because platform certification guarantees agent behavior in production
- B. It guarantees lower consumption because prompts are deduplicated across tenants
- C. It enables reusable governance, security, ALM, and skills, reducing duplicated effort and risk
- D. It lets every business unit bypass data classification because agents share one runtime and connector catalog

**Q25.** Which is a key principle of operational excellence for AI workloads?

- A. Move successful prototypes directly into production and add monitoring only after the first incident occurs
- B. Define observability, incident response, and continuous evaluation as first-class design concerns
- C. Rely on quarterly manual reviews instead of automated evaluation to reduce operational overhead
- D. Let each maker choose local logging formats to optimize diagnostics for their own team

**Q26.** Which strategic risk is created by uncontrolled "shadow agent" proliferation?

- A. Simpler compliance reviews because unofficial agents are outside enterprise solution inventory
- B. Inconsistent data access, ungoverned outputs, duplicated cost, and compliance exposure
- C. Lower operating cost because each team can select separate tools without central platform overhead
- D. Higher adoption because unmanaged agents avoid governance bottlenecks while preserving auditability

**Q27.** In an AI strategy, what is the role of a "landing zone" concept?

- A. A physical innovation lab where business teams demonstrate Copilot concepts before funding approval
- B. A Power BI adoption dashboard that ranks AI scenarios by expected ROI, user satisfaction, and licensing readiness before funding
- C. A pre-configured, governed environment baseline (identity, network, policy, monitoring) that AI workloads deploy into
- D. A Dataverse staging schema where makers store prompt test cases, sample utterances, and topic drafts before exporting managed solutions

**Q28.** Which approach best aligns AI investment with business goals?

- A. Prioritize a portfolio using value, feasibility, risk, and strategic alignment scoring
- B. Select teams with strong executive sponsors, then define goals after delivery
- C. Approve every submitted idea equally and keep only those with high adoption
- D. Fund the cheapest requests first to maximize the count of deployed agents

**Q29.** What should an AI strategy define regarding skills?

- A. Certification requirements for makers, without role definitions or support expectations
- B. Prompt template libraries, without ownership models or pro-dev support paths
- C. Consultant staffing plans, temporary handover sessions, and no internal maker enablement pathway
- D. Role definitions, upskilling paths, and a plan for maker enablement plus pro-dev support

**Q30.** Which statement about the "build, buy, or extend" decision at the strategy level is correct?

- A. Treat build, buy, or extend as a licensing comparison only, because architecture and operating cost can be normalized later
- B. Always build for differentiation and always buy for commodity capabilities, evaluated case by case against total cost and time to value
- C. Always buy packaged AI capabilities to minimize delivery risk, even when the process is unique and central to competitive advantage for the business
- D. Always build every agent from foundation-model APIs so the organization controls prompts, orchestration, connectors, and release cadence

---

## Section 4 — Evaluate costs and benefits of AI solutions (Q31–Q40)

**Q31.** Which cost category is most often underestimated in agent solutions?

- A. Ongoing operations: monitoring, evaluation, content maintenance, and change management
- B. Initial licensing: seat assignment, purchase approval, and pilot entitlement tracking
- C. Launch assets: domain registration, DNS renewal, and public agent naming
- D. Prototype hardware: developer laptops, monitors, and local device setup

**Q32.** How is ROI for an AI solution best expressed?

- A. Monthly token consumption divided by active users, because lower usage always proves higher business value and better employee adoption
- B. Total number of agents deployed multiplied by average prompt accuracy, reported quarterly as a productivity index for the whole program
- C. A sentiment score from pilot users compared with the list price of Microsoft 365 Copilot licenses
- D. Net quantified benefit (time saved, revenue gained, cost avoided) relative to total cost of ownership over a defined period

**Q33.** A team wants a capability that is core to competitive differentiation and unavailable off the shelf. Best recommendation?

- A. Wait until Microsoft 365 Copilot includes the exact competitive workflow
- B. Build (or extend with significant custom logic), because differentiation justifies the investment
- C. Buy the closest packaged product and adapt the business process to its limitations, even if the gap affects differentiation
- D. Keep the process manual permanently so proprietary logic stays off AI platforms

**Q34.** Which is a *soft* benefit that should still be captured in a business case?

- A. Booked server decommissioning savings from the previous workflow
- B. Improved employee experience and reduced cognitive load
- C. Contracted Dynamics 365 license reductions after removing unused users
- D. Measured Azure storage savings after archiving documents to a lower-cost tier

**Q35.** Which consumption factor most directly drives variable cost in a generative AI agent?

- A. Number of exported solution files in source control
- B. Volume of requests and tokens (input + output), plus tool/connector calls
- C. Number of Power Platform environments created for development, test, and production stages
- D. Number of solution publishers and prefixes used by the ALM team across managed solutions

**Q36.** A pilot shows 20% time savings for 200 users. What is required before claiming enterprise ROI?

- A. Validate that the pilot population, task mix, and measurement method are representative, then model adoption ramp
- B. Double the measured savings for learning effects, then subtract license cost from the estimate
- C. Report only user satisfaction scores and defer financial modeling until after enterprise deployment is complete
- D. Extrapolate the 20% savings directly to all employees because a statistically positive pilot removes rollout uncertainty

**Q37.** Which technique reduces cost while maintaining quality in a high-volume agent?

- A. Increasing max output tokens for every response to improve explanations
- B. Removing grounding and relying on pretraining for fast answers
- C. Disabling production logging to reduce telemetry and stored-data overhead
- D. Right-sizing the model per task, caching, and constraining retrieval scope

**Q38.** Which statement about opportunity cost is correct in AI portfolio planning?

- A. Ignoring opportunity cost once the annual AI budget is fixed, because approved funding supposedly cannot move between projects
- B. Choosing one initiative consumes scarce capacity that could deliver higher value elsewhere, so it must be considered
- C. Equating opportunity cost with the invoice price of selected licenses and connectors
- D. Treating opportunity cost as only GPU reservation waste, not maker capacity, data work, governance, or change management

**Q39.** When should a "do nothing" baseline be included in the business case?

- A. Only when executives require a competitive benchmark before approving AI investment
- B. Only when a regulator asks for a formal comparison to current operations
- C. Always, to quantify the cost of the status quo against the proposed solution
- D. Only after a pilot proves the proposed agent already has positive ROI

**Q40.** Which is the best approach to funding an agent program?

- A. Staged funding tied to value checkpoints, with go/no-go gates after pilot and scaled rollout
- B. Informal discretionary spend by each team until usage becomes material
- C. Permanent IT overhead funding allocated equally to all agents, regardless of adoption or business value
- D. A single enterprise capital request that funds every planned agent before any pilot outcomes are measured

---

## Section 5 — Design AI agents for business solutions (Q41–Q50)

**Q41.** Which element defines *what an agent is for* and constrains its behavior?

- A. The solution publisher prefix, because it helps identify custom ALM components and ownership
- B. The agent instructions/system prompt, including role, scope, tone, and guardrails
- C. The environment display name, because it helps admins distinguish workspaces during ALM reviews
- D. The list of enabled connectors, because connectors alone define the agent's business purpose and limits

**Q42.** An agent must look up order status from an external ERP. What is the correct design element?

- A. A knowledge source built from nightly ERP exports, with no live API call during the conversation
- B. A tool/action that calls the ERP API with the agent passing parameters
- C. A topic trigger phrase that routes order questions to a static answer
- D. A prompt that embeds recent order records for the model to scan

**Q43.** What is the primary purpose of a knowledge source in an agent?

- A. To define branding, icons, and channel appearance for the agent experience
- B. To provide grounding content the agent retrieves from to answer questions accurately
- C. To document approved Dataverse workflow steps for makers reviewing the agent design
- D. To list which connector credentials admins must review before downstream deployment

**Q44.** Which trigger type suits an agent that must act when a new high-priority case is created in Dynamics 365?

- A. Event/record-based automatic trigger
- B. Manual admin execution
- C. A user-typed chat phrase that must be entered after the case is created
- D. A scheduled recurrence that checks cases at the end of each month

**Q45.** When should you split one large agent into multiple specialized agents?

- A. When the organization wants a separate agent for every channel, language, and department even though the scope and permissions are identical
- B. Only when the current agent reaches the maximum context window or token limit
- C. Never; a single broad agent is always easier to secure and operate
- D. When scope, knowledge, permissions, or ownership diverge enough that a single agent becomes ambiguous and hard to govern

**Q46.** In multi-agent design, what does an orchestrator agent do?

- A. Handles subscription licensing, capacity allocation, and invoice reconciliation for all agents
- B. Stores every conversation transcript and retrains the language model before any child agent can answer
- C. Replaces tools and connectors by having the parent agent memorize external system data in its prompt
- D. Interprets the user goal and delegates to specialized child agents, then composes the result

**Q47.** Which is the best practice for handling an out-of-scope user question?

- A. Let the model answer from general knowledge and avoid telling the user the topic is out of scope
- B. Provide a defined fallback that states the limitation and offers escalation or handoff
- C. Return a generic error without explanation or handoff
- D. Route the question to the closest existing topic even when that topic cannot answer it safely

**Q48.** What identity model should an agent use when reading a user's own documents?

- A. A shared service account with broad access to all document libraries
- B. Delegated/user-context authentication so existing permissions are enforced
- C. Anonymous repository access granted to simplify document retrieval
- D. A hardcoded connector secret reused for every document request

**Q49.** Which design detail most improves the reliability of an agent's tool selection?

- A. Several tools with similar names and overlapping parameters for the same operation
- B. Clear, distinct tool names, descriptions, and parameter schemas that state when to use each tool
- C. Removing parameter descriptions so the model has fewer tokens to consider
- D. Implementation-focused tool names with minimal descriptions, relying on the model to infer intent from endpoint URLs

**Q50.** Which is a valid reason to include a confirmation step before an agent action?

- A. The action only reads non-sensitive data and cannot change records, notify customers, or spend money
- B. The action is irreversible or has financial, legal, or customer-facing impact
- C. The action retrieves a record and makes no changes
- D. The agent runs in a development environment, so every downstream action is automatically safe

---

## Section 6 — Design extensibility of AI solutions (Q51–Q60)

**Q51.** What is the primary purpose of extending Microsoft 365 Copilot rather than building a standalone agent?

- A. To meet users in their existing workflow and reuse Copilot's orchestration, identity, and grounding
- B. To replace Copilot's orchestration with a lower-quality custom prompt router
- C. To reduce governance planning by assuming app-store approval alone covers every agent risk
- D. To avoid Microsoft 365 Copilot licensing by routing users to a separate standalone app

**Q52.** Which extensibility option grounds Microsoft 365 Copilot in external data indexed into Microsoft Graph?

- A. Graph connectors
- B. Power Platform custom connector
- C. Dataverse virtual table
- D. MCP server

**Q53.** What does the Model Context Protocol (MCP) provide in an extensibility architecture?

- A. A Power Apps control library for rendering adaptive cards
- B. A replacement model-training pipeline that fine-tunes Microsoft 365 Copilot on private tenant data
- C. A Copilot Credits billing meter for agent conversations
- D. A standardized way for agents to discover and call external tools and data sources

**Q54.** A declarative agent differs from a custom engine agent primarily because it:

- A. Requires a manifest review first, then deeper engineering only once every scenario is judged too complex to configure
- B. Cannot be published to users until it is rewritten as a standalone web application outside Microsoft 365 Copilot
- C. Uses the host Copilot's orchestrator and model, with configured instructions, knowledge, and actions
- D. Is chosen mainly to avoid adding knowledge sources, Graph connectors, or actions to the overall solution design

**Q55.** Which scenario justifies a custom engine agent?

- A. Requirement to ground answers in a few Microsoft Graph connector sources without changing orchestration
- B. Requirement for a specific model, custom orchestration logic, or non-Microsoft hosting constraints
- C. A simple FAQ agent that only answers policy questions from SharePoint
- D. Need to add prompt starters, conversation examples, and a SharePoint knowledge source to a standard Copilot Studio agent

**Q56.** When designing reusable extensibility components, what is the key architectural goal?

- A. Hardcoded development environment URLs inside each reusable action
- B. Separate copies of connector logic maintained inside every agent that calls the same system
- C. Loose coupling with well-defined contracts so components can be shared across agents and solutions
- D. Tight coupling to each agent's prompt with no component contract, shared interface, or reusable boundary

**Q57.** Which is the correct way to expose a legacy on-premises system to an agent?

- A. Copy scheduled database exports into the agent prompt and refresh them manually before each release
- B. Email CSV exports to users and have the agent cite mailbox attachments instead of an API
- C. Expose the on-premises database directly to the public internet so the agent can query internal tables
- D. Expose a governed API layer (with gateway/connector, authentication, and throttling) that the agent calls

**Q58.** What must be considered when an extension calls a downstream API on the user's behalf?

- A. Use an application-only credential so every user shares the same broad backend permission set
- B. Token exchange, consent, least privilege scopes, and per-user authorization enforcement
- C. Only choose the fastest endpoint and ignore user consent
- D. Cache one delegated token for all users to simplify API calls across tenants and sessions

**Q59.** Which practice best supports versioning of an extensibility component?

- A. Rename the component every sprint without preserving the public API contract
- B. Keep one unversioned endpoint, silently change request and response fields, and require consumers to adapt immediately
- C. Overwrite the existing endpoint in place and skip consumer migration guidance
- D. Version the contract (for example /v1, /v2), support a deprecation window, and communicate changes to consumers

**Q60.** Which is a valid limitation to design around when extending Copilot experiences?

- A. Response size, latency budgets, supported authentication types, and capability limits of the host surface
- B. Assume Copilot extensions can bypass host authentication and call any tenant data source once installed in a Microsoft 365 app
- C. Treat every Copilot host as supporting identical actions, auth flows, and unrestricted long-running tool calls
- D. Design as if no throttling limits apply across Copilot host surfaces

---

## Section 7 — Orchestrate configuration of prebuilt agents and apps (Q61–Q70)

**Q61.** A business wants Dynamics 365 sales summarization quickly. What should the architect check first?

- A. Select an Azure OpenAI model and design a fine-tuning dataset for opportunity summaries as the first step
- B. Start a custom Copilot Studio agent backed by Dataverse APIs before reviewing Dynamics 365 Sales Copilot readiness
- C. Plan a bespoke Power Automate summary workflow for all sellers before checking licensed prebuilt features
- D. Whether the prebuilt/out-of-box Copilot capability can be enabled and configured to meet the need

**Q62.** Which is a correct sequence for rolling out a prebuilt Copilot capability?

- A. Buy licenses → activate broadly in production → run a pilot only after users report quality issues
- B. Pilot with live users → build a custom replacement → disable the prebuilt feature before configuration
- C. Validate prerequisites and licensing → enable in a non-production environment → configure and test → pilot → broad rollout with training
- D. Enable the feature directly in production for all licensed users → collect issues after launch → document prerequisites and governance controls later

**Q63.** What typically controls whether a prebuilt Dynamics 365 Copilot feature is visible to a user?

- A. Browser version, local cache state, device compliance, and profile synchronization settings
- B. Browser version, local cache state, client update channel, and profile synchronization settings
- C. Display language, time zone, theme selection, and regional formatting preferences
- D. Licensing, admin feature enablement, security role/privileges, and environment/region availability

**Q64.** Which is the most appropriate way to tailor a prebuilt agent's answers to company terminology?

- A. Modify the Dynamics 365 or Microsoft 365 product code so the agent uses renamed entities directly
- B. Ask administrators to rename terms only in rollout emails and leave grounding and configuration unchanged
- C. Configure grounding sources, custom instructions, and supported customization settings
- D. Ask users to avoid company jargon and rephrase every request manually

**Q65.** When a prebuilt capability *almost* meets requirements, what is the recommended progression?

- A. Replace it with a custom agent before testing supported configuration
- B. Configure → extend → build custom, in that order
- C. Build custom, then configure later
- D. Extend first, then try configuration

**Q66.** Which governance control should be applied before enabling a prebuilt agent broadly?

- A. Rely on default settings and skip tenant DLP review because the feature is prebuilt
- B. Use license assignment as the only governance gate and leave environment ownership undocumented
- C. Approve rollout based only on a communications plan, with data access review deferred until adoption grows
- D. Data access review, DLP policies, environment strategy, and a documented owner

**Q67.** A prebuilt agent surfaces data that some users should not see. What is the most likely root cause?

- A. Rollout communications were too brief, so users never learned which sources the agent can reach
- B. Underlying source permissions are overly broad, and the agent honors those permissions
- C. Browser cache settings are exposing records outside source security
- D. Agent naming was left too broad, prompting users to request records their roles should still block

**Q68.** Which orchestration concern arises when multiple agents are available to the same user?

- A. Adding agents reduces the need to define identity, scope, discovery, and access boundaries
- B. The only design impact is higher Dataverse storage consumption
- C. Users can rely on model choice alone to route every request correctly
- D. Overlapping scope causing routing ambiguity, so scope, naming, and discovery must be curated

**Q69.** What is the best approach to managing configuration drift across environments for prebuilt agent settings?

- A. Documented configuration baselines with automated deployment/validation where supported
- B. Let each environment owner adjust settings manually, then reconcile differences only after users report inconsistent behavior
- C. Configure only production and ignore lower-environment parity
- D. Allow each administrator to tune settings independently

**Q70.** Which measure best validates a prebuilt agent rollout succeeded?

- A. Total number of assigned licenses, even if users never invoke the capability or business outcomes stay flat
- B. Adoption plus measured improvement in the targeted business metric, with user feedback
- C. Number of environments created for the rollout, regardless of adoption
- D. Number of admin configuration changes completed during rollout, regardless of adoption or process impact

---

## Section 8 — Monitor, analyze, and tune AI agents (Q71–Q80)

**Q71.** Which metric best measures whether an agent resolved the user's need without human help?

- A. Average token volume
- B. Published topic count
- C. Total conversation volume
- D. Containment/resolution rate

**Q72.** An agent shows high engagement but low resolution. What is the most likely issue?

- A. The agent is too successful at attracting users, so licenses should be reduced before reviewing answers
- B. Gaps in knowledge coverage or unclear instructions causing incomplete answers
- C. Too few users are assigned, even though engagement is already high
- D. The main problem is tenant network latency, even when conversations complete quickly

**Q73.** What is the purpose of an evaluation dataset for an agent?

- A. To create monthly license utilization reports for Finance
- B. To replace production monitoring with a quarterly survey summary that is reviewed only after issues have been escalated
- C. To store raw user PII so prompts can be replayed without consent
- D. To provide representative test inputs with expected outcomes so quality can be measured consistently over time

**Q74.** Which signal indicates possible grounding failure (hallucination)?

- A. Responses that are confident but unsupported by any retrieved citation
- B. Responses that safely escalate to a human when the requested action exceeds policy
- C. Responses that ask a clarifying question before using a grounded source to answer
- D. Responses that include citations to approved knowledge sources that directly support the answer

**Q75.** Which telemetry is most useful for diagnosing why an agent chose the wrong tool?

- A. Aggregate CPU and memory charts for the Power Platform environment without per-turn tool invocation details
- B. Traced reasoning/tool-selection logs with inputs, chosen tool, parameters, and outcome
- C. The user's browser version and screen resolution during the failed turn
- D. License assignment audit logs showing which users were enabled for the agent during the same week

**Q76.** What is the recommended cadence approach for tuning an agent?

- A. Tune annually on a fixed calendar even if telemetry shows urgent failure patterns
- B. Tune only after executive complaints, not from routine analytics and evaluations
- C. Tune once at go-live, freeze the knowledge sources and instructions, and rely on users to work around all later failures
- D. Continuous improvement loop: monitor → analyze failures → adjust knowledge/instructions/tools → re-evaluate → release

**Q77.** Which practice improves retrieval quality most directly?

- A. Indexing available SharePoint sites without pruning stale or irrelevant content
- B. Adding file types while leaving outdated content unclassified and duplicated
- C. Curating, chunking, and maintaining authoritative content with accurate metadata
- D. Raising model temperature so retrieved answers sound more varied and creative

**Q78.** Which combination forms a balanced agent scorecard?

- A. Quality, adoption, efficiency (cost/latency), and safety/compliance metrics
- B. Average response latency and uptime
- C. Only tracking prompt cost, response latency, and license utilization without measuring answer quality
- D. Counting active users, total conversations, page views, and thumbs-up votes while ignoring task success

**Q79.** A/B testing two sets of agent instructions is best used to:

- A. Eliminate the need for baseline evaluation datasets
- B. Empirically determine which variant produces better measured outcomes before full rollout
- C. Permanently route every user to the new instructions immediately and treat any improvement as proven without a control group
- D. Decide which Microsoft license tier the agent requires

**Q80.** Which alerting condition is appropriate for production agents?

- A. Weekly author-edit counts in Copilot Studio
- B. License-count changes in the tenant even when runtime error and latency metrics remain normal
- C. Notifications for every completed conversation, including healthy sessions with no errors or escalation
- D. Spikes in fallback/escalation rate, error rate, latency, or content-filter triggers

---

## Section 9 — Manage testing AI-powered business solutions (Q81–Q90)

**Q81.** Why is traditional deterministic testing insufficient for generative AI solutions?

- A. Because deterministic tests can validate only connector authentication and are prohibited from checking prompts or knowledge sources
- B. Because exact-match scripts should be the only release gate, while broader quality review waits until production issues appear
- C. Outputs are probabilistic, so testing must assess quality ranges and behaviors, not exact string matches
- D. Because generative AI outputs are always identical for a given prompt, so only one golden transcript is required for release

**Q82.** Which test type verifies the agent refuses harmful or out-of-policy requests?

- A. Performance soak testing that measures throughput under sustained concurrent user traffic
- B. Connector unit testing
- C. Screen reader accessibility checks
- D. Safety/red-team (adversarial) testing

**Q83.** What does regression testing protect against in an agent solution?

- A. Whether a maker's Copilot Studio license renewal date is approaching
- B. Higher user adoption increasing concurrent capacity demand for the published agent
- C. Previously working behaviors breaking after prompt, knowledge, model, or tool changes
- D. Only regional network failover behavior after an Azure outage in a paired region

**Q84.** Which metric pair is most relevant for evaluating retrieval-grounded answers?

- A. Server CPU usage and memory pressure
- B. Groundedness and relevance
- C. Token spend and maker license count
- D. Network MTU

**Q85.** Who should participate in user acceptance testing for a business agent?

- A. Only the Center of Excellence administrators and platform makers reviewing scripted happy paths
- B. Representative end users and business process owners performing real tasks
- C. Only senior executives approving the demo
- D. Only the security team running policy checks

**Q86.** What is the correct treatment of test data containing personal information?

- A. Use unmasked production PII in shared test environments because nonproduction systems are automatically exempt from privacy controls
- B. Delete all customer fields before testing, even when the agent must validate privacy-sensitive process logic
- C. Store the sample data in a public repository so testers and external vendors can reproduce issues consistently
- D. Use masked, synthetic, or minimized data with the same protection controls as production

**Q87.** Which testing activity best validates end-to-end business value?

- A. Branding review of the agent icon and welcome message
- B. Scenario-based testing that follows a complete business process across agent, tools, and downstream systems
- C. Isolated connector unit tests against mocked APIs that assume the complete business workflow will behave the same in production
- D. Prompt grammar and tone review that checks wording and brand compliance without exercising connected systems or measuring outcomes

**Q88.** How should test results influence release decisions?

- A. Let the maker approve release from a successful demo even when evaluation thresholds have not been met
- B. Promote whenever deployment finishes successfully, regardless of groundedness, task success, or safety scores
- C. Define quality gates with thresholds (for example groundedness, task success, safety) that must pass to promote
- D. Delay every pilot until all minor cosmetic defects are closed, even if business-risk gates pass

**Q89.** When a model version is updated by the platform, what should happen?

- A. Permanently disable the agent until a custom model is trained
- B. Re-run the evaluation suite and regression tests to detect behavior changes before or immediately after adoption
- C. Rebuild the agent from scratch before enabling the model
- D. Assume the platform guarantees identical behavior across model versions and skip evaluation unless users report incidents

**Q90.** Which is the best way to scale testing effort sustainably?

- A. Automated evaluation pipelines with curated datasets, run on each significant change
- B. Scheduling one manual test pass at year end using whichever scenarios the tester remembers
- C. Manual smoke testing only before go-live
- D. Relying on informal user complaints after production release to identify most prompt and knowledge regressions

---

## Section 10 — Design ALM process for AI-powered business solutions (Q91–Q100)

**Q91.** Which environment strategy is recommended for Power Platform / Copilot Studio ALM?

- A. Production-first development with formal testing only after users report issues
- B. Separate production environments for every individual maker and tester
- C. Separate development, test, and production environments with controlled promotion
- D. One shared environment for development, testing, production, and maker trials

**Q92.** What is the correct way to move a Copilot Studio agent between environments?

- A. Export chat transcripts and import them as topics
- B. Package the agent in a managed solution and deploy through the pipeline
- C. Copy the agent web URL into the target environment and expect topics, connectors, and knowledge to follow
- D. Recreate the agent manually in each environment and paste settings from screenshots during release

**Q93.** Why should production deployments use *managed* solutions?

- A. They prevent uncontrolled in-place edits and support clean upgrade/uninstall semantics
- B. They import faster than unmanaged solutions in every tenant
- C. They reduce Copilot Studio licensing costs for makers
- D. They make rollback planning unnecessary because failed imports can be investigated after users report issues

**Q94.** What should environment variables be used for?

- A. Parameterizing environment-specific values (URLs, IDs, settings) so the same solution deploys everywhere
- B. Keeping a manual checklist of target-environment URLs and IDs for the release team to review before each import
- C. Renaming agents, topics, and solutions during import instead of using publishers, connection references, or deployment settings
- D. Storing API keys and client secrets as plain text values inside the solution so every environment receives them automatically

**Q95.** Where should secrets and API keys used by agent connections be stored?

- A. In agent instructions or topic descriptions so makers can see and update the keys during troubleshooting
- B. Inside the solution package as plain text values that are imported with each managed release
- C. In Azure Key Vault, referenced securely by environment variables/connections
- D. In a shared spreadsheet owned by the project team

**Q96.** Which artifacts should be under source control for an AI solution?

- A. Solution components and environment variables, but not prompt instructions, evaluation datasets, or pipelines
- B. Solution/agent definitions, prompts/instructions, configuration, evaluation datasets, and pipeline definitions
- C. Only managed solution export files and screenshots of maker settings, because prompts and evaluation data are regenerated during deployment
- D. Only plug-in assemblies and JavaScript web resources, since low-code agent settings stay in the platform

**Q97.** What is the primary benefit of automated deployment pipelines for agents?

- A. Lower Copilot Credit usage by moving the same agent package through environments
- B. Repeatable, auditable, low-risk promotion with consistent configuration and approvals
- C. Skipped testing because deployment validation proves the package is safe
- D. Bypassed DLP review and approval gates whenever business fixes are urgent

**Q98.** Which practice supports safe rollback of an agent release?

- A. Latest-only managed solutions in production, with audit history used to rebuild any older published agent state
- B. Live production edits followed by an exported backup after users confirm that the release works as expected
- C. Deleted production agents and reimported development copies when business users report a regression
- D. Versioned releases with the ability to restore the prior published version, plus documented rollback steps

**Q99.** How should makers (citizen developers) be integrated into ALM?

- A. Let makers publish from dev when a business owner verbally approves
- B. Keep makers in personal environments with no shared standards or promotion path
- C. Provide governed maker environments, standards, and a promotion path with review gates
- D. Give citizen developers direct production maker access, then have the Center of Excellence review changes afterward

**Q100.** Which deployment approach reduces blast radius for a major agent change?

- A. Progressive rollout (ring-based/canary) with monitoring and defined rollback criteria
- B. Silent production release with no telemetry until help desk tickets show whether users are affected
- C. After-hours release with restore from backup as the only rollout plan
- D. Tenant-wide release to every user after one pre-production approval and sign-off window

---

## Section 11 — Responsible AI, security, governance, risk, and compliance (Q101–Q110)

**Q101.** Which set correctly lists Microsoft's Responsible AI principles?

- A. Speed; cost; scale; accuracy; automation; adoption; throughput; backlog reduction; license optimization
- B. Availability; durability; latency; throughput; replication; failover; recovery point objective; recovery time objective
- C. Fairness; reliability and safety; privacy and security; inclusiveness; transparency; accountability
- D. Confidentiality; integrity; availability; non-repudiation; authentication; authorization; encryption; recovery

**Q102.** Which principle is most directly at risk when an agent performs better for one demographic group than another?

- A. Safety
- B. Privacy
- C. Transparency
- D. Fairness

**Q103.** What is the primary purpose of a Data Loss Prevention (DLP) policy in Power Platform?

- A. To record quarterly governance notes on which business owners approved each agent release
- B. To assign licenses automatically from connector usage and Dataverse storage consumption reports
- C. To restrict which connectors and data sources can be combined, preventing unsanctioned data flows
- D. To tune generated answers for higher accuracy from indexed enterprise knowledge sources

**Q104.** Which control ensures an agent cannot surface content a user is not entitled to see?

- A. Adding a response disclaimer that users should not rely on content they are not authorized to access
- B. Enforcing existing identity and permissions at retrieval time (permission trimming) via delegated access
- C. Using admin-owned connections for retrieval so the agent can evaluate access rules after content is returned
- D. Indexing all source content into a separate knowledge base and trusting the agent prompt to hide restricted records

**Q105.** What does a Responsible AI impact assessment produce?

- A. Documented licensing assumptions, Copilot Credit burn, adoption targets, and payback period by department
- B. Documented network controls such as private endpoints, firewall rules, and conditional access policies
- C. Documented deployment environments, managed solutions, service principals, pipeline approvals, and release owner assignments
- D. Documented intended uses, stakeholders, potential harms, mitigations, and residual risk with an accountable owner

**Q106.** Which mitigation best addresses prompt injection from untrusted content?

- A. Treating retrieved content as data, isolating instructions, validating tool inputs, and constraining action permissions
- B. Removing citations and source links from answers so malicious retrieved instructions are hidden from end users and reviewers
- C. Increasing maximum token limits and context window size so the model can inspect more untrusted content before taking action with tools
- D. Allowing retrieved webpages and documents to override the system prompt whenever they contain instructions marked as urgent

**Q107.** Which capability supports compliance requirements such as eDiscovery and retention for Copilot interactions?

- A. Azure AI
- B. Microsoft Fabric data governance workloads
- C. Microsoft Purview
- D. Azure DevOps release approvals

**Q108.** What is the correct approach to transparency for users interacting with an agent?

- A. Clearly disclose AI involvement, its limitations, data usage, and how to reach a human
- B. Explain automation only after users ask whether the interaction is handled by AI
- C. Present the agent as a human-operated service so users do not focus on AI limitations
- D. Disclose AI use only to tenant administrators, compliance teams, and support leads

**Q109.** Which is an appropriate risk response when an agent handles a high-impact regulated decision?

- A. Allow full autonomy after access controls and DLP are configured
- B. Human review/approval, decision logging, explainability, and periodic audit
- C. Rely on the model provider's Responsible AI statement without local logs
- D. Automated approval when model confidence exceeds a threshold, with review only for exceptions

**Q110.** Which combination best represents defense in depth for an enterprise agent?

- A. Identity and least privilege; DLP and data classification; content safety filters; monitoring and audit; incident response
- B. Strong passwords and multifactor authentication only, assuming identity controls make content safety checks and audits redundant
- C. One moderation filter at the model endpoint, with audit logging and incident response handled manually if needed
- D. A perimeter firewall, private endpoints, and network isolation only, with no additional controls inside the agent workflow or data layer

---

## Answer key

| Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|---|---|---|---|---|---|---|
| 1 | C | 29 | D | 57 | D | 85 | B |
| 2 | A | 30 | B | 58 | B | 86 | D |
| 3 | C | 31 | A | 59 | D | 87 | B |
| 4 | A | 32 | D | 60 | A | 88 | C |
| 5 | C | 33 | B | 61 | D | 89 | B |
| 6 | A | 34 | B | 62 | C | 90 | A |
| 7 | B | 35 | B | 63 | D | 91 | C |
| 8 | C | 36 | A | 64 | C | 92 | B |
| 9 | A | 37 | D | 65 | B | 93 | A |
| 10 | C | 38 | B | 66 | D | 94 | A |
| 11 | B | 39 | C | 67 | B | 95 | C |
| 12 | C | 40 | A | 68 | D | 96 | B |
| 13 | A | 41 | B | 69 | A | 97 | B |
| 14 | A | 42 | B | 70 | B | 98 | D |
| 15 | D | 43 | B | 71 | D | 99 | C |
| 16 | A | 44 | A | 72 | B | 100 | A |
| 17 | A, D | 45 | D | 73 | D | 101 | C |
| 18 | A | 46 | D | 74 | A | 102 | D |
| 19 | D | 47 | B | 75 | B | 103 | C |
| 20 | B | 48 | B | 76 | D | 104 | B |
| 21 | A | 49 | B | 77 | C | 105 | D |
| 22 | A | 50 | B | 78 | A | 106 | A |
| 23 | D | 51 | A | 79 | B | 107 | C |
| 24 | C | 52 | A | 80 | D | 108 | A |
| 25 | B | 53 | D | 81 | C | 109 | B |
| 26 | B | 54 | C | 82 | D | 110 | A |
| 27 | C | 55 | B | 83 | C |  |  |
| 28 | A | 56 | C | 84 | B |  |  |

### Scoring

| Correct | Result |
|---|---|
| 99–110 | Excellent — exam ready |
| 88–98 | Strong — review weak sections |
| 77–87 | Borderline pass — targeted study needed |
| Below 77 | Revisit the learning path modules before booking |

### Section score tracker

| Section | Module | Questions | Your score |
|---|---|---|---|
| 1 | Introduction to agentic AI business solutions | Q1–Q10 | /10 |
| 2 | Analyze requirements for AI-powered business solutions | Q11–Q20 | /10 |
| 3 | Design overall AI strategy for business solutions | Q21–Q30 | /10 |
| 4 | Evaluate costs and benefits of AI solutions | Q31–Q40 | /10 |
| 5 | Design AI agents for business solutions | Q41–Q50 | /10 |
| 6 | Design extensibility of AI solutions | Q51–Q60 | /10 |
| 7 | Orchestrate configuration of prebuilt agents and apps | Q61–Q70 | /10 |
| 8 | Monitor, analyze, and tune AI agents | Q71–Q80 | /10 |
| 9 | Manage testing AI-powered business solutions | Q81–Q90 | /10 |
| 10 | Design ALM process for AI-powered business solutions | Q91–Q100 | /10 |
| 11 | Responsible AI, security, governance, risk, and compliance | Q101–Q110 | /10 |

> **Note:** This is an unofficial practice exam authored from the public learning path outline. It is not affiliated with or endorsed by Microsoft and does not reproduce real exam items.
