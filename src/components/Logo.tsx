import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Ventsflow AI home">
    <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-[0_0_24px_hsl(var(--primary)/0.45)] transition-transform group-hover:scale-105">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5h6l3 7 3-7h6" />
        <path d="M5 13c4 0 4 6 8 6s4-6 8-6" opacity="0.7" />
      </svg>
    </span>
    <span className="font-display text-lg font-semibold tracking-tight">
      Ventsflow<span className="text-primary"> AI</span>
    </span>
  </Link>
);
