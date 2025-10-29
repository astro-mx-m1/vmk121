import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Kingsbury = () => {
  const services = [
    "Property and landlord accounting services",
    "Retail business bookkeeping and accounts",
    "Self Assessment for property investors and landlords",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Rental property tax planning and advice",
    "Year-end accounts for retail businesses",
    "Accounting software setup for landlords",
    "Management accounts for property portfolios",
    "Payroll services for Kingsbury retail businesses",
    "VAT returns & VAT registration services",
    "Capital gains tax planning for property sales",
    "Property rental accounts and tax returns",
    "Tax investigation support and HMRC queries",
    "Corporation tax for property companies",
    "Personal tax planning for diverse community members",
  ];

  const benefits = [
    "Expert accountants serving Kingsbury's diverse business community and property investors",
    "Specialist Making Tax Digital (MTD) services for Kingsbury landlords and retail businesses",
    "Deep understanding of property taxation and retail accounting in Kingsbury",
    "Comprehensive taxation services for individuals and businesses in Kingsbury's diverse community",
    "MTD compliance support tailored for property and retail sectors in Kingsbury",
    "Responsive local accountant services throughout Kingsbury and surrounding areas",
    "Face-to-face meetings available in Kingsbury for personalized service",
    "Professional tax advisors supporting Kingsbury's multicultural business landscape",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Kingsbury | Property Tax & Retail Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Kingsbury. Specializing in property tax for landlords and retail business accounting. Making Tax Digital compliance for Kingsbury's diverse community." />
        <meta name="keywords" content="accountants in Kingsbury, Kingsbury accountants, property tax Kingsbury, landlord accountants Kingsbury, retail accounting Kingsbury, MTD Kingsbury" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Kingsbury
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Kingsbury's diverse community. We specialize in property taxation for landlords, retail business accounting, and comprehensive tax services for individuals and businesses throughout Kingsbury. VMK Accountants provides expert guidance in property rental accounts, retail bookkeeping, and Making Tax Digital (MTD) compliance tailored to Kingsbury's unique business environment.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Kingsbury, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Kingsbury accountants and tax advisors specialize in property taxation and retail accounting. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Kingsbury's diverse business community and property investors.
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
                Why Choose VMK Accountants & Tax Advisors for Kingsbury?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Kingsbury expertise combined with specialized knowledge of property and retail accounting
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
                Who We Help in Kingsbury Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Property Landlords",
                    description: "Rental property owners needing specialized tax advice and MTD compliance",
                  },
                  {
                    title: "Retail Businesses",
                    description: "Local shops and retailers requiring comprehensive accounting services",
                  },
                  {
                    title: "Property Investors",
                    description: "Portfolio owners needing strategic tax planning and capital gains advice",
                  },
                  {
                    title: "Small Businesses",
                    description: "Diverse local enterprises requiring tailored accounting and tax support",
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
                Get in Touch with VMK Accountants in Kingsbury
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're a property landlord or retail business owner in Kingsbury, contact our team for expert accounting and tax services.
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
          title="Ready to work with Kingsbury's trusted accountants?"
          description="Contact our Kingsbury team for a free consultation about property tax, retail accounting, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Kingsbury;