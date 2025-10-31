import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Users, MapPin, CheckCircle, Star, MessageSquare, FileCheck } from "lucide-react";
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
        <meta property="og:url" content="https://vmkaccountants.co.uk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VMK Accountants | Expert Tax Advisors & Accountants in London" />
        <meta name="twitter:description" content="Chartered accountants serving London since 2001. Expert accounting, tax planning, and business advisory services." />
        
        {/* Structured Data for Organization - SEO/AEO/GEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "VMK Accountants",
            "description": "Expert chartered accountants and tax advisors serving London since 2001, specializing in business accounting, tax planning, payroll, VAT, and Making Tax Digital services.",
            "url": "https://vmkaccountants.co.uk",
            "logo": "https://vmkaccountants.co.uk/logo.png",
            "image": "https://vmkaccountants.co.uk/logo.png",
            "telephone": "+44-20-8204-6442",
            "email": "info@vmkaccountants.co.uk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "398 Kenton Road",
              "addressLocality": "Kenton",
              "addressRegion": "London",
              "postalCode": "HA3 8DP",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5892",
              "longitude": "-0.3097"
            },
            "areaServed": [
              "Kenton", "Harrow", "Wembley", "Kingsbury", "Stanmore", "Edgware", 
              "Finchley", "Northwood", "Southall", "Hayes", "Wood Green", 
              "Hendon", "Northolt", "Watford", "London"
            ],
            "priceRange": "££",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.facebook.com/vmkaccountants",
              "https://www.linkedin.com/company/vmk-accountants",
              "https://uk.trustpilot.com/review/www.vmkaccountants.co.uk"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Accounting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Accounting & Bookkeeping Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tax Planning & Self Assessment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Payroll Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "VAT Registration & Returns"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Making Tax Digital Compliance"
                  }
                }
              ]
            }
          })}
        </script>

        {/* FAQ Structured Data for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services do VMK Accountants offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "VMK Accountants provide comprehensive accounting services including: accounting and bookkeeping, self assessment tax returns, payroll services, VAT registration and returns, Making Tax Digital compliance, business advisory, company formation, and tax planning. We serve small businesses, sole traders, landlords, and contractors across London."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas in London does VMK Accountants serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "VMK Accountants serve clients across North West London including Kenton, Harrow, Wembley, Kingsbury, Stanmore, Edgware, Finchley, Northwood, Southall, Hayes, Wood Green, Hendon, Northolt, Watford, and throughout Greater London."
                }
              },
              {
                "@type": "Question",
                "name": "How much do VMK Accountants charge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "VMK Accountants offer transparent pricing with no hidden fees. Costs vary based on your specific needs. We provide clear quotes before starting any work. Contact us for a free consultation to discuss pricing for your requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Is VMK Accountants Making Tax Digital compliant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, VMK Accountants are fully Making Tax Digital (MTD) compliant. We help clients transition smoothly to MTD requirements for VAT and Income Tax, using cloud accounting software like Xero, QuickBooks, and Sage to ensure full HMRC compliance."
                }
              },
              {
                "@type": "Question",
                "name": "How do I become a client of VMK Accountants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To become a VMK Accountants client, complete our online client setup questionnaire or contact us directly. We'll review your information, discuss your needs, and provide a tailored quote. The process is simple and typically takes just a few days to get started."
                }
              }
            ]
          })}
        </script>

        {/* BreadcrumbList for Navigation */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vmkaccountants.co.uk/"
              }
            ]
          })}
        </script>
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

      {/* New Client Setup Questionnaire Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl">
            <div className="mb-8">
              <FileCheck className="h-16 w-16 text-accent mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Become a VMK Client Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Ready to work with us? Complete our simple client setup questionnaire to get started. We'll review your information and get in touch to discuss how we can help your business thrive.
            </p>
            <a 
              href="https://forms.gle/3gkSAWFpFumoJsZHA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="default" className="group text-base px-10 shadow-lg">
                Complete New Client Setup Questionnaire
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* New Company Setup Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl border-2 border-primary/20">
            <div className="mb-8">
              <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
            </div>
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

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://uk.trustpilot.com/review/www.vmkaccountants.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="ml-3">Give a Trustpilot Review</span>
              </Button>
            </a>

            <Link to="/testimonials">
              <Button variant="outline" size="lg" className="text-base px-10 hover:bg-accent/10 border-2">
                Read More Testimonials
              </Button>
            </Link>

            <a 
              href="https://g.page/r/CW35h6eLpsPOEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300 group-hover:animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="ml-3">Give a Google Review</span>
              </Button>
            </a>
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
