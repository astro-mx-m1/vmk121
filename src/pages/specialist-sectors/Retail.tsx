import { ShoppingCart, BarChart3, Package, CreditCard, TrendingUp, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const Retail = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Point of Sale Integration",
      description: "Seamless integration with your POS system for accurate financial reporting.",
    },
    {
      icon: BarChart3,
      title: "Stock Control & Inventory",
      description: "Inventory management and stock valuation to optimize your cash flow.",
    },
    {
      icon: Package,
      title: "Supplier Management",
      description: "Track supplier accounts, payment terms, and optimize your purchasing.",
    },
    {
      icon: CreditCard,
      title: "Payment Reconciliation",
      description: "Cash, card, and digital payment reconciliation for accurate books.",
    },
    {
      icon: TrendingUp,
      title: "Profit Margin Analysis",
      description: "Product-level profitability analysis to maximize your margins.",
    },
    {
      icon: Calculator,
      title: "VAT & Tax Planning",
      description: "Retail-specific VAT schemes and tax efficiency strategies.",
    },
  ];

  const challenges = [
    "Managing multiple payment methods and daily reconciliation",
    "Stock control and inventory valuation",
    "Understanding VAT schemes (flat rate, standard, cash accounting)",
    "Seasonal cash flow fluctuations",
    "Managing supplier credit terms",
    "Business rates and property costs",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Retail & Newsagents Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Specialist accounting services for retail shops, convenience stores, and newsagents. We understand the unique challenges of retail businesses.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Retail Success</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Running a retail business or newsagent requires careful financial management. From daily till reconciliation to stock control, VAT compliance, and supplier payments, the numbers can quickly become overwhelming.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in retail accounting. We help shop owners integrate their POS systems with cloud accounting software, manage inventory, optimize VAT schemes, and improve cash flow—so you can focus on serving your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Retail Businesses</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Retail Accounting Challenges</h2>
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
        title="Ready to streamline your retail accounting?"
        description="Contact our retail accounting specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default Retail;
