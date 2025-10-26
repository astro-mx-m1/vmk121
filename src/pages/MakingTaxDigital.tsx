import { CheckCircle, Calendar, FileText, AlertTriangle, HelpCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/CTASection";

const MakingTaxDigital = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Making Tax Digital (MTD)
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Everything you need to know about Making Tax Digital and how VMK can help you comply with confidence.
          </p>
        </div>
      </section>

      {/* What is MTD Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What is Making Tax Digital?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Making Tax Digital (MTD) is a UK government initiative designed to modernise the tax system by requiring businesses and individuals to maintain digital records and submit tax information to HMRC electronically.
              </p>
              <p>
                MTD was first applied to VAT, and now the government is rolling out MTD for Income Tax / Self Assessment (ITSA). This means more taxpayers will need to adopt digital record-keeping and quarterly reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              MTD Timeline & Who It Applies To
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding when you need to comply with Making Tax Digital
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-secondary" />
                  <div>
                    <CardTitle>April 2026</CardTitle>
                    <CardDescription>First wave of MTD for Income Tax</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sole traders and landlords with gross self-employment and property income above <strong>£50,000</strong> must begin using MTD for Income Tax.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-secondary" />
                  <div>
                    <CardTitle>April 2027</CardTitle>
                    <CardDescription>Lower threshold implementation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The threshold is expected to be lowered (potentially to <strong>£30,000</strong>), bringing more taxpayers into the MTD regime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border border-accent/50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <AlertTriangle className="h-8 w-8 text-accent" />
                  <div>
                    <CardTitle>Exemptions</CardTitle>
                    <CardDescription>Some may be exempt</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Certain individuals may be exempt from MTD, including those who are digitally excluded, have very low income, or meet other specific criteria. Contact us to discuss your situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Changes Under MTD?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key requirements and how your tax reporting will work
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <FileText className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-xl">Digital Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You must keep digital records of income and expenses (date, amount, tax category) using compatible software or spreadsheets with digital links.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <Calendar className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-xl">Quarterly Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Submit quarterly updates to HMRC summarising your income and expenses for that period. These are not "mini tax returns" but progress reports.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-xl">Final Declaration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By 31 January following the tax year end, submit a final declaration including adjustments, allowances, and any other income.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <FileText className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-xl">Digital Linking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Data transfer must be digital and automated. Manual copy-and-paste is not allowed for MTD-relevant information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How VMK Helps Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How VMK Helps You With MTD
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make Making Tax Digital simple and stress-free
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "Evaluate whether you fall under MTD and when you need to start",
              "Recommend and help you adopt HMRC-compliant software",
              "Migrate your existing accounting records to digital format",
              "Set up systems for digital record keeping and automation",
              "Submit your quarterly updates and final declarations on your behalf",
              "Provide tax planning advice under the new MTD regime",
              "Offer training and support so you understand your accounting system",
              "Ongoing compliance support and deadline management",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-card p-4 rounded-lg shadow-soft">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefits of Making Tax Digital
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              While it requires adjustment, MTD offers real advantages
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Real-Time Visibility",
                description: "See your financial position at any time, not just once a year.",
              },
              {
                title: "Less Year-End Stress",
                description: "Quarterly submissions mean no last-minute rush in January.",
              },
              {
                title: "Fewer Errors & Penalties",
                description: "Digital systems reduce mistakes and potential HMRC penalties.",
              },
              {
                title: "Better Cash Flow",
                description: "Regular review helps you manage cash and plan for tax payments.",
              },
              {
                title: "Stronger Relationships",
                description: "More frequent touchpoints with your accountant mean better support.",
              },
              {
                title: "Future-Ready Business",
                description: "Embrace modern accounting and stay ahead of compliance changes.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common concerns about Making Tax Digital
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>What if I don't think I'll meet the threshold?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  You may be exempt initially, but it's important to monitor your income throughout the year. If you approach the threshold, you'll need to prepare for MTD compliance. We can help you track this and plan ahead.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Can I choose to adopt MTD early?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Yes, some individuals may volunteer to join MTD early, even if they're below the threshold. This can be beneficial to get ahead of the curve and improve your record-keeping systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>What if my current software isn't compatible?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  You'll need to migrate to MTD-compatible software or use bridging software to connect your existing system. We can recommend the best solutions for your needs and help with the transition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Are there penalties for non-compliance?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Yes, HMRC may impose penalties if you fail to comply with MTD requirements when you're required to do so. It's crucial to understand your obligations and ensure you're meeting them on time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>How much will MTD compliance cost me?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Costs vary depending on your business size, complexity, and the software you choose. We offer transparent pricing and can provide a quote based on your specific needs. Many find that the improved efficiency offsets the additional costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Do I still need to file a Self Assessment tax return?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Under MTD, the quarterly updates replace much of the traditional Self Assessment process, but you still need to submit a final declaration by 31 January. This final declaration is your "end of year" submission that finalizes your tax position.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need help with Making Tax Digital?"
        description="Don't navigate MTD alone. Let VMK guide you through the transition with expert support and practical solutions."
        primaryButtonText="Book Your MTD Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};

export default MakingTaxDigital;
