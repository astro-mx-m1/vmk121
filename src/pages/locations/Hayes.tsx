import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Hayes = () => {
  const services = [
    "Industrial and commercial business accounting",
    "Manufacturing sector bookkeeping services",
    "Self Assessment for business owners and contractors",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Year-end accounts for industrial businesses",
    "Accounting software for commercial enterprises",
    "Management accounts for growing companies",
    "Payroll services for Hayes employers",
    "VAT returns for industrial and commercial businesses",
    "Tax planning for manufacturing and logistics firms",
    "Business growth advisory services",
    "Commercial property tax advice",
    "Tax investigation support and HMRC queries",
    "Corporation tax for Hayes companies",
    "Strategic financial planning for expanding businesses",
  ];

  const benefits = [
    "Expert accountants serving Hayes' industrial and commercial growth sectors",
    "Specialist Making Tax Digital (MTD) services for Hayes manufacturing and logistics businesses",
    "Deep understanding of industrial accounting and commercial business taxation",
    "Comprehensive taxation services supporting Hayes' expanding business landscape",
    "MTD compliance support tailored for Hayes' industrial and commercial enterprises",
    "Responsive local accountant services throughout Hayes and Hayes Town",
    "Face-to-face meetings available in Hayes for business advisory sessions",
    "Professional tax advisors supporting Hayes' industrial growth and commercial development",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Hayes | Industrial & Commercial Business Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Hayes. Specializing in industrial and commercial business accounting. Supporting manufacturing, logistics, and growing companies with MTD compliance." />
        <meta name="keywords" content="accountants in Hayes, Hayes accountants, industrial accounting Hayes, commercial accountants Hayes, manufacturing accounting Hayes, MTD Hayes" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Hayes
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Hayes' industrial and commercial growth sectors. We specialize in supporting manufacturing, logistics, and expanding businesses throughout Hayes and Hayes Town. Whether you operate an industrial facility, commercial enterprise, or growing company, VMK Accountants provides expert taxation services, tailored financial solutions, and Making Tax Digital (MTD) compliance designed for Hayes' dynamic business environment.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Hayes, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Hayes accountants and tax advisors specialize in serving industrial and commercial businesses. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Hayes' growing business community.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-card p-4 rounded-lg shadow-soft">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose VMK Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Why Choose VMK Accountants & Tax Advisors for Hayes?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Hayes expertise combined with specialized industrial and commercial accounting knowledge
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-gradient-card border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                        <p className="text-foreground">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Who We Help in Hayes Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Manufacturing",
                    description: "Industrial manufacturers requiring specialized accounting and tax planning services",
                  },
                  {
                    title: "Logistics Companies",
                    description: "Transport and logistics firms needing comprehensive financial management",
                  },
                  {
                    title: "Commercial Businesses",
                    description: "Growing commercial enterprises requiring strategic financial advice and MTD support",
                  },
                  {
                    title: "Industrial Contractors",
                    description: "Contractors and suppliers in Hayes needing accounting and tax compliance services",
                  },
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
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Get in Touch with VMK Accountants in Hayes
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you run an industrial, manufacturing, or commercial business in Hayes, contact our team for expert accounting and tax services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border">
                  <CardContent className="pt-6 text-center">
                    <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <a href="tel:07956309363" className="text-muted-foreground hover:text-primary">07956309363</a>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border">
                  <CardContent className="pt-6 text-center">
                    <Mail className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a href="mailto:admin@vmkaccountants.co.uk" className="text-muted-foreground hover:text-primary">admin@vmkaccountants.co.uk</a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to work with Hayes' industrial and commercial accountants?"
          description="Contact our Hayes team for a free consultation about manufacturing accounting, business growth strategies, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Hayes;