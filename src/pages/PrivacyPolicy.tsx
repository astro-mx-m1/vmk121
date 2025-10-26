import CTASection from "@/components/CTASection";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            How we protect and handle your personal information
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Purpose */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Purpose of this Privacy Notice
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  At VMK Accountants Limited, we respect and value your privacy.
                  This notice explains how we collect, use, store, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <p>
                  We are committed to safeguarding your personal information and ensuring it is handled lawfully, fairly, and transparently.
                </p>
              </div>
            </div>

            {/* Data Controller */}
            <div className="bg-gradient-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Data Controller
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  VMK Accountants Limited is the Data Controller responsible for your personal data.
                </p>
                <p>
                  If you have any questions about this policy or how we handle your data, please contact:
                </p>
                <div className="bg-card p-6 rounded-lg mt-4">
                  <p className="font-semibold text-primary">FAO: Data Protection Officer</p>
                  <p>VMK Accountants Limited</p>
                  <p>17 Hunters Grove, Kenton, Harrow, HA3 9AB</p>
                  <p>📞 Tel: 020 8930 2756</p>
                  <p>📧 Email: vipul@vmkaccountants.co.uk</p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Information We Collect
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>We may collect and process personal data including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name, date of birth, company name, job title</li>
                  <li>Contact information (email, address, phone number)</li>
                  <li>Identification and background information (for legal and compliance purposes)</li>
                  <li>Financial information such as accounts, tax returns, payroll, and bookkeeping records</li>
                  <li>National Insurance numbers and employment details</li>
                  <li>Demographic information (postcode, preferences)</li>
                  <li>Any details you include in enquiries or contact forms</li>
                </ul>
                <p>
                  We only collect what is necessary to provide our professional accounting and advisory services.
                </p>
              </div>
            </div>

            {/* How We Collect Your Data */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                How We Collect Your Data
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>We collect your personal information through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct contact (emails, phone calls, online forms, or in person)</li>
                  <li>Engagement and onboarding processes when you become a client</li>
                  <li>Publicly available sources (e.g. Companies House) to verify details or keep records accurate</li>
                </ul>
                <p>
                  If you do not provide certain personal data, we may not be able to provide our services or respond to your enquiries.
                </p>
              </div>
            </div>

            {/* How We Use Your Data */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                How We Use Your Data
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>We use your personal information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accounting, tax, and advisory services</li>
                  <li>Manage client relationships and communication</li>
                  <li>Meet legal, regulatory, and professional obligations</li>
                  <li>Improve our services and website experience</li>
                  <li>Maintain accurate business records</li>
                </ul>
                <p>
                  We will never sell or share your data for marketing purposes.
                </p>
              </div>
            </div>

            {/* Third Parties */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Third Parties and Data Sharing
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>We may share your information with trusted third parties such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HMRC and other regulatory authorities</li>
                  <li>Professional advisers or auditors</li>
                  <li>IT and cloud service providers (for secure data storage)</li>
                </ul>
                <p>
                  All third parties are required to respect the security and confidentiality of your information and act only in accordance with our instructions.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Cookies and Website Analytics
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Our website may use Google Analytics to understand how visitors use our site and to improve user experience.
                  These analytics tools use cookies — small data files stored on your device.
                  You can control or disable cookies through your browser settings at any time.
                </p>
              </div>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                How We Protect Your Data
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  We use a combination of technical and organisational security measures to protect your personal data from unauthorised access or misuse.
                </p>
                <p>
                  Our systems are hosted in Tier 1 and Tier 2 ISO 27001 certified data centres, and all VMK staff follow strict information security and confidentiality policies.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                How Long We Keep Your Data
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>We retain personal data only as long as necessary:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marketing and enquiries: up to 6 years (reviewed every 3 years)</li>
                  <li>Client engagement records: up to 7 years (in line with professional and regulatory requirements)</li>
                </ul>
                <p>
                  After this period, data is securely deleted or anonymised.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Your Data Rights
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Object to processing or request restriction</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the details above.
                </p>
                <p>
                  If you are unhappy with how we handle your data, you can contact the Information Commissioner's Office (ICO) at www.ico.org.uk.
                </p>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Updates to This Notice
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  We may update this Privacy Notice from time to time.
                  The latest version will always be available on our website.
                </p>
                <p className="font-semibold">
                  Last updated: November 2025
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Questions about your data?"
        description="Contact us if you have any questions about how we handle your personal information."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Back to Home"
        secondaryButtonLink="/"
      />
    </div>
  );
};

export default PrivacyPolicy;
