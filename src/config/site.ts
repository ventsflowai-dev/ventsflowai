// Ventsflow AI — Site configuration
export const siteConfig = {
  name: "Ventsflow AI",
  tagline: "Architecting Intelligent Workflows & Real-World AI Solutions",
  description:
    "Ventsflow AI builds AI-powered web apps, autonomous agents, and workflow automation systems that transform fragmented business operations into scalable, intelligent ecosystems.",
  url: "https://ventsflow.ai",
  email: "ventsflowai@gmail.com",

  // n8n webhook (placeholder — replace with production URL)
  n8nWebhookUrl: "https://your-n8n-instance.example.com/webhook/ventsflow-contact",

  // Calendly
  calendlyUrl: "https://calendly.com/ventsflowai/30min",

  social: {
    linkedin: "https://www.linkedin.com/company/ventsflow-ai/",
    instagram: "https://www.instagram.com/ventsflow_ai/",
    email: "mailto:ventsflowai@gmail.com",
  },

  // Flagship products
  products: {
    hrease: "https://www.hrease.com.ng/",
    eventeel: "https://www.eventeel.com.ng/",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
