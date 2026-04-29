import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  ArrowRight,
  Gauge,
  MessageSquareHeart,
  TrendingUp,
  Workflow,
  Sparkles,
  Search,
  LayoutGrid,
  Code2,
  Rocket,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { BookCallButton } from "@/components/Calendly";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.6, 0.32, 1] as [number, number, number, number], delay: i * 0.06 },
  }),
};

const missionPoints = [
  { icon: Gauge, title: "Reduce inefficiency", copy: "Eliminate repetitive tasks and operational drag with intelligent automation." },
  { icon: MessageSquareHeart, title: "Improve customer engagement", copy: "Deliver always-on, conversational experiences across every channel." },
  { icon: TrendingUp, title: "Increase scalability", copy: "Architect systems that grow with your business — from pilot to enterprise." },
  { icon: Workflow, title: "Automate complex workflows", copy: "Connect tools, data and decisions into one orchestrated AI-driven flow." },
  { icon: Sparkles, title: "Empower AI-first operations", copy: "Embed AI into the operating model — not as a feature, but as foundation." },
];

const approach = [
  { icon: Search, step: "01", title: "Operational Audit", copy: "We map your workflows, data flows, tools and bottlenecks to identify the highest-leverage automation opportunities." },
  { icon: LayoutGrid, step: "02", title: "Systems Architecture", copy: "We design a modular AI architecture — agents, integrations, data and interfaces — built for reliability and scale." },
  { icon: Code2, step: "03", title: "Intelligent Development", copy: "We engineer production-grade web apps, agents and automations using a modern, type-safe full-stack." },
  { icon: Rocket, step: "04", title: "Deployment & Optimization", copy: "We deploy, monitor and continuously refine — turning automation into compounding operational advantage." },
];

const stack = [
  { name: "Next.js", desc: "Production web apps" },
  { name: "Supabase", desc: "Database, auth & storage" },
  { name: "n8n", desc: "Workflow orchestration" },
  { name: "Zapier", desc: "SaaS integrations" },
  { name: "Retell AI", desc: "Voice AI agents" },
  { name: "Twilio", desc: "Telephony & messaging" },
];

// Leadership — currently founder-led. Add additional members as the team grows.
const team = [
  {
    name: "Daniel Obisanya",
    role: "CEO & Lead Engineer, Ventsflow AI",
    bio: [
      "Daniel Obisanya is a web developer, AI automation specialist, and systems builder with a strong background in creating practical digital solutions for growing businesses. He began his journey in web development and later transitioned into AI and automation, combining both disciplines to build intelligent workflows, AI-powered web applications, and business automation systems.",
      "His experience spans work with startups and technology-driven organizations including Altaria Hub, where he worked as a Web Developer, Jakk Innovations, where he served as IT and Web Manager, and Quint AI, where he worked as an AI and Automation Specialist.",
      "At Ventsflow AI, Daniel brings together full-stack web development, workflow automation, and real-world AI implementation to help businesses move from manual processes to intelligent, scalable systems.",
    ],
    linkedin: "https://www.linkedin.com/in/daniel-obisanya/",
    email: "ifeoluwadaniel25@gmail.com",
    photo: "", // TODO: add photo at src/assets/daniel.jpg and import
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Ventsflow AI — AI Systems Architecture & Automation Consultancy"
        description="Ventsflow AI is a boutique AI systems architecture and workflow automation consultancy. Learn about our mission, approach, technology stack and team."
        path="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="container-pro relative py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              About Ventsflow AI
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Engineering Real-World <span className="text-gradient">AI Solutions</span> That Matter
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              At Ventsflow AI, our mission is to bridge the gap between advanced AI technologies and
              practical business transformation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <BookCallButton variant="hero" size="lg" icon={<Calendar className="mr-2 h-4 w-4" />} label="Book a Strategy Call" />
              <Button asChild variant="outlineGlow" size="lg">
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container-pro">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              We build systems that move the needle
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement is engineered around measurable business outcomes — not buzzwords.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((m, i) => (
              <motion.div
                key={m.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="card-pro group"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-base group-hover:bg-primary group-hover:text-primary-foreground">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative border-y border-border/60 bg-secondary/30 py-20 md:py-28">
        <div className="container-pro">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Approach</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A proven, four-step engagement model
            </h2>
            <p className="mt-4 text-muted-foreground">
              From discovery to deployment, every step is designed for clarity, speed and long-term ROI.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className={cn("card-pro relative overflow-hidden")}
              >
                <span className="absolute -right-2 -top-3 text-6xl font-bold text-primary/10 select-none">
                  {s.step}
                </span>
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28">
        <div className="container-pro">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Technology Stack</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              The modern AI engineering toolkit
            </h2>
            <p className="mt-4 text-muted-foreground">
              We compose best-in-class platforms into reliable, production-grade AI systems.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="gradient-border p-[1px]"
              >
                <div className="flex items-center justify-between rounded-[calc(var(--radius)-1px)] bg-card px-5 py-5">
                  <div>
                    <p className="text-base font-semibold">{t.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                  <div className="h-9 w-9 rounded-lg bg-gradient-primary opacity-90" aria-hidden />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border/60 bg-secondary/30 py-20 md:py-28">
        <div className="container-pro">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Leadership</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Founder-led. Engineering-driven.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ventsflow AI is led by a hands-on engineer who architects every system we ship — from first audit to production deployment.
            </p>
          </motion.div>

          <div className="mx-auto mt-14 max-w-4xl">
            {team.map((m, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="gradient-border p-[1px]"
              >
                <div className="grid gap-8 rounded-[calc(var(--radius)-1px)] bg-card p-6 md:grid-cols-[220px_1fr] md:gap-10 md:p-10">
                  <div className="mx-auto md:mx-0">
                    <div className="h-44 w-44 rounded-2xl bg-gradient-primary p-[2px] md:h-52 md:w-52">
                      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[calc(theme(borderRadius.2xl)-2px)] bg-card">
                        {m.photo ? (
                          <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                        ) : (
                          <span className="text-4xl font-semibold text-gradient">
                            {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold md:text-3xl">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
                    <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {m.bio.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/60 px-3.5 py-2 text-sm font-medium text-foreground/90 transition-base hover:border-primary/50 hover:text-foreground"
                      >
                        <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
                      </a>
                      <a
                        href={`mailto:${m.email}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/60 px-3.5 py-2 text-sm font-medium text-foreground/90 transition-base hover:border-primary/50 hover:text-foreground"
                      >
                        <Mail className="h-4 w-4 text-primary" /> {m.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-pro">
          <div className="gradient-border p-[1px]">
            <div className="relative overflow-hidden rounded-[calc(var(--radius)-1px)] bg-card px-6 py-14 text-center md:px-12 md:py-20">
              <div className="absolute inset-0 bg-hero opacity-70" aria-hidden />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to architect your <span className="text-gradient">AI advantage?</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                  Book a free strategy call and we'll map the highest-leverage AI opportunities in your business.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <BookCallButton variant="hero" size="lg" icon={<Calendar className="mr-2 h-4 w-4" />} label="Book a Strategy Call" />
                  <Button asChild variant="outlineGlow" size="lg">
                    <Link to="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
