import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Locations = () => {
  const locations = [
    {
      name: "Kenton",
      path: "/locations/kenton",
      description: "Expert accountants and tax advisors in Kenton providing Making Tax Digital services",
    },
    {
      name: "Harrow",
      path: "/locations/harrow",
      description: "Professional taxation and MTD accounting services in Harrow area",
    },
    {
      name: "Kingsbury",
      path: "/locations/kingsbury",
      description: "Accountant and tax advisor services for Kingsbury businesses and sole traders",
    },
    {
      name: "Stanmore",
      path: "/locations/stanmore",
      description: "Making Tax Digital specialists and accountants in Stanmore",
    },
    {
      name: "Wembley",
      path: "/locations/wembley",
      description: "Taxation services and MTD compliance for Wembley area businesses",
    },
    {
      name: "Finchley",
      path: "/locations/finchley",
      description: "Tax advisors and accountants serving Finchley and surrounding areas",
    },
    {
      name: "Northwood",
      path: "/locations/northwood",
      description: "Expert accounting and Making Tax Digital services in Northwood",
    },
    {
      name: "Edgware",
      path: "/locations/edgware",
      description: "Professional tax advisors and accountants in Edgware area",
    },
    {
      name: "Southall",
      path: "/locations/southall",
      description: "Accountant and taxation services for Southall businesses and sole traders",
    },
    {
      name: "Hayes",
      path: "/locations/hayes",
      description: "Making Tax Digital and accounting services in Hayes area",
    },
    {
      name: "Wood Green",
      path: "/locations/wood-green",
      description: "Tax advisors and MTD specialists serving Wood Green",
    },
    {
      name: "Watford",
      path: "/locations/watford",
      description: "Professional accountants and tax advisors in Watford area",
    },
    {
      name: "Hendon",
      path: "/locations/hendon",
      description: "Making Tax Digital and taxation services for Hendon businesses",
    },
    {
      name: "Northolt",
      path: "/locations/northolt",
      description: "Expert accounting and tax advisor services in Northolt",
    },
    {
      name: "London",
      path: "/locations/london",
      description: "Comprehensive accountant and Making Tax Digital services across London",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Areas We Cover | Accountants Across London - VMK Accountants</title>
        <meta name="description" content="VMK Accountants serves businesses across London including Harrow, Kenton, Wembley, Kingsbury, Stanmore, Finchley, Edgware and more. Local accountants and tax advisors with Making Tax Digital expertise." />
        <meta name="keywords" content="accountants london, accountants harrow, accountants kenton, local accountants, tax advisors north london, making tax digital" />
        <link rel="canonical" href="https://vmkaccountants.co.uk/locations" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Areas We Cover
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            VMK Accountants Limited proudly serves businesses, sole traders, and individuals across London with expert accounting, taxation services, and Making Tax Digital (MTD) compliance for income tax and VAT.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Find Your Local Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your area to discover our local accounting, taxation, and Making Tax Digital services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {locations.map((location) => (
              <Link key={location.path} to={location.path}>
                <Card className="hover:shadow-large transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-gradient-card border-border h-full group hover:border-accent">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <MapPin className="h-8 w-8 text-secondary group-hover:text-accent transition-colors" />
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{location.name}</CardTitle>
                    <CardDescription className="text-base group-hover:text-foreground transition-colors">
                      {location.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      View Services in {location.name}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Local Expertise Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Operating across London means we understand each local area's business landscape, taxation requirements, and Making Tax Digital compliance needs. Our accountants and tax advisors provide tailored services for every location we serve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold text-lg mb-2 text-primary">Local Knowledge</h3>
                <p className="text-sm text-muted-foreground">
                  We understand the local market and business environment in your area
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold text-lg mb-2 text-primary">Convenient Access</h3>
                <p className="text-sm text-muted-foreground">
                  Easy to reach for face-to-face meetings when you need them
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold text-lg mb-2 text-primary">Community Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting local businesses and contributing to the community we serve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to work with a local accountant?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our local accountants and tax advisors today to discuss your taxation and Making Tax Digital requirements in your area.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Locations;
