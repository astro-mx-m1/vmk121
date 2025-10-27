import { Helmet } from "react-helmet";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import aboutTeamImage from "@/assets/about-team.jpg";
const About = () => {
  const whyChooseUs = ["Tailored services: Every client's needs are unique — we adapt our services to suit you.", "Fixed fees: No hidden costs, no surprises.", "Plain language: We explain everything clearly, without jargon.", "Smart solutions: We think creatively to maximise your tax efficiency.", "Full support: From start-up to growth to success — we're with you every step of the way."];
  return <div>
      <Helmet>
        <title>About VMK Accountants | Chartered Accountants Since 2001</title>
        <meta name="description" content="VMK Accountants Ltd - trusted Chartered Accountants serving London businesses since 2001. Expert accounting, tax planning, and business advisory services with transparent fixed fees." />
        <meta name="keywords" content="chartered accountants london, vmk accountants, accountants harrow, business accountants, tax advisors" />
        <link rel="canonical" href="https://vmkaccountants.co.uk/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutTeamImage} alt="VMK Accountants Team" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-up leading-relaxed" style={{
          animationDelay: "0.1s"
        }}>
            Trusted Chartered Accountants serving businesses across London since 2001
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Established in 2001, VMK Accountants Ltd is a trusted and independent firm of Chartered Accountants based in Kenton, Harrow, Pinner, Kingsbury, Edgware, Watford, Wembley, Northwood, Uxbridge, and across London.
              </p>
              <p>We provide accounting, tax, and advisory services tailored for owner-managed businesses, sole traders, partnerships, and small limited companies; often family-run enterprises. Our mission is simple: to deliver professional, reliable, and affordable accounting solutions that give you peace of mind.</p>
              <p>
                At VMK Accountants, we believe in clear communication, practical advice, and fixed, transparent fees. Whether you're a start-up, an established business, or a self-employed professional, we'll help you stay compliant, organised, and profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Choose VMK Accountants?
            </h2>
            <div className="space-y-4 mb-8">
              {whyChooseUs.map((item, index) => <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>)}
            </div>
            <p className="text-lg text-muted-foreground text-center">We aim to maximise your profits and minimise your stress, taking care of your accounting and paperwork so you can focus on running your business.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Our Approach
            </h2>
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    If you prefer to manage your own bookkeeping, we'll recommend the best cloud accounting software and provide full training.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    If you're too busy for day-to-day admin, our monthly maintenance service ensures everything is handled smoothly. You can check your business performance anytime, anywhere through secure online access.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground font-semibold text-center">At the end of the day, it's your business we're here to guide, support, and empower you to achieve your goals.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Vipul Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              About Vipul Katkoria
            </h2>
            <div className="bg-card p-8 rounded-lg shadow-medium">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Vipul Katkoria, founder of VMK Accountants, has been a practising accountant for over 25+ years and is a full member of both ACCA and AAT.</p>
                <p>Vipul's diverse experience spans IT contractors, medical professionals, retail, restaurants, and construction businesses. His hands-on approach and real-world understanding help clients make informed decisions; not just about numbers, but about their overall business strategy.</p>
                <p>
                  Believing that entrepreneurs don't work "office hours," Vipul ensures his clients have access to expert advice when they need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Our People, Our Success
            </h2>
            <Card className="bg-gradient-card border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-center">
                  We believe our success is built on our people. Each member of our team is chosen for their expertise, professionalism, and commitment to excellence.
                </p>
                <p className="text-muted-foreground text-center mt-4">
                  Working closely with clients, we operate as one cohesive unit, sharing a common goal: to deliver quality, practical business advice that helps every client succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection title="Get in Touch" description="For a friendly, no-obligation chat about your accounting or tax needs, contact Vipul or a member of our team today. Let's discuss how we can support your business and help you reach your financial goals." primaryButtonText="Contact Us" primaryButtonLink="/contact" secondaryButtonText="View Our Services" secondaryButtonLink="/services" />
    </div>;
};
export default About;