import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles, Target, Wrench, TrendingUp, CheckCircle2, Layers } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/Calendly";
import { siteConfig } from "@/config/site";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.6, 0.32, 1] } },
};

type CaseStudy = {
  tag: string;
  title: string;
  overview: string;
  problem: string[];
  solution: string[];
  features: string[];
  impact: string[];
  cta?: { label: string; href: string };
  stack?: string[];
};

const studies: CaseStudy[] = [
  {
    tag: "Voice AI · Sales Recovery",
    title: "AI Voice Agent for Post-Webinar Sales Recovery",
    overview:
      "Built to recover lost sales opportunities after live webinars. Many attendees stayed until the end but didn't purchase, and there was no scalable way to follow up personally. We designed “Ella,” an AI voice agent that automatically calls attendees after each event, engages them in natural conversation, handles objections, and gathers insights from every interaction.",
    problem: [
      "High number of attendees did not convert after webinars",
      "No structured follow-up system",
      "Manual calling was not scalable",
      "No insights into attendee objections",
      "No centralized tracking system",
    ],
    solution: [
      "Attendee data retrieved via the EverWebinar API",
      "Contacts stored and deduplicated in GoHighLevel",
      "Webhook triggers each contact into the calling pipeline",
      "AI voice calls placed via Retell + Twilio SIP trunking",
      "AI handles sales conversations, booking/rescheduling and objections",
      "Call summaries automatically logged into Google Sheets",
    ],
    features: [
      "Fully automated outbound calling system",
      "AI-powered natural voice conversations",
      "Smart CRM integration with GoHighLevel",
      "SIP trunking for real phone calls",
      "Automated logging and tracking",
      "Scalable to hundreds of calls per event",
    ],
    impact: [
      "Recovered lost sales opportunities",
      "Enabled personalized follow-up at scale",
      "Eliminated manual calling",
      "Provided actionable insights into objections",
      "Created a repeatable post-webinar revenue system",
    ],
    stack: ["Retell AI", "Twilio SIP", "EverWebinar", "GoHighLevel", "n8n", "Google Sheets"],
  },
  {
    tag: "Conversational AI · Events",
    title: "AI WhatsApp Follow-Up Agent for Event Registrations",
    overview:
      "An AI WhatsApp agent that engages registrants in real time the moment they sign up — answering questions, sending reminders, and keeping them committed until the event. Built using GoHighLevel and n8n.",
    problem: [
      "Low event attendance despite registrations",
      "No structured follow-up after sign-up",
      "Manual WhatsApp follow-ups were inefficient",
      "Slow response to attendee questions",
      "No scalable engagement system",
    ],
    solution: [
      "Captures registrations via GoHighLevel forms",
      "Sends instant WhatsApp messages on sign-up",
      "Routes replies into an AI workflow via n8n",
      "AI answers questions, sends reminders and engages with smart prompts",
      "Responses sent back through GoHighLevel",
      "Conversations logged inside the CRM",
    ],
    features: [
      "Instant WhatsApp engagement",
      "Two-way AI conversations",
      "Automated FAQ handling",
      "Smart follow-up prompts",
      "CRM conversation tracking",
      "Scalable to hundreds of users",
    ],
    impact: [
      "Increased event attendance significantly",
      "Eliminated manual messaging",
      "Improved response time to zero delay",
      "Boosted engagement and commitment",
      "Saved hours of repetitive work",
    ],
    stack: ["GoHighLevel", "n8n", "WhatsApp Business API", "OpenAI"],
  },
  {
    tag: "AI Recruitment · Automation",
    title: "AI Resume Analyzer & Candidate Tracking System",
    overview:
      "A client receiving large volumes of resumes via email had no structured way to track or evaluate candidates. We built an AI-powered system that automatically processes resumes, evaluates them against job descriptions and logs structured candidate data into a centralized database.",
    problem: [
      "High volume of resumes with no system",
      "Manual screening was slow and inconsistent",
      "Important details were missed",
      "No centralized candidate database",
      "Recruiters overwhelmed with admin work",
    ],
    solution: [
      "Monitors email inbox for incoming resumes",
      "Downloads and reads attachments automatically",
      "AI evaluates each candidate against the job role",
      "Extracts name, contact info, skills, experience and education",
      "Logs everything into a structured Google Sheets database",
    ],
    features: [
      "Email-to-database automation",
      "AI resume parsing",
      "Candidate scoring",
      "Structured tracking system",
      "Fully scalable for any role",
    ],
    impact: [
      "Reduced screening time by over 80%",
      "Eliminated manual data entry",
      "Improved evaluation consistency",
      "Created a live candidate database",
      "Allowed recruiters to focus on qualified candidates",
    ],
    stack: ["n8n", "OpenAI", "Gmail API", "Google Sheets"],
  },
  {
    tag: "Generative AI · Content",
    title: "AI LinkedIn Content & Image Generator",
    overview:
      "Built for Toby Woods, founder of FlyEpic, this tool helps professionals consistently generate engaging LinkedIn posts with matching visuals. The AI acts as a content assistant that removes the friction of ideation and design.",
    problem: [
      "Difficulty maintaining consistent posting",
      "Time constraints around content creation",
      "Frequent writer's block",
      "Lack of engaging visuals",
    ],
    solution: [
      "Generates fresh post ideas on demand",
      "Writes engaging, on-brand LinkedIn content",
      "Creates complementary AI-generated images",
    ],
    features: [
      "AI-generated post ideas",
      "Content writing assistant",
      "Visual content generation",
      "Fast and easy workflow",
    ],
    impact: [
      "Increased posting consistency",
      "Reduced content creation time",
      "Improved engagement",
      "Strengthened personal branding",
    ],
    stack: ["OpenAI", "Image Generation API", "Next.js"],
  },
  {
    tag: "Flagship Product · Events",
    title: "Eventeel — AI Event Logistics & Engagement Platform",
    overview:
      "Eventeel solves the chaos of managing event logistics, attendee engagement and payments across disconnected tools. It provides a unified system that manages everything from registration to communication and payments.",
    problem: [
      "Disjointed event tools",
      "Manual attendee management",
      "Poor communication workflows",
      "Complex payment handling",
      "Lack of a centralized system",
    ],
    solution: [
      "Handles registrations and ticketing end-to-end",
      "Integrates payment systems (Flutterwave)",
      "Automates attendee communication",
      "Tracks engagement and attendance in real time",
    ],
    features: [
      "Centralized event management dashboard",
      "Automated email and WhatsApp updates",
      "Payment integration",
      "Real-time attendee tracking",
      "Scalable architecture",
    ],
    impact: [
      "Simplified event operations",
      "Reduced manual coordination",
      "Improved attendee experience",
      "Enabled scalable event management",
    ],
    cta: { label: "View Eventeel", href: siteConfig.products.eventeel },
    stack: ["Next.js", "Supabase", "Flutterwave", "n8n"],
  },
  {
    tag: "Flagship Product · Recruitment",
    title: "HRease — AI Recruitment Intelligence System",
    overview:
      "HRease transforms recruitment workflows by automating resume analysis, candidate communication and hiring pipelines — reducing manual workload so teams focus on top talent.",
    problem: [
      "Manual resume screening",
      "Slow hiring processes",
      "Poor candidate tracking",
      "Inefficient communication",
    ],
    solution: [
      "Parses resumes automatically",
      "Scores candidates based on job fit",
      "Automates candidate communication",
      "Organizes candidate pipelines",
    ],
    features: [
      "AI resume parsing",
      "Candidate ranking",
      "Automated messaging",
      "Structured hiring workflows",
      "Scalable recruitment system",
    ],
    impact: [
      "Faster hiring cycles",
      "Reduced manual work",
      "Better candidate selection",
      "Improved recruiter efficiency",
    ],
    cta: { label: "View HRease", href: siteConfig.products.hrease },
    stack: ["Next.js", "Supabase", "OpenAI", "n8n"],
  },
];

