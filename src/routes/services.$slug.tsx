import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck, Users, TrendingUp, Star, Quote } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { getService, services, type Service } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service } as { service: NonNullable<ReturnType<typeof getService>> };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — TPN-Tech" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — TPN-Tech` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — TPN-Tech` },
        { property: "og:description", content: s.short },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 pt-24 text-center">
      <div>
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-primary">
          Back to services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Hero
        eyebrow={service.tag}
        title={<>{service.title.split(" ").slice(0, -1).join(" ")}{" "}<span className="text-gradient">{service.title.split(" ").slice(-1)}</span></>}
        subtitle={service.tagline}
        height="md"
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full btn-brand px-6 py-3 text-sm">
          Get started <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 rounded-full btn-outline-brand px-6 py-3 text-sm">
          All services
        </Link>
      </Hero>

      {/* Overview */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <div className="animate-slide-in-left">
            <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Overview
            </span>
            <h2 className="text-4xl font-bold md:text-5xl">
              What <span className="text-gradient">{service.title}</span> delivers
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
            <ul className="mt-8 space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-center gap-3 text-foreground">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/20">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-medium">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 blur-2xl" />
            <img
              src={service.image}
              alt={service.title}
              className="relative w-full rounded-3xl border border-border object-cover shadow-glow"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Features"
            title={<>What's <span className="text-gradient">included</span></>}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {service.features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card-gradient p-8 animate-fade-up hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl btn-brand">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Our process"
            title={<>How we <span className="text-gradient">deliver</span></>}
          />
          <div className="grid gap-6 md:grid-cols-4">
            {service.process.map((p, i) => (
              <div
                key={p.step}
                className="card-hover relative rounded-2xl border border-border bg-card-gradient p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-5xl font-bold text-gradient">{p.step}</span>
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this service — staffing-specific benefits */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow={`Why ${service.title}`}
            title={<>Built for <span className="text-gradient">modern hiring teams</span></>}
            subtitle="Every engagement combines our AI recruiting engine with senior human recruiters."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { i: Zap, t: "Speed to shortlist", d: "First qualified candidates land in your inbox within 48 hours." },
              { i: ShieldCheck, t: "Bias-aware sourcing", d: "Fairness models built into every ranking and shortlist we deliver." },
              { i: Users, t: "Senior recruiters", d: "10+ year specialists own your req end-to-end — no juniors, no hand-offs." },
              { i: TrendingUp, t: "Data-driven decisions", d: "Real-time market pulse, salary benchmarks and funnel analytics." },
              { i: Sparkles, t: "AI + human loop", d: "Machine ranking, human validation, continuously improving with your feedback." },
              { i: CheckCircle2, t: "Guaranteed placements", d: "90-day replacement guarantee on every direct hire we place." },
            ].map((b, i) => (
              <div
                key={b.t}
                className="card-hover rounded-2xl border border-border bg-card-gradient p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl btn-brand">
                  <b.i className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics band */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-3xl border border-border bg-card-gradient p-10 md:grid-cols-4">
            {[
              { k: "48h", v: "Time to first shortlist" },
              { k: "92%", v: "Interview-to-offer rate" },
              { k: "94%", v: "First-year retention" },
              { k: "40+", v: "Markets covered" },
            ].map((m, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <p className="text-4xl font-bold text-gradient md:text-5xl">{m.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study / testimonial */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card-gradient p-10 md:p-14 shadow-card-elevated">
            <Quote className="mb-5 h-10 w-10 text-primary/40" />
            <p className="text-xl leading-relaxed md:text-2xl">
              "TPN-Tech's {service.title.toLowerCase()} practice delivered exactly what they promised — a curated shortlist,
              rigorous screening, and hires that stuck. It changed how we think about talent partners."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full btn-brand text-sm font-bold">JR</div>
              <div>
                <p className="font-bold">Julia Reyes</p>
                <p className="text-sm text-muted-foreground">Head of Talent · Vertex AI Labs</p>
              </div>
              <div className="ml-auto flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" />
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="FAQ"
            title={<>Common <span className="text-gradient">questions</span></>}
          />
          <div className="space-y-4">
            {[
              { q: `How fast can you start on ${service.title}?`, a: "Most engagements kick off within 3 business days of a signed SOW. Urgent roles can start same-week." },
              { q: "What does pricing look like?", a: "We offer flat retainers, per-hire success fees and RPO seat pricing. We'll recommend the model that matches your volume and urgency." },
              { q: "Do you replace hires that don't work out?", a: "Yes — every direct-hire placement carries a 90-day replacement guarantee at no additional cost." },
              { q: "Can we integrate with our ATS?", a: "We integrate natively with Greenhouse, Lever, Workday, iCIMS and Ashby. Custom integrations available on request." },
            ].map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-card-gradient p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* Related */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Related"
            title={<>Explore other <span className="text-gradient">services</span></>}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card-gradient p-12 text-center shadow-glow">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
            <h2 className="relative text-4xl font-bold md:text-5xl">
              Ready to launch <span className="text-gradient">{service.title}?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tell us about your role. We'll come back with a proposal in 24 hours.
            </p>
            <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full btn-brand px-6 py-3 text-sm">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
