import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Calculator, ShieldCheck, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const VATRegistration = () => {
  const services = [
    {
      icon: FileText,
      title: "VAT Registration",
      description: "Complete VAT registration support with HMRC for your business"
    },
    {
      icon: Calculator,
      title: "VAT Return Preparation",
      description: "Accurate VAT return filing and submission services"
    },
    {
      icon: ShieldCheck,
      title: "VAT Compliance",
      description: "Ensuring your business stays compliant with VAT regulations"
    },
    {
      icon: Clock,
      title: "Making Tax Digital (MTD)",
      description: "MTD-compliant VAT accounting and digital record-keeping"
    },
    {
      icon: TrendingUp,
      title: "VAT Planning",
      description: "Strategic VAT planning to optimize your tax position"
    },
    {
      icon: CheckCircle,
      title: "VAT Schemes Advice",
      description: "Guidance on flat rate, cash accounting, and annual accounting schemes"
    }
  ];

  const benefits = [
    "Expert guidance on VAT registration threshold and requirements",
    "Assistance with voluntary VAT registration decisions",
    "Help choosing the most suitable VAT scheme for your business",
    "Making Tax Digital (MTD) compliant systems and processes",
    "Accurate and timely VAT return submissions",
    "VAT planning to improve cash flow management",
    "Support with VAT inspections and enquiries",
    "Ongoing VAT advice and compliance support"
  ];

  return (
    <>
      <Helmet>
        <title>VAT Registration Services | Expert VAT Accountants & Making Tax Digital</title>
        <meta name="description" content="Professional VAT registration services for businesses. Expert advice on VAT schemes, Making Tax Digital compliance, and VAT return preparation. Get started today." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                VAT Registration Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert VAT registration and compliance services for businesses across the UK. 
                From initial registration to Making Tax Digital compliance, we handle all aspects of VAT.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Get Started with VAT Registration
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Professional VAT Registration & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Value Added Tax (VAT) registration is a crucial step for growing businesses. Whether you've reached 
                the VAT threshold or are considering voluntary registration, our experienced team provides comprehensive 
                VAT services to ensure compliance and optimize your tax position.
              </p>
              <p className="text-lg text-muted-foreground">
                We specialize in VAT registration, Making Tax Digital (MTD) compliance, VAT return preparation, and 
                ongoing VAT advisory services. Our expertise ensures your business meets all VAT obligations while 
                maximizing efficiency and cash flow.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our VAT Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our VAT Services?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Understanding VAT Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Understanding VAT Registration</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">When Do You Need to Register for VAT?</h3>
                  <p className="text-muted-foreground mb-2">
                    You must register for VAT if your VAT taxable turnover exceeds the current threshold 
                    (£85,000 for 2024/25) in any 12-month period. You can also register voluntarily if your 
                    turnover is below this threshold.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Making Tax Digital (MTD) for VAT</h3>
                  <p className="text-muted-foreground mb-2">
                    All VAT-registered businesses must now use Making Tax Digital compliant software to 
                    keep digital records and submit VAT returns. We help you implement MTD-compliant systems 
                    and ensure smooth quarterly submissions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">VAT Schemes Available</h3>
                  <p className="text-muted-foreground mb-2">
                    We advise on various VAT schemes including the Flat Rate Scheme, Cash Accounting Scheme, 
                    and Annual Accounting Scheme. Each scheme has different benefits depending on your business 
                    type and size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Register for VAT?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for expert VAT registration services and Making Tax Digital compliance support.
              </p>
              <Link to="/contact">
                <Button size="lg">Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VATRegistration;