const Block = ({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: typeof Target;
  title: string;
  items: string[];
  accent: string;
}) => (
  <div>
    <div className="flex items-center gap-2.5">
      <div className={`grid h-8 w-8 place-items-center rounded-lg ${accent}`}>
        <Icon className="h-4 w-4" />
      </div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80">{title}</h4>
    </div>
    <ul className="mt-4 space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CaseStudies = () => {
  return (
    <>
      <SEO
        title="Case Studies — Ventsflow AI"
        description="Real-world AI systems, voice agents, conversational automations and full-stack platforms engineered by Ventsflow AI for recruitment, events, sales and operations."
        path="/case-studies"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="container-pro relative py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Case Studies
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Systems that <span className="text-gradient">moved the needle</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              A selection of AI systems, voice agents, conversational workflows and full-stack platforms
              we've engineered for sales recovery, recruitment, events and operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STUDIES */}
      <section className="container-pro py-20 md:py-28">
        <div className="space-y-16 md:space-y-24">
          {studies.map((s, idx) => (
            <motion.article
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="gradient-border overflow-hidden"
            >
              <div className="p-7 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 items-center rounded-full border border-primary/30 bg-primary/10 px-3 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {s.tag}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      Case Study · 0{idx + 1}
                    </span>
                  </div>
                  {s.cta && (
                    <Button variant="outlineGlow" size="sm" asChild>
                      <a href={s.cta.href} target="_blank" rel="noreferrer">
                        {s.cta.label} <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>

                <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                  {s.title}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {s.overview}
                </p>

                {s.stack && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <Layers className="h-4 w-4 text-muted-foreground" />
                    {s.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-10 grid gap-10 lg:grid-cols-2">
                  <Block
                    icon={Target}
                    title="The Problem"
                    items={s.problem}
                    accent="bg-destructive/10 text-destructive"
                  />
                  <Block
                    icon={Wrench}
                    title="The Solution"
                    items={s.solution}
                    accent="bg-primary/10 text-primary"
                  />
                  <Block
                    icon={Sparkles}
                    title="Key Features"
                    items={s.features}
                    accent="bg-accent/10 text-accent"
                  />
                  <Block
                    icon={TrendingUp}
                    title="Impact"
                    items={s.impact}
                    accent="bg-primary/10 text-primary"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-pro pb-24 md:pb-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="gradient-border p-10 md:p-14 text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a workflow that needs to <span className="text-gradient">become a system?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tell us where the friction lives. We'll architect an AI-driven system that compounds — not another tool that
            adds to the noise.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <BookCallButton variant="hero" size="lg" label="Book a Strategy Call" />
            <Button variant="outlineGlow" size="lg" asChild>
              <Link to="/contact">Send a Project Brief</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CaseStudies;
