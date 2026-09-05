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

- A. It always runs on-premises
- B. It uses a larger language model
- C. It only responds to explicit user prompts with text
- D. It can reason over a goal, plan steps, and take autonomous actions using tools

**Q2.** A solution architect is asked to justify an agent program to an executive sponsor. Which artifact best demonstrates alignment with business goals?

- A. A list of Power Platform connectors used
- B. A model card for the underlying LLM
- C. A Dataverse entity relationship diagram
- D. A business value map linking agent scenarios to measurable KPIs

**Q3.** Which scenario is the *weakest* candidate for an autonomous agent?

- A. Summarizing weekly sales pipeline changes
- B. Triaging and routing inbound support email
- C. Drafting a first-pass response to an RFP question
- D. Making a final legally binding decision on an insurance claim denial without review

**Q4.** In the agent maturity progression, which order best reflects increasing autonomy?

- A. Assistive (human-prompted) → semi-autonomous (human-approved) → autonomous (event-triggered)
- B. Orchestrated → assistive → autonomous
- C. Autonomous → orchestrated → assistive
- D. Autonomous → assistive → orchestrated

**Q5.** Which statement best describes "human in the loop" in an agentic design?

- A. All agent output is logged for audit
- B. The agent is disabled outside business hours
- C. A person reviews or approves defined agent actions before they take effect
- D. A person writes every prompt the agent uses

**Q6.** An organization wants to scale from a few pilot agents to enterprise-wide adoption. What should be established *first*?

- A. A dedicated Azure landing zone per agent
- B. A center of excellence with governance, standards, and reusable patterns
- C. A production environment for each business unit
- D. A custom model fine-tuned on company data

**Q7.** Which combination best matches Microsoft technology to purpose?

- A. Copilot Studio for model training; Azure AI Foundry for chat UI only
- B. Copilot Studio for low-code agent authoring; Azure AI Foundry for pro-code model and agent development
- C. Power BI for agent orchestration; Dataverse for prompt engineering
- D. Microsoft 365 Copilot for building custom models; Copilot Studio for licensing

**Q8.** What is the primary purpose of grounding an agent in enterprise knowledge?

- A. To bypass content filters
- B. To increase response accuracy and relevance by anchoring output in trusted organizational data
- C. To eliminate the need for testing
- D. To reduce token cost

**Q9.** A stakeholder claims "agents will replace the process." What is the best architect response?

- A. Position agents as augmenting and reshaping the process, with clear boundaries, ownership, and escalation paths
- B. Delay the project until the process is fully automated
- C. Refuse to deploy agents
- D. Agree and remove the existing process

**Q10.** Which metric is *most* appropriate as a leading indicator of early agent adoption success?

- A. Number of models deployed
- B. Active usage rate and task completion rate among the target user population
- C. Total tokens consumed
- D. Number of environments provisioned

---

## Section 2 — Analyze requirements for AI-powered business solutions (Q11–Q20)

**Q11.** During discovery, which technique best identifies where an agent will add value in an existing business process?

- A. Reviewing the vendor price list
- B. Counting the number of SharePoint sites
- C. Benchmarking model latency
- D. Process mapping with task-level time, volume, and pain-point analysis

**Q12.** Which requirement type captures "the agent must respond within 3 seconds for 95% of requests"?

- A. Business requirement
- B. Functional requirement
- C. Regulatory requirement
- D. Non-functional requirement

**Q13.** A customer says "the agent should answer HR policy questions." What is the most important clarifying question?

- A. Which authoritative policy sources are in scope, and who owns their accuracy and currency?
- B. Which LLM should we use?
- C. What color should the chat bubble be?
- D. How many tokens per response?

**Q14.** Which of the following is a valid *data readiness* concern that could block an agent project?

- A. Content is unstructured, duplicated, out of date, and lacks access labeling
- B. The team prefers agile delivery
- C. The organization uses Microsoft Teams
- D. The sponsor is a VP rather than a director

**Q15.** What is the best way to define success criteria for an agent before build starts?

- A. Use the vendor's published benchmarks
- B. Define success as "users like it"
- C. Agree on baseline metrics, target metrics, and how each will be measured and attributed
- D. Wait until after go-live and measure whatever data exists

**Q16.** Which stakeholder group is most often overlooked but critical for agent requirements?

