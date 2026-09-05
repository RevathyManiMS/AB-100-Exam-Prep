/* Content index: merges module content and defines cram-sheet material. */

const MODULES = [
  ...require("./modules-01-04.js"),
  ...require("./modules-05-08.js"),
  ...require("./modules-09-11.js")
];

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

module.exports = { MODULES, SITE };
