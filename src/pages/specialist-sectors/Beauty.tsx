import { Scissors, ShoppingBag, Calendar, DollarSign, TrendingUp, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const Beauty = () => {
  const services = [
    {
      icon: Scissors,
      title: "Salon & Freelance Accounting",
      description: "Accounting for salon owners, mobile therapists, and chair renters.",
    },
    {
      icon: ShoppingBag,
      title: "Retail & Service Income",
      description: "Track both service income and product retail sales accurately.",
    },
    {
      icon: Calendar,
      title: "Appointment System Integration",
      description: "Connect booking systems to your accounting for seamless tracking.",
    },
    {
      icon: DollarSign,
      title: "Chair Rental Income",
      description: "Manage rental income from self-employed stylists and therapists.",
    },
    {
      icon: TrendingUp,
      title: "Profitability Analysis",
      description: "Service-level profitability and pricing optimization.",
    },
    {
      icon: FileText,
      title: "Expense Claims",
      description: "Maximize tax relief on equipment, products, and training.",
    },
  ];

  const challenges = [
    "Separating service income from product retail sales",
    "Managing cash and card payments",
    "Chair rental income and self-employed stylist arrangements",
    "Claiming expenses for equipment, products, and training",
    "Understanding VAT thresholds and registration",
    "Irregular income and seasonal variations",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Beauty Professionals Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Specialist accounting for hair salons, beauty therapists, nail technicians, and mobile beauty professionals. We understand your industry.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Beauty Business Success</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Whether you run a salon, rent a chair, or work mobile as a beauty therapist, managing your finances can be challenging. From tracking service and retail income to managing expenses and understanding tax obligations, the numbers can be overwhelming.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in beauty industry accounting. We help salon owners, freelance therapists, and mobile professionals manage their finances, track income accurately, claim all allowable expenses, and optimize tax—so you can focus on your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Beauty Professionals</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Beauty Industry Accounting Challenges</h2>
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
        title="Need beauty industry accounting support?"
        description="Contact our beauty accounting specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default Beauty;
