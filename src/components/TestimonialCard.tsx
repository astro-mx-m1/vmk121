import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  business?: string;
}

const TestimonialCard = ({ quote, author, location, business }: TestimonialCardProps) => {
  return (
    <Card className="glass-card border-border/50 h-full hover-lift group overflow-hidden relative card-modern">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="pt-8 relative z-10">
        <div className="flex mb-6 gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-5 w-5 fill-accent text-accent group-hover:scale-110 transition-transform duration-300" 
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
        <p className="text-foreground mb-6 italic leading-relaxed text-base">"{quote}"</p>
        <div className="border-t border-border/50 pt-4">
          <p className="font-bold text-lg gradient-text">{author}</p>
          <p className="text-sm text-muted-foreground mt-1">{business ? `${business}, ` : ""}{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
