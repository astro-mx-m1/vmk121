import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BusinessServices from "./pages/services/BusinessServices";
import TaxationServices from "./pages/services/TaxationServices";
import OtherServices from "./pages/services/OtherServices";
import TaxInvestigation from "./pages/services/other-services/TaxInvestigation";
import FeeProtection from "./pages/services/other-services/FeeProtection";
import FinancialServices from "./pages/services/other-services/FinancialServices";
import SpecialistSectors from "./pages/SpecialistSectors";
import ITContractors from "./pages/specialist-sectors/ITContractors";
import Medical from "./pages/specialist-sectors/Medical";
import PropertyLandlords from "./pages/specialist-sectors/PropertyLandlords";
import Construction from "./pages/specialist-sectors/Construction";
import Retail from "./pages/specialist-sectors/Retail";
import Childcare from "./pages/specialist-sectors/Childcare";
import EstateAgents from "./pages/specialist-sectors/EstateAgents";
import MediaCreatives from "./pages/specialist-sectors/MediaCreatives";
import Restaurant from "./pages/specialist-sectors/Restaurant";
import Beauty from "./pages/specialist-sectors/Beauty";
import Legal from "./pages/specialist-sectors/Legal";
import Finance from "./pages/specialist-sectors/Finance";
import MakingTaxDigital from "./pages/MakingTaxDigital";
import CompanyFormation from "./pages/business-start-up/CompanyFormation";
import SelfAssessmentRegistration from "./pages/business-start-up/SelfAssessmentRegistration";
import VATRegistration from "./pages/business-start-up/VATRegistration";
import PAYERegistration from "./pages/business-start-up/PAYERegistration";
import BusinessPlanning from "./pages/business-start-up/BusinessPlanning";
import UsefulLinks from "./pages/business-start-up/UsefulLinks";
import Locations from "./pages/Locations";
import Kenton from "./pages/locations/Kenton";
import Harrow from "./pages/locations/Harrow";
import Kingsbury from "./pages/locations/Kingsbury";
import Stanmore from "./pages/locations/Stanmore";
import Wembley from "./pages/locations/Wembley";
import Finchley from "./pages/locations/Finchley";
import Northwood from "./pages/locations/Northwood";
import Edgware from "./pages/locations/Edgware";
import Southall from "./pages/locations/Southall";
import Hayes from "./pages/locations/Hayes";
import WoodGreen from "./pages/locations/WoodGreen";
import Watford from "./pages/locations/Watford";
import Hendon from "./pages/locations/Hendon";
import Northolt from "./pages/locations/Northolt";
import London from "./pages/locations/London";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/business-services" element={<BusinessServices />} />
              <Route path="/services/taxation-services" element={<TaxationServices />} />
              <Route path="/services/other-services" element={<OtherServices />} />
              <Route path="/services/other-services/tax-investigation" element={<TaxInvestigation />} />
              <Route path="/services/other-services/fee-protection" element={<FeeProtection />} />
              <Route path="/services/other-services/financial-services" element={<FinancialServices />} />
              <Route path="/specialist-sectors" element={<SpecialistSectors />} />
              <Route path="/specialist-sectors/it-contractors" element={<ITContractors />} />
              <Route path="/specialist-sectors/medical" element={<Medical />} />
              <Route path="/specialist-sectors/property-landlords" element={<PropertyLandlords />} />
              <Route path="/specialist-sectors/construction" element={<Construction />} />
              <Route path="/specialist-sectors/retail" element={<Retail />} />
              <Route path="/specialist-sectors/childcare" element={<Childcare />} />
              <Route path="/specialist-sectors/estate-agents" element={<EstateAgents />} />
              <Route path="/specialist-sectors/media-creatives" element={<MediaCreatives />} />
              <Route path="/specialist-sectors/restaurant" element={<Restaurant />} />
              <Route path="/specialist-sectors/beauty" element={<Beauty />} />
              <Route path="/specialist-sectors/legal" element={<Legal />} />
              <Route path="/specialist-sectors/finance" element={<Finance />} />
              <Route path="/making-tax-digital" element={<MakingTaxDigital />} />
              <Route path="/business-start-up/company-formation" element={<CompanyFormation />} />
              <Route path="/business-start-up/self-assessment-registration" element={<SelfAssessmentRegistration />} />
              <Route path="/business-start-up/vat-registration" element={<VATRegistration />} />
              <Route path="/business-start-up/paye-registration" element={<PAYERegistration />} />
              <Route path="/business-start-up/business-planning" element={<BusinessPlanning />} />
              <Route path="/business-start-up/useful-links" element={<UsefulLinks />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/locations/kenton" element={<Kenton />} />
              <Route path="/locations/harrow" element={<Harrow />} />
              <Route path="/locations/kingsbury" element={<Kingsbury />} />
              <Route path="/locations/stanmore" element={<Stanmore />} />
              <Route path="/locations/wembley" element={<Wembley />} />
              <Route path="/locations/finchley" element={<Finchley />} />
              <Route path="/locations/northwood" element={<Northwood />} />
              <Route path="/locations/edgware" element={<Edgware />} />
              <Route path="/locations/southall" element={<Southall />} />
              <Route path="/locations/hayes" element={<Hayes />} />
              <Route path="/locations/wood-green" element={<WoodGreen />} />
              <Route path="/locations/watford" element={<Watford />} />
              <Route path="/locations/hendon" element={<Hendon />} />
              <Route path="/locations/northolt" element={<Northolt />} />
              <Route path="/locations/london" element={<London />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
