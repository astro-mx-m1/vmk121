import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Edgware = () => {
  return (
    <>
      <Helmet>
        <title>Accountants in Edgware | Individual & Business Tax Services | VMK Accountants</title>
        <meta name="description" content="Expert accountants and tax advisors in Edgware. Serving diverse individuals and local businesses with personalized accounting services. Making Tax Digital compliance for Edgware community." />
      </Helmet>
      <div>
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Accountants & Tax Advisors in Edgware
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Professional accountants serving Edgware's diverse community with expert taxation services and Making Tax Digital compliance.
            </p>
          </div>
        </section>
        <CTASection
          title="Ready to work with Edgware's trusted accountants?"
          description="Contact our Edgware team for a free consultation."
          primaryButtonText="Request Free Consultation"
          primaryButtonLink="/contact"
        />
      </div>
    </>
  );
};

export default Edgware;
