import CTASection from "@/components/CTASection";

const Disclaimer = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            ⚖️ Disclaimer
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            VMK Accountants Limited - Website Disclaimer
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Website Disclaimer */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Website Disclaimer
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  This website is operated by VMK Accountants Limited, a company registered in England & Wales (Company No. 04288796).
                </p>
                <p>
                  The information contained on this website is provided for general guidance and informational purposes only. While we make every effort to ensure that the information on this site is accurate and up to date, we make no guarantees as to its accuracy, completeness, or suitability for any particular purpose.
                </p>
              </div>
            </div>

            {/* No Professional Advice */}
            <div className="bg-gradient-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold text-primary mb-4">
                No Professional Advice
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  The content on this website does not constitute accounting, tax, legal, or other professional advice or services.
                  You should not act upon any information contained in this website without seeking appropriate professional advice from a qualified adviser at VMK Accountants Limited.
                </p>
                <p>
                  Laws, regulations, and tax guidance change frequently, and their application can vary depending on individual circumstances. We cannot accept responsibility for any loss or damage that may arise from reliance on information contained in this site.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Limitation of Liability
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  All information on this website is provided "as is", without warranty of any kind — either express or implied — including but not limited to warranties of accuracy, reliability, fitness for a particular purpose, or non-infringement.
                </p>
                <p>
                  In no event shall VMK Accountants Limited, its directors, employees, or agents be liable for any loss or damage (including indirect, incidental, special, or consequential damages) arising out of or in connection with the use of this website or reliance on its content.
                </p>
              </div>
            </div>

            {/* External Links */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                External Links
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  This website may include links to external websites operated by third parties.
                  VMK Accountants Limited has no control over the content or availability of these sites and does not endorse or make any representations about them. Accessing linked websites is done entirely at your own risk.
                </p>
              </div>
            </div>

            {/* Viruses and Security */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Viruses and Security
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  VMK Accountants Limited does not warrant that this website, its servers, or any linked websites are free from viruses or harmful components.
                  It is your responsibility to ensure that your computer and network have appropriate security, antivirus, and malware protection in place.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Copyright and Use of Content
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  All materials on this website, including text, graphics, logos, and images, are the intellectual property of VMK Accountants Limited unless otherwise stated.
                  No content may be copied, reproduced, distributed, or modified without prior written permission.
                  Any unauthorised use may violate copyright, trademark, or other laws.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-gradient-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Governing Law
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  This disclaimer shall be governed by and construed in accordance with the laws of England and Wales.
                  The courts of England shall have exclusive jurisdiction over any disputes arising in connection with this website.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Contact Us
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  If you have any questions about this disclaimer, please contact:
                </p>
                <p className="font-semibold">
                  📧 admin@vmkaccountants.co.uk
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need professional advice?"
        description="Don't rely on website information alone. Get personalized guidance from our qualified accountants."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Back to Home"
        secondaryButtonLink="/"
      />
    </div>
  );
};

export default Disclaimer;
