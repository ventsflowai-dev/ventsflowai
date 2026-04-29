import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Cpu,
  Workflow,
  Bot,
  Mic,
  Database,
  Search,
  LayoutGrid,
  Code2,
  Plug,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { BookCallButton } from "@/components/Calendly";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.6, 0.32, 1] as [number, number, number, number], delay: i * 0.06 },
  }),
};

type Service = {
  id: string;
  icon: typeof Cpu;
  title: string;
  description: string;
  useCases: string[];
  outcomes: string[];
  stack: string[];
};

const services: Service[] = [
  {
    id: "ai-web-apps",
    icon: Cpu,
    title: "AI Web Application Development",
    description:
      "We design and build intelligent full-stack web applications that solve real business problems. From internal dashboards to customer-facing AI products, we combine modern web development with AI capabilities to create platforms that are fast, scalable, and useful.",
    useCases: [
      "AI-powered SaaS platforms",
      "Internal business dashboards",
      "Customer portals",
      "Recruitment platforms",
      "Event management systems",
      "Data-driven business tools",
    ],
    outcomes: [
      "Launch smarter digital products",
      "Reduce dependence on manual admin work",
      "Improve user experience",
      "Centralize business operations",
      "Build scalable technology infrastructure",
    ],
    stack: ["Next.js", "Supabase", "Tailwind CSS", "OpenAI", "API Integrations"],
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Business Workflow Automation",
    description:
      "We help businesses remove repetitive tasks, disconnected tools, and manual follow-ups by building automation pipelines that connect systems and move work forward without constant human intervention.",
    useCases: [
      "Lead capture and qualification",
      "Automated client onboarding",
      "Email and WhatsApp follow-ups",
      "Internal task notifications",
      "Form-to-CRM workflows",
      "Payment and invoice triggers",
      "Data synchronization across tools",
    ],
    outcomes: [
      "Save hours every week",
      "Reduce operational mistakes",
      "Improve response speed",
      "Keep teams aligned",
      "Make business processes more predictable",
    ],
    stack: ["n8n", "Zapier", "Webhooks", "Airtable", "Google Sheets", "CRMs", "APIs"],
  },
  {
    id: "conversational-ai",
    icon: Bot,
    title: "Conversational AI Agent",
    description:
      "We build intelligent text-based AI agents that can answer questions, guide users, qualify leads, provide support, and handle repetitive conversations across your website or messaging platforms.",
    useCases: [
      "Website chat assistants",
      "Customer support bots",
      "Lead qualification agents",
      "FAQ assistants",
      "Onboarding assistants",
      "Internal knowledge assistants",
    ],
    outcomes: [
      "Respond to customers faster",
      "Reduce support workload",
      "Capture more qualified leads",
      "Improve customer experience",
      "Provide consistent answers at scale",
    ],
    stack: ["LLM Architecture", "OpenAI", "Custom Knowledge Bases", "Website Chat", "n8n"],
  },
  {
    id: "voice-ai",
    icon: Mic,
    title: "Voice AI Agent",
    description:
      "We deploy realistic voice AI agents that can handle phone-based conversations for scheduling, customer support, lead qualification, reminders, and business communication.",
    useCases: [
      "Appointment booking",
      "Customer support calls",
      "Sales qualification calls",
      "Event reminders",
      "Recruitment screening calls",
      "Follow-up calls",
    ],
    outcomes: [
      "Automate repetitive calls",
      "Improve customer response time",
      "Reduce missed opportunities",
      "Extend your team without extra hiring",
      "Create a more efficient communication system",
    ],
    stack: ["Retell AI", "Twilio", "LLM Architecture", "Webhooks", "CRM Integrations"],
  },
  {
    id: "crm-integration",
    icon: Database,
    title: "CRM / API Integration",
    description:
      "We connect your tools, platforms, databases, and customer systems so your business data flows smoothly across your operations. No more copying information manually between apps.",
    useCases: [
      "Website form to CRM",
      "CRM to email automation",
      "Payment platform integrations",
      "Custom webhook systems",
      "Airtable and Google Sheets sync",
      "Client database automation",
      "Third-party API connections",
    ],
    outcomes: [
      "Create one connected operating system",
      "Improve visibility across teams",
      "Reduce duplicate data entry",
      "Trigger automations from real-time actions",
      "Build reliable backend workflows",
    ],
    stack: ["Custom APIs", "Webhooks", "Supabase", "Airtable", "HubSpot", "Google Workspace", "n8n"],
  },
];

