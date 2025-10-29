import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Wembley = () => {
  const services = [
    "Sports and entertainment business accounting",
    "Hospitality sector bookkeeping and tax services",
    "Event industry accounting and VAT advice",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Year-end accounts for hospitality venues",
    "Accounting software for entertainment businesses",
    "Management accounts for sports facilities",
    "Payroll services for Wembley hospitality businesses",
    "VAT returns for event and entertainment companies",
    "Tax planning for tourism and leisure businesses",
    "Restaurant and bar accounting services",
    "Hotel and accommodation accounting",
    "Tax investigation support and HMRC queries",
    "Corporation tax for entertainment companies",
    "Personal tax for entertainers and sports professionals",
  ];

  const benefits = [
    "Expert accountants serving Wembley's thriving entertainment and hospitality sector",
    "Specialist Making Tax Digital (MTD) services for Wembley businesses near the iconic stadium",
    "Deep understanding of sports, hospitality, and entertainment industry accounting",
    "Comprehensive taxation services supporting Wembley's bustling business environment",
    "MTD compliance support tailored for hospitality and entertainment businesses in Wembley",
    "Responsive local accountant services throughout Wembley and Wembley Park",
    "Face-to-face meetings available near Wembley Stadium and surrounding areas",
    "Professional tax advisors supporting the vibrant Wembley sports and hospitality community",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Wembley | Sports & Hospitality Accounting | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Wembley. Specializing in sports, entertainment, and hospitality business accounting near Wembley Stadium. Making Tax Digital compliance services." />
        <meta name="keywords" content="accountants in Wembley, Wembley accountants, sports accounting Wembley, hospitality accountants Wembley, entertainment accounting Wembley, MTD Wembley" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Wembley
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Wembley's bustling business environment. Located near the iconic Wembley Stadium, we specialize in sports, entertainment, and hospitality business accounting. Whether you run a restaurant near Wembley Park, operate an entertainment venue, or work in the thriving sports sector, VMK Accountants provides expert taxation services and Making Tax Digital (MTD) compliance tailored to Wembley's dynamic entertainment industry.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Wembley, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Wembley accountants and tax advisors specialize in serving the sports, entertainment, and hospitality sectors near Wembley Stadium. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Wembley's vibrant business community.
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
                Why Choose VMK Accountants & Tax Advisors for Wembley?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Wembley expertise combined with specialized knowledge of sports and hospitality accounting
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
                Who We Help in Wembley Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Hospitality Venues",
                    description: "Restaurants, bars, and hotels near Wembley Stadium requiring specialized accounting",
                  },
                  {
                    title: "Entertainment Businesses",
                    description: "Event companies and entertainment venues needing VAT and tax compliance",
                  },
                  {
                    title: "Sports Facilities",
                    description: "Sports centers and facilities requiring comprehensive financial services",
                  },
                  {
                    title: "Tourism Businesses",
                    description: "Tourism and leisure companies needing expert tax advice and MTD support",
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
                Get in Touch with VMK Accountants in Wembley
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you run a hospitality business near Wembley Stadium or work in the entertainment sector, contact our team for expert accounting and tax services.
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
          title="Ready to work with Wembley's sports and hospitality accountants?"
          description="Contact our Wembley team for a free consultation about hospitality accounting, entertainment business tax, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Wembley;