- A. The cloud infrastructure team
- B. The procurement team
- C. Frontline workers who perform the task today
- D. The executive sponsor

**Q17.** A requirement states the agent must handle personal data of EU residents. What must the architecture explicitly address? (Choose two.)

- A. Lawful basis, purpose limitation, and data subject rights
- B. Chat window branding
- C. Data residency and processing location
- D. Model temperature settings

**Q18.** What is the purpose of a feasibility assessment in requirements analysis?

- A. To choose a source control branching strategy
- B. To assign license SKUs
- C. To select a UI framework
- D. To confirm the technology, data, skills, and budget can realistically deliver the intended outcome

**Q19.** Which output best documents scope boundaries for an agent?

- A. A backlog of user stories only
- B. A network diagram
- C. An explicit in-scope/out-of-scope list with fallback and escalation behavior for out-of-scope requests
- D. A cost estimate

**Q20.** A business unit requests an agent that duplicates a capability already available in Microsoft 365 Copilot. What should the architect recommend first?

- A. Build the custom agent anyway to satisfy the request
- B. Reject the request outright
- C. Evaluate whether configuring or extending the existing capability meets the need before building new
- D. Escalate to legal

---

## Section 3 — Design overall AI strategy for business solutions (Q21–Q30)

**Q21.** Which Cloud Adoption Framework stage focuses on defining motivations, outcomes, and business justification for AI?

- A. Migrate
- B. Manage
- C. Strategy
- D. Secure

**Q22.** An enterprise AI strategy should primarily be owned by:

- A. A cross-functional governance body with executive sponsorship
- B. The external systems integrator
- C. The individual project team
- D. The security team alone

**Q23.** Which phases best represent the AI agent lifecycle?

- A. Train → publish
- B. Buy → install → forget
- C. Prompt → respond
- D. Ideate → design → build → test → deploy → operate → improve/retire

**Q24.** What is the strongest argument for standardizing on a common agent platform across business units?

- A. It eliminates the need for a data strategy
- B. It removes the need for testing
- C. It guarantees a lower model cost
- D. It enables reusable governance, security, ALM, and skills, reducing duplicated effort and risk

**Q25.** Which is a key principle of operational excellence for AI workloads?

- A. Deploy directly to production to move faster
- B. Avoid documenting prompts
- C. Define observability, incident response, and continuous evaluation as first-class design concerns
- D. Let each team choose its own logging approach

**Q26.** Which strategic risk is created by uncontrolled "shadow agent" proliferation?

- A. Faster time to value with no downside
- B. Higher user satisfaction
- C. Reduced licensing spend
- D. Inconsistent data access, ungoverned outputs, duplicated cost, and compliance exposure

**Q27.** In an AI strategy, what is the role of a "landing zone" concept?

- A. A staging table in Dataverse
- B. A pre-configured, governed environment baseline (identity, network, policy, monitoring) that AI workloads deploy into
- C. A marketing campaign
- D. A physical office for the AI team

**Q28.** Which approach best aligns AI investment with business goals?

- A. Fund only the cheapest ideas
- B. Fund every proposed idea equally
- C. Fund whichever team asks first
- D. Prioritize a portfolio using value, feasibility, risk, and strategic alignment scoring

**Q29.** What should an AI strategy define regarding skills?

- A. Only certification counts
- B. Nothing; skills emerge naturally
- C. Role definitions, upskilling paths, and a plan for maker enablement plus pro-dev support
- D. Hire only external consultants

**Q30.** Which statement about the "build, buy, or extend" decision at the strategy level is correct?

- A. Always buy to reduce risk
- B. Always build to retain control
- C. The decision is purely a licensing matter
- D. Always build for differentiation and always buy for commodity capabilities, evaluated case by case against total cost and time to value

---

## Section 4 — Evaluate costs and benefits of AI solutions (Q31–Q40)

**Q31.** Which cost category is most often underestimated in agent solutions?

- A. Ongoing operations: monitoring, evaluation, content maintenance, and change management
- B. Initial license purchase
- C. Domain registration
- D. Laptop hardware

**Q32.** How is ROI for an AI solution best expressed?

- A. Net quantified benefit (time saved, revenue gained, cost avoided) relative to total cost of ownership over a defined period
- B. Number of agents deployed
- C. Tokens consumed per month
- D. Model accuracy percentage

