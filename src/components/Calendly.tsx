import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

let scriptPromise: Promise<void> | null = null;
const loadCalendly = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve) => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = CALENDLY_SCRIPT;
    s.async = true;
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
  return scriptPromise;
};

interface CalendlyInlineProps {
  url?: string;
  className?: string;
  height?: number;
}

export const CalendlyInline = ({ url = siteConfig.calendlyUrl, className, height = 700 }: CalendlyInlineProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadCalendly().then(() => {
      if (cancelled || !ref.current) return;
      // @ts-expect-error Calendly is injected globally
      if (window.Calendly?.initInlineWidget) {
        ref.current.innerHTML = "";
        // @ts-expect-error Calendly global
        window.Calendly.initInlineWidget({ url, parentElement: ref.current });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  const style: React.CSSProperties = { minWidth: 320 };
  if (height > 0) style.height = height;
  return (
    <div
      ref={ref}
      className={cn("calendly-inline-widget w-full overflow-hidden rounded-xl border border-border/60 bg-card", className)}
      style={style}
    />
  );
};

interface BookCallButtonProps extends Omit<ButtonProps, "asChild" | "onClick"> {
  label?: string;
  icon?: React.ReactNode;
}

export const BookCallButton = ({ label = "Book a Strategy Call", icon, children, ...props }: BookCallButtonProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Button {...props} onClick={() => setOpen(true)}>
        {icon}
        {children ?? label}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-3 backdrop-blur-sm md:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
              <p className="text-sm font-semibold">Book a 30-minute strategy call</p>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-base hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <CalendlyInline height={0} className="h-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
