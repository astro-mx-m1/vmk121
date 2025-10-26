import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { LucideIcon } from "lucide-react";

interface SectorTemplateProps {
  title: string;
  icon: LucideIcon;
  intro: string;
  services: string[];
  challenges: { title: string; description: string }[];
  howWeHelp: string[];
}

const SectorTemplate = ({ title, icon: Icon, intro, services, challenges, howWeHelp }: SectorTemplateProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {title}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6 text-center">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground mb-16 text-center">
              Specialist services tailored for {title.toLowerCase()}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-6 rounded-2xl shadow-soft hover-lift">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6 text-center">
              Common Challenges
            </h2>
            <p className="text-lg text-muted-foreground mb-16 text-center">
              Industry-specific accounting and tax challenges we help you navigate
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="glass-card border-border/50 hover-lift card-modern">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3 text-primary">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How VMK Helps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-16 text-center">
              How VMK Helps
            </h2>

            <div className="space-y-6">
              {howWeHelp.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-8 rounded-2xl shadow-soft hover-lift">
                  <CheckCircle className="h-7 w-7 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to work with ${title.toLowerCase()} specialists?`}
        description="Contact us for a free consultation to discuss your industry-specific accounting and tax needs."
        primaryButtonText="Request Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Specialist Sectors"
        secondaryButtonLink="/specialist-sectors"
      />
    </div>
  );
};

export default SectorTemplate;
