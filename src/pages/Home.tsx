import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Users, MapPin, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import HeroSlideshow from "@/components/HeroSlideshow";
import { BookOpen, Briefcase, FileText, TrendingUp, DollarSign, Building2 } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Accounting & Bookkeeping",
      description: "Monthly bookkeeping, management accounts, year-end accounts and financial reporting.",
    },
    {
      icon: FileText,
      title: "Self Assessment & Tax",
      description: "Personal tax returns, HMRC correspondence, and comprehensive tax planning.",
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Staff payroll, PAYE, pension auto-enrolment, and RTI compliance.",
    },
    {
      icon: DollarSign,
      title: "VAT Returns",
      description: "VAT registration, quarterly returns, and Making Tax Digital compliance.",
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Growth strategy, cash flow forecasts, and financial planning support.",
    },
    {
      icon: Building2,
      title: "Company Formation",
      description: "New company setup, structure advice, and registration services.",
    },
  ];

  const locations = [
    "Kingsbury",
    "Wembley",
    "Harrow",
    "Stanmore",
    "Northwood",
    "Finchley",
    "Edgware",
  ];

  const testimonials = [
    {
      quote: "VMK has been handling our accounts for three years now. They're responsive, knowledgeable, and have saved us money through smart tax planning.",
      author: "Sarah Johnson",
      location: "Harrow",
      business: "SJ Consulting Limited",
    },
    {
      quote: "As a landlord with multiple properties, I needed someone who understood property tax. VMK made everything simple and stress-free.",
      author: "Michael Chen",
      location: "Wembley",
    },
    {
      quote: "Switching to VMK was the best business decision I made. They helped me transition to Making Tax Digital seamlessly.",
      author: "Priya Patel",
      location: "Kingsbury",
      business: "Sole Trader",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>VMK Accountants | Expert Tax Advisors & Accountants in London</title>
        <meta name="description" content="VMK Accountants - Chartered accountants serving London since 2001. Expert accounting, tax planning, payroll, VAT, and Making Tax Digital services for businesses and individuals." />
        <meta name="keywords" content="accountants london, tax advisors, chartered accountants, making tax digital, payroll services, vat registration, self assessment, business accounting" />
        <link rel="canonical" href="https://vmkaccountants.co.uk/" />
        <meta property="og:title" content="VMK Accountants | Expert Tax Advisors & Accountants in London" />
        <meta property="og:description" content="Chartered accountants serving London since 2001. Expert accounting, tax planning, and business advisory services." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Slideshow Section */}
      <HeroSlideshow />

      {/* Why VMK Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose VMK Accountants?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We pride ourselves on being approachable, practical, and proactive — not just reactive. We work with our clients, not just for them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="flex-shrink-0 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">Local Presence</h3>
                <p className="text-muted-foreground leading-relaxed"><strong>Serving Harrow, Wembley, Edgware and surrounding NW London areas</strong> with local expertise.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="flex-shrink-0 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">Transparent Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">Clear quotes with no hidden fees. We discuss and agree on pricing before we start.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="flex-shrink-0 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">Real People, Direct Support</h3>
                <p className="text-muted-foreground leading-relaxed">Speak directly to qualified accountants who know your business and care about your success.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="flex-shrink-0 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">Cloud Accounting</h3>
                <p className="text-muted-foreground leading-relaxed">Modern solutions using Xero, QuickBooks and other leading platforms for real-time insights.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="flex-shrink-0 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">MTD Ready</h3>
                <p className="text-muted-foreground leading-relaxed">Fully prepared to help clients transition smoothly to Making Tax Digital requirements.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="flex-shrink-0 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">Proactive Advice</h3>
                <p className="text-muted-foreground leading-relaxed">We don't just do your accounts — we help you grow and save tax through strategic planning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive accounting and advisory services tailored for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="default" className="text-base px-10">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Company Setup Form Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Starting a New Company?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Complete our simple online form to begin your company formation process. We'll guide you through every step.
            </p>
            <a 
              href="https://forms.gle/Xhe3Vctq3ty7YU8MA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="default" className="group text-base px-10 shadow-lg">
                Complete New Company Setup Form
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Areas We Cover</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Providing expert accounting services across North West London
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <Link
                key={location}
                to={`/locations/${location.toLowerCase()}`}
                className="glass-card border border-border rounded-2xl p-8 text-center hover-lift transition-all animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MapPin className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-125 transition-transform duration-300" />
                <p className="font-bold text-foreground">{location}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/locations">
              <Button variant="outline" size="lg" className="text-base px-10">
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it — hear from businesses we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <Button variant="outline" size="lg" className="text-base px-10">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(142_76%_65%/0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(267_57%_60%/0.2),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to simplify your accounting?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book a free consultation to discuss your needs. No obligations, just expert advice.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="group text-base px-10 shadow-2xl">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
