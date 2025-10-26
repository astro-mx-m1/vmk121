import { FileSearch, Shield, Users, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import taxInvestigationImage from "@/assets/tax-investigation.jpg";

const TaxInvestigation = () => {
  const services = [
    {
      icon: FileSearch,
      title: "HMRC Enquiry Support",
      description: "Complete representation during HMRC tax enquiries and investigations.",
      details: [
        "Initial enquiry assessment",
        "Full correspondence handling",
        "Document preparation and organization",
        "Meeting representation",
        "Technical tax advice",
        "Negotiation with HMRC",
      ],
    },
    {
      icon: Shield,
      title: "Investigation Protection",
      description: "Proactive measures to minimize investigation risk and protect your interests.",
      details: [
        "Risk assessment and mitigation",
        "Compliance health checks",
        "Record-keeping reviews",
        "Preventative tax planning",
        "Regular compliance audits",
        "Best practice guidance",
      ],
    },
    {
      icon: Users,
      title: "Expert Representation",
      description: "Experienced tax professionals representing your interests throughout the process.",
      details: [
        "Qualified tax specialists",
        "HMRC relationship management",
        "Settlement negotiation",
        "Appeal procedures",
        "Tribunal representation",
        "Dispute resolution",
      ],
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Comprehensive support with all required documentation and submissions.",
      details: [
        "Evidence compilation",
        "Financial records review",
        "Supporting documentation",
        "Technical submissions",
        "Information requests",
        "Deadline management",
      ],
    },
  ];

  const investigationTypes = [
    "Self-Assessment enquiries",
    "VAT investigations",
    "PAYE and payroll reviews",
    "Corporation Tax enquiries",
    "CIS compliance checks",
    "Business records checks",
  ];

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={taxInvestigationImage} 
            alt="Tax Investigation Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Tax Investigation Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Expert representation and comprehensive support during HMRC tax investigations and enquiries. Protecting your interests every step of the way.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Professional Tax Investigation Support
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center">
              Facing a tax investigation can be stressful and time-consuming. Our experienced team provides expert guidance and representation throughout the entire process, ensuring your rights are protected and the best possible outcome is achieved.
            </p>
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <AlertTriangle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Why Tax Investigations Happen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HMRC conducts investigations for various reasons including random selection, discrepancies in tax returns, whistleblower reports, or industry-specific campaigns. Being selected doesn't necessarily mean wrongdoing, but proper representation is crucial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Investigation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-lift shadow-soft glass-card">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
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

      {/* Investigation Types */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Types of Investigations We Handle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {investigationTypes.map((type, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover-lift">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium text-foreground">{type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Investigation Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  description: "We review the investigation notice, assess the scope, and identify potential risks and opportunities.",
                },
                {
                  step: "2",
                  title: "Strategy Development",
                  description: "Creating a comprehensive response strategy tailored to your specific situation and HMRC's concerns.",
                },
                {
                  step: "3",
                  title: "Documentation & Response",
                  description: "Gathering all required information, preparing documentation, and submitting professional responses to HMRC.",
                },
                {
                  step: "4",
                  title: "Negotiation & Settlement",
                  description: "Engaging with HMRC to negotiate the best possible outcome and reach a fair settlement.",
                },
                {
                  step: "5",
                  title: "Resolution & Follow-up",
                  description: "Finalizing the investigation, implementing any required changes, and ensuring future compliance.",
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

      {/* CTA Section */}
      <CTASection
        title="Facing a tax investigation?"
        description="Don't navigate it alone. Contact us today for expert representation and support throughout the investigation process."
        primaryButtonText="Get Expert Help Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View Fee Protection"
        secondaryButtonLink="/services/other-services/fee-protection"
      />
    </div>
  );
};

export default TaxInvestigation;
