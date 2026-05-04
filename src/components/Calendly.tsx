import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/ventsflowai/30min";

interface BookCallButtonProps extends ButtonProps {
  label?: string;
  icon?: React.ReactNode;
}

export const BookCallButton = ({
  label = "Book a Strategy Call",
  icon,
  children,
  ...props
}: BookCallButtonProps) => {
  return (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
      <Button {...props}>
        {icon}
        {children ?? label}
      </Button>
    </a>
  );
};

interface CalendlyInlineProps {
  className?: string;
}

export const CalendlyInline = ({ className = "" }: CalendlyInlineProps) => {
  return (
    <div className={className}>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Button className="w-full" size="lg">
          Book a 30-minute strategy call
        </Button>
      </a>
    </div>
  );
};