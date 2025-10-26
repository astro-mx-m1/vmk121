import { Shield, FileSearch, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import otherServicesImage from "@/assets/other-services.jpg";

const OtherServices = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Tax Investigation",
      description: "Professional representation and support during HMRC tax investigations and enquiries.",
      link: "/services/other-services/tax-investigation",
      details: [
        "Expert HMRC correspondence handling",
        "Full investigation representation",
        "Document preparation and submission",
        "Negotiation with tax authorities",
        "Risk assessment and mitigation",
        "Settlement agreements",
      ],
    },
    {
      icon: Shield,
      title: "Fee Protection",
      description: "Comprehensive insurance protection covering accountancy fees in case of tax investigations.",
      link: "/services/other-services/fee-protection",
      details: [
        "HMRC enquiry fee protection",
        "VAT dispute cover",
        "Employer compliance protection",
        "Business property checks cover",
        "Statutory notice appeals",
        "Peace of mind guarantee",
      ],
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "Expert financial planning including pensions, investments, and wealth management.",
      link: "/services/other-services/financial-services",
      details: [
        "Pension planning and advice",
        "Investment portfolio management",
        "Retirement planning",
        "Tax-efficient investing",
        "Wealth preservation strategies",
        "Financial goal planning",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={otherServicesImage} 
            alt="Financial Protection Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Other Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Comprehensive protection and financial planning services to safeguard your business and secure your future.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-lift shadow-soft glass-card group">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-3 mt-1 font-bold">✓</span>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Comprehensive Protection & Financial Planning
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Beyond traditional accounting services, we offer specialized protection and financial planning services to help you navigate complex tax situations, protect your business from unexpected costs, and plan for a secure financial future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
                <p className="text-muted-foreground">Tax Investigations Handled</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-primary mb-2">£2M+</h3>
                <p className="text-muted-foreground">Fee Protection Coverage</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Financial Plans Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need protection or financial planning advice?"
        description="Contact us today to discuss how our specialized services can protect your business and secure your financial future."
        primaryButtonText="Request a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Business Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default OtherServices;
