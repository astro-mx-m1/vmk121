import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, TrendingUp, FileText, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BusinessPlanning = () => {
  const services = [
    {
      icon: FileText,
      title: "Business Plans",
      description: "Comprehensive business plans for startups and growth strategies"
    },
    {
      icon: DollarSign,
      title: "Financial Forecasting",
      description: "Detailed cash flow projections and financial modeling"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Long-term strategy development and goal setting"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Expansion planning and market analysis support"
    },
    {
      icon: Users,
      title: "Funding Applications",
      description: "Business plans for bank loans, investors, and grants"
    },
    {
      icon: CheckCircle,
      title: "Viability Assessment",
      description: "Market research and business viability analysis"
    }
  ];

  const benefits = [
    "Professional business plans tailored to your goals",
    "Detailed financial forecasts and projections",
    "Cash flow management and budgeting support",
    "Strategic planning for sustainable growth",
    "Funding application support and documentation",
    "Market analysis and competitive research",
    "Risk assessment and mitigation strategies",
    "Ongoing business advisory and planning reviews"
  ];

  return (
    <>
      <Helmet>
        <title>Business Planning Services | Strategic Planning & Financial Forecasting</title>
        <meta name="description" content="Expert business planning services for startups and established businesses. Professional business plans, financial forecasting, and strategic growth planning. Get started today." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Business Planning & Strategy Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional business planning services to help you start, grow, and succeed. 
                From comprehensive business plans to strategic growth strategies and financial forecasting.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Start Your Business Plan
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Expert Business Planning Services</h2>
              <p className="text-lg text-muted-foreground mb-4">
                A well-crafted business plan is essential for success, whether you're starting a new business, 
                seeking funding, or planning for growth. Our experienced team creates comprehensive business 
                plans that clearly communicate your vision, strategy, and financial projections.
              </p>
              <p className="text-lg text-muted-foreground">
                We provide strategic planning services including market analysis, financial forecasting, 
                cash flow projections, and growth strategies. Whether you need a business plan for a bank 
                loan, investor pitch, or internal strategic planning, we deliver professional documentation 
                that helps you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Business Planning Services</h2>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Business Planning Services?</h2>
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

        {/* What's Included Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What's Included in a Business Plan?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Executive Summary</h3>
                  <p className="text-muted-foreground mb-2">
                    A compelling overview of your business, its mission, and key highlights that capture 
                    attention and communicate your value proposition clearly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                  <p className="text-muted-foreground mb-2">
                    Comprehensive research into your target market, customer demographics, market size, 
                    trends, and competitive landscape to demonstrate market opportunity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Financial Forecasts</h3>
                  <p className="text-muted-foreground mb-2">
                    Detailed financial projections including profit and loss forecasts, cash flow statements, 
                    balance sheets, and break-even analysis for 3-5 years ahead.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Operational Plan</h3>
                  <p className="text-muted-foreground mb-2">
                    Description of business operations, organizational structure, key personnel, facilities, 
                    suppliers, and operational processes required to deliver your products or services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Marketing Strategy</h3>
                  <p className="text-muted-foreground mb-2">
                    Clear marketing and sales strategies outlining how you'll attract and retain customers, 
                    pricing strategies, promotional activities, and sales channels.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
                  <p className="text-muted-foreground mb-2">
                    Identification of potential risks and challenges facing your business, along with 
                    mitigation strategies to address them effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">When Do You Need a Business Plan?</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Starting a New Business</h3>
                    <p className="text-muted-foreground">
                      A comprehensive business plan helps you clarify your vision, validate your business 
                      idea, and create a roadmap for success from day one.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Seeking Funding</h3>
                    <p className="text-muted-foreground">
                      Banks, investors, and grant providers require professional business plans that 
                      demonstrate viability, financial projections, and return on investment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Business Expansion</h3>
                    <p className="text-muted-foreground">
                      Planning to expand? A strategic business plan helps you analyze opportunities, 
                      assess risks, and secure the resources needed for successful growth.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Strategic Review</h3>
                    <p className="text-muted-foreground">
                      Regular business planning helps established businesses stay competitive, adapt to 
                      market changes, and identify new opportunities for growth and improvement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Business Success?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to discuss your business planning needs and get started with a professional plan.
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

export default BusinessPlanning;