const process = [
  { icon: Search, step: "01", title: "Discover", copy: "We understand your current workflow, business goals, bottlenecks, and tools." },
  { icon: LayoutGrid, step: "02", title: "Architect", copy: "We design a clear technical and operational blueprint for the system." },
  { icon: Code2, step: "03", title: "Build", copy: "We develop the web application, automation workflow, or AI agent." },
  { icon: Plug, step: "04", title: "Integrate", copy: "We connect your tools, databases, CRMs, APIs, and communication channels." },
  { icon: Rocket, step: "05", title: "Optimize", copy: "We test, refine, and improve the system so it performs reliably in real business conditions." },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Services — AI Web Apps, Automation, Voice & Conversational AI | Ventsflow AI"
        description="Ventsflow AI builds intelligent web apps, workflow automation, conversational AI, voice AI agents, and CRM/API integrations engineered for real business growth."
        path="/services"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="container-pro relative py-20 md:py-28">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Services
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              AI Systems, Automation, and Intelligent <span className="text-gradient">Web Solutions</span> Built for Real Business Growth
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Ventsflow AI helps businesses replace manual operations with intelligent systems, autonomous agents, and
              scalable web applications designed to improve speed, clarity, and operational efficiency.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <BookCallButton variant="hero" size="lg" icon={<Calendar className="mr-1 h-4 w-4" />} label="Book a Strategy Call" />
              <Button asChild variant="outlineGlow" size="lg">
                <Link to="/contact">
                  Discuss Your Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE QUICK NAV */}
      <section className="container-pro py-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-border/60 bg-card/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-base hover:border-primary/50 hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-pro space-y-10 py-10 md:py-16">
        {services.map((s, i) => (
          <motion.article
            key={s.id}
            id={s.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            custom={i % 3}
            className="gradient-border scroll-mt-24 p-[1px]"
          >
            <div className="rounded-[calc(var(--radius)-1px)] bg-card p-7 md:p-10">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.6)]">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Service 0{i + 1}
                    </p>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{s.description}</p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Tech Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/60 bg-secondary/60 px-2.5 py-1 text-xs text-foreground/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:col-span-7 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/60 bg-background/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Use Cases</p>
                    <ul className="mt-3 space-y-2.5">
                      {s.useCases.map((u) => (
                        <li key={u} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-foreground/90">{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Business Outcomes</p>
                    <ul className="mt-3 space-y-2.5">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-foreground/90">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* HOW WE WORK */}
      <section className="relative border-y border-border/60 bg-secondary/30 py-20 md:py-28">
        <div className="container-pro">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">How We Work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              How We Build Intelligent Systems
            </h2>
            <p className="mt-4 text-muted-foreground">
              A clear, opinionated process designed for clarity, speed, and long-term ROI.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="card-pro relative overflow-hidden"
              >
                <span className="absolute -right-2 -top-3 select-none text-6xl font-bold text-primary/10">{s.step}</span>
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.6)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-pro py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-center md:p-16"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(ellipse at top, hsl(0 0% 100% / 0.3), transparent 60%)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to Turn Your Operations Into an Intelligent System?
            </h2>
            <p className="mt-4 text-base opacity-90">
              Let's identify the manual processes slowing your business down and design the right AI-powered solution to replace them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <BookCallButton
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                icon={<Calendar className="mr-1 h-4 w-4" />}
                label="Book a Strategy Call"
              />
              <Button asChild variant="glass" size="lg">
                <Link to="/contact">
                  Send a Project Brief <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
