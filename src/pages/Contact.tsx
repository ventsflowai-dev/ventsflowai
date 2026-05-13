import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  Calendar,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SEO } from "@/components/SEO";
import { CalendlyInline } from "@/components/Calendly";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

const CONTACT_EMAIL = "ventsflowai@gmail.com";
const CALENDLY_URL = "https://calendly.com/ventsflowai/30min";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  company: z.string().trim().min(2, "Company name is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  timeline: z.string().min(1, "Please select a timeline"),
  goals: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters about your goals")
    .max(2000),
  website: z.string().max(0).optional(),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  timeline: "",
  goals: "",
  website: "",
};

const services = [
  "AI Web Application Development",
  "Workflow Automation",
  "Conversational AI Agent",
  "Voice AI Agent",
  "CRM / API Integration",
];

const timelines = [
  "ASAP (within 2 weeks)",
  "1 month",
  "1–3 months",
  "Exploring options",
];

const Contact = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));

    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};

      parsed.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      toast.error("Please review the highlighted fields.");
      return;
    }

    if (parsed.data.website) return;

    setStatus("loading");

    try {
      const res = await fetch(siteConfig.n8nWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...parsed.data,
          source: "ventsflow.ai/contact",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const responseText = await res.text();
        console.error("Webhook response", res.status, responseText);
        throw new Error(`Request failed (${res.status})`);
      }

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

      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="container-pro relative py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              Strategy Consultation
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Book Your <span className="text-gradient">AI Systems</span>{" "}
              Consultation
            </h1>

            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Share a brief or pick a time directly. We respond within one
              business day with a clear, practical assessment of your AI and
              automation opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-pro py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="card-pro p-7 md:p-9">
              <h2 className="font-display text-2xl font-semibold">
                Send a project brief
              </h2>

              <p className="mt-1.5 text-sm text-muted-foreground">
                Tell us what you want to build or automate.
              </p>

              {status === "success" ? (
                <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />

                  <h3 className="mt-3 font-display text-xl font-semibold">
                    Brief received
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    We have received your inquiry. Expect a response within one
                    business day.
                  </p>

                  <Button
                    className="mt-5"
                    variant="outlineGlow"
                    onClick={() => setStatus("idle")}
                  >
                    Submit another
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    aria-hidden
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="fullName"
                      label="Full name"
                      error={errors.fullName}
                    >
                      <Input
                        id="fullName"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Jane Doe"
                        autoComplete="name"
                      />
                    </Field>

                    <Field id="company" label="Company" error={errors.company}>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        placeholder="Acme Inc."
                        autoComplete="organization"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Work email" error={errors.email}>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="name@company.com"
                        autoComplete="email"
                      />
                    </Field>

                    <Field
                      id="phone"
                      label="Phone (optional)"
                      error={errors.phone}
                    >
                      <Input
                        id="phone"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+234 800 000 0000"
                        autoComplete="tel"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="service"
                      label="Service needed"
                      error={errors.service}
                    >
                      <Select
                        value={form.service}
                        onValueChange={(value) => update("service", value)}
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>

                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field
                      id="timeline"
                      label="Timeline"
                      error={errors.timeline}
                    >
                      <Select
                        value={form.timeline}
                        onValueChange={(value) => update("timeline", value)}
                      >
                        <SelectTrigger id="timeline">
                          <SelectValue placeholder="Select a timeline" />
                        </SelectTrigger>

                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field
                    id="goals"
                    label="Project goals & context"
                    error={errors.goals}
                  >
                    <Textarea
                      id="goals"
                      rows={5}
                      value={form.goals}
                      onChange={(e) => update("goals", e.target.value)}
                      placeholder="What do you want to build or automate? What tools, workflows, or teams are involved?"
                    />
                  </Field>

                  {status === "error" && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        Something went wrong sending your brief. Please try
                        again, or email{" "}
                        <a
                          className="underline"
                          href={`mailto:${CONTACT_EMAIL}`}
                        >
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send brief"
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We respond within 1 business day. Your information is kept
                    confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div id="schedule" className="gradient-border p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Calendar className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Strategy Call
                  </p>
                  <h3 className="font-display text-xl font-semibold">
                    Book directly
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Pick a 30-minute slot. We’ll review your operations and identify
                the highest-leverage AI and automation opportunities.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl">
                <CalendlyInline className="w-full" />
              </div>
            </div>

            <div className="mt-6 card-pro">
              <h4 className="font-display text-base font-semibold">
                Or reach us directly
              </h4>

              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="break-all hover:text-foreground"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>

                <li className="flex items-center gap-3 text-muted-foreground">
                  <Building2 className="h-4 w-4 text-primary" />
                  Remote-first · Serving global teams
                </li>

                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  Available on request
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
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-sm font-medium">
      {label}
    </Label>

    {children}

    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default Contact;