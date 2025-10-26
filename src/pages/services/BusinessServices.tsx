import { BookOpen, FileText, Users, DollarSign, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import businessServicesImage from "@/assets/business-services.jpg";

const BusinessServices = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Accountancy, Bookkeeping & Software",
      description: "Comprehensive accounting services to keep your finances organized and compliant.",
      details: [
        "Preparation of annual accounts and management reports",
        "Cloud accounting setup (Xero, QuickBooks, Sage)",
        "Bookkeeping and data entry",
        "Software support and training",
        "Real-time financial insights",
        "File organization and expense tracking",
      ],
    },
    {
      icon: DollarSign,
      title: "VAT Returns",
      description: "Complete VAT management ensuring full compliance with HMRC requirements.",
      details: [
        "VAT registration and de-registration",
        "Quarterly VAT submissions",
        "MTD compliance for VAT",
        "VAT advice and planning",
        "VAT scheme optimization (Flat Rate, Cash Accounting)",
        "VAT refund claims",
      ],
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Full payroll management ensuring your staff are paid accurately and on time.",
      details: [
        "Monthly payroll processing",
        "Auto-enrolment & pension setup",
        "PAYE submissions and HMRC reporting",
        "CIS payroll management",
        "Payslips and P60s",
        "Employee record management",
      ],
    },
    {
      icon: Building2,
      title: "Company Secretarial Services",
      description: "Professional company administration and Companies House compliance.",
      details: [
        "Company formation and administration",
        "Annual confirmation statements",
        "Director and shareholder changes",
        "Registered office address service",
        "Companies House filing",
        "Corporate governance support",
      ],
    },
    {
      icon: FileText,
      title: "Support Services",
      description: "Comprehensive business support to help your company thrive.",
      details: [
        "Business advisory & planning",
        "Management accounts",
        "Budgeting & forecasting",
        "HMRC correspondence and compliance support",
        "Financial projections",
        "Cash flow management",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={businessServicesImage} 
            alt="Business Accounting Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Business Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Comprehensive business accounting, bookkeeping, payroll and company support services to help your business run smoothly and efficiently.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-gradient-card border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-secondary mr-2 mt-1">✓</span>
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

      {/* CTA Section */}
      <CTASection
        title="Need business accounting support?"
        description="Contact us today to discuss how our business services can help your company succeed."
        primaryButtonText="Request a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Taxation Services"
        secondaryButtonLink="/services/taxation-services"
      />
    </div>
  );
};

export default BusinessServices;
