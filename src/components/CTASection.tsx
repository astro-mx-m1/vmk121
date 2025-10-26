import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(142_76%_65%/0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(267_57%_60%/0.2),transparent_60%)]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Link to={primaryButtonLink}>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto group shadow-2xl text-base px-10 py-6">
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto glass border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 shadow-lg text-base px-10 py-6 backdrop-blur-md"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
