import { Shield, CheckCircle, FileText, Umbrella, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import otherServicesImage from "@/assets/other-services.jpg";

const FeeProtection = () => {
  const coverageAreas = [
    {
      icon: Shield,
      title: "HMRC Enquiry Protection",
      description: "Full coverage for professional fees during tax investigations and enquiries.",
      details: [
        "Self-Assessment enquiries",
        "Corporation Tax investigations",
        "VAT dispute representation",
        "Aspect enquiries",
        "Full enquiry cover",
        "Employer compliance disputes",
      ],
    },
    {
      icon: FileText,
      title: "Business Protection",
      description: "Comprehensive coverage for business-related compliance matters.",
      details: [
        "Business property checks",
        "CIS compliance investigations",
        "PAYE audits and disputes",
        "National Minimum Wage checks",
        "IR35 determinations",
        "Employee benefit reviews",
      ],
    },
    {
      icon: Umbrella,
      title: "Additional Coverage",
      description: "Extended protection for various statutory notices and compliance requirements.",
      details: [
        "Statutory notice appeals",
        "Discovery assessments",
        "Information notices",
        "Penalty determinations",
        "Time to pay negotiations",
        "Disclosure facility support",
      ],
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Protection",
      description: "Protect your business from unexpected professional fees, with coverage up to £100,000 per enquiry.",
    },
    {
      icon: Clock,
      title: "Peace of Mind",
      description: "Focus on running your business knowing you're protected against investigation costs.",
    },
    {
      icon: Shield,
      title: "Expert Support",
      description: "Access to experienced tax professionals without worrying about hourly fees mounting up.",
    },
  ];

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={otherServicesImage} 
            alt="Fee Protection Insurance" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Fee Protection Insurance
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Comprehensive insurance protection covering professional accountancy fees during HMRC investigations and compliance checks.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Fee Protection?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              HMRC investigations can be lengthy, complex, and costly. Professional representation during a tax investigation can cost thousands of pounds. Our fee protection insurance ensures you have access to expert support without the financial worry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="glass-card p-8 rounded-2xl hover-lift">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 mx-auto">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What's Covered?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover-lift shadow-soft glass-card">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Policy Details
            </h2>
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Coverage Limits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Up to £100,000 per enquiry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Unlimited number of claims</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">VAT disputes up to £100,000</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Employer compliance up to £100,000</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">No excess to pay</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Immediate cover on new enquiries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Cover for prior year enquiries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Annual renewable policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              How Fee Protection Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Subscribe to Fee Protection",
                  description: "Simple annual subscription covering all eligible enquiries and investigations.",
                },
                {
                  step: "2",
                  title: "Receive an HMRC Notice",
                  description: "If you receive an investigation notice, notify us immediately to activate your cover.",
                },
                {
                  step: "3",
                  title: "We Handle Everything",
                  description: "Our team manages the entire investigation process, fully covered under your policy.",
                },
                {
                  step: "4",
                  title: "No Bills to Worry About",
                  description: "All our professional fees are covered by your insurance - no unexpected costs.",
                },
              ].map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                        <span className="text-xl font-bold text-accent-foreground">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Affordable Annual Protection
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For a small annual fee, protect yourself from potentially thousands of pounds in professional fees. Coverage starts from as little as £100 per year for individuals and £200 for businesses.
            </p>
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-center">
                <p className="text-6xl font-bold text-primary mb-4">From £100</p>
                <p className="text-xl text-muted-foreground mb-6">per year</p>
                <p className="text-muted-foreground leading-relaxed">
                  Contact us for a personalized quote based on your specific needs and circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Protect your business today"
        description="Don't wait until it's too late. Get fee protection insurance now and enjoy peace of mind."
        primaryButtonText="Get a Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Tax Investigation Services"
        secondaryButtonLink="/services/other-services/tax-investigation"
      />
    </div>
  );
};

export default FeeProtection;
