import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Watford = () => {
  const services = [
    "Business and commercial accounting services",
    "Self Assessment for professionals and business owners",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Retail and service business accounting",
    "Entertainment sector financial management",
    "Accounting software setup and training",
    "Year-end accounts for Watford businesses",
    "Payroll services for Watford employers",
    "VAT returns for businesses and contractors",
    "Strategic tax planning for growing companies",
    "Business start-up and incorporation services",
    "Contractor and self-employed accounting",
    "Tax investigation support and HMRC queries",
    "Corporation tax for Watford companies",
    "Financial planning for individuals and families",
  ];

  const benefits = [
    "Expert accountants serving Watford's thriving business community",
    "Specialist Making Tax Digital (MTD) services for Watford businesses and professionals",
    "Deep understanding of Watford's diverse commercial and retail sectors",
    "Comprehensive taxation services supporting Watford's growing economy",
    "MTD compliance support tailored for Watford's independent businesses and entrepreneurs",
    "Responsive local accountant services throughout Watford and surrounding areas",
    "Face-to-face meetings available in Watford for convenient consultations",
    "Professional tax advisors supporting Watford's business growth and development",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Watford | Business & Professional Tax Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Watford. Serving businesses and professionals with comprehensive accounting services. Making Tax Digital compliance for Watford community." />
        <meta name="keywords" content="accountants in Watford, Watford accountants, tax advisors Watford, business accounting Watford, MTD Watford, self assessment Watford" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Watford
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Watford's vibrant business community. We specialize in supporting retail, service, and professional businesses throughout Watford, including the town center and surrounding areas. Whether you operate in retail, entertainment, professional services, or are an individual professional, VMK Accountants provides expert taxation services, tailored financial solutions, and Making Tax Digital (MTD) compliance designed for Watford's dynamic commercial environment.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Watford, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Watford accountants and tax advisors specialize in serving the local business community. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Watford's diverse commercial landscape.
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
                Why Choose VMK Accountants & Tax Advisors for Watford?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Watford expertise combined with specialized business and professional accounting knowledge
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
                Who We Help in Watford Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Retail Businesses",
                    description: "Shops and retail enterprises requiring comprehensive accounting and tax services",
                  },
                  {
                    title: "Professional Services",
                    description: "Consultants, advisors, and professionals needing specialized financial support",
                  },
                  {
                    title: "Entertainment Sector",
                    description: "Hospitality, leisure, and entertainment businesses requiring tailored accounting",
                  },
                  {
                    title: "Contractors & Entrepreneurs",
                    description: "Self-employed professionals and business owners needing accounting and MTD support",
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
                Get in Touch with VMK Accountants in Watford
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you run a retail business, professional service, or are an entrepreneur in Watford, contact our team for expert accounting and tax services.
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
          title="Ready to work with Watford's expert accountants?"
          description="Contact our Watford team for a free consultation about business accounting, tax planning, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Watford;