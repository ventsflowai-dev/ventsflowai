import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const ComingSoon = ({ title, blurb }: { title: string; blurb: string }) => (
  <>
    <SEO title={`${title} — Ventsflow AI`} description={blurb} />
    <section className="container-pro py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium">
          Coming soon
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-muted-foreground">{blurb}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="hero" size="lg"><Link to="/contact">Book a Strategy Call</Link></Button>
          <Button asChild variant="outlineGlow" size="lg"><Link to="/">Back to Home</Link></Button>
        </div>
      </div>
    </section>
  </>
);

export default ComingSoon;
