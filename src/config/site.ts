// Ventsflow AI — Site configuration
export const siteConfig = {
  name: "Ventsflow AI",
  tagline: "Architecting Intelligent Workflows & Real-World AI Solutions",
  description:
    "Ventsflow AI builds AI-powered web apps, autonomous agents, and workflow automation systems that transform fragmented business operations into scalable, intelligent ecosystems.",
  url: "https://ventsflow.ai",
  email: "ventsflowai@gmail.com",

  // n8n webhook (placeholder — replace with production URL)
  n8nWebhookUrl: "https://n8n.srv1264889.hstgr.cloud/webhook/6b79f0dc-a5c3-47c4-b566-9958176fe3e7",

  // Calendly
  calendlyUrl: "https://calendly.com/ventsflowai/30min",

  social: {
    linkedin: "https://www.linkedin.com/company/112888908/admin/dashboard/",
    instagram: "https://www.instagram.com/ventsflow_ai?igsh=MjY3OGp5cHdqY3Zz&utm_source=qr",
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
