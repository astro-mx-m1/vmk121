import { Baby, Users, DollarSign, FileText, Shield, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const Childcare = () => {
  const services = [
    {
      icon: Users,
      title: "Payroll for Childcare Staff",
      description: "Complete payroll management including pension auto-enrolment and compliance.",
    },
    {
      icon: DollarSign,
      title: "Funding Reconciliation",
      description: "Government funding reconciliation for 2-year-old, 3-4 year-old, and 30-hour schemes.",
    },
    {
      icon: FileText,
      title: "Management Accounts",
      description: "Monthly financial reports to track occupancy, income, and expenses.",
    },
    {
      icon: Shield,
      title: "Compliance & Regulations",
      description: "Ensure compliance with Ofsted, local authority, and financial regulations.",
    },
    {
      icon: Calendar,
      title: "Budgeting & Forecasting",
      description: "Financial planning for seasonal variations and occupancy changes.",
    },
    {
      icon: Baby,
      title: "Nursery-Specific Advice",
      description: "Fee setting, cost analysis, and profitability optimization for nurseries.",
    },
  ];

  const challenges = [
    "Managing government funding and reconciling payments",
    "Payroll for multiple staff with varying hours",
    "Tracking occupancy and fee collection",
    "Budgeting for seasonal variations in attendance",
    "Understanding childcare-specific tax reliefs and grants",
    "Pension auto-enrolment compliance for staff",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Childcare Providers Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Expert accounting for nurseries, pre-schools, childminders, and after-school clubs. We understand the unique financial challenges of childcare providers.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Childcare Excellence</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Running a childcare business requires managing government funding, staff payroll, occupancy tracking, and regulatory compliance—all while providing excellent care for children.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in childcare accounting. We help nursery owners, childminders, and pre-school managers with funding reconciliation, payroll, budgeting, and financial planning so you can focus on what matters most—caring for children.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Childcare Providers</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Childcare Accounting Challenges</h2>
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
        title="Need childcare accounting support?"
        description="Contact our childcare accounting specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default Childcare;
