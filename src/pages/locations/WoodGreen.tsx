import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const WoodGreen = () => {
  const services = [
    "Retail business accounting and bookkeeping",
    "Small business financial management",
    "Self Assessment for business owners and individuals",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Year-end accounts for retail and service businesses",
    "Accounting software for Wood Green businesses",
    "Management accounts for growing enterprises",
    "Payroll services for Wood Green employers",
    "VAT returns for retail and hospitality businesses",
    "Tax planning for shopkeepers and business owners",
    "Business start-up advisory services",
    "Self-employed contractor accounting",
    "Tax investigation support and HMRC queries",
    "Corporation tax for Wood Green companies",
    "Financial planning for individuals and families",
  ];

  const benefits = [
    "Expert accountants serving Wood Green's bustling retail and business environment",
    "Specialist Making Tax Digital (MTD) services for Wood Green shops and businesses",
    "Deep understanding of retail accounting and high street business taxation",
    "Comprehensive taxation services supporting Wood Green's vibrant shopping district",
    "MTD compliance support tailored for Wood Green's independent retailers and traders",
    "Responsive local accountant services throughout Wood Green and surrounding areas",
    "Face-to-face meetings available in Wood Green for convenient business consultations",
    "Professional tax advisors supporting Wood Green's thriving commercial community",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Wood Green | Retail & Business Tax Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Wood Green. Specializing in retail and small business accounting. Supporting Wood Green's shopping district with MTD compliance." />
        <meta name="keywords" content="accountants in Wood Green, Wood Green accountants, retail accountants Wood Green, small business accounting Wood Green, MTD Wood Green" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Wood Green
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Wood Green's bustling retail and business environment. We specialize in supporting shops, restaurants, and small businesses throughout Wood Green, Turnpike Lane, and the Shopping City area. Whether you run a high street shop, service business, or are an individual professional, VMK Accountants provides expert taxation services, tailored financial solutions, and Making Tax Digital (MTD) compliance designed for Wood Green's dynamic commercial landscape.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Wood Green, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Wood Green accountants and tax advisors specialize in serving retail and small businesses. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Wood Green's vibrant commercial community.
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
                Why Choose VMK Accountants & Tax Advisors for Wood Green?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Wood Green expertise combined with specialized retail and small business accounting knowledge
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
                Who We Help in Wood Green Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Retail Shops",
                    description: "High street retailers and independent shops requiring specialized accounting services",
                  },
                  {
                    title: "Restaurants & Cafes",
                    description: "Hospitality businesses needing comprehensive financial management and tax advice",
                  },
                  {
                    title: "Service Businesses",
                    description: "Salons, clinics, and service providers requiring bookkeeping and MTD support",
                  },
                  {
                    title: "Individuals & Contractors",
                    description: "Self-employed professionals and local residents needing personal tax services",
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
                Get in Touch with VMK Accountants in Wood Green
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you run a retail shop, restaurant, or service business in Wood Green, contact our team for expert accounting and tax services.
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
          title="Ready to work with Wood Green's retail accountants?"
          description="Contact our Wood Green team for a free consultation about retail accounting, business growth strategies, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default WoodGreen;