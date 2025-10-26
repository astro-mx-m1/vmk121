import { TrendingUp, Shield, FileCheck, BarChart3, DollarSign, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const Finance = () => {
  const services = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "FCA compliance, regulatory reporting, and financial services regulations.",
    },
    {
      icon: FileCheck,
      title: "Audit & Assurance",
      description: "Financial statements audit and assurance services for financial firms.",
    },
    {
      icon: BarChart3,
      title: "Management Reporting",
      description: "Advanced financial analytics and performance dashboards.",
    },
    {
      icon: DollarSign,
      title: "Tax Planning",
      description: "Complex tax structures for financial services and investment firms.",
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic financial planning and growth advisory services.",
    },
    {
      icon: AlertCircle,
      title: "Risk Management",
      description: "Financial risk assessment and mitigation strategies.",
    },
  ];

  const challenges = [
    "Navigating complex FCA regulatory requirements",
    "Managing regulatory reporting deadlines",
    "Client money and asset protection rules",
    "Complex tax planning for investment structures",
    "Risk management and compliance frameworks",
    "Detailed financial reporting and audit requirements",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Finance Sector Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Specialist accounting for financial services firms, investment advisors, and finance professionals. Expert regulatory compliance and financial reporting.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Financial Services Excellence</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Financial services firms face some of the most complex accounting and regulatory requirements—from FCA compliance and regulatory reporting to client money rules, detailed financial statements, and risk management frameworks.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in finance sector accounting. We help financial advisors, investment firms, and finance professionals navigate regulatory compliance, manage complex reporting requirements, and optimize tax planning—so you can focus on serving your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Finance Sector Firms</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Finance Sector Accounting Challenges</h2>
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
        title="Need finance sector accounting support?"
        description="Contact our financial services accounting specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default Finance;
