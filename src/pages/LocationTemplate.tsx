import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

interface LocationTemplateProps {
  locationName: string;
}

const LocationTemplate = ({ locationName }: LocationTemplateProps) => {
  const services = [
    "Company formation and registration",
    "Bookkeeping and cloud accounting",
    "Self Assessment / income tax return for sole traders",
    "Making Tax Digital (MTD) for Income Tax compliance",
    "Making Tax Digital (MTD) for VAT compliance",
    "Year-end accounts and financial statements",
    "Accounting software setup & support",
    "Management accounts and financial planning",
    "Payroll services & auto-enrolment pensions",
    "VAT returns & VAT registration services",
    "Tax planning & tax advice for businesses",
    "IR35 reviews & contractor compliance",
    "Registered office services",
    "Tax investigation support and HMRC queries",
    "Corporation tax planning and returns",
    "Personal tax planning and advice",
  ];

  const benefits = [
    "Expert accountants and tax advisors serving " + locationName + " area",
    "Specialist Making Tax Digital (MTD) services for sole traders and businesses",
    "Local knowledge of " + locationName + " business landscape and taxation requirements",
    "Comprehensive taxation services including income tax and corporation tax",
    "MTD compliance support for VAT and Income Tax in " + locationName,
    "Responsive accountant services when you need them in your area",
    "Face-to-face meetings available in " + locationName + " and surrounding areas",
    "Professional tax advisors dedicated to serving the local " + locationName + " community",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="h-8 w-8 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Accountants & Tax Advisors in {locationName}
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Professional accountants and tax advisors serving {locationName} area. Whether you're a sole trader, freelancer, limited company, landlord, or contractor in {locationName}, VMK Accountants Limited provides expert taxation services and Making Tax Digital (MTD) compliance for income tax and VAT.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              What We Offer in {locationName}, Accountant & Tax Advisor & Provide Services for Making Tax Digital (MTD) for Sole Traders and Income Tax
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Our {locationName} accountants and tax advisors provide comprehensive taxation services and Making Tax Digital (MTD) compliance for businesses, sole traders, and individuals in the {locationName} area.
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
              Why Choose VMK Accountants & Tax Advisors for {locationName}?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Local area expertise in taxation and Making Tax Digital services combined with professional accounting excellence
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
              Who We Help in {locationName} Area
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Small Businesses",
                  description: "Limited companies needing accountant and taxation services with MTD compliance",
                },
                {
                  title: "Sole Traders",
                  description: "Self-employed professionals requiring Making Tax Digital for Income Tax support",
                },
                {
                  title: "Landlords",
                  description: "Property owners needing tax advisors for rental income and taxation",
                },
                {
                  title: "Contractors",
                  description: "IT, construction, and consulting contractors requiring accountant services",
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
              Get in Touch with VMK Accountants & Tax Advisors in {locationName}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              If you're in {locationName} area and looking for trusted accountants, tax advisors, or Making Tax Digital services, contact our local team today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">07956309363</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">admin@vmkaccountants.co.uk</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to work with accountants and tax advisors in ${locationName} area?`}
        description={`Contact our ${locationName} team for a free consultation to discuss your taxation, accounting, and Making Tax Digital needs.`}
        primaryButtonText="Request Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/taxation-services"
      />
    </div>
  );
};

export default LocationTemplate;
