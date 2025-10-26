import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const getGradientColor = () => {
  return 'bg-gradient-to-br from-[hsl(210,100%,15%)] to-[hsl(210,100%,25%)]';
};

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  const gradientClass = getGradientColor();
  
  return (
    <Card className="glass-card hover-lift group overflow-hidden border-border/50 relative card-modern">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="relative z-10">
        <div className={`w-20 h-20 rounded-3xl ${gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
          <Icon className="h-10 w-10 text-white" />
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
