import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-1.5 ${className}`}>
      <span className="relative block h-10 w-10 shrink-0 overflow-hidden">
        <img
          src={logo}
          alt=""
          aria-hidden
          className="absolute left-0 top-0 h-10 w-auto max-w-none"
          width={40}
          height={40}
        />
      </span>
      <span className="text-xl font-bold tracking-tight">
        TPN<span className="text-gradient">-TECH</span>
      </span>
    </Link>
  );
}
