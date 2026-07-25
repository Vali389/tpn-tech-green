import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Nimbus Cloud",
    quote:
      "TPN-Tech's AI sourcing gave us a shortlist in 48 hours that our internal team couldn't build in a month. Two of the first four candidates got offers.",
    rating: 5,
  },
  {
    name: "Marcus Alvarez",
    role: "Chief People Officer",
    company: "Helix Health",
    quote:
      "Their RPO team scaled from 2 to 12 recruiters seamlessly during our expansion. Cost per hire dropped 45% and quality actually went up.",
    rating: 5,
  },
  {
    name: "Priya Raghavan",
    role: "Founder & CEO",
    company: "Loop Robotics",
    quote:
      "We hired our CTO through TPN-Tech's executive search. The rigor of the process — assessment, references, onboarding — was best-in-class.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Head of Talent",
    company: "Meridian Bank",
    quote:
      "The workforce consulting engagement re-architected our recruiting function around AI. We're hiring twice as fast with the same team size.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "COO",
    company: "Northstar Logistics",
    quote:
      "For high-volume contract staffing, TPN-Tech is unmatched. Compliance is airtight and onboarding takes days, not weeks.",
    rating: 5,
  },
  {
    name: "Kenji Tanaka",
    role: "CTO",
    company: "Orbit Fintech",
    quote:
      "AI-ranked engineers, human-validated shortlists, transparent pricing. This is the modern recruiting stack we've been waiting for.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Trusted globally
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            Our clients <span className="text-gradient">says</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <article
              key={t.name}
              className="card-hover group relative flex flex-col rounded-2xl border border-border bg-card-gradient p-8 shadow-card-elevated animate-fade-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <Quote className="mb-4 h-8 w-8 text-primary/50" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full btn-brand text-sm font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