**Q33.** A team wants a capability that is core to competitive differentiation and unavailable off the shelf. Best recommendation?

- A. Buy an adjacent product and accept the gap
- B. Build (or extend with significant custom logic), because differentiation justifies the investment
- C. Postpone indefinitely
- D. Use a manual process permanently

**Q34.** Which is a *soft* benefit that should still be captured in a business case?

- A. Lower storage spend
- B. Improved employee experience and reduced cognitive load
- C. Decommissioned servers
- D. Reduced licensing cost

**Q35.** Which consumption factor most directly drives variable cost in a generative AI agent?

- A. Number of environments
- B. Number of publishers
- C. Volume of requests and tokens (input + output), plus tool/connector calls
- D. Number of solution files

**Q36.** A pilot shows 20% time savings for 200 users. What is required before claiming enterprise ROI?

- A. Nothing; extrapolate directly
- B. Only report user satisfaction
- C. Validate that the pilot population, task mix, and measurement method are representative, then model adoption ramp
- D. Double the savings for optimism

**Q37.** Which technique reduces cost while maintaining quality in a high-volume agent?

- A. Right-sizing the model per task, caching, and constraining retrieval scope
- B. Increasing max output tokens for every response
- C. Removing all grounding
- D. Disabling logging

**Q38.** Which statement about opportunity cost is correct in AI portfolio planning?

- A. It is irrelevant when budget is fixed
- B. It applies only to hardware
- C. Choosing one initiative consumes scarce capacity that could deliver higher value elsewhere, so it must be considered
- D. It equals the license cost

**Q39.** When should a "do nothing" baseline be included in the business case?

- A. Only if the sponsor requests it
- B. Never
- C. Always, to quantify the cost of the status quo against the proposed solution
- D. Only for regulated industries

**Q40.** Which is the best approach to funding an agent program?

- A. Charge every cost to IT overhead
- B. One large upfront capital request for all agents
- C. Staged funding tied to value checkpoints, with go/no-go gates after pilot and scaled rollout
- D. No formal funding; use discretionary spend

---

## Section 5 — Design AI agents for business solutions (Q41–Q50)

**Q41.** Which element defines *what an agent is for* and constrains its behavior?

- A. The connector list
- B. The environment name
- C. The agent instructions/system prompt, including role, scope, tone, and guardrails
- D. The publisher prefix

**Q42.** An agent must look up order status from an external ERP. What is the correct design element?

- A. A knowledge source
- B. A tool/action that calls the ERP API with the agent passing parameters
- C. A larger system prompt containing all orders
- D. A topic trigger phrase only

**Q43.** What is the primary purpose of a knowledge source in an agent?

- A. To define the agent's icon
- B. To execute transactions
- C. To store user credentials
- D. To provide grounding content the agent retrieves from to answer questions accurately

**Q44.** Which trigger type suits an agent that must act when a new high-priority case is created in Dynamics 365?

- A. Scheduled monthly run
- B. Event/record-based automatic trigger
- C. User-typed chat message
- D. Manual admin execution

**Q45.** When should you split one large agent into multiple specialized agents?

- A. Only when token limits are exceeded
- B. Only if different teams pay for licenses
- C. When scope, knowledge, permissions, or ownership diverge enough that a single agent becomes ambiguous and hard to govern
- D. Never; one agent is always simpler

**Q46.** In multi-agent design, what does an orchestrator agent do?

- A. Stores conversation history
- B. Handles licensing
- C. Replaces the need for tools
- D. Interprets the user goal and delegates to specialized child agents, then composes the result

**Q47.** Which is the best practice for handling an out-of-scope user question?

- A. Provide a defined fallback that states the limitation and offers escalation or handoff
- B. End the session immediately without message
- C. Let the model answer from general knowledge silently
- D. Return an empty response

**Q48.** What identity model should an agent use when reading a user's own documents?

- A. Delegated/user-context authentication so existing permissions are enforced
- B. Anonymous access
- C. A shared service account with broad access
- D. A hardcoded API key

**Q49.** Which design detail most improves the reliability of an agent's tool selection?

- A. Vague, generic tool descriptions
- B. Clear, distinct tool names, descriptions, and parameter schemas that state when to use each tool
- C. Removing all tool descriptions
- D. Adding as many tools as possible

