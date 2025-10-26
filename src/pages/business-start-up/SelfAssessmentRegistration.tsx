import { FileText, CheckCircle, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const SelfAssessmentRegistration = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <FileText className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Self-Assessment Registration
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Starting as self-employed? We'll help you register for Self Assessment with HMRC and guide you through your tax obligations as a sole trader or freelancer.
          </p>
        </div>
      </section>

      {/* Who Needs to Register */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Who Needs to Register?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              You must register for Self Assessment if you:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Are self-employed as a sole trader",
                "Earn over £1,000 from self-employment",
                "Are a partner in a business partnership",
                "Receive rental income from property",
                "Have income from savings or investments over certain thresholds",
                "Are a company director with additional income",
                "Need to pay Capital Gains Tax",
                "Have any untaxed income over £2,500",
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 bg-card p-4 rounded-lg shadow-soft">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Timeline */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Registration Timeline
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Important deadlines you need to know
            </p>

            <div className="space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-6 w-6 text-secondary" />
                    <CardTitle>By 5 October</CardTitle>
                  </div>
                  <CardDescription>
                    Register for Self Assessment by 5 October following the end of the tax year in which you became self-employed
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-6 w-6 text-secondary" />
                    <CardTitle>First Day of Trading</CardTitle>
                  </div>
                  <CardDescription>
                    Ideally, register as soon as you start trading to avoid penalties and ensure you don't miss deadlines
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-secondary" />
                    <CardTitle>Receive UTR</CardTitle>
                  </div>
                  <CardDescription>
                    After registration, HMRC will send you a Unique Taxpayer Reference (UTR) number within 10 working days
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do For You */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How We Help
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Our Self-Assessment registration service includes:
            </p>

            <div className="space-y-4">
              {[
                "Complete the Self Assessment registration with HMRC on your behalf",
                "Advise on the optimal business structure (sole trader vs limited company)",
                "Set up your tax records and explain record-keeping requirements",
                "Provide guidance on allowable expenses you can claim",
                "Explain payment on account and when tax is due",
                "Set up reminders for key tax deadlines and filing dates",
                "Offer ongoing support and answer any tax questions",
                "Prepare and file your first Self Assessment tax return",
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-soft">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to register for Self Assessment?"
        description="Let us handle your Self Assessment registration and guide you through your tax obligations as a self-employed individual."
        primaryButtonText="Get Started with Registration"
        primaryButtonLink="/contact"
        secondaryButtonText="View Other Start-Up Services"
        secondaryButtonLink="/business-start-up/useful-links"
      />
    </div>
  );
};

export default SelfAssessmentRegistration;
