import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

const toneClasses: Record<Service["tagTone"], string> = {
  cyan: "bg-cyan-400/90 text-slate-900",
  green: "bg-emerald-400/90 text-slate-900",
  amber: "bg-amber-400/90 text-slate-900",
};

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group card-hover sheen-on-hover relative flex flex-col overflow-hidden rounded-2xl bg-card-gradient border border-border shadow-card-elevated animate-zoom-fade"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <span
          className={`absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${toneClasses[service.tagTone]}`}
        >
          {service.tag}
        </span>
        <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white drop-shadow-lg">
          {service.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-gradient">
          {service.tagline}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
          Explore Service <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
