import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Zap, Users, Target, ShieldCheck, TrendingUp,
  Cpu, Globe2, Search, LineChart, CheckCircle2, Code2, Database, Cloud,
  Briefcase, Stethoscope, Building2, ShoppingBag, Rocket,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Testimonials } from "@/components/site/Testimonials";
import { featuredServices } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TPN-Tech — AI-Powered Staffing & Recruiting" },
      { name: "description", content: "TPN-Tech combines AI recruiting technology with human expertise to deliver executive, IT, and contract talent at speed." },
      { property: "og:title", content: "TPN-Tech — AI-Powered Staffing & Recruiting" },
      { property: "og:description", content: "AI recruiting, executive search, IT staffing, RPO and workforce consulting." },
    ],
  }),
  component: HomePage,
});

const industries = [
  { i: Cpu, t: "Technology" },
  { i: ShieldCheck, t: "Financial Services" },
  { i: Stethoscope, t: "Healthcare" },
  { i: Globe2, t: "SaaS" },
  { i: Zap, t: "Energy" },
  { i: ShoppingBag, t: "Consumer" },
  { i: Building2, t: "Manufacturing" },
  { i: Rocket, t: "Startups" },
  { i: Briefcase, t: "Professional Services" },
  { i: Cloud, t: "Cloud & Infra" },
];

const roles = [
  { t: "Software Engineers", d: "Full-stack, backend, mobile, frontend — pre-vetted across every modern stack.", i: Code2 },
  { t: "AI / ML Engineers", d: "LLM, GenAI, MLOps and data science talent for the AI-first era.", i: Sparkles },
  { t: "Data & Analytics", d: "Data engineers, analytics engineers, platform and BI specialists.", i: Database },
  { t: "Cloud & DevOps", d: "AWS, GCP, Azure, Kubernetes, SRE and platform engineers on demand.", i: Cloud },
  { t: "Product & Design", d: "PMs, designers and researchers who ship — from seed to scale.", i: Target },
  { t: "Executive & Leadership", d: "Retained C-suite, VP and Director search across every function.", i: Briefcase },
];

function HomePage() {
  return (
    <>
      <Hero
        eyebrow="AI-Powered Staffing"
        title={<>Hire smarter with <span className="text-gradient">AI recruiting</span> confidence.</>}
        subtitle="TPN-Tech blends machine intelligence with senior recruiters to place engineers, executives and contractors — faster, fairer, and at any scale."
      >
        <Link to="/services" className="inline-flex items-center gap-2 rounded-full btn-brand px-6 py-3 text-sm">
          Explore Services <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full btn-outline-brand px-6 py-3 text-sm">
          <Sparkles className="h-4 w-4" /> Talk to an AI Recruiter
        </Link>
      </Hero>

      {/* Services grid */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="What we do"
            title={<>Staffing services, <span className="text-gradient">reimagined</span></>}
            subtitle="From on-demand engineers to C-suite retained search, every engagement is powered by our AI and delivered by senior recruiters."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredServices.map((s, idx) => (
              <ServiceCard key={s.slug} service={s} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Roles we staff */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Roles we staff"
            title={<>Every function, <span className="text-gradient">every level</span></>}
            subtitle="From individual contributors to global leadership — our AI pipeline is trained across 40+ role families."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r, i) => (
              <div
                key={r.t}
                className="card-hover group rounded-2xl border border-border bg-card-gradient p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl btn-brand">
                  <r.i className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{r.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  Hire {r.t.split(" ")[0]} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — vertical timeline with animated connector */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Our process"
            title={<>From brief to <span className="text-gradient">badged hire</span></>}
            subtitle="A four-stage engagement that blends AI throughput with human judgement."
          />

          <div className="relative">
            {/* connector */}
            <div className="absolute left-1/2 top-6 hidden h-[calc(100%-3rem)] w-0.5 -translate-x-1/2 md:block">
              <div className="h-full w-full bg-gradient-to-b from-cyan-400/60 via-emerald-400/60 to-transparent animate-pulse-glow" />
            </div>

            <ol className="relative space-y-10 md:space-y-16">
              {[
                { n: "01", i: Target, t: "Discover", d: "Kick-off intake with hiring managers, success profile design, salary and market calibration." },
                { n: "02", i: Search, t: "Source", d: "AI engine ranks 10M+ profiles, delivering the top 1% shortlist enriched with skill and fit scores." },
                { n: "03", i: Users, t: "Screen", d: "Senior recruiters conduct structured interviews, validate skills, references and motivation." },
                { n: "04", i: TrendingUp, t: "Place", d: "Offer negotiation, onboarding orchestration and 30/60/90 day success check-ins." },
              ].map((p, i) => {
                const left = i % 2 === 0;
                return (
                  <li key={p.n} className={`relative flex flex-col gap-4 md:flex-row md:items-center ${left ? "" : "md:flex-row-reverse"}`}>
                    <div className={`md:w-1/2 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div
                        className="card-hover inline-block max-w-lg rounded-2xl border border-border bg-card-gradient p-7 text-left animate-fade-up"
                        style={{ animationDelay: `${i * 0.12}s` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-xl btn-brand">
                            <p.i className="h-5 w-5" />
                          </div>
                          <span className="text-3xl font-bold text-gradient">{p.n}</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold">{p.t}</h3>
                        <p className="mt-2 text-muted-foreground">{p.d}</p>
                      </div>
                    </div>
                    {/* center node */}
                    <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 ring-4 ring-background md:block" />
                    <div className="md:w-1/2" />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Industries — auto scrolling marquee */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Industries"
            title={<>Talent expertise across <span className="text-gradient">every vertical</span></>}
          />
        </div>
        <div
          className="group relative overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
        >
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...industries, ...industries].map((n, i) => (
              <div
                key={i}
                className="flex w-56 shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface/60 p-5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10">
                  <n.i className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-semibold">{n.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Why TPN-Tech"
            title={<>Built for the <span className="text-gradient">AI era of hiring</span></>}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "48-hour shortlists", d: "AI does the heavy lifting so your team sees candidates on day two, not week three.", i: Zap },
              { t: "Human validation", d: "Every AI-ranked candidate is interviewed by a senior recruiter before you see them.", i: Users },
              { t: "Global reach", d: "40+ markets, 30+ currencies, one platform. Hire anywhere, compliantly.", i: Globe2 },
              { t: "Bias-aware", d: "Fairness metrics on every search. Diverse slates by default.", i: ShieldCheck },
              { t: "Transparent pricing", d: "Flat fees for RPO. No inflated multipliers on contract rates.", i: LineChart },
              { t: "Long-term partners", d: "Median client tenure is 4.2 years. We show up for the long haul.", i: TrendingUp },
            ].map((b, i) => (
              <div
                key={b.t}
                className="card-hover rounded-2xl border border-border bg-card-gradient p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl btn-brand">
                  <b.i className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card-gradient p-12 text-center shadow-glow">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
            <h2 className="relative text-4xl font-bold md:text-5xl">
              Ready to hire with <span className="text-gradient">AI on your side?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Book a 30-minute intro call. Bring one open role — we'll show you a live AI shortlist by the end of the week.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full btn-brand px-6 py-3 text-sm">
                Book a call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full btn-outline-brand px-6 py-3 text-sm">
                <CheckCircle2 className="h-4 w-4" /> See all services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
