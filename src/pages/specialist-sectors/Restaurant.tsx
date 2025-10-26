import { UtensilsCrossed, CreditCard, Users, TrendingDown, FileText, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const Restaurant = () => {
  const services = [
    {
      icon: CreditCard,
      title: "EPOS Integration",
      description: "Connect your till system to cloud accounting for real-time financial data.",
    },
    {
      icon: Users,
      title: "Staff & Tips Management",
      description: "Payroll including tips, service charges, and tronc schemes.",
    },
    {
      icon: TrendingDown,
      title: "Cost Control",
      description: "Food cost analysis, waste tracking, and margin optimization.",
    },
    {
      icon: FileText,
      title: "Supplier Management",
      description: "Track multiple suppliers, payment terms, and food cost fluctuations.",
    },
    {
      icon: Calculator,
      title: "VAT for Hospitality",
      description: "Complex VAT rules for food, drinks, and service charges.",
    },
    {
      icon: UtensilsCrossed,
      title: "Menu Pricing Strategy",
      description: "Financial modeling to optimize menu pricing and profitability.",
    },
  ];

  const challenges = [
    "Managing cash and card payment reconciliation",
    "Food cost control and waste management",
    "Complex VAT rules for hot food, cold food, and drinks",
    "Staff payroll including tips and service charges",
    "Seasonal cash flow variations",
    "Multiple supplier accounts and payment schedules",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Restaurant Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Specialist accounting for restaurants, cafes, takeaways, and hospitality businesses. We help you control costs and maximize profits.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Restaurant Success</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Running a restaurant or hospitality business requires tight control over costs, cash flow, and margins. From food cost management to staff payroll, VAT compliance, and daily till reconciliation, the financial side can be complex.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in restaurant and hospitality accounting. We help restaurant owners integrate EPOS systems, control food costs, manage payroll including tips, and navigate complex VAT rules—so you can focus on serving great food.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Restaurant Businesses</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Restaurant Accounting Challenges</h2>
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
        title="Need restaurant accounting support?"
        description="Contact our hospitality accounting specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default Restaurant;
