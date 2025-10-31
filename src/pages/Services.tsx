import { Helmet } from "react-helmet";
import { BookOpen, FileText, Users, DollarSign, TrendingUp, Building2, Shield, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Accounting & Bookkeeping",
      description: "Comprehensive accounting services to keep your finances organized and compliant.",
      details: [
        "Monthly bookkeeping and reconciliation",
        "Management accounts and financial reporting",
        "Year-end accounts preparation",
        "File organization and expense tracking",
        "Cloud accounting software setup (Xero, QuickBooks)",
        "Real-time financial insights",
      ],
    },
    {
      icon: Users,
      title: "Payroll & Auto-Enrolment",
      description: "Complete payroll management ensuring your staff are paid accurately and on time.",
      details: [
        "Weekly, bi-weekly, or monthly payroll processing",
        "PAYE calculations and submissions",
        "Pension auto-enrolment compliance",
        "RTI submissions to HMRC",
        "Payslips and P60s",
        "Employee record management",
      ],
    },
    {
      icon: FileText,
      title: "Self Assessment & Income Tax",
      description: "Personal tax return preparation and strategic tax planning for individuals.",
      details: [
        "Self Assessment tax return preparation and submission",
        "Income tax calculations and planning",
        "HMRC correspondence handling",
        "Capital gains tax advice",
        "Tax investigation support",
        "Deadline management and reminders",
      ],
    },
    {
      icon: DollarSign,
      title: "VAT & VAT Registration",
      description: "VAT compliance, registration, and Making Tax Digital for VAT support.",
      details: [
        "VAT return preparation and filing",
        "VAT registration services",
        "Threshold monitoring and advice",
        "MTD for VAT compliance",
        "VAT scheme optimization (Flat Rate, Cash Accounting)",
        "VAT refund claims",
      ],
    },
    {
      icon: TrendingUp,
      title: "Business Advisory & Growth",
      description: "Strategic financial guidance to help your business thrive and expand.",
      details: [
        "Cash flow forecasting and management",
        "Business budgets and financial projections",
        "Profitability analysis and KPI tracking",
        "Growth strategy consulting",
        "Investment appraisal",
        "Exit planning and succession advice",
      ],
    },
    {
      icon: Building2,
      title: "Company Formation & Registration",
      description: "Expert guidance on setting up your new limited company correctly from day one.",
      details: [
        "New limited company registration",
        "Business structure advice (Limited, LLP, Sole Trader)",
        "Companies House filing",
        "Director responsibilities guidance",
        "Share structure planning",
        "Registered office services",
      ],
    },
    {
      icon: Shield,
      title: "Tax Planning & Consultancy",
      description: "Proactive tax strategies to minimize your liability and maximize savings.",
      details: [
        "Personal and corporate tax planning",
        "Corporation tax optimization",
        "Tax-efficient profit extraction",
        "Inheritance tax planning",
        "Capital allowances and R&D claims",
        "Tax relief identification",
      ],
    },
    {
      icon: Briefcase,
      title: "IR35 & Contractor Services",
      description: "Specialized support for contractors navigating IR35 and contractor taxation.",
      details: [
        "IR35 status determination",
        "Contract reviews",
        "Contractor tax returns",
        "Personal Service Company (PSC) accounting",
        "Expense claims optimization",
        "HMRC compliance for contractors",
      ],
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Accounting Services | Tax, Payroll, VAT & Business Advisory</title>
        <meta name="description" content="Comprehensive accounting services including bookkeeping, self assessment, VAT returns, payroll, business advisory, and tax planning. Expert support for small businesses, sole traders, and contractors." />
        <meta name="keywords" content="accounting services, tax returns, payroll services, vat registration, business advisory, company formation, ir35 contractors" />
        <link rel="canonical" href="https://vmkaccountants.co.uk/services" />
        <meta property="og:title" content="Accounting Services | Tax, Payroll, VAT & Business Advisory" />
        <meta property="og:description" content="Comprehensive accounting services including bookkeeping, self assessment, VAT returns, payroll, business advisory, and tax planning." />
        <meta property="og:url" content="https://vmkaccountants.co.uk/services" />
        
        {/* Service Structured Data for SEO/AEO/GEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Accounting Services",
            "provider": {
              "@type": "AccountingService",
              "name": "VMK Accountants",
              "url": "https://vmkaccountants.co.uk"
            },
            "areaServed": {
              "@type": "City",
              "name": "London"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Accounting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Accounting & Bookkeeping",
                    "description": "Monthly bookkeeping, management accounts, year-end accounts and financial reporting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Payroll & Auto-Enrolment",
                    "description": "Complete payroll processing, PAYE, pension auto-enrolment, and RTI compliance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Self Assessment & Income Tax",
                    "description": "Personal tax returns, HMRC correspondence, and tax planning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "VAT & VAT Registration",
                    "description": "VAT registration, quarterly returns, and Making Tax Digital compliance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Advisory & Growth",
                    "description": "Cash flow forecasting, business planning, and growth strategy consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Company Formation",
                    "description": "New limited company registration and business structure advice"
                  }
                }
              ]
            }
          })}
        </script>

        {/* BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vmkaccountants.co.uk/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://vmkaccountants.co.uk/services"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Comprehensive accounting, tax, and advisory services tailored for small & medium businesses, sole traders, landlords, and contractors.
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
                <Card key={index} className="hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[hsl(210,100%,15%)] to-[hsl(210,100%,25%)]`}>
                      <Icon className="h-8 w-8 text-white" />
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

      {/* Who We Serve Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Who We Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in serving a diverse range of clients across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Small & Medium Businesses", description: "Limited companies seeking comprehensive accounting and growth support" },
              { title: "Sole Traders & Freelancers", description: "Self-employed individuals needing tax and bookkeeping assistance" },
              { title: "Landlords & Property Investors", description: "Property portfolio owners requiring specialized tax guidance" },
              { title: "Contractors & Consultants", description: "IR35 compliance and PSC accounting for independent contractors" },
            ].map((client, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{client.title}</CardTitle>
                  <CardDescription className="text-sm">{client.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to discuss your needs?"
        description="Every business is unique. Let's talk about how we can tailor our services to help you succeed."
        primaryButtonText="Request a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn about Making Tax Digital"
        secondaryButtonLink="/making-tax-digital"
      />
    </div>
  );
};

export default Services;
