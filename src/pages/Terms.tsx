const Terms = () => {
  return (
    <div className="container-pro py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Terms of Use</h1>
        <div className="space-y-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website and services provided by Ventsflow AI, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Ventsflow AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">3. Disclaimer</h2>
            <p>
              The materials on Ventsflow AI's website are provided on an 'as is' basis. Ventsflow AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">4. Limitations</h2>
            <p>
              In no event shall Ventsflow AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ventsflow AI's website, even if Ventsflow AI or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">5. Revisions and Errata</h2>
            <p>
              The materials appearing on Ventsflow AI's website could include technical, typographical, or photographic errors. Ventsflow AI does not warrant that any of the materials on its website are accurate, complete, or current. Ventsflow AI may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
