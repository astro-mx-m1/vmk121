import { FileText, Building2, Users, DollarSign, Shield, Scale, Home, AlertCircle, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import taxationServicesImage from "@/assets/taxation-services.jpg";

const TaxationServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Personal Tax Planning & Self Assessment",
      description: "Expert personal tax planning and Self Assessment preparation.",
      details: [
        "Preparation & filing of Self Assessment tax returns",
        "Personal tax efficiency and savings advice",
        "Dealing with HMRC queries",
        "Deadline management and reminders",
        "Tax investigation support",
        "Capital gains tax advice",
      ],
    },
    {
      icon: Home,
      title: "Property Tax & Rental Accounts",
      description: "Specialized tax services for landlords and property investors.",
      details: [
        "Tax returns for landlords",
        "Rental income reporting",
        "Allowable expenses & capital allowances",
        "Mortgage interest relief guidance",
        "Property disposal and CGT calculations",
        "Portfolio tax planning",
      ],
    },
    {
      icon: Users,
      title: "Contractor Tax & IR35",
      description: "Expert guidance for contractors navigating IR35 and tax efficiency.",
      details: [
        "IR35 compliance & advice",
        "Umbrella vs. limited structure guidance",
        "Tax-efficient extraction of income",
        "Contractor tax returns",
        "Personal Service Company (PSC) accounting",
        "Expense claims optimization",
      ],
    },
    {
      icon: DollarSign,
      title: "VAT, PAYE & NIC",
      description: "Complete VAT and employment tax management.",
      details: [
        "VAT planning and compliance",
        "PAYE registration and operation",
        "National Insurance management",
        "VAT scheme selection and optimization",
        "Employment status reviews",
        "HMRC compliance support",
      ],
    },
    {
      icon: Building2,
      title: "CIS (Construction Industry Scheme)",
      description: "Specialized CIS services for construction businesses.",
      details: [
        "CIS registration & monthly returns",
        "Subcontractor verification & statements",
        "Deduction management",
        "Gross payment status applications",
        "CIS compliance reviews",
        "Contractor and subcontractor support",
      ],
    },
    {
      icon: Shield,
      title: "Corporation Tax Planning & CT600",
      description: "Strategic corporation tax planning and compliance.",
      details: [
        "Preparation & submission of CT600 returns",
        "Corporation tax minimisation strategies",
        "Tax-efficient profit extraction",
        "Group relief and consortium claims",
        "R&D tax credits",
        "Capital allowances optimization",
      ],
    },
    {
      icon: Scale,
      title: "Capital Gains, Inheritance Tax & Estate Planning",
      description: "Comprehensive tax planning for wealth preservation.",
      details: [
        "CGT calculations for property & investments",
        "Inheritance tax planning and trusts",
        "Estate accounting",
        "Business asset disposal relief",
        "Agricultural and business property relief",
        "Lifetime gifting strategies",
      ],
    },
    {
      icon: AlertCircle,
      title: "Tax Enquiries & Investigations",
      description: "Professional support during HMRC investigations.",
      details: [
        "HMRC investigation support",
        "Dispute resolution & voluntary disclosures",
        "Representation at tribunals",
        "Compliance checks assistance",
        "Penalty negotiation",
        "Tax dispute resolution",
      ],
    },
    {
      icon: Smartphone,
      title: "Making Tax Digital for Sole Traders & Income Tax",
      description: "Expert MTD compliance support for self-employed individuals and landlords.",
      details: [
        "MTD readiness assessment and planning",
        "Digital record-keeping setup and training",
        "Quarterly submission preparation",
        "MTD-compatible software implementation",
        "Final declaration and year-end adjustments",
        "Ongoing MTD compliance support",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={taxationServicesImage} 
            alt="Taxation Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Taxation Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Expert tax planning, returns, VAT and compliance services for individuals, contractors, landlords and businesses across all sectors.
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
        title="Need expert tax advice?"
        description="Contact us today to discuss your tax planning needs and discover how we can help you save tax legally."
        primaryButtonText="Request a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Business Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default TaxationServices;
