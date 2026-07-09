import { Link } from "react-router-dom";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { BookCallButton } from "@/components/Calendly";

const cols = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "HRease", href: siteConfig.products.hrease, external: true },
      { label: "Eventeel", href: siteConfig.products.eventeel, external: true },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}`, external: true },
      { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
      { label: "Instagram", href: siteConfig.social.instagram, external: true },
    ],
  },
];

export const Footer = () => (
  <footer className="relative mt-24 border-t border-border/60 bg-surface">
    <div className="container-pro py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Architecting intelligent workflows and AI-powered systems that transform fragmented operations
            into scalable, autonomous ecosystems for modern businesses.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a aria-label="LinkedIn" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer"
               className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-base hover:border-primary/50 hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href={siteConfig.social.instagram} target="_blank" rel="noreferrer"
               className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-base hover:border-primary/50 hover:text-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Email" href={`mailto:${siteConfig.email}`}
               className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-base hover:border-primary/50 hover:text-foreground">
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6">
            <BookCallButton variant="hero" size="sm" label="Book a Strategy Call" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"external" in l && l.external ? (
                      <a href={l.href} target="_blank" rel="noreferrer"
                         className="text-sm text-muted-foreground transition-colors hover:text-foreground break-words">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="transition-colors hover:text-foreground">Terms of Use</Link>
        </div>
      </div>
    </div>
  </footer>
);
