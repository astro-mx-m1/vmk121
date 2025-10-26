import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "VMK has been handling our accounts for three years now. They're responsive, knowledgeable, and have saved us money through smart tax planning. I can't recommend them highly enough.",
      author: "Sarah Johnson",
      location: "Harrow",
      business: "SJ Consulting Limited",
    },
    {
      quote: "As a landlord with multiple properties, I needed someone who understood property tax inside and out. VMK made everything simple and stress-free. They even helped me set up better systems for tracking rental income.",
      author: "Michael Chen",
      location: "Wembley",
      business: "Property Investor",
    },
    {
      quote: "Switching to VMK was the best business decision I made last year. They helped me transition to Making Tax Digital seamlessly and their cloud accounting setup has given me real-time visibility of my finances.",
      author: "Priya Patel",
      location: "Kingsbury",
      business: "Sole Trader",
    },
    {
      quote: "The team at VMK goes above and beyond. They don't just file my tax returns — they actively look for ways to save me money and improve my business operations. True business partners.",
      author: "David Thompson",
      location: "Stanmore",
      business: "DT Graphics Limited",
    },
    {
      quote: "As a contractor, IR35 has been a nightmare to navigate. VMK reviewed my contracts, advised on my status, and handled all my PSC accounting. Peace of mind is priceless.",
      author: "James Williams",
      location: "Finchley",
      business: "IT Contractor",
    },
    {
      quote: "I've worked with several accountants over the years, but VMK stands out for their personal service. They actually answer the phone when I call and explain things in plain English!",
      author: "Anita Desai",
      location: "Edgware",
      business: "Retail Business Owner",
    },
    {
      quote: "VMK helped us set up our limited company from scratch and have been with us every step of the way. Their business advisory service has been invaluable as we've grown from startup to 15 employees.",
      author: "Robert & Emma Clarke",
      location: "Northwood",
      business: "Clarke & Co Limited",
    },
    {
      quote: "Professional, efficient, and genuinely friendly. VMK takes care of all our payroll, VAT, and accounts, leaving us free to focus on running our restaurant.",
      author: "Marco Rossi",
      location: "Wembley",
      business: "Restaurant Owner",
    },
    {
      quote: "I was overwhelmed by the thought of Making Tax Digital, but VMK walked me through everything, set up my software, and now my bookkeeping is actually easier than before. Highly recommended!",
      author: "Sophie Green",
      location: "Harrow",
      business: "Freelance Designer",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Client Testimonials
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Don't just take our word for it — hear what our clients have to say about working with VMK Accountants.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from businesses and individuals we've had the pleasure of serving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Trusted by Businesses Across NW London
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-8 rounded-lg shadow-soft hover-lift hover:shadow-large animate-fade-in-up" style={{ animationDelay: "0s" }}>
                <div className="text-4xl font-bold text-secondary mb-2 glow-effect">3+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-soft hover-lift hover:shadow-large animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-secondary mb-2 glow-effect">100+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-soft hover-lift hover:shadow-large animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-secondary mb-2 glow-effect">7</div>
                <p className="text-muted-foreground">Local Areas Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to join our satisfied clients?"
        description="Experience the VMK difference. Book a free consultation to discuss how we can help your business thrive."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};

export default Testimonials;
