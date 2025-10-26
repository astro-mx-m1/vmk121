import { Film, Music, Image, DollarSign, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const MediaCreatives = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Freelance Income Management",
      description: "Track income from multiple clients, projects, and revenue streams.",
    },
    {
      icon: Music,
      title: "Royalties & Licensing",
      description: "Account for royalties, licensing fees, and intellectual property income.",
    },
    {
      icon: Film,
      title: "Production Accounting",
      description: "Project-based accounting for film, video, and content production.",
    },
    {
      icon: FileText,
      title: "Expense Tracking",
      description: "Claim all allowable expenses including equipment, travel, and workspace.",
    },
    {
      icon: TrendingUp,
      title: "Tax Planning",
      description: "Creative industry tax reliefs including film and TV tax credits.",
    },
    {
      icon: Image,
      title: "Copyright & IP Advice",
      description: "Financial advice on copyright sales, licensing, and IP management.",
    },
  ];

  const challenges = [
    "Managing irregular income from multiple sources",
    "Tracking royalties and licensing payments",
    "Understanding creative industry tax reliefs",
    "Claiming expenses for equipment and software",
    "Project-based income and expense allocation",
    "VAT on digital services and international work",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Media & Creatives Accounting
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Specialist accounting for filmmakers, musicians, artists, content creators, and media professionals. We understand the creative industry.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Creative Professionals</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Working in the creative industries means juggling multiple projects, irregular income streams, royalties, and complex expense claims—all while focusing on your creative work.
            </p>
            <p className="text-lg text-muted-foreground">
              At VMK Accountants, we specialize in media and creative industry accounting. We help filmmakers, musicians, artists, and content creators manage their finances, track royalties, claim all allowable expenses, and access creative industry tax reliefs—so you can focus on creating.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">How We Help Creative Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-gradient-card border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Common Creative Industry Accounting Challenges</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-3 mt-1 text-xl">✓</span>
                  <span className="text-lg text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need creative industry accounting support?"
        description="Contact our media and creative accounting specialists today for a free consultation."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services/business-services"
      />
    </div>
  );
};

export default MediaCreatives;
