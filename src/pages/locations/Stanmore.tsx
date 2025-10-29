import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Stanmore = () => {
  const services = [
    "High-net-worth tax planning and advice",
    "Professional practice accounting services",
    "Executive tax planning and compliance",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Strategic tax planning for professionals",
    "Year-end accounts for established businesses",
    "Wealth management accounting support",
    "Management accounts for professional firms",
    "Payroll services for Stanmore employers",
    "VAT returns & VAT registration services",
    "Capital gains tax optimization",
    "Partnership and LLP accounting",
    "Tax investigation support and HMRC queries",
    "Corporation tax planning for growing companies",
    "Estate planning and inheritance tax advice",
  ];

  const benefits = [
    "Expert accountants serving Stanmore's affluent professional community and local businesses",
    "Specialist Making Tax Digital (MTD) services for Stanmore professionals and established firms",
    "Deep understanding of high-net-worth taxation and professional practice accounting",
    "Comprehensive taxation services supporting professionals near Stanmore golf clubs and community",
    "MTD compliance support tailored for Stanmore's sophisticated business environment",
    "Responsive local accountant services throughout Stanmore and Stanmore Hill",
    "Discreet face-to-face meetings available in Stanmore for personalized advisory",
    "Professional tax advisors serving executives, professionals, and business owners in Stanmore",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Stanmore | Tax Planning for Professionals | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Stanmore. Specializing in tax planning for professionals, high-net-worth individuals, and established businesses. Discreet, personalized service." />
        <meta name="keywords" content="accountants in Stanmore, Stanmore accountants, tax planning Stanmore, professional accountants Stanmore, wealth management Stanmore, MTD Stanmore" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Stanmore
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Stanmore's affluent community. We specialize in sophisticated tax planning for professionals, executives, and established businesses throughout Stanmore and Stanmore Hill. Whether you're a member of local golf clubs or a professional practice owner, VMK Accountants provides discreet, expert taxation services, wealth management support, and Making Tax Digital (MTD) compliance tailored to Stanmore's discerning clientele.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Stanmore, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Stanmore accountants and tax advisors specialize in serving professionals, executives, and high-net-worth individuals. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Stanmore's sophisticated business community.
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
                Why Choose VMK Accountants & Tax Advisors for Stanmore?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Stanmore expertise combined with sophisticated tax planning for professionals and executives
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
                Who We Help in Stanmore Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Professionals",
                    description: "Doctors, lawyers, consultants, and other professionals needing expert tax planning",
                  },
                  {
                    title: "Business Owners",
                    description: "Established company directors requiring strategic tax and financial advice",
                  },
                  {
                    title: "High Net Worth",
                    description: "Affluent individuals needing sophisticated tax planning and wealth management",
                  },
                  {
                    title: "Practice Owners",
                    description: "Professional practices requiring comprehensive accounting and partnership tax services",
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
                Get in Touch with VMK Accountants in Stanmore
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're a professional, business owner, or high-net-worth individual in Stanmore, contact our team for discreet, expert accounting and tax services.
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
          title="Ready to work with Stanmore's trusted tax advisors?"
          description="Contact our Stanmore team for a confidential consultation about tax planning, wealth management, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Stanmore;