const Privacy = () => {
  return (
    <div className="container-pro py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Privacy Policy</h1>
        <div className="space-y-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              Ventsflow AI ("we," "our," or "us") collects information that you provide directly to us, such as when you create an account, request a demo, subscribe to our newsletter, or contact our support team. This may include your name, email address, company name, and any other details you choose to provide.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to deliver, maintain, and improve our intelligent automation services. This includes responding to your inquiries, sending technical notices, and providing customer support. We may also use your information to communicate with you about products, services, offers, and promotions.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission or electronic storage system is entirely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">4. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">5. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <strong>hello@ventsflowai.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
