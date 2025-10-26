import { Home, PoundSterling, FileCheck, Shield, TrendingUp, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const EstateAgents = () => {
  const services = [
    {
      icon: PoundSterling,
      title: "Client Account Management",
      description: "Compliant client money handling and reconciliation in accordance with regulations.",
    },
    {
      icon: FileCheck,
      title: "Commission Accounting",
      description: "Accurate commission tracking, split calculations, and revenue recognition.",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensure compliance with client money protection schemes and regulations.",
    },
    {
      icon: TrendingUp,
      title: "Business Performance",
      description: "KPI tracking and performance metrics for agents and offices.",
    },
    {
      icon: Calculator,
      title: "VAT Planning",
      description: "VAT advice for estate agents including partial exemption and schemes.",
    },
    {
      icon: Home,
      title: "Property Portfolio Advice",
      description: "Financial advice for agents investing in property themselves.",
    },
  ];

  const challenges = [
    "Managing client money accounts and compliance",
    "Commission calculations and split payments",
    "Understanding VAT rules for estate agents",
    "Cash flow management with irregular commission income",
    "Regulatory compliance and client money protection",
    "Tracking multiple transactions and completions",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Estate Agents Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Specialist accounting for estate agents, lettings agencies, and property professionals. Expert guidance on client accounts and compliance.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Estate Agency Success</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Estate agents and letting agencies face unique accounting challenges—from client money regulations to commission tracking, VAT complexities, and cash flow management with irregular income.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in estate agency accounting. We help agents manage client accounts compliantly, track commissions accurately, optimize VAT, and improve financial performance—so you can focus on closing deals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Estate Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-gradient-card border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Estate Agency Accounting Challenges</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-3 mt-1 text-xl">✓</span>
                  <span className="text-lg text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need estate agency accounting support?"
        description="Contact our estate agency specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default EstateAgents;
