import { Scale, Shield, FileText, PoundSterling, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const Legal = () => {
  const services = [
    {
      icon: PoundSterling,
      title: "Client Account Management",
      description: "SRA-compliant client money accounting and reconciliation.",
    },
    {
      icon: Shield,
      title: "Solicitors Accounts Rules",
      description: "Full compliance with SRA Accounts Rules and regulations.",
    },
    {
      icon: FileText,
      title: "Matter-Based Accounting",
      description: "Track income, costs, and disbursements by matter and client.",
    },
    {
      icon: Users,
      title: "Partner & Profit Share",
      description: "Partnership accounting and profit distribution calculations.",
    },
    {
      icon: TrendingUp,
      title: "Practice Management",
      description: "KPIs, WIP management, and financial performance tracking.",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Ensure compliance with SRA and Law Society requirements.",
    },
  ];

  const challenges = [
    "Managing client money in compliance with SRA Accounts Rules",
    "Reconciling client and office accounts",
    "Work in progress (WIP) management and billing",
    "Matter-based cost and disbursement tracking",
    "Partnership profit allocation and tax planning",
    "Regulatory reporting and audit requirements",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Legal Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Specialist accounting for solicitors, law firms, and legal practices. Expert guidance on client accounts and SRA compliance.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Legal Practice Success</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Legal practices face unique accounting challenges—from strict client money rules and SRA compliance to matter-based accounting, WIP management, and partnership profit allocation.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in legal accounting. We help solicitors and law firms manage client accounts compliantly, track matters accurately, manage work in progress, and ensure full compliance with SRA Accounts Rules—so you can focus on serving your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Legal Practices</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Legal Practice Accounting Challenges</h2>
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
        title="Need legal accounting support?"
        description="Contact our legal accounting specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default Legal;
