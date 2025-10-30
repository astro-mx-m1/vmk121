import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Edgware = () => {
  const services = [
    "Individual and personal tax services",
    "Self Assessment for diverse client groups",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Small business accounting and bookkeeping",
    "Retail business financial services",
    "Accounting software setup and training",
    "Year-end accounts for Edgware businesses",
    "Payroll services for local employers",
    "VAT returns for retail and service businesses",
    "Tax planning for families and individuals",
    "Business start-up advisory services",
    "Self-employed contractor accounting",
    "Tax investigation support and HMRC queries",
    "Corporation tax for Edgware companies",
    "Financial planning for diverse community needs",
  ];

  const benefits = [
    "Expert accountants serving Edgware's diverse and multicultural community",
    "Specialist Making Tax Digital (MTD) services for Edgware individuals and businesses",
    "Deep understanding of serving diverse client backgrounds and business types",
    "Comprehensive taxation services supporting Edgware's vibrant retail and service sectors",
    "MTD compliance support tailored for Edgware's independent businesses and sole traders",
    "Responsive local accountant services throughout Edgware and surrounding areas",
    "Face-to-face meetings available in Edgware for personalized service",
    "Professional tax advisors supporting Edgware's entrepreneurial spirit and community growth",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Edgware | Individual & Business Tax Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Edgware. Serving diverse individuals and local businesses with personalized accounting services. Making Tax Digital compliance for Edgware community." />
        <meta name="keywords" content="accountants in Edgware, Edgware accountants, tax advisors Edgware, self assessment Edgware, MTD Edgware, small business accountants Edgware" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Edgware
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Edgware's diverse and vibrant community. We specialize in supporting individuals, families, and small businesses throughout Edgware, Burnt Oak, and surrounding areas. Whether you're a sole trader, retail business owner, or individual seeking personal tax advice, VMK Accountants provides expert taxation services, tailored financial solutions, and Making Tax Digital (MTD) compliance designed for Edgware's unique community needs.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Edgware, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Edgware accountants and tax advisors specialize in serving diverse individuals and businesses. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Edgware's multicultural community.
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
                Why Choose VMK Accountants & Tax Advisors for Edgware?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Local Edgware expertise combined with specialized knowledge of serving diverse communities
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
                Who We Help in Edgware Area
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Individuals & Families",
                    description: "Personal tax planning, Self Assessment, and financial advice for Edgware residents",
                  },
                  {
                    title: "Retail Businesses",
                    description: "Comprehensive accounting and tax services for shops and retail enterprises",
                  },
                  {
                    title: "Sole Traders",
                    description: "Self-employed professionals and contractors requiring accounting and MTD support",
                  },
                  {
                    title: "Small Businesses",
                    description: "Local businesses needing bookkeeping, payroll, and taxation services",
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
                Get in Touch with VMK Accountants in Edgware
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you're an individual seeking personal tax advice or a business owner in Edgware, contact our team for expert accounting and tax services.
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
          title="Ready to work with Edgware's trusted accountants?"
          description="Contact our Edgware team for a free consultation about personal tax, business accounting, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Edgware;