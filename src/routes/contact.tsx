import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, Phone, MessageSquare, Users, Sparkles, Clock } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/SectionHeader";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TPN-Tech — Talk to an AI Recruiter" },
      { name: "description", content: "Get in touch with TPN-Tech. Book a call, request a proposal, or explore partnership opportunities." },
      { property: "og:title", content: "Contact TPN-Tech" },
      { property: "og:description", content: "Talk to our AI recruiting team about your hiring needs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <Hero
        eyebrow="Get in touch"
        title={<>Let's build your <span className="text-gradient">next team.</span></>}
        subtitle="Tell us about your hiring goals — a senior recruiter will respond within 24 hours."
        height="md"
      />

      {/* Contact cards */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            { i: Mail, t: "Email", d: "hello@tpn-tech.com", h: "For general enquiries" },
            { i: Phone, t: "Phone", d: "+1 (415) 555-0180", h: "Mon–Fri, 9am–7pm PT" },
            { i: MapPin, t: "Headquarters", d: "500 Market St, SF, CA", h: "Suite 1200" },
          ].map((c, i) => (
            <div
              key={c.t}
              className="rounded-2xl border border-border bg-card-gradient p-8 animate-fade-up hover:border-primary/50 transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl btn-brand">
                <c.i className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{c.t}</h3>
              <p className="mt-1 text-primary">{c.d}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.h}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + inquiry types */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="rounded-3xl border border-border bg-card-gradient p-8 md:p-10 shadow-card-elevated">
              <h2 className="text-3xl font-bold">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">Fill in the form. A senior recruiter will reply within one business day.</p>
              <form onSubmit={submit} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Jane Doe" required />
                  <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Company" name="company" placeholder="Acme Inc." />
                  <Field label="Phone" name="phone" placeholder="+1 415 555 0180" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">I'm interested in</label>
                  <select
                    name="service"
                    className="w-full rounded-lg border border-input bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
                    required
                  >
                    <option>AI Talent Sourcing</option>
                    <option>Executive Search</option>
                    <option>IT Staffing</option>
                    <option>Contract Staffing</option>
                    <option>RPO Solutions</option>
                    <option>Workforce Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Tell us about your role or program</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="e.g. We're hiring 3 senior ML engineers in Q1, remote LATAM…"
                    className="w-full resize-none rounded-lg border border-input bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full btn-brand px-6 py-3 text-sm disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message"} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2">
            {[
              { i: Sparkles, t: "Hiring managers", d: "Get an AI shortlist for one open role — free — as part of your first call." },
              { i: Users, t: "Candidates", d: "Send your CV. Our AI will match you against open roles and hiring companies." },
              { i: MessageSquare, t: "Partners", d: "Integrations, referrals, and ecosystem partnerships." },
              { i: Clock, t: "Response time", d: "Every enquiry gets a human reply within 24 hours." },
            ].map((c, i) => (
              <div
                key={c.t}
                className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl btn-brand">
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 to-background" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Global offices"
            title={<>Wherever you <span className="text-gradient">hire, we're there</span></>}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { c: "San Francisco", a: "500 Market St, Suite 1200" },
              { c: "Austin", a: "300 Colorado St, Floor 8" },
              { c: "London", a: "20 Broadwick St, Soho" },
              { c: "São Paulo", a: "Av. Faria Lima, 3900" },
              { c: "Bengaluru", a: "1 Prestige Trade Tower, MG Rd" },
            ].map((o, i) => (
              <div
                key={o.c}
                className="rounded-2xl border border-border bg-card-gradient p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-lg font-bold">{o.c}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="FAQ"
            title={<>Questions we get <span className="text-gradient">often</span></>}
          />
          <div className="space-y-4">
            {[
              { q: "How fast can you deliver a shortlist?", a: "Most roles receive an AI-ranked, recruiter-validated shortlist within 48 hours." },
              { q: "Do you work on contingent or retained terms?", a: "Both. Executive Search is retained. IT and contract staffing are typically contingent or on a monthly RPO fee." },
              { q: "Which regions do you cover?", a: "North America, LATAM, EMEA and APAC — 40+ markets with in-country recruiters." },
              { q: "Is my data private?", a: "Yes. We are SOC2 Type II certified. Candidate and role data is never shared with other clients." },
            ].map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-card-gradient p-6 open:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <summary className="cursor-pointer list-none text-lg font-semibold flex justify-between items-center">
                  {f.q}
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