**Q50.** Which is a valid reason to include a confirmation step before an agent action?

- A. The action is read-only
- B. The action is irreversible or has financial, legal, or customer-facing impact
- C. The agent is in a test environment
- D. The user is an administrator

---

## Section 6 — Design extensibility of AI solutions (Q51–Q60)

**Q51.** What is the primary purpose of extending Microsoft 365 Copilot rather than building a standalone agent?

- A. To meet users in their existing workflow and reuse Copilot's orchestration, identity, and grounding
- B. To avoid governance
- C. To avoid licensing
- D. To reduce model quality

**Q52.** Which extensibility option grounds Microsoft 365 Copilot in external data indexed into Microsoft Graph?

- A. Power Automate flows
- B. Dataverse plug-ins
- C. Azure Functions
- D. Graph connectors

**Q53.** What does the Model Context Protocol (MCP) provide in an extensibility architecture?

- A. A standardized way for agents to discover and call external tools and data sources
- B. A model training framework
- C. A UI component library
- D. A billing meter

**Q54.** A declarative agent differs from a custom engine agent primarily because it:

- A. Cannot be published
- B. Uses the host Copilot's orchestrator and model, with configured instructions, knowledge, and actions
- C. Requires you to host your own model and orchestration
- D. Cannot use knowledge sources

**Q55.** Which scenario justifies a custom engine agent?

- A. Adding a prompt starter
- B. Simple FAQ grounding on SharePoint
- C. Requirement for a specific model, custom orchestration logic, or non-Microsoft hosting constraints
- D. Adding a few Graph connector sources

**Q56.** When designing reusable extensibility components, what is the key architectural goal?

- A. Tight coupling to a single business unit
- B. Loose coupling with well-defined contracts so components can be shared across agents and solutions
- C. Duplicating logic per agent
- D. Hardcoding environment URLs

**Q57.** Which is the correct way to expose a legacy on-premises system to an agent?

- A. Open the database to the internet
- B. Copy the database into the prompt
- C. Email exports to users
- D. Expose a governed API layer (with gateway/connector, authentication, and throttling) that the agent calls

**Q58.** What must be considered when an extension calls a downstream API on the user's behalf?

- A. Only network latency
- B. Only the API response format
- C. Token exchange, consent, least privilege scopes, and per-user authorization enforcement
- D. Only pricing

**Q59.** Which practice best supports versioning of an extensibility component?

- A. Never change the component
- B. Rename it each release
- C. Version the contract (for example /v1, /v2), support a deprecation window, and communicate changes to consumers
- D. Overwrite the existing endpoint in place

**Q60.** Which is a valid limitation to design around when extending Copilot experiences?

- A. Extensions can perform any action without permission checks
- B. Knowledge sources are unlimited in all cases
- C. Response size, latency budgets, supported authentication types, and capability limits of the host surface
- D. There are no throttling limits

---

## Section 7 — Orchestrate configuration of prebuilt agents and apps (Q61–Q70)

**Q61.** A business wants Dynamics 365 sales summarization quickly. What should the architect check first?

- A. How to build a custom agent from scratch
- B. Whether the prebuilt/out-of-box Copilot capability can be enabled and configured to meet the need
- C. Which Azure region to deploy to
- D. Which model to fine-tune

**Q62.** Which is a correct sequence for rolling out a prebuilt Copilot capability?

- A. Pilot → build custom replacement → enable
- B. Validate prerequisites and licensing → enable in a non-production environment → configure and test → pilot → broad rollout with training
- C. Enable in production → tell users → hope
- D. Buy licenses → disable governance

**Q63.** What typically controls whether a prebuilt Dynamics 365 Copilot feature is visible to a user?

- A. The user's browser
- B. Licensing, admin feature enablement, security role/privileges, and environment/region availability
- C. Their device type
- D. Their display language only

**Q64.** Which is the most appropriate way to tailor a prebuilt agent's answers to company terminology?

- A. Fine-tune the base model
- B. Configure grounding sources, custom instructions, and supported customization settings
- C. Rewrite the product code
- D. Ask users to rephrase questions

**Q65.** When a prebuilt capability *almost* meets requirements, what is the recommended progression?

- A. Build custom immediately
- B. Extend → build custom → configure
- C. Configure → extend → build custom, in that order
- D. Build custom → configure → extend

