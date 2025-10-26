import { Building2, CheckCircle, FileText, Users, MapPin, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CompanyFormation = () => {
  const formationSteps = [
    "Choose your company name and check availability",
    "Decide on company structure (Limited, LLP)",
    "Appoint directors and shareholders",
    "Determine share structure and capital",
    "Provide registered office address",
    "Submit formation to Companies House",
    "Receive Certificate of Incorporation",
    "Register with HMRC for Corporation Tax",
  ];

  const includedServices = [
    { icon: Building2, title: "Company Registration", description: "Full Companies House registration service" },
    { icon: FileText, title: "Memorandum & Articles", description: "Standard or customized constitutional documents" },
    { icon: Users, title: "Director & Shareholder Setup", description: "Appointment and share allocation" },
    { icon: MapPin, title: "Registered Office", description: "Professional registered office address service" },
    { icon: Shield, title: "HMRC Registration", description: "Corporation Tax and PAYE registration" },
    { icon: CheckCircle, title: "Compliance Package", description: "First year statutory compliance support" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <Building2 className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Company Formation
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Start your business the right way. We handle all aspects of limited company formation including registration, structure advice, and initial compliance setup.
          </p>
        </div>
      </section>

      {/* Company Formation Form Link */}
      <section className="py-12 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Start Your Company Formation?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Complete our online form to begin your company formation journey
            </p>
            <a 
              href="https://forms.gle/Xhe3Vctq3ty7YU8MA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="default">
                Complete New Company Setup Form
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Formation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Our Formation Process
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Simple, straightforward company formation in 8 easy steps
            </p>

            <div className="space-y-4">
              {formationSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 bg-card p-6 rounded-lg shadow-soft">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-foreground flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Comprehensive company formation package with ongoing support
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-border">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-sm">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure Advice */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Choosing the Right Structure
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              We'll help you decide which business structure is best for you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Limited Company</CardTitle>
                  <CardDescription>Most common for small businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Limited liability protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tax efficient profit extraction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional business image</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Easier to raise investment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Limited Liability Partnership (LLP)</CardTitle>
                  <CardDescription>Ideal for professional partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Partner liability protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Flexible profit sharing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tax transparency</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional credibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Not sure which structure is right for you? We'll provide expert advice based on your specific circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to form your limited company?"
        description="Contact us today to start your company formation. We'll guide you through every step of the process."
        primaryButtonText="Start Company Formation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Other Start-Up Services"
        secondaryButtonLink="/business-start-up/useful-links"
      />
    </div>
  );
};

export default CompanyFormation;
