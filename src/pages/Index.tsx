import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Zap, Bot, Mic, Workflow, Database, ShieldCheck, Cpu, LineChart, Users, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { siteConfig } from "@/config/site";
import heroImg from "@/assets/hero-network.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const services = [
  {
    icon: Cpu,
    title: "AI-Powered Web Applications",
    desc: "Production-grade SaaS and internal tools engineered with embedded intelligence — from semantic search to autonomous decisioning.",
  },
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    desc: "End-to-end orchestration with n8n, Zapier and custom APIs — eliminating manual handoffs across sales, ops and delivery.",
  },
  {
    icon: Bot,
    title: "Conversational AI & Autonomous Agents",
    desc: "Multi-channel agents that qualify leads, support customers, and operate workflows with measurable accuracy and guardrails.",
  },
  {
    icon: Mic,
    title: "Voice AI & Telephony",
    desc: "Retell + Twilio voice agents for inbound, outbound and IVR — natural conversation, real outcomes, full transcripts.",
  },
  {
    icon: Database,
    title: "API & Data Integrations",
    desc: "Webhook architectures, ETL pipelines and CRM connectors that turn fragmented systems into a single intelligent fabric.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise AI Infrastructure",
    desc: "Secure, observable, and scalable AI systems — built with auth, RLS, audit trails, and human-in-the-loop controls.",
  },
];

const products = [
  {
    name: "HRease",
    tag: "Autonomous Hiring",
    desc: "Talent intelligence and hiring automation — sourcing, screening, scheduling and offer orchestration in one autonomous system.",
    icon: Users,
    points: ["AI candidate screening", "Automated interview scheduling", "Pipeline analytics & insights"],
  },
  {
    name: "Eventeel",
    tag: "Event AI Platform",
    desc: "Event logistics and attendee engagement powered by AI — registrations, communications, on-site ops and post-event intelligence.",
    icon: CalendarDays,
    points: ["Smart attendee workflows", "Conversational concierge", "Real-time logistics ops"],
  },
];

const trustLogos = ["Recruitment", "Events", "SaaS", "Healthcare", "Education", "E-commerce"];

const stats = [
  { value: "10×", label: "Faster operational throughput" },
  { value: "70%", label: "Manual work eliminated" },
  { value: "24/7", label: "Autonomous coverage" },
  { value: "<30d", label: "Time to first value" },
];

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <>
      <SEO
        title="Ventsflow AI — Intelligent Workflows & AI Systems for Modern Business"
        description="Ventsflow AI architects AI-powered web apps, autonomous agents and workflow automation that transform fragmented operations into scalable intelligent ecosystems."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="container-pro relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI Systems Architecture · Workflow Automation · Autonomous Agents
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
              Architecting <span className="text-gradient">Intelligent Workflows</span> & AI-Powered Systems for Modern Businesses
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We transform fragmented business operations into scalable, AI-powered ecosystems —
              engineering custom applications, autonomous agents and end-to-end automation that compound efficiency.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
                  <Calendar className="mr-1 h-4 w-4" /> Book a Strategy Call
                </a>
              </Button>
              <Button asChild variant="outlineGlow" size="lg">
                <Link to="/services">
                  Explore Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Enterprise-grade architecture</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Production in weeks, not quarters</div>
              <div className="flex items-center gap-2"><LineChart className="h-4 w-4 text-primary" /> Measurable business outcomes</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="gradient-border relative overflow-hidden rounded-3xl">
              <img
                src={heroImg}
                alt="Visualization of an AI workflow network powering enterprise operations"
                className="h-full w-full object-cover"
                loading="eager"
                width={1600}
                height={1200}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass p-4 shadow-elegant md:block animate-float">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Autonomous Agent</p>
                  <p className="text-sm font-medium">Resolved 1,284 ops · last 24h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-border/50 bg-surface/50">
          <div className="container-pro flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted across verticals
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 opacity-80">
              {trustLogos.map((l) => (
                <span key={l} className="font-display text-sm font-medium text-muted-foreground">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-pro py-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp} custom={i}
              className="card-pro text-center"
            >
              <div className="font-display text-4xl font-semibold text-gradient">{s.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-pro py-16 md:py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Core Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Full-stack AI engineering for operationally serious teams
          </h2>
          <p className="mt-4 text-muted-foreground">
            From conversational interfaces to autonomous back-office systems — we design, ship and operate
            the intelligent layer that compounds your team's leverage.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp} custom={i}
              className="card-pro group"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.6)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FLAGSHIP PRODUCTS */}
      <section className="container-pro py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Flagship Products</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Industry-defining platforms, built in-house
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp} custom={i}
              className="gradient-border relative overflow-hidden p-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/15 blur-3xl" aria-hidden />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.tag}</p>
                    <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{p.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/90">{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-3">
                  <Button asChild variant="hero" size="sm">
                    <Link to="/solutions">Request demo</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/solutions">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="container-pro relative grid gap-12 py-20 md:py-28 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why Ventsflow AI</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A boutique consultancy with the rigor of an enterprise engineering team
            </h2>
            <p className="mt-5 text-muted-foreground">
              We pair systems thinking with deep AI engineering. Every engagement begins with an operational audit
              and ends with a measurable, observable system your team owns.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Senior architects, no handoffs",
                "Production-first delivery",
                "Compounding ROI over time",
                "Security, auth & RLS by default",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm">
                  <ShieldCheck className="h-4 w-4 text-primary" /> {b}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="grid grid-cols-2 gap-4">
            {[
              { k: "Audit", v: "Operational discovery & systems mapping" },
              { k: "Architecture", v: "Composable AI + automation blueprint" },
              { k: "Build", v: "Production engineering, weekly shipping" },
              { k: "Operate", v: "Observability, iteration, ROI tracking" },
            ].map((step, i) => (
              <div key={step.k} className="card-pro">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Phase 0{i + 1}</p>
                <h4 className="mt-2 font-display text-lg font-semibold">{step.k}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-pro py-20 md:py-28">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-center md:p-16"
        >
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at top, hsl(0 0% 100% / 0.3), transparent 60%)" }} aria-hidden />
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to build your intelligent operating system?
            </h2>
            <p className="mt-4 text-base opacity-90">
              Book a 30-minute strategy call. We'll map your highest-leverage automation and AI opportunities — no slides, just systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
                  <Calendar className="mr-1 h-4 w-4" /> Book a Strategy Call
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/contact">Send a brief <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