**Q66.** Which governance control should be applied before enabling a prebuilt agent broadly?

- A. Only a communications plan
- B. Data access review, DLP policies, environment strategy, and a documented owner
- C. Only a cost estimate
- D. None; prebuilt agents are pre-governed

**Q67.** A prebuilt agent surfaces data that some users should not see. What is the most likely root cause?

- A. The prompt was too short
- B. The model hallucinated the data
- C. Underlying source permissions are overly broad, and the agent honors those permissions
- D. The agent needs a bigger model

**Q68.** Which orchestration concern arises when multiple agents are available to the same user?

- A. Nothing; users always pick correctly
- B. Reduced identity requirements
- C. Overlapping scope causing routing ambiguity, so scope, naming, and discovery must be curated
- D. Increased storage cost only

**Q69.** What is the best approach to managing configuration drift across environments for prebuilt agent settings?

- A. Manual configuration in each environment
- B. Configure only in production
- C. Allow each admin to configure freely
- D. Documented configuration baselines with automated deployment/validation where supported

**Q70.** Which measure best validates a prebuilt agent rollout succeeded?

- A. Adoption plus measured improvement in the targeted business metric, with user feedback
- B. Number of environments created
- C. Number of admin settings changed
- D. Number of licenses assigned

---

## Section 8 — Monitor, analyze, and tune AI agents (Q71–Q80)

**Q71.** Which metric best measures whether an agent resolved the user's need without human help?

- A. Containment/resolution rate
- B. Session count
- C. Number of topics published
- D. Average tokens per response

**Q72.** An agent shows high engagement but low resolution. What is the most likely issue?

- A. Too many licenses
- B. Too few users
- C. Network latency
- D. Gaps in knowledge coverage or unclear instructions causing incomplete answers

**Q73.** What is the purpose of an evaluation dataset for an agent?

- A. To provide representative test inputs with expected outcomes so quality can be measured consistently over time
- B. To generate license reports
- C. To train the base model
- D. To store user PII

**Q74.** Which signal indicates possible grounding failure (hallucination)?

- A. Responses with citations to approved sources
- B. Responses that escalate to a human
- C. Responses that are confident but unsupported by any retrieved citation
- D. Responses that ask a clarifying question

**Q75.** Which telemetry is most useful for diagnosing why an agent chose the wrong tool?

- A. Traced reasoning/tool-selection logs with inputs, chosen tool, parameters, and outcome
- B. CPU utilization
- C. License assignment logs
- D. Browser version

**Q76.** What is the recommended cadence approach for tuning an agent?

- A. Continuous improvement loop: monitor → analyze failures → adjust knowledge/instructions/tools → re-evaluate → release
- B. Tune once at go-live
- C. Tune annually regardless of data
- D. Tune only when users complain loudly

**Q77.** Which practice improves retrieval quality most directly?

- A. Adding more unrelated documents
- B. Reducing logging
- C. Increasing temperature
- D. Curating, chunking, and maintaining authoritative content with accurate metadata

**Q78.** Which combination forms a balanced agent scorecard?

- A. Quality, adoption, efficiency (cost/latency), and safety/compliance metrics
- B. Cost only
- C. Latency only
- D. User satisfaction only

**Q79.** A/B testing two sets of agent instructions is best used to:

- A. Replace monitoring
- B. Empirically determine which variant produces better measured outcomes before full rollout
- C. Reduce licensing
- D. Avoid evaluation datasets

**Q80.** Which alerting condition is appropriate for production agents?

- A. Daily license count
- B. Every successful response
- C. Any user message
- D. Spikes in fallback/escalation rate, error rate, latency, or content-filter triggers

---

## Section 9 — Manage testing AI-powered business solutions (Q81–Q90)

**Q81.** Why is traditional deterministic testing insufficient for generative AI solutions?

- A. Outputs are probabilistic, so testing must assess quality ranges and behaviors, not exact string matches
- B. There is no test tooling available
- C. Tests cannot be automated at all
- D. Models never change

**Q82.** Which test type verifies the agent refuses harmful or out-of-policy requests?

- A. Load testing
- B. Unit testing of connectors
- C. Safety/red-team (adversarial) testing
- D. Accessibility testing

**Q83.** What does regression testing protect against in an agent solution?

