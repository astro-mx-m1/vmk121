import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Kenton = () => {
  const services = [
    "Company formation and registration for Kenton businesses",
    "Bookkeeping and cloud accounting solutions",
    "Self Assessment / income tax return for sole traders",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Year-end accounts and financial statements",
    "Accounting software setup & support",
    "Management accounts for local retail shops",
    "Payroll services for Kenton restaurants and cafes",
    "VAT returns & VAT registration services",
    "Tax planning for local business owners",
    "Retail and hospitality sector accounting",
    "Small business tax advice near Kenton Recreation Ground",
    "Tax investigation support and HMRC queries",
    "Corporation tax planning and returns",
    "Personal tax planning for Kenton residents",
  ];

  const benefits = [
    "Expert accountants serving businesses around Kenton Recreation Ground and local community",
    "Specialist Making Tax Digital (MTD) services for Kenton sole traders and small businesses",
    "Deep understanding of Kenton's vibrant retail and restaurant sector",
    "Comprehensive taxation services for local shops and eateries in Kenton",
    "MTD compliance support tailored for Kenton area businesses",
    "Responsive local accountant services in the Kenton community",
    "Face-to-face meetings available near Kenton Station and surrounding areas",
    "Professional tax advisors dedicated to supporting Kenton's diverse business landscape",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Kenton | Tax Advisors & MTD Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Kenton. Specializing in retail, restaurants, and local businesses near Kenton Recreation Ground. Making Tax Digital compliance for sole traders." />
        <meta name="keywords" content="accountants in Kenton, Kenton accountants, tax advisors Kenton, Making Tax Digital Kenton, MTD Kenton, Kenton tax services" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Kenton
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving the Kenton community. Located near Kenton Recreation Ground, we support local retail shops, restaurants, and small businesses with expert taxation services and Making Tax Digital (MTD) compliance. Whether you run a café on Kenton Road or a shop near Kenton Station, VMK Accountants provides personalized accounting solutions for your business.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Kenton, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Kenton accountants and tax advisors specialize in serving local retail shops, restaurants, and small businesses around Kenton Recreation Ground. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance tailored to Kenton's unique business landscape.
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
                Why Choose VMK Accountants & Tax Advisors for Kenton?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Kenton area expertise combined with specialized knowledge of retail and hospitality accounting
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
                Who We Help in Kenton Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Retail Shops",
                    description: "Independent retailers and shops in Kenton requiring accounting and MTD compliance",
                  },
                  {
                    title: "Restaurants & Cafes",
                    description: "Local eateries needing specialized hospitality accounting and tax advice",
                  },
                  {
                    title: "Small Businesses",
                    description: "Local enterprises near Kenton Recreation Ground needing comprehensive tax services",
                  },
                  {
                    title: "Sole Traders",
                    description: "Self-employed professionals in Kenton requiring Making Tax Digital support",
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
                Get in Touch with VMK Accountants in Kenton
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                If you're running a business in Kenton or around Kenton Recreation Ground and need trusted accountants, tax advisors, or Making Tax Digital services, contact our team today.
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
          title="Ready to work with Kenton's trusted accountants?"
          description="Contact our Kenton team for a free consultation to discuss your retail, restaurant, or small business accounting needs."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Kenton;