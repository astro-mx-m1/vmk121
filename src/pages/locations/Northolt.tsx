import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Northolt = () => {
  const services = [
    "Residential and local business accounting",
    "Self Assessment for individuals and sole traders",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Small business bookkeeping services",
    "Local enterprise financial management",
    "Accounting software training and support",
    "Year-end accounts for Northolt businesses",
    "Payroll services for local employers",
    "VAT returns for small businesses and contractors",
    "Tax planning for families and entrepreneurs",
    "Business start-up advisory services",
    "Contractor and self-employed accounting",
    "Tax investigation support and HMRC queries",
    "Corporation tax for Northolt companies",
    "Personal financial planning for residents",
  ];

  const benefits = [
    "Expert accountants serving Northolt's local community and businesses",
    "Specialist Making Tax Digital (MTD) services for Northolt residents and enterprises",
    "Deep understanding of local community needs and small business requirements",
    "Comprehensive taxation services supporting Northolt's residential and commercial areas",
    "MTD compliance support tailored for Northolt's independent businesses and sole traders",
    "Responsive local accountant services throughout Northolt and surrounding areas",
    "Face-to-face meetings available in Northolt for personalized service",
    "Professional tax advisors supporting Northolt's community growth and local businesses",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Northolt | Local Business & Residential Tax Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Northolt. Serving local community and businesses with personalized accounting services. Making Tax Digital compliance for Northolt." />
        <meta name="keywords" content="accountants in Northolt, Northolt accountants, tax advisors Northolt, self assessment Northolt, MTD Northolt, local business accountants Northolt" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Northolt
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Northolt's local community. We specialize in supporting residents, families, and small businesses throughout Northolt, including South Northolt and surrounding areas. Whether you're a local entrepreneur, residential client, or small business owner, VMK Accountants provides expert taxation services, tailored financial solutions, and Making Tax Digital (MTD) compliance designed for Northolt's close-knit community.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Northolt, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Northolt accountants and tax advisors specialize in serving the local community and businesses. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Northolt residents and enterprises.
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
                Why Choose VMK Accountants & Tax Advisors for Northolt?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Northolt expertise combined with personalized accounting and tax services
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
                Who We Help in Northolt Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Residents & Families",
                    description: "Personal tax planning, Self Assessment, and financial advice for local residents",
                  },
                  {
                    title: "Local Businesses",
                    description: "Small enterprises and shops requiring comprehensive accounting and tax services",
                  },
                  {
                    title: "Sole Traders",
                    description: "Self-employed individuals and contractors needing accounting and MTD support",
                  },
                  {
                    title: "Entrepreneurs",
                    description: "New business owners requiring start-up advice and ongoing financial management",
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
                Get in Touch with VMK Accountants in Northolt
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're a resident or business owner in Northolt, contact our team for expert accounting and tax services.
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
          title="Ready to work with Northolt's local accountants?"
          description="Contact our Northolt team for a free consultation about personal tax, business accounting, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Northolt;