- A. Network outages
- B. Growth in user adoption
- C. License expiry
- D. Previously working behaviors breaking after prompt, knowledge, model, or tool changes

**Q84.** Which metric pair is most relevant for evaluating retrieval-grounded answers?

- A. CPU and memory
- B. Groundedness and relevance
- C. Uptime and MTTR only
- D. Storage and bandwidth

**Q85.** Who should participate in user acceptance testing for a business agent?

- A. Only executives
- B. Representative end users and business process owners performing real tasks
- C. Only the security team
- D. Only the development team

**Q86.** What is the correct treatment of test data containing personal information?

- A. Store it in a public repository
- B. Use production PII freely in test environments
- C. Delete all test data before testing
- D. Use masked, synthetic, or minimized data with the same protection controls as production

**Q87.** Which testing activity best validates end-to-end business value?

- A. Prompt spell-check
- B. Scenario-based testing that follows a complete business process across agent, tools, and downstream systems
- C. Component unit tests
- D. Icon review

**Q88.** How should test results influence release decisions?

- A. Let the maker decide alone
- B. Release regardless of results
- C. Define quality gates with thresholds (for example groundedness, task success, safety) that must pass to promote
- D. Release only if zero defects exist

**Q89.** When a model version is updated by the platform, what should happen?

- A. Re-run the evaluation suite and regression tests to detect behavior changes before or immediately after adoption
- B. Rebuild the agent from scratch
- C. Nothing; behavior is guaranteed identical
- D. Disable the agent permanently

**Q90.** Which is the best way to scale testing effort sustainably?

- A. Manual testing only
- B. Automated evaluation pipelines with curated datasets, run on each significant change
- C. Rely on user complaints
- D. Test only at year end

---

## Section 10 — Design ALM process for AI-powered business solutions (Q91–Q100)

**Q91.** Which environment strategy is recommended for Power Platform / Copilot Studio ALM?

- A. Development in production, test in development
- B. Separate development, test, and production environments with controlled promotion
- C. A single environment for everything
- D. One environment per user

**Q92.** What is the correct way to move a Copilot Studio agent between environments?

- A. Copy the URL
- B. Recreate manually in each environment
- C. Package the agent in a managed solution and deploy through the pipeline
- D. Export chat transcripts

**Q93.** Why should production deployments use *managed* solutions?

- A. They are faster to import
- B. They skip validation
- C. They cost less
- D. They prevent uncontrolled in-place edits and support clean upgrade/uninstall semantics

**Q94.** What should environment variables be used for?

- A. Storing secrets in plain text
- B. Naming agents
- C. Storing conversation history
- D. Parameterizing environment-specific values (URLs, IDs, settings) so the same solution deploys everywhere

**Q95.** Where should secrets and API keys used by agent connections be stored?

- A. In a shared spreadsheet
- B. In the solution as plain text
- C. In Azure Key Vault, referenced securely by environment variables/connections
- D. In agent instructions

**Q96.** Which artifacts should be under source control for an AI solution?

- A. Only documentation
- B. Solution/agent definitions, prompts/instructions, configuration, evaluation datasets, and pipeline definitions
- C. Nothing; the platform stores everything
- D. Only C# code

**Q97.** What is the primary benefit of automated deployment pipelines for agents?

- A. Eliminates the need for testing
- B. Reduces license cost
- C. Removes governance requirements
- D. Repeatable, auditable, low-risk promotion with consistent configuration and approvals

**Q98.** Which practice supports safe rollback of an agent release?

- A. Deleting the agent
- B. No versioning
- C. Versioned releases with the ability to restore the prior published version, plus documented rollback steps
- D. Editing production directly

**Q99.** How should makers (citizen developers) be integrated into ALM?

- A. Give all makers production access
- B. Provide governed maker environments, standards, and a promotion path with review gates
- C. Block makers entirely
- D. Let makers deploy without review

**Q100.** Which deployment approach reduces blast radius for a major agent change?

- A. Big-bang release to all users
- B. Silent release with no monitoring
- C. Release on Friday evening
- D. Progressive rollout (ring-based/canary) with monitoring and defined rollback criteria

---

## Section 11 — Responsible AI, security, governance, risk, and compliance (Q101–Q110)

**Q101.** Which set correctly lists Microsoft's Responsible AI principles?

