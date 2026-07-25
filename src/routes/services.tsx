import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { featuredServices } from "@/data/services";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TPN-Tech AI Staffing Solutions" },
      { name: "description", content: "Explore TPN-Tech's AI talent sourcing and workforce consulting services." },
      { property: "og:title", content: "TPN-Tech Services" },
      { property: "og:description", content: "AI-powered staffing services across every hiring need." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our Services"
        title={<>One partner, every <span className="text-gradient">hiring need.</span></>}
        subtitle="AI-powered recruiting and strategic workforce consulting — delivered by senior recruiters and our proprietary AI engine."
        height="md"
      />

      {/* Overview strip */}
      <section className="border-y border-border bg-surface/50 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 text-sm">
          {["AI Talent Sourcing", "Workforce Consulting"].map((n) => (
            <div key={n} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" /> {n}
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="All services"
            title={<>Pick your <span className="text-gradient">engagement model</span></>}
            subtitle="Every service is delivered through the same AI engine, backed by senior recruiters."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Compare"
            title={<>Which service is <span className="text-gradient">right for you?</span></>}
          />
          <div className="overflow-hidden rounded-2xl border border-border bg-card-gradient">
            <table className="w-full text-sm">
              <thead className="bg-surface/70 text-left uppercase tracking-wider text-xs text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Best for</th>
                  <th className="px-6 py-4">Time to first hire</th>
                  <th className="px-6 py-4">Commitment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AI Talent Sourcing", "Any role, any volume", "48 hours", "Per role"],
                  ["Workforce Consulting", "TA leaders, CHROs", "N/A — advisory", "10-week sprints"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    {row.map((c, ci) => (
                      <td key={ci} className={`px-6 py-4 ${ci === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Not sure where to <span className="text-gradient">start?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your role — our team will recommend the right engagement model within 24 hours.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full btn-brand px-6 py-3 text-sm">
            Talk to a recruiter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
