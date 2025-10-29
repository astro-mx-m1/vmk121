import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Northwood = () => {
  const services = [
    "Property tax for homeowners and landlords",
    "Landlord accounting and rental property services",
    "Residential property tax planning",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Capital gains tax on property sales",
    "Year-end accounts for property portfolios",
    "Accounting software for landlords",
    "Management accounts for property investors",
    "Stamp duty land tax advice",
    "VAT returns & VAT registration for landlords",
    "Buy-to-let tax planning and advice",
    "Property rental accounts and tax returns",
    "Tax investigation support and HMRC queries",
    "Inheritance tax planning for property owners",
    "Personal tax planning for Northwood residents",
  ];

  const benefits = [
    "Expert accountants serving Northwood's residential community of homeowners and landlords",
    "Specialist Making Tax Digital (MTD) services for Northwood property investors",
    "Deep understanding of residential property taxation and landlord accounting",
    "Comprehensive taxation services supporting Northwood homeowners and property portfolios",
    "MTD compliance support tailored for Northwood's property-focused community",
    "Responsive local accountant services throughout Northwood and Northwood Hills",
    "Face-to-face meetings available in Northwood for personalized property tax advice",
    "Professional tax advisors specializing in residential property and landlord services in Northwood",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Northwood | Property Tax & Landlord Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Northwood. Specializing in property tax for homeowners and landlords. Comprehensive rental property accounting and MTD compliance services." />
        <meta name="keywords" content="accountants in Northwood, Northwood accountants, property tax Northwood, landlord accountants Northwood, rental property accounting Northwood, MTD Northwood" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Northwood
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Northwood's residential community. We specialize in property taxation for homeowners, landlords, and property investors throughout Northwood and Northwood Hills. Whether you own your home, manage rental properties, or have a buy-to-let portfolio, VMK Accountants provides expert property tax planning, landlord accounting services, and Making Tax Digital (MTD) compliance tailored to Northwood's property-focused residential area.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Northwood, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Northwood accountants and tax advisors specialize in property taxation, landlord accounting, and homeowner financial services. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Northwood's residential community.
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
                Why Choose VMK Accountants & Tax Advisors for Northwood?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Northwood expertise combined with specialized property and landlord tax services
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
                Who We Help in Northwood Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Homeowners",
                    description: "Northwood residents needing property tax advice and financial planning",
                  },
                  {
                    title: "Landlords",
                    description: "Property landlords requiring rental accounts, tax returns, and MTD compliance",
                  },
                  {
                    title: "Property Investors",
                    description: "Buy-to-let investors needing strategic tax planning and portfolio management",
                  },
                  {
                    title: "Property Sellers",
                    description: "Homeowners requiring capital gains tax advice for property sales",
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
                Get in Touch with VMK Accountants in Northwood
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're a homeowner or landlord in Northwood, contact our team for expert property tax advice and accounting services.
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
          title="Ready to work with Northwood's property tax specialists?"
          description="Contact our Northwood team for a free consultation about property tax, landlord accounting, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Northwood;