- A. Confidentiality; integrity; availability
- B. Speed; cost; scale; accuracy
- C. Availability; durability; latency; throughput
- D. Fairness; reliability and safety; privacy and security; inclusiveness; transparency; accountability

**Q102.** Which principle is most directly at risk when an agent performs better for one demographic group than another?

- A. Transparency
- B. Reliability
- C. Fairness
- D. Accountability

**Q103.** What is the primary purpose of a Data Loss Prevention (DLP) policy in Power Platform?

- A. To restrict which connectors and data sources can be combined, preventing unsanctioned data flows
- B. To assign licenses
- C. To improve model accuracy
- D. To reduce token consumption

**Q104.** Which control ensures an agent cannot surface content a user is not entitled to see?

- A. A shorter prompt
- B. Enforcing existing identity and permissions at retrieval time (permission trimming) via delegated access
- C. Turning off logging
- D. A disclaimer in the response

**Q105.** What does a Responsible AI impact assessment produce?

- A. Documented intended uses, stakeholders, potential harms, mitigations, and residual risk with an accountable owner
- B. A license inventory
- C. A cost model
- D. A network topology

**Q106.** Which mitigation best addresses prompt injection from untrusted content?

- A. Trusting all retrieved content as instructions
- B. Removing citations
- C. Treating retrieved content as data, isolating instructions, validating tool inputs, and constraining action permissions
- D. Increasing max tokens

**Q107.** Which capability supports compliance requirements such as eDiscovery and retention for Copilot interactions?

- A. Microsoft Purview
- B. Microsoft Fabric
- C. Azure DevOps
- D. Power BI

**Q108.** What is the correct approach to transparency for users interacting with an agent?

- A. Hide that it is AI to increase trust
- B. Disclose only to administrators
- C. Disclose only if asked
- D. Clearly disclose AI involvement, its limitations, data usage, and how to reach a human

**Q109.** Which is an appropriate risk response when an agent handles a high-impact regulated decision?

- A. Human review/approval, decision logging, explainability, and periodic audit
- B. Remove logging to protect privacy
- C. Rely on the model provider's assurances alone
- D. Full autonomy with no oversight

**Q110.** Which combination best represents defense in depth for an enterprise agent?

- A. Network firewall only
- B. Identity and least privilege; DLP and data classification; content safety filters; monitoring and audit; incident response
- C. Strong passwords only
- D. A single content filter

---

## Answer key

| Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|---|---|---|---|---|---|---|
| 1 | D | 29 | C | 57 | D | 85 | B |
| 2 | D | 30 | D | 58 | C | 86 | D |
| 3 | D | 31 | A | 59 | C | 87 | B |
| 4 | A | 32 | A | 60 | C | 88 | C |
| 5 | C | 33 | B | 61 | B | 89 | A |
| 6 | B | 34 | B | 62 | B | 90 | B |
| 7 | B | 35 | C | 63 | B | 91 | B |
| 8 | B | 36 | C | 64 | B | 92 | C |
| 9 | A | 37 | A | 65 | C | 93 | D |
| 10 | B | 38 | C | 66 | B | 94 | D |
| 11 | D | 39 | C | 67 | C | 95 | C |
| 12 | D | 40 | C | 68 | C | 96 | B |
| 13 | A | 41 | C | 69 | D | 97 | D |
| 14 | A | 42 | B | 70 | A | 98 | C |
| 15 | C | 43 | D | 71 | A | 99 | B |
| 16 | C | 44 | B | 72 | D | 100 | D |
| 17 | A, C | 45 | C | 73 | A | 101 | D |
| 18 | D | 46 | D | 74 | C | 102 | C |
| 19 | C | 47 | A | 75 | A | 103 | A |
| 20 | C | 48 | A | 76 | A | 104 | B |
| 21 | C | 49 | B | 77 | D | 105 | A |
| 22 | A | 50 | B | 78 | A | 106 | C |
| 23 | D | 51 | A | 79 | B | 107 | A |
| 24 | D | 52 | D | 80 | D | 108 | D |
| 25 | C | 53 | A | 81 | A | 109 | A |
| 26 | D | 54 | B | 82 | C | 110 | B |
| 27 | B | 55 | C | 83 | D |  |  |
| 28 | D | 56 | B | 84 | B |  |  |

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
