import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Calendar, Loader2, CheckCircle2, AlertCircle, Mail, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEO } from "@/components/SEO";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  company: z.string().trim().min(2, "Company name is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  goals: z.string().trim().min(20, "Please share at least 20 characters about your goals").max(2000),
  website: z.string().max(0).optional(), // honeypot
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  fullName: "", company: "", email: "", phone: "",
  service: "", budget: "", timeline: "", goals: "", website: "",
};

const services = [
  "AI Web Application Development",
  "Workflow Automation",
  "Conversational AI Agent",
  "Voice AI System",
  "CRM / API Integration",
  "Recruitment Automation (HRease)",
  "Event Automation (Eventeel)",
  "Enterprise AI Infrastructure",
  "Other / Not sure yet",
];
const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k – $150k", "$150k+"];
const timelines = ["ASAP (within 2 weeks)", "1 month", "1–3 months", "Exploring options"];

const Contact = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      parsed.error.errors.forEach((err) => {
        const k = err.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please review the highlighted fields.");
      return;
    }
    if (parsed.data.website) return; // bot

    setStatus("loading");
    try {
      const res = await fetch(siteConfig.n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          source: "ventsflow.ai/contact",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      setForm(initial);
      toast.success("Thanks — we'll be in touch within 1 business day.");
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Submission failed. Please try again or email us directly.");
    }
  };

  return (
    <>
      <SEO
        title="Contact Ventsflow AI — Book a Strategy Consultation"
        description="Tell us about your operations. We'll map the highest-leverage AI and automation opportunities and respond within one business day."
        path="/contact"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="container-pro relative py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium">
              <Calendar className="h-3.5 w-3.5 text-primary" /> Strategy Consultation
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Book Your <span className="text-gradient">AI Systems</span> Consultation
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Share a brief or pick a time directly. We respond within one business day with a clear,
              opinionated assessment — no decks, no discovery theatre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM + CALENDLY */}
      <section className="container-pro py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="card-pro p-7 md:p-9">
              <h2 className="font-display text-2xl font-semibold">Send a project brief</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                The more context you share, the sharper our response.
              </p>

              {status === "success" ? (
                <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
                  <h3 className="mt-3 font-display text-xl font-semibold">Brief received</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We've routed your inquiry to our architects. Expect a response within one business day.
                  </p>
                  <Button className="mt-5" variant="outlineGlow" onClick={() => setStatus("idle")}>
                    Submit another
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
                  {/* honeypot */}
                  <input
                    type="text" name="website" tabIndex={-1} autoComplete="off"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    value={form.website} onChange={(e) => update("website", e.target.value)}
                    aria-hidden
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="fullName" label="Full name" error={errors.fullName}>
                      <Input id="fullName" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Jane Doe" autoComplete="name" />
                    </Field>
                    <Field id="company" label="Company" error={errors.company}>
                      <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Inc." autoComplete="organization" />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Work email" error={errors.email}>
                      <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@acme.com" autoComplete="email" />
                    </Field>
                    <Field id="phone" label="Phone (optional)" error={errors.phone}>
                      <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+1 555 000 0000" autoComplete="tel" />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="service" label="Service needed" error={errors.service}>
                      <Select value={form.service} onValueChange={(v) => update("service", v)}>
                        <SelectTrigger id="service"><SelectValue placeholder="Select a service" /></SelectTrigger>
                        <SelectContent>
                          {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field id="budget" label="Budget range" error={errors.budget}>
                      <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                        <SelectTrigger id="budget"><SelectValue placeholder="Select a range" /></SelectTrigger>
                        <SelectContent>
                          {budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field id="timeline" label="Timeline" error={errors.timeline}>
                    <Select value={form.timeline} onValueChange={(v) => update("timeline", v)}>
                      <SelectTrigger id="timeline"><SelectValue placeholder="Select a timeline" /></SelectTrigger>
                      <SelectContent>
                        {timelines.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field id="goals" label="Project goals & context" error={errors.goals}>
                    <Textarea
                      id="goals" rows={5}
                      value={form.goals} onChange={(e) => update("goals", e.target.value)}
                      placeholder="What outcomes are you targeting? Which workflows, systems or teams are involved? Any constraints we should know?"
                    />
                  </Field>

                  {status === "error" && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>Something went wrong sending your brief. Please try again, or email <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</span>
                    </div>
                  )}

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={status === "loading"}>
                    {status === "loading" ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>) : "Send brief"}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We respond within 1 business day. Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar: Calendly + contact info */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="gradient-border p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Strategy Call</p>
                  <h3 className="font-display text-xl font-semibold">Book directly</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Pick a 30-minute slot. We'll review your operations and identify the 1–3 highest-leverage
                AI and automation opportunities.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-6 w-full">
                <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
                  <Calendar className="mr-1 h-4 w-4" /> Open scheduler
                </a>
              </Button>

              {/* Embedded Calendly iframe (works once siteConfig.calendlyUrl is set) */}
              <div className="mt-6 overflow-hidden rounded-xl border border-border/60">
                <iframe
                  src={siteConfig.calendlyUrl}
                  title="Schedule a strategy call"
                  className="h-[420px] w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 card-pro">
              <h4 className="font-display text-base font-semibold">Or reach us directly</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">{siteConfig.email}</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Building2 className="h-4 w-4 text-primary" /> Remote-first · Serving global teams
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" /> Available on request
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
};

const Field = ({
  id, label, error, children,
}: { id: string; label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-sm font-medium">{label}</Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default Contact;
