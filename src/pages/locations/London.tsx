import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const London = () => {
  const services = [
    "Comprehensive business accounting across London",
    "Individual and corporate tax services",
    "Self Assessment for London professionals",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Multi-location business accounting",
    "Year-end accounts for London enterprises",
    "Cloud accounting software implementation",
    "Management accounts for growing businesses",
    "Payroll services for London employers",
    "VAT returns and planning across all sectors",
    "Strategic tax planning for London businesses",
    "Business advisory and growth strategies",
    "Start-up accounting and incorporation services",
    "Tax investigation support and HMRC representation",
    "Corporation tax for London companies",
    "International tax planning and compliance",
  ];

  const benefits = [
    "Expert accountants serving businesses and individuals across all London boroughs",
    "Specialist Making Tax Digital (MTD) services for London's diverse business landscape",
    "Deep understanding of London's dynamic business environment and tax requirements",
    "Comprehensive taxation services supporting start-ups to established London enterprises",
    "MTD compliance support tailored for London's entrepreneurs, SMEs, and corporations",
    "Flexible service delivery across London with face-to-face or remote consultations",
    "Multi-location support for businesses operating across Greater London",
    "Professional tax advisors supporting London's thriving business community and professionals",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in London | Expert Business & Tax Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors serving all of London. Comprehensive accounting services for businesses and individuals across Greater London. Making Tax Digital compliance specialists." />
        <meta name="keywords" content="accountants in London, London accountants, tax advisors London, business accounting London, MTD London, self assessment London" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in London
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving businesses and individuals across all of London. We specialize in supporting start-ups, SMEs, and established enterprises throughout Greater London, from North London to South, East to West. Whether you're an entrepreneur launching your first venture, a growing business scaling operations, or an individual professional, VMK Accountants provides expert taxation services, comprehensive financial solutions, and Making Tax Digital (MTD) compliance designed for London's dynamic business environment.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in London, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our London accountants and tax advisors specialize in serving the entire London business community. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for London's diverse and competitive marketplace.
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
                Why Choose VMK Accountants & Tax Advisors for London?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                London-wide expertise combined with specialized knowledge across all business sectors
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
                Who We Help Across London
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Start-ups & SMEs",
                    description: "Growing businesses requiring scalable accounting solutions and strategic advice",
                  },
                  {
                    title: "Established Enterprises",
                    description: "Mature businesses needing comprehensive financial management and tax planning",
                  },
                  {
                    title: "Professionals & Contractors",
                    description: "Self-employed individuals and consultants requiring personal tax and accounting support",
                  },
                  {
                    title: "Multi-location Businesses",
                    description: "Companies operating across London needing integrated accounting services",
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
                Get in Touch with VMK Accountants in London
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're based in North, South, East, or West London, contact our team for expert accounting and tax services across the capital.
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
          title="Ready to work with London's expert accountants?"
          description="Contact our London team for a free consultation about business accounting, tax planning, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default London;