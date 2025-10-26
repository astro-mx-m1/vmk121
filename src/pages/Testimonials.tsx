import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "VMK Accountants is absolutely fantastic! They handled my tax return with ease and found me a nice refund. Super professional, responsive, and friendly. Highly recommend for anyone looking for a reliable and knowledgeable accountant!",
      author: "Recent Client",
      location: "NW London",
    },
    {
      quote: "I couldn't be more pleased with the services provided by VMK Accountants. Their team is exceptionally knowledgeable in both accounting and taxation, offering advice that is not only accurate but also tailored to my specific needs. They made complex tax regulations easy to understand and helped optimize my financial situation with their expert guidance.",
      author: "Verified Client",
      location: "London",
    },
    {
      quote: "I've been using VMK accountants and their team for the past 6 years now for my annual tax returns and my company accounts. They're very knowledgeable and always happy to answer all my questions and go the extra mile. Their professional advice is undoubtedly helpful and highly appreciated.",
      author: "Long-term Client",
      location: "NW London",
      business: "Business Owner",
    },
    {
      quote: "A highly reliable accountant who is easy to get in touch with. His office is local to me and he is also very responsive to phone calls and emails. I am grateful for the help to file my limited company and personal tax accounts. I would definitely recommend VMK accountants to anyone looking for an accountant!",
      author: "Local Business",
      location: "NW London",
    },
    {
      quote: "Great service helping with personal tax return, advisor on rental property, always available on phone call. Highly recommended VMK for accountant services.",
      author: "Property Owner",
      location: "London",
    },
    {
      quote: "My experience with VMK Accountant was excellent. They provided valuable advice for my personal tax return, ensured timely completion of rental accounting, and offered assistance with handling foreign income. I greatly appreciate their thorough and efficient services.",
      author: "Verified Client",
      location: "London",
      business: "Property Investor",
    },
    {
      quote: "I contacted Mr. Katkoria when I got a letter from HMRC to declare my off shore assets as part of worldwide disclosure facility. Mr. Katkoria is one of the very few exceptionally professional, diligent tax accountant I have come across. He has an excellent understanding of tax laws not only of United Kingdom but also India.",
      author: "International Client",
      location: "UK",
    },
    {
      quote: "I'd bad experience with my previous accountant who avoided to meet me in person. After thorough search over the internet I found Vipul, Director of VMK Accountants, who is not only a gem of a person but so professional at his work and most importantly, very approachable and flexible. Vipul not only advised me on how to deal with my problem but he himself followed up with HMRC in my presence until it was sorted out.",
      author: "Grateful Client",
      location: "London",
    },
    {
      quote: "I would definitely recommend VMK. Excellent service. Good advise on the rental accounts. Helpful staff.",
      author: "Landlord",
      location: "NW London",
      business: "Property Portfolio",
    },
    {
      quote: "Very good service. I have just opened new Indian restaurant in Kingsbury and VMK has helped every stage for accounting and tax advise.",
      author: "Restaurant Owner",
      location: "Kingsbury",
      business: "Restaurant",
    },
    {
      quote: "I am using VMK accountants for last 15 years. They have helped me to grow my business. Good advised any time of the day.",
      author: "Long-standing Client",
      location: "London",
      business: "Established Business",
    },
    {
      quote: "Amazing helpful knowledgeable, the best. I won't go to another accountant, very happy!!",
      author: "Satisfied Client",
      location: "NW London",
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
