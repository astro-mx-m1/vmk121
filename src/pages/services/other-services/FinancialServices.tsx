import { TrendingUp, PiggyBank, Target, Award, BarChart3, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import businessServicesImage from "@/assets/business-services.jpg";

const FinancialServices = () => {
  const services = [
    {
      icon: PiggyBank,
      title: "Pension Planning",
      description: "Comprehensive pension planning to secure your retirement future.",
      details: [
        "Personal pension advice",
        "SIPP (Self-Invested Personal Pension) setup",
        "Pension consolidation",
        "Retirement income planning",
        "Pension transfer advice",
        "Annual allowance optimization",
      ],
    },
    {
      icon: BarChart3,
      title: "Investment Management",
      description: "Professional investment portfolio management tailored to your goals.",
      details: [
        "ISA and investment accounts",
        "Portfolio diversification",
        "Risk-assessed investments",
        "Regular portfolio reviews",
        "Tax-efficient investing",
        "Investment performance monitoring",
      ],
    },
    {
      icon: Target,
      title: "Retirement Planning",
      description: "Strategic planning to help you achieve your retirement goals.",
      details: [
        "Retirement needs assessment",
        "Income projection modeling",
        "Drawdown strategies",
        "State pension maximization",
        "Inheritance tax planning",
        "Later life financial planning",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Wealth Protection",
      description: "Safeguarding your wealth for you and future generations.",
      details: [
        "Life insurance advice",
        "Protection planning",
        "Estate planning",
        "Trust services",
        "Wealth preservation strategies",
        "Intergenerational wealth transfer",
      ],
    },
    {
      icon: Award,
      title: "Tax-Efficient Planning",
      description: "Maximizing your wealth through intelligent tax planning.",
      details: [
        "ISA allowance utilization",
        "Capital gains tax planning",
        "Dividend tax optimization",
        "Pension tax relief",
        "VCT and EIS investments",
        "Offshore planning (where appropriate)",
      ],
    },
    {
      icon: TrendingUp,
      title: "Financial Goal Planning",
      description: "Helping you achieve your short and long-term financial objectives.",
      details: [
        "Financial goal setting",
        "Cash flow analysis",
        "Savings strategies",
        "Education planning",
        "Property purchase planning",
        "Business exit strategies",
      ],
    },
  ];

  const whyChooseUs = [
    "Independent financial advice",
    "FCA regulated advisors",
    "Whole-of-market solutions",
    "Personalized financial planning",
    "Ongoing support and reviews",
    "Integration with tax planning",
  ];

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={businessServicesImage} 
            alt="Financial Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Financial Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Expert financial planning including pensions, investments, and wealth management to help you achieve your financial goals and secure your future.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Comprehensive Financial Planning
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Beyond accounting and tax services, we offer holistic financial planning to help you build, grow, and protect your wealth. Our FCA-regulated financial advisors work closely with our tax team to provide integrated solutions that maximize your financial potential.
            </p>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">The VMK Financial Advantage</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What sets us apart is the seamless integration between our financial planning and accountancy services. This means your financial decisions are always tax-efficient, and your tax planning considers your broader financial goals.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-2 text-left">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Financial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-lift shadow-soft glass-card">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2 mt-1 font-bold text-sm">✓</span>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Financial Planning Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery Meeting",
                  description: "Understanding your current situation, goals, and risk tolerance through a comprehensive fact-finding process.",
                },
                {
                  step: "2",
                  title: "Financial Analysis",
                  description: "Analyzing your finances, identifying opportunities, and assessing any gaps in your current planning.",
                },
                {
                  step: "3",
                  title: "Recommendations",
                  description: "Presenting tailored recommendations with clear explanations of how each solution helps achieve your goals.",
                },
                {
                  step: "4",
                  title: "Implementation",
                  description: "Implementing agreed recommendations, setting up products, and ensuring everything is in place.",
                },
                {
                  step: "5",
                  title: "Ongoing Review",
                  description: "Regular reviews to ensure your plan remains on track and adapts to changing circumstances.",
                },
              ].map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                        <span className="text-xl font-bold text-accent-foreground">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Financial Planning Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl text-center hover-lift">
                <p className="text-5xl font-bold text-primary mb-2">£50M+</p>
                <p className="text-muted-foreground">Assets Under Advice</p>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center hover-lift">
                <p className="text-5xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Financial Plans Created</p>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center hover-lift">
                <p className="text-5xl font-bold text-primary mb-2">95%</p>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-4">Important Information</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                VMK Accountants Limited is an appointed representative of Financial Services Network Limited, which is authorized and regulated by the Financial Conduct Authority (FCA). Financial Services Network Limited's FCA registration number is 123456.
              </p>
              <p className="leading-relaxed">
                The value of investments and any income from them can fall as well as rise, and you may not get back the original amount invested. Past performance is not a reliable indicator of future performance.
              </p>
              <p className="leading-relaxed">
                Tax treatment depends on individual circumstances and may be subject to change in future. The Financial Conduct Authority does not regulate tax advice, will writing, or some forms of buy-to-let mortgages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to plan your financial future?"
        description="Book a free initial consultation with one of our FCA-regulated financial advisors to discuss your goals and how we can help you achieve them."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Business Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default FinancialServices;
