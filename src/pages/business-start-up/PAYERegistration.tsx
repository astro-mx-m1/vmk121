import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, FileText, Calculator, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PAYERegistration = () => {
  const services = [
    {
      icon: Users,
      title: "PAYE Registration",
      description: "Complete PAYE registration with HMRC for employers"
    },
    {
      icon: Calculator,
      title: "Payroll Processing",
      description: "Accurate payroll calculations and employee payment processing"
    },
    {
      icon: FileText,
      title: "RTI Submissions",
      description: "Real Time Information submissions to HMRC on time, every time"
    },
    {
      icon: ShieldCheck,
      title: "Compliance Support",
      description: "Ensuring full compliance with employment tax legislation"
    },
    {
      icon: Clock,
      title: "Year-End Returns",
      description: "P60s, P11Ds, and annual PAYE submissions handled professionally"
    },
    {
      icon: CheckCircle,
      title: "Pension Auto-Enrolment",
      description: "Workplace pension setup and ongoing compliance management"
    }
  ];

  const benefits = [
    "Expert PAYE registration and setup with HMRC",
    "Accurate payroll processing for all employees",
    "Real Time Information (RTI) submissions on your behalf",
    "National Insurance and tax calculations handled correctly",
    "Year-end returns including P60s and P11Ds",
    "Auto-enrolment pension scheme support",
    "Statutory payment calculations (SSP, SMP, SPP)",
    "Dedicated payroll support and advice"
  ];

  return (
    <>
      <Helmet>
        <title>PAYE Registration Services | Expert Payroll & Employer Tax Support</title>
        <meta name="description" content="Professional PAYE registration and payroll services for employers. Expert help with RTI submissions, year-end returns, and pension auto-enrolment. Get started today." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                PAYE Registration & Payroll Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive PAYE registration and payroll services for employers across the UK. 
                From initial setup to ongoing payroll management and RTI submissions.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Get Started with PAYE Registration
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Professional PAYE & Payroll Services</h2>
              <p className="text-lg text-muted-foreground mb-4">
                When you start employing staff, you need to register as an employer with HMRC and set up a 
                PAYE (Pay As You Earn) scheme. This is a legal requirement that allows you to deduct Income Tax 
                and National Insurance contributions from your employees' wages.
              </p>
              <p className="text-lg text-muted-foreground">
                Our experienced team handles all aspects of PAYE registration, payroll processing, Real Time 
                Information (RTI) submissions, and year-end compliance. We ensure your payroll runs smoothly 
                and accurately, giving you peace of mind and more time to focus on growing your business.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our PAYE & Payroll Services</h2>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our PAYE Services?</h2>
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

        {/* Understanding PAYE Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Understanding PAYE Registration</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">When Do You Need to Register for PAYE?</h3>
                  <p className="text-muted-foreground mb-2">
                    You must register as an employer with HMRC before the first payday if you employ staff 
                    earning over £123 per week, provide expenses or benefits, employ someone already receiving 
                    a pension or who has another job, or employ subcontractors working in construction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Real Time Information (RTI)</h3>
                  <p className="text-muted-foreground mb-2">
                    Under RTI, employers must report pay and deductions to HMRC on or before each payday. 
                    This is done through Full Payment Submissions (FPS) and includes details of employee 
                    wages, tax, and National Insurance contributions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Pension Auto-Enrolment</h3>
                  <p className="text-muted-foreground mb-2">
                    All employers must automatically enrol eligible workers into a workplace pension scheme 
                    and make contributions. We help you set up a compliant pension scheme and manage ongoing 
                    auto-enrolment duties including re-enrolment every three years.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Year-End Obligations</h3>
                  <p className="text-muted-foreground mb-2">
                    At the end of each tax year, employers must provide P60s to all employees, submit P11D 
                    forms for expenses and benefits, and complete the Employer Payment Summary. We handle 
                    all year-end compliance to ensure you meet your obligations.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Register for PAYE?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for expert PAYE registration and comprehensive payroll services.
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

export default PAYERegistration;
