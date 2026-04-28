// Ventsflow AI — Site configuration
// Replace these placeholders with your production values.
export const siteConfig = {
  name: "Ventsflow AI",
  tagline: "Architecting Intelligent Workflows & Real-World AI Solutions",
  description:
    "Ventsflow AI builds AI-powered web apps, autonomous agents, and workflow automation systems that transform fragmented business operations into scalable, intelligent ecosystems.",
  url: "https://ventsflow.ai",
  email: "hello@ventsflow.ai",

  // TODO: replace with your production n8n webhook URL
  n8nWebhookUrl: "https://your-n8n-instance.example.com/webhook/ventsflow-contact",

  // TODO: replace with your Calendly scheduling URL
  calendlyUrl: "https://calendly.com/your-handle/strategy-call",

  social: {
    linkedin: "https://www.linkedin.com/company/ventsflow-ai",
    twitter: "https://twitter.com/ventsflow",
    github: "https://github.com/ventsflow",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
