import aiSourcing from "@/assets/svc-ai-sourcing.jpg";
import executive from "@/assets/svc-executive.jpg";
import itStaffing from "@/assets/svc-it-staffing.jpg";
import contract from "@/assets/svc-contract.jpg";
import rpo from "@/assets/svc-rpo.jpg";
import consulting from "@/assets/svc-consulting.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  tag: string;
  tagTone: "cyan" | "green" | "amber";
  short: string;
  image: string;
  overview: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "ai-talent-sourcing",
    title: "AI Talent Sourcing",
    tagline: "Precision candidates, matched by machine learning.",
    tag: "AI POWERED",
    tagTone: "green",
    short:
      "Our proprietary AI engine screens millions of profiles, ranks fit, and delivers a shortlist you'll actually want to interview.",
    image: aiSourcing,
    overview:
      "TPN-Tech's AI Talent Sourcing platform combines vector search, semantic role matching, and behavioural signal analysis to surface candidates that traditional keyword searches miss. Every shortlist is enriched with skill scores, culture fit, and availability signals.",
    features: [
      { title: "Semantic role matching", description: "LLM-based understanding of job intent, not just keywords." },
      { title: "Bias-aware ranking", description: "Fairness models that de-emphasize proxies for age, gender and background." },
      { title: "Real-time market pulse", description: "Live salary benchmarks and talent supply across 40+ markets." },
      { title: "ATS integrations", description: "Native plug-ins for Greenhouse, Lever, Workday and iCIMS." },
    ],
    process: [
      { step: "01", title: "Intake", description: "We ingest your JD, team charter and success criteria." },
      { step: "02", title: "Model tuning", description: "Weights are calibrated to your must-haves and nice-to-haves." },
      { step: "03", title: "AI shortlist", description: "Top 20 candidates delivered in 48 hours with fit rationale." },
      { step: "04", title: "Human validation", description: "Our recruiters interview and rank before you see the list." },
    ],
    outcomes: ["68% shorter time-to-shortlist", "3.2x higher offer-accept rate", "40% lower cost per hire"],
  },
  {
    slug: "executive-search",
    title: "Executive Search",
    tagline: "Leadership hires that shape the next decade.",
    tag: "PREMIUM",
    tagTone: "amber",
    short:
      "Retained search for C-suite, VP and Director roles with a discreet, research-led approach and confidential shortlists.",
    image: executive,
    overview:
      "We run a research-led, retained executive search practice for high-growth technology, healthcare, and financial services firms. Every engagement is led by a partner with 15+ years of leadership hiring experience.",
    features: [
      { title: "Confidential research", description: "Off-market outreach without exposing your brand." },
      { title: "Leadership assessment", description: "Hogan, structured competency and reference deep-dives." },
      { title: "Board & C-suite", description: "CEO, CTO, CFO, CRO, CHRO placements across regions." },
      { title: "Diversity guarantee", description: "50%+ diverse slate on every retained mandate." },
    ],
    process: [
      { step: "01", title: "Mandate design", description: "Success profile, market map, and governance model." },
      { step: "02", title: "Market mapping", description: "Comprehensive research across 200+ target companies." },
      { step: "03", title: "Assessment", description: "Multi-stage interviews, references, and psychometric testing." },
      { step: "04", title: "Onboarding", description: "100-day integration plan and executive coaching." },
    ],
    outcomes: ["94% first-year retention", "Global reach across 30 countries", "12-week average time to offer"],
  },
  {
    slug: "it-staffing",
    title: "IT Staffing",
    tagline: "Engineers, architects and product talent — on demand.",
    tag: "MOST HIRED",
    tagTone: "cyan",
    short:
      "Full-time, contract, and contract-to-hire engineers vetted against your stack and delivery cadence.",
    image: itStaffing,
    overview:
      "We staff engineering, data, cloud and product teams for enterprises and scale-ups. Every candidate is technically screened by senior engineers, not generalist recruiters.",
    features: [
      { title: "Deep tech screening", description: "Live coding, system-design and architecture reviews." },
      { title: "Stack specialists", description: "Cloud, data, ML, mobile, web, security, DevOps." },
      { title: "Nearshore & remote", description: "Time-zone aligned pods across the Americas and EMEA." },
      { title: "Rapid ramp", description: "First candidates within 5 business days." },
    ],
    process: [
      { step: "01", title: "Requirements", description: "Technical brief, stack constraints and team norms." },
      { step: "02", title: "Screening", description: "Two-stage technical interviews by senior engineers." },
      { step: "03", title: "Client interview", description: "Shortlist of 3–5 pre-vetted engineers." },
      { step: "04", title: "Onboarding", description: "Managed onboarding, tooling, and 30/60/90 check-ins." },
    ],
    outcomes: ["5-day average time to first candidate", "92% technical pass rate", "24-month median tenure"],
  },
  {
    slug: "contract-staffing",
    title: "Contract Staffing",
    tagline: "Flex your workforce, without the friction.",
    tag: "FLEXIBLE",
    tagTone: "green",
    short:
      "Short-term and project-based talent with compliant payroll, benefits and end-to-end contractor management.",
    image: contract,
    overview:
      "Scale up for a launch, cover parental leave, or ramp a program without the overhead of full-time hires. We handle sourcing, contracts, payroll, benefits and compliance across all 50 states.",
    features: [
      { title: "W-2 & 1099", description: "Full employer-of-record for compliant contracting." },
      { title: "Global payroll", description: "Contractors paid in 60+ countries and 30+ currencies." },
      { title: "Compliance", description: "SOC2, ACA, IR35 and state-level co-employment compliance." },
      { title: "Fast conversion", description: "Contract-to-hire pathway with no conversion fees after 12 months." },
    ],
    process: [
      { step: "01", title: "Scope", description: "Project brief, duration and skill mix." },
      { step: "02", title: "Deploy", description: "Contractors on-site or remote within 7 days." },
      { step: "03", title: "Manage", description: "Time tracking, invoicing, benefits and support." },
      { step: "04", title: "Transition", description: "Convert to full-time or roll off cleanly." },
    ],
    outcomes: ["7-day average deployment", "0 compliance issues in 5 years", "35% conversion to full-time"],
  },
  {
    slug: "rpo",
    title: "RPO Solutions",
    tagline: "We run your recruiting function, end-to-end.",
    tag: "ENTERPRISE",
    tagTone: "cyan",
    short:
      "Recruitment Process Outsourcing that plugs into your ATS and delivers hiring at scale under your employer brand.",
    image: rpo,
    overview:
      "Our RPO practice runs high-volume, multi-region hiring programs on your ATS and under your brand. From 20 hires a quarter to 500 hires a month, we scale the pod with you.",
    features: [
      { title: "Embedded pods", description: "Sourcers, recruiters, coordinators and analysts on your team." },
      { title: "Employer-brand aligned", description: "We recruit as an extension of your talent team." },
      { title: "Analytics dashboards", description: "Real-time funnel, cost, quality and DEI metrics." },
      { title: "Program flex", description: "Scale up or down by seat within 30 days." },
    ],
    process: [
      { step: "01", title: "Design", description: "Operating model, SLAs, tooling and hand-offs." },
      { step: "02", title: "Stand-up", description: "Pod hired, trained and ATS-integrated in 4 weeks." },
      { step: "03", title: "Deliver", description: "Weekly funnel reviews and monthly QBRs." },
      { step: "04", title: "Optimize", description: "Continuous improvement across sourcing, screening and offers." },
    ],
    outcomes: ["45% lower cost per hire", "SLA adherence >97%", "Programs live in 30 days"],
  },
  {
    slug: "workforce-consulting",
    title: "Workforce Consulting",
    tagline: "Strategy, workforce planning and talent transformation.",
    tag: "STRATEGIC",
    tagTone: "amber",
    short:
      "Advisory for CHROs and TA leaders on org design, workforce planning, AI adoption in TA, and DEI programs.",
    image: consulting,
    overview:
      "We help talent leaders answer the hard questions: how to redesign the recruiting function around AI, how to plan a workforce for the next three years, and how to build inclusive, resilient teams.",
    features: [
      { title: "AI adoption playbooks", description: "Vendor selection, workflow redesign, change management." },
      { title: "Workforce planning", description: "3-year scenarios by skill, geo and cost." },
      { title: "Org design", description: "Recruiting function redesign for scale." },
      { title: "DEI programs", description: "Sourcing, interview and promotion redesign." },
    ],
    process: [
      { step: "01", title: "Diagnose", description: "Discovery interviews, data audit, benchmark." },
      { step: "02", title: "Design", description: "Target operating model and roadmap." },
      { step: "03", title: "Build", description: "Playbooks, tooling, hiring plans and training." },
      { step: "04", title: "Scale", description: "Change management and adoption tracking." },
    ],
    outcomes: ["10-week engagements", "Fortune 500 client base", "Measurable ROI in 2 quarters"],
  },
];

export const featuredServices = services.filter((s) =>
  ["ai-talent-sourcing", "workforce-consulting"].includes(s.slug),
);

export const getService = (slug: string) => services.find((s) => s.slug === slug);
