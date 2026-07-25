import type { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
  height?: "sm" | "md" | "lg";
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
  height = "lg",
}: HeroProps) {
  const heights = {
    sm: "min-h-[55vh]",
    md: "min-h-[70vh]",
    lg: "min-h-[92vh]",
  };
  return (
    <section className={`relative isolate flex ${heights[height]} items-center overflow-hidden`}>
      <div className="absolute inset-0 -z-20 bg-hero" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/10 via-transparent to-emerald-400/10 animate-hero-shimmer" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl animate-hero-glow" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl animate-hero-glow-delayed" />
      </div>
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.98 0.01 200 / 6%) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/20 via-transparent to-background" />

      <div
        className={`mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pt-28 pb-16 ${
          align === "center" ? "items-center text-center" : ""
        }`}
      >
        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">{title}</h1>
        {subtitle && (
          <p className={`max-w-2xl text-lg text-muted-foreground md:text-xl`}>{subtitle}</p>
        )}
        {children && (
          <div className={`flex flex-wrap gap-4 pt-2 ${align === "center" ? "justify-center" : ""}`}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
