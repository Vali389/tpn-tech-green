import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Target, Heart, Zap, Users, Globe2, Sparkles } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TPN-Tech — AI Recruiting Leaders" },
      { name: "description", content: "Learn about TPN-Tech's mission to merge AI recruiting with human expertise. Meet our team, values, and story." },
      { property: "og:title", content: "About TPN-Tech" },
      { property: "og:description", content: "The story, values and team behind TPN-Tech's AI-powered staffing." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About TPN-Tech"
        title={<>We build the <span className="text-gradient">talent teams</span> of tomorrow.</>}
        subtitle="Founded in 2018, TPN-Tech pioneered AI-augmented recruiting. Today we place thousands of engineers, executives and contractors every year across four continents."
        height="md"
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full btn-brand px-6 py-3 text-sm">
          Partner with us <ArrowRight className="h-4 w-4" />
        </Link>
      </Hero>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <div className="animate-slide-in-left">
            <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Our story
            </span>
            <h2 className="text-4xl font-bold md:text-5xl">
              From a garage in Austin to <span className="text-gradient">global recruiting AI</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              TPN-Tech began when two ex-Google engineers and a veteran executive recruiter realised the old world of keyword-driven ATS search was broken. We built an AI engine that reads job descriptions and profiles the way a great recruiter would — with context, nuance and judgement.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Six years later, TPN-Tech has placed more than 12,000 professionals, from Series A founders to Fortune 500 CTOs. We're headquartered in San Francisco with hubs in Austin, London, São Paulo and Bengaluru.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "2018", v: "Founded" },
                { k: "180+", v: "Team members" },
                { k: "40+", v: "Markets" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-3xl font-bold text-gradient">{s.k}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 blur-2xl" />
            <div className="relative flex aspect-[4/3] w-full items-center justify-center rounded-3xl border border-border bg-card-gradient p-10 shadow-glow">
              <div className="text-center">
                <p className="text-5xl font-bold text-gradient">12K+</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">Professionals placed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { i: Target, t: "Our mission", d: "To make hiring dramatically faster, fairer and more human by combining AI with world-class recruiters." },
              { i: Sparkles, t: "Our vision", d: "A world where every company, from Series A to Fortune 100, hires with the same precision the largest tech firms enjoy today." },
            ].map((m, i) => (
              <div
                key={m.t}
                className="rounded-3xl border border-border bg-card-gradient p-10 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl btn-brand">
                  <m.i className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold">{m.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Values"
            title={<>What we stand <span className="text-gradient">for</span></>}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Heart, t: "Candidate first", d: "Every candidate deserves a great experience — hired or not." },
              { i: Zap, t: "Speed with rigour", d: "Fast is a feature. So is quality. We refuse to trade them." },
              { i: Award, t: "Craft & science", d: "Recruiting is a craft. AI is a lens. We honour both." },
              { i: Globe2, t: "Global by design", d: "Talent has no borders. Neither do our teams." },
            ].map((v, i) => (
              <div
                key={v.t}
                className="rounded-2xl border border-border bg-surface/60 p-8 animate-fade-up hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <v.i className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Leadership"
            title={<>Meet our <span className="text-gradient">leadership team</span></>}
            subtitle="Ex-Google, Microsoft, Amazon and Korn Ferry leaders who've built recruiting programs at the largest and fastest-growing companies in the world."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "Nikhil Reddy", r: "Co-founder & CEO", b: "Ex-Google engineering. Built TPN's AI engine from day one." },
              { n: "Priya Menon", r: "Co-founder & CTO", b: "Ex-Microsoft AI Research. Leads the ML platform." },
              { n: "Marcus Hollis", r: "Chief Recruiting Officer", b: "20 years at Korn Ferry. Runs our executive search practice." },
              { n: "Aisha Farouk", r: "Chief People Officer", b: "Scaled People at three unicorns. Owns culture & DEI." },
            ].map((p, i) => (
              <div
                key={p.n}
                className="group rounded-2xl border border-border bg-card-gradient p-6 text-center animate-fade-up hover:border-primary/50 transition-all hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full btn-brand text-2xl font-bold">
                  {p.n.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold">{p.n}</h3>
                <p className="text-sm text-primary">{p.r}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture strip */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { i: Users, t: "180+ humans", d: "Recruiters, engineers, researchers and designers across 4 continents." },
              { i: Globe2, t: "40+ markets", d: "Placing talent in every major tech hub and emerging market." },
              { i: Award, t: "Top-rated employer", d: "Glassdoor 4.7, Great Place to Work certified 3 years running." },
            ].map((c, i) => (
              <div
                key={c.t}
                className="flex gap-5 rounded-2xl border border-border bg-surface/60 p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl btn-brand">
                  <c.i className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Want to <span className="text-gradient">work with us?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Whether you're hiring or looking for your next role, TPN-Tech is here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full btn-brand px-6 py-3 text-sm inline-flex items-center gap-2">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="rounded-full btn-outline-brand px-6 py-3 text-sm">
              See our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
