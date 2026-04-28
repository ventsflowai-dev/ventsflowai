import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container-pro flex h-16 items-center justify-between md:h-18">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="hero" size="sm">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
              <Calendar className="mr-1.5 h-4 w-4" /> Book a Call
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-pro flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground",
                pathname === item.href && "bg-secondary text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="sm" className="mt-2">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
              <Calendar className="mr-1.5 h-4 w-4" /> Book a Strategy Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
