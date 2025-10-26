import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Laptop, Stethoscope, Home, HardHat, ShoppingCart, Baby, 
  Building, Camera, UtensilsCrossed, Scissors, Scale, TrendingUp 
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const SpecialistSectors = () => {
  const sectors = [
    {
      icon: Laptop,
      title: "IT Contractors & Freelancers",
      description: "IR35 compliance, limited company setup, expense tracking, and digital software integration.",
      path: "/specialist-sectors/it-contractors",
    },
    {
      icon: Stethoscope,
      title: "Medical (Doctors & Dentists)",
      description: "NHS & private income management, locum accounting, and tax relief on medical expenses.",
      path: "/specialist-sectors/medical",
    },
    {
      icon: Home,
      title: "Property & Landlords",
      description: "Rental accounts, capital gains management, stamp duty, and mortgage interest rules.",
      path: "/specialist-sectors/property-landlords",
    },
    {
      icon: HardHat,
      title: "Construction Industry Specialists",
      description: "CIS returns, subcontractor management, job costing, and construction-specific accounting.",
      path: "/specialist-sectors/construction",
    },
    {
      icon: ShoppingCart,
      title: "Retail & Newsagents",
      description: "POS integration, cashflow monitoring, stock control accounting, and retail analytics.",
      path: "/specialist-sectors/retail",
    },
    {
      icon: Baby,
      title: "Childcare Providers",
      description: "Payroll for staff, funding reconciliation, and budgeting for nurseries and childcare.",
      path: "/specialist-sectors/childcare",
    },
    {
      icon: Building,
      title: "Estate Agents",
      description: "Client account management, commission accounting, and VAT rules for property services.",
      path: "/specialist-sectors/estate-agents",
    },
    {
      icon: Camera,
      title: "Media & Creatives",
      description: "Freelance income management, royalties, production accounting, and creative sector support.",
      path: "/specialist-sectors/media-creatives",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Accounting",
      description: "EPOS systems integration, cashflow management, supplier management, and VAT for hospitality.",
      path: "/specialist-sectors/restaurant",
    },
    {
      icon: Scissors,
      title: "Beauty Professionals",
      description: "Self-employed salon owners, rental chair accounting, product sales, and beauty sector tax.",
      path: "/specialist-sectors/beauty",
    },
    {
      icon: Scale,
      title: "Legal Accounting",
      description: "Solicitor Accounts Rules compliance, client funds management, and legal practice accounting.",
      path: "/specialist-sectors/legal",
    },
    {
      icon: TrendingUp,
      title: "Finance Sector",
      description: "Compliance support, regulatory reporting, financial analytics, and sector-specific requirements.",
      path: "/specialist-sectors/finance",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Specialist Sectors | Industry-Specific Accountants - VMK</title>
        <meta name="description" content="Expert accountants for IT contractors, medical professionals, property landlords, construction, retail, restaurants, and more. Industry-specific accounting and tax advice." />
        <meta name="keywords" content="it contractor accountants, medical accountants, property accountant, construction accounting, restaurant accountant, sector specialists" />
        <link rel="canonical" href="https://vmkaccountants.co.uk/specialist-sectors" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Specialist Sectors
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            At VMK Accountants Limited, we understand that every industry faces unique accounting challenges. Our specialist sector knowledge helps you stay compliant while maximising profitability.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialist accounting expertise tailored to your industry's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Link key={index} to={sector.path}>
                  <Card className="h-full hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[hsl(210,100%,15%)] to-[hsl(210,100%,25%)]">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">{sector.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {sector.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Sector Expertise Matters */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Industry Expertise Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Generic accounting advice isn't enough. Each industry has specific regulations, tax treatments, and financial challenges that require specialized knowledge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-large transition-all hover:-translate-y-1">
                <h3 className="font-bold text-lg mb-2 text-primary">Industry-Specific Knowledge</h3>
                <p className="text-sm text-muted-foreground">
                  We understand the unique accounting challenges, regulations, and opportunities in your sector
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-large transition-all hover:-translate-y-1">
                <h3 className="font-bold text-lg mb-2 text-primary">Maximise Tax Relief</h3>
                <p className="text-sm text-muted-foreground">
                  Identify and claim all industry-specific tax reliefs, allowances, and deductions available to you
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-large transition-all hover:-translate-y-1">
                <h3 className="font-bold text-lg mb-2 text-primary">Compliance Confidence</h3>
                <p className="text-sm text-muted-foreground">
                  Stay ahead of sector-specific regulations and compliance requirements with expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to work with sector specialists?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industry-specific accounting needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="group">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SpecialistSectors;
