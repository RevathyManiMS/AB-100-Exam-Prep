/* Modules 9-11 */
module.exports = [
{
  n: 9,
  title: "Manage testing AI-powered business solutions",
  navTitle: "Testing",
  short: "Test probabilistic systems properly: evaluation metrics, validation criteria, adversarial testing, and quality gates.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/manage-testing-ai-powered-business-solutions/",
  qFrom: 81, qTo: 90,
  units: [
    "Introduction",
    "Recommend process metrics for testing AI agents",
    "Create validation criteria for custom AI models",
    "Validate effective Copilot prompt best practices",
    "Design end-to-end test scenarios for AI solutions using multiple Dynamics 365 apps",
    "Build a strategy for creating test cases using Copilot",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "Testing generative systems breaks the habits of deterministic QA. The same input can produce different valid outputs, so assertions must target **behaviour and quality ranges** rather than exact strings.",
    "The module also covers end-to-end scenario testing across multiple Dynamics 365 apps, and using Copilot itself to help generate test cases — with human review of what it produces."
  ],
  bigIdea: "You cannot assert equality against a probabilistic output. You assert groundedness, relevance, task success, safety, and consistency — measured against a curated dataset with agreed thresholds.",
  concepts: [
    ["Probabilistic output", "Valid responses vary between runs. Testing must therefore measure quality characteristics, not exact matches."],
    ["Groundedness", "Is the answer supported by the retrieved sources? A primary metric for retrieval-grounded solutions."],
    ["Relevance", "Does the answer actually address the question asked? The natural companion metric to groundedness."],
    ["Task success rate", "Did the interaction achieve the user's goal end to end? The closest proxy for business value."],
    ["Regression testing", "Re-running known-good cases to detect breakage after changes to prompts, knowledge, models, or tools."],
    ["Safety / red-team testing", "Adversarial testing that the agent refuses harmful, out-of-policy, or manipulative requests, including prompt injection attempts."],
    ["Validation criteria", "The agreed, measurable definition of \"good enough\" for a model or agent before it may be promoted."],
    ["Quality gate", "A threshold — groundedness, task success, safety — that must be met for a release to proceed."],
    ["End-to-end scenario test", "Following a complete business process across the agent, its tools, and downstream systems. The best evidence of real business value."],
    ["User acceptance testing", "Representative end users and business process owners performing genuine tasks, not the delivery team clicking through."],
    ["Synthetic / masked test data", "Test data that preserves realism without exposing personal information, protected to the same standard as production."]
  ],
  guidance: [
    { h: "Building the test strategy", items: [
      "Assemble a curated evaluation dataset covering common paths, edge cases, and known past failures.",
      "Layer the testing: component tests for tools and connectors, quality evaluation for generative behaviour, end-to-end scenario tests for business value, and adversarial tests for safety.",
      "Use Copilot to help draft test cases, then have a human review them for coverage and correctness — generated cases are a starting point, not the final suite."
    ]},
    { h: "Gates and promotion", items: [
      "Define thresholds that must pass before promotion. \"Zero defects\" is not a workable gate for probabilistic systems; agreed thresholds are.",
      "Re-run the evaluation suite whenever the **platform updates the model version** — behaviour can shift even with no change on your side.",
      "Automate evaluation pipelines so the suite runs on every significant change; manual-only testing does not scale."
    ]},
    { h: "Data and participants", items: [
      "Use masked, synthetic, or minimised data in test environments, with production-grade protection.",
      "Involve real users and process owners in UAT — they surface workflow mismatches no internal tester will.",
      "Test the fallback and escalation paths deliberately; they are where poor agents are exposed."
    ]}
  ],
  doDont: {
    do: [
      "Measure groundedness, relevance, task success, and safety.",
      "Automate evaluation runs on every significant change.",
      "Re-test after platform model updates.",
      "Use masked or synthetic data with full protection."
    ],
    dont: [
      "Assert exact-string equality on generated text.",
      "Treat UAT as a developer walkthrough.",
      "Copy production personal data into test environments.",
      "Assume a model update is behaviour-neutral."
    ]
  },
  traps: [
    "Deterministic testing fails here because outputs are **probabilistic** — not because tooling is unavailable or automation is impossible.",
    "For retrieval-grounded answers the metric pair is **groundedness and relevance**, not infrastructure metrics like CPU, storage, or uptime.",
    "A platform model update requires **re-running evaluation and regression tests**. Behaviour is not guaranteed identical, and rebuilding from scratch is not required either.",
    "Release decisions hinge on agreed **quality gates**, not on zero defects and not on a single maker's judgement."
  ],
  checklist: [
    "Explain in one sentence why exact-match assertions fail for generative output.",
    "Name the metric pair for retrieval-grounded answers.",
    "Describe the four layers of an AI test strategy.",
    "State what must happen when the platform updates the model version.",
    "Define a quality gate and give two example thresholds."
  ],
  cram: [
    "Outputs are **probabilistic** → test quality ranges, never exact strings.",
    "Grounded answers → **groundedness + relevance**.",
    "Layers: component · quality evaluation · end-to-end scenario · adversarial/red-team.",
    "Model version changed? **Re-run evaluation and regression.**",
    "Promote on **quality gates**, not zero defects.",
    "Test data: masked or synthetic, protected like production."
  ]
},

{
  n: 10,
  title: "Design ALM process for AI-powered business solutions",
  navTitle: "ALM",
  short: "Move agents, connectors, data, and models through environments safely, repeatably, and auditably.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/design-alm-process-ai-powered-business-solutions/",
  qFrom: 91, qTo: 100,
  units: [
    "Introduction",
    "Design an ALM process for data used in AI models and agents",
    "Design an ALM process for Copilot Studio agents, connectors, and actions",
    "Design ALM processes for Microsoft Foundry agents",
    "Design an ALM process for custom AI models",
    "Design an ALM process for AI in Dynamics 365 Finance and Supply Chain",
    "Design ALM processes for AI in Dynamics 365 apps",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "Classic Power Platform ALM applies to agents, with additions. Alongside solutions and environment variables you must now version **prompts, instructions, knowledge configuration, and evaluation datasets** — because those determine behaviour as much as any code.",
    "Expect questions on managed versus unmanaged solutions, environment strategy, secret handling, and safe rollout."
  ],
  bigIdea: "If a change can alter agent behaviour, it belongs in source control and must travel through the same governed pipeline as code. That includes prompts and knowledge configuration.",
  concepts: [
    ["Environment strategy", "Separate development, test, and production environments with controlled promotion between them."],
    ["Managed solution", "The production deployment format. Prevents uncontrolled in-place editing and supports clean upgrade and uninstall semantics."],
    ["Unmanaged solution", "The development format, where components are authored and edited."],
    ["Environment variable", "Parameterises environment-specific values — URLs, IDs, settings — so one solution artifact deploys everywhere unchanged."],
    ["Azure Key Vault", "Where secrets and API keys belong, referenced securely by connections and environment variables. Never stored in the solution or in instructions."],
    ["Source control scope", "Solution and agent definitions, prompts and instructions, configuration, evaluation datasets, and pipeline definitions."],
    ["Deployment pipeline", "Automated, auditable promotion with consistent configuration and approval steps."],
    ["Progressive rollout", "Ring-based or canary release with monitoring and predefined rollback criteria, to limit blast radius."],
    ["Rollback plan", "Versioned releases plus the documented ability to restore the previously published version."],
    ["Maker governance", "Governed maker environments, published standards, and a promotion path with review gates — enabling citizen developers without giving them production."],
    ["Data ALM", "Lifecycle management of the datasets, knowledge sources, and prompts that ground models and agents."]
  ],
  guidance: [
    { h: "Promotion mechanics", items: [
      "Package the agent in a **solution** and deploy it through the pipeline. Never rebuild it by hand in each environment.",
      "Deploy **managed** solutions to production so nobody can edit components in place.",
      "Parameterise every environment-specific value with environment variables so the artifact is identical across environments.",
      "Keep secrets in Key Vault; a secret in a solution or a prompt is a finding, not a shortcut."
    ]},
    { h: "Release safety", items: [
      "Use progressive rollout — rings or canary — with monitoring and predefined rollback criteria for significant changes.",
      "Maintain versioned releases so the previous published version can be restored, with rollback steps documented and rehearsed.",
      "Never edit production directly, even to fix something quickly. That is how drift and untraceable behaviour begin."
    ]},
    { h: "Including makers", items: [
      "Give makers governed environments and clear standards, plus a promotion path with review gates.",
      "Do not grant production access to makers, and do not block makers entirely — both extremes are wrong answers.",
      "Apply the same discipline to data and prompts as to components: versioned, owned, reviewed."
    ]}
  ],
  doDont: {
    do: [
      "Separate dev, test, and production environments.",
      "Ship managed solutions to production.",
      "Store secrets in Key Vault only.",
      "Roll out progressively with defined rollback criteria."
    ],
    dont: [
      "Recreate agents manually per environment.",
      "Hardcode URLs and IDs into the solution.",
      "Edit production components in place.",
      "Big-bang release a major change to everyone."
    ]
  },
  traps: [
    "Production takes **managed** solutions. The reason is preventing uncontrolled in-place edits and enabling clean upgrade/uninstall — not import speed or cost.",
    "Environment variables parameterise configuration. They are not for secrets, not for naming agents, and not for storing conversation history.",
    "Source control covers prompts, instructions, knowledge configuration, and evaluation datasets — not just code.",
    "The correct maker posture is **governed enablement**: neither production access for all, nor an outright block."
  ],
  checklist: [
    "Describe the standard environment topology and promotion path.",
    "Explain why production uses managed solutions.",
    "List everything that belongs in source control for an agent solution.",
    "Say where secrets live and how they are referenced.",
    "Outline a progressive rollout with rollback criteria."
  ],
  cram: [
    "**Dev → test → prod**, controlled promotion, never edit prod.",
    "**Managed** solutions to production.",
    "**Environment variables** for config; **Key Vault** for secrets.",
    "Source control includes **prompts, knowledge config, evaluation datasets**.",
    "Progressive/ring rollout + versioned releases + documented rollback.",
    "Makers: governed environments and review gates — not production access, not a ban."
  ]
},

{
  n: 11,
  title: "Design responsible AI security, governance, risk management, and compliance",
  navTitle: "Responsible AI and security",
  short: "Apply the Responsible AI principles, defend against prompt manipulation, and design access control, residency, and audit.",
  learnUrl: "https://learn.microsoft.com/en-us/training/modules/design-responsible-ai-security-governance-risk-management-compliance/",
  qFrom: 101, qTo: 110,
  units: [
    "Introduction",
    "Design security agents for Microsoft clouds",
    "Design governance models for AI agents",
    "Design model security for responsible AI",
    "Analyze AI vulnerabilities and mitigations for prompt manipulation",
    "Review solution adherence to Responsible AI principles",
    "Validate data residency and movement compliance",
    "Design access controls for grounding data and model tuning",
    "Design audit trails for changes to models and data",
    "Module assessment",
    "Summary"
  ],
  overview: [
    "This module carries disproportionate exam weight because its content threads through every other module. You must know the six Responsible AI principles by name, recognise which one a scenario threatens, and design layered controls.",
    "Prompt injection deserves particular attention: it is the signature AI-specific vulnerability, and the mitigation pattern is precise."
  ],
  bigIdea: "Treat retrieved content as data, never as instructions — and enforce the user's own permissions at retrieval time. Those two rules prevent the majority of AI-specific incidents.",
  concepts: [
    ["Responsible AI principles", "**Fairness · Reliability and safety · Privacy and security · Inclusiveness · Transparency · Accountability.** Learn all six in order."],
    ["Fairness", "Comparable quality of service across groups. Threatened when an agent performs measurably better for one demographic than another."],
    ["Transparency", "Users know they are interacting with AI, understand its limitations and data use, and can reach a human."],
    ["Accountability", "A named human owner is answerable for the system's behaviour and outcomes."],
    ["Impact assessment", "Documented intended uses, stakeholders, potential harms, mitigations, and residual risk, with an accountable owner."],
    ["Prompt injection", "Untrusted content smuggling instructions into the model's context to hijack behaviour. The defining AI-specific attack."],
    ["Permission trimming", "Enforcing existing identity and permissions **at retrieval time**, so users only ever see content they are already entitled to."],
    ["Data Loss Prevention (DLP)", "Power Platform policies restricting which connectors and data sources may be combined, preventing unsanctioned data flows."],
    ["Microsoft Purview", "Supports compliance across Copilot interactions — eDiscovery, retention, audit, and information protection."],
    ["Microsoft Entra ID", "Identity provider for authentication, conditional access, and least-privilege authorisation."],
    ["Data residency and movement", "Where data is stored and processed, and the rules governing cross-border transfer."],
    ["Audit trail", "A durable record of changes to models, prompts, knowledge, and data, and of consequential agent decisions."],
    ["Defence in depth", "Layered controls: identity and least privilege; DLP and classification; content safety filters; monitoring and audit; incident response."]
  ],
  guidance: [
    { h: "Mitigating prompt injection", items: [
      "**Treat retrieved content as data, never as instructions.** This is the core of the answer.",
      "Isolate system instructions from retrieved context so untrusted text cannot override them.",
      "Validate tool inputs and constrain what actions the agent is permitted to take.",
      "Apply least privilege so a successful injection has minimal reach.",
      "Increasing token limits, removing citations, or trusting the source do nothing — they are distractors."
    ]},
    { h: "Access, residency, and audit", items: [
      "Enforce permissions at retrieval time through delegated access and permission trimming. A disclaimer in the response is not a control.",
      "Design access controls for grounding data **and** for model tuning inputs — tuning data leaks just as readily as retrieval data.",
      "Validate residency and cross-border movement against regional regulation before choosing a deployment topology.",
      "Maintain audit trails for changes to models, prompts, knowledge, and data, plus logs of consequential decisions."
    ]},
    { h: "High-impact and regulated decisions", items: [
      "Require human review or approval, decision logging, explainability, and periodic audit.",
      "Never rely solely on the model provider's assurances, and never remove logging in the name of privacy.",
      "Disclose AI involvement, limitations, and the route to a human clearly and proactively — to all users, not only administrators and not only on request."
    ]}
  ],
  doDont: {
    do: [
      "Enforce user permissions at retrieval time.",
      "Isolate instructions from untrusted retrieved content.",
      "Apply DLP policies and data classification.",
      "Keep audit trails for model, prompt, and data changes."
    ],
    dont: [
      "Rely on a disclaimer instead of a permission control.",
      "Let retrieved content dictate tool calls.",
      "Hide that the user is talking to AI.",
      "Disable logging to protect privacy."
    ]
  },
  traps: [
    "The six principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability. **Confidentiality/integrity/availability is the CIA triad, not Responsible AI.**",
    "Unequal performance across demographic groups is a **fairness** issue, not transparency or reliability.",
    "DLP restricts which **connectors and data sources may be combined**. It does not reduce token use, assign licences, or improve accuracy.",
    "The compliance capability for eDiscovery and retention over Copilot interactions is **Microsoft Purview** — not Power BI, Azure DevOps, or Fabric.",
    "Defence in depth means **layers**. A single content filter, a firewall alone, or passwords alone are all wrong answers."
  ],
  checklist: [
    "Recite the six Responsible AI principles.",
    "Match a scenario symptom to the principle it threatens.",
    "Give the four-part mitigation for prompt injection.",
    "Explain permission trimming and why a disclaimer is not equivalent.",
    "List the layers of a defence-in-depth design for an enterprise agent."
  ],
  cram: [
    "Six principles: **fairness · reliability & safety · privacy & security · inclusiveness · transparency · accountability**.",
    "Unequal service across groups = **fairness**.",
    "Prompt injection fix: content as **data not instructions**, isolate instructions, validate tool inputs, least privilege.",
    "**Permission trimming** at retrieval time — disclaimers are not controls.",
    "**DLP** = which connectors/data may combine. **Purview** = eDiscovery, retention, audit.",
    "High-impact decisions: human approval + logging + explainability + audit.",
    "Defence in depth = identity · DLP/classification · content safety · monitoring/audit · incident response."
  ]
}
];
