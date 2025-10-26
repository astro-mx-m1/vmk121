import { ExternalLink, Building2, FileText, DollarSign, Users, BookOpen, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UsefulLinks = () => {
  const linkCategories = [
    {
      icon: Building2,
      title: "Government & Regulatory",
      links: [
        { name: "Gov.uk - Start a Business", url: "https://www.gov.uk/set-up-business", description: "Official UK government guide to starting a business" },
        { name: "Companies House", url: "https://www.gov.uk/government/organisations/companies-house", description: "Register and manage your limited company" },
        { name: "HMRC Business Taxes", url: "https://www.gov.uk/business-tax", description: "Information on business taxes and obligations" },
        { name: "HMRC Self Assessment", url: "https://www.gov.uk/self-assessment-tax-returns", description: "Register and file Self Assessment returns" },
      ],
    },
    {
      icon: FileText,
      title: "Business Planning & Support",
      links: [
        { name: "Business Plan Template", url: "https://www.gov.uk/write-business-plan", description: "Free business plan template and guidance" },
        { name: "StartUp Loans", url: "https://www.startuploans.co.uk/", description: "Government-backed start-up funding" },
        { name: "British Business Bank", url: "https://www.british-business-bank.co.uk/", description: "Finance and support for UK businesses" },
        { name: "Enterprise Nation", url: "https://www.enterprisenation.com/", description: "Support network for UK small businesses" },
      ],
    },
    {
      icon: DollarSign,
      title: "Accounting Software",
      links: [
        { name: "Xero", url: "https://www.xero.com/uk/", description: "Cloud accounting software for small businesses" },
        { name: "QuickBooks", url: "https://quickbooks.intuit.com/uk/", description: "Online accounting and bookkeeping" },
        { name: "Sage", url: "https://www.sage.com/en-gb/", description: "Accounting and business management software" },
        { name: "FreeAgent", url: "https://www.freeagent.com/", description: "Accounting software for freelancers and small businesses" },
      ],
    },
    {
      icon: Users,
      title: "Employment & Payroll",
      links: [
        { name: "PAYE for Employers", url: "https://www.gov.uk/paye-for-employers", description: "Register and run payroll for employees" },
        { name: "Workplace Pensions", url: "https://www.thepensionsregulator.gov.uk/", description: "Auto-enrolment pension obligations" },
        { name: "Employment Rights", url: "https://www.gov.uk/employment-rights", description: "Understand your obligations as an employer" },
        { name: "National Insurance", url: "https://www.gov.uk/national-insurance", description: "NI rates and information for employers" },
      ],
    },
    {
      icon: BookOpen,
      title: "Business Resources",
      links: [
        { name: "FSB (Federation of Small Businesses)", url: "https://www.fsb.org.uk/", description: "UK's leading small business group" },
        { name: "ICAEW - Business Advice", url: "https://www.icaew.com/", description: "Professional accounting body resources" },
        { name: "Gov.uk Business Support Helpline", url: "https://www.gov.uk/business-support-helpline", description: "Free government support for businesses" },
        { name: "Intellectual Property Office", url: "https://www.gov.uk/government/organisations/intellectual-property-office", description: "Protect your trademarks and patents" },
      ],
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      links: [
        { name: "ICO - Data Protection", url: "https://ico.org.uk/", description: "Data protection and GDPR compliance" },
        { name: "Health & Safety Executive", url: "https://www.hse.gov.uk/", description: "Workplace health and safety guidance" },
        { name: "Business Licences Finder", url: "https://www.gov.uk/licence-finder", description: "Find licences and permits for your business" },
        { name: "Employment Tribunal", url: "https://www.gov.uk/employment-tribunals", description: "Employment law and dispute resolution" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <ExternalLink className="h-12 w-12 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Useful Links & Resources
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            A comprehensive collection of helpful resources, tools, and official links for UK businesses and entrepreneurs.
          </p>
        </div>
      </section>

      {/* Links Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {linkCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="max-w-5xl mx-auto">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                                {link.name}
                              </CardTitle>
                              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0 ml-2" />
                            </div>
                            <CardDescription className="text-sm">
                              {link.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need More Help */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Need Expert Guidance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While these resources are helpful, nothing beats personalized advice from a qualified accountant. Contact VMK Accountants Limited for expert support tailored to your business needs.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Expert Advice
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsefulLinks;
