import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Finchley = () => {
  const services = [
    "Family financial planning and tax advice",
    "Small business accounting and bookkeeping",
    "Residential property tax planning",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Year-end accounts for local enterprises",
    "Accounting software setup for families and businesses",
    "Management accounts for growing Finchley businesses",
    "Payroll services for local employers",
    "VAT returns & VAT registration services",
    "Tax planning for families and business owners",
    "Partnership and family business accounting",
    "Estate planning and wealth management",
    "Tax investigation support and HMRC queries",
    "Corporation tax for Finchley companies",
    "Personal tax returns for residents and professionals",
  ];

  const benefits = [
    "Expert accountants serving Finchley's blend of residential and commercial clients",
    "Specialist Making Tax Digital (MTD) services for Finchley families and local enterprises",
    "Deep understanding of both family financial planning and small business accounting",
    "Comprehensive taxation services supporting Finchley's diverse community of families and businesses",
    "MTD compliance support tailored for Finchley's residential and commercial clients",
    "Responsive local accountant services throughout East Finchley, North Finchley, and Church End",
    "Face-to-face meetings available across Finchley for personalized service",
    "Professional tax advisors supporting families and local enterprises in Finchley",
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Finchley | Family & Business Tax Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Finchley. Specializing in family financial planning and small business accounting. Serving East Finchley, North Finchley, and Church End." />
        <meta name="keywords" content="accountants in Finchley, Finchley accountants, family tax planning Finchley, small business accountants Finchley, East Finchley accountants, MTD Finchley" />
      </Helmet>

      <div>
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Accountants & Tax Advisors in Finchley
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Professional accountants and tax advisors proudly serving Finchley's unique blend of residential and commercial clients. Whether you're a family in East Finchley managing your finances, a small business owner in North Finchley, or a local enterprise in Church End, VMK Accountants provides expert financial planning for families, comprehensive business accounting, and Making Tax Digital (MTD) compliance tailored to Finchley's diverse community.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                What We Offer in Finchley, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Our Finchley accountants and tax advisors specialize in serving both families and local businesses. We provide comprehensive taxation services and Making Tax Digital (MTD) compliance designed for Finchley's residential and commercial community.
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

        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Why Choose VMK Accountants & Tax Advisors for Finchley?
              </h2>
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

        <CTASection
          title="Ready to work with Finchley's trusted accountants?"
          description="Contact our Finchley team for a free consultation about family financial planning, business accounting, or Making Tax Digital services."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services/taxation-services"
        />
      </div>
    </>
  );
};

export default Finchley;
