import { useState, useEffect } from "react";
import makeMoreMoney from "@/assets/slideshow/make-more-money.png";
import businessNews from "@/assets/slideshow/business-news.jpg";
import financialConsultation from "@/assets/slideshow/financial-consultation.jpg";
import teamQualified from "@/assets/slideshow/team-qualified.png";
import payLessTax from "@/assets/slideshow/pay-less-tax.png";
import businessAnalytics from "@/assets/slideshow/business-analytics.jpg";
import discoverTaxSavings from "@/assets/slideshow/discover-tax-savings.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { image: makeMoreMoney, alt: "Make More Money With Our Expert Advice" },
  { image: businessNews, alt: "Stay Updated with Business and Financial News" },
  { image: financialConsultation, alt: "Expert Financial Consultation and Planning" },
  { image: teamQualified, alt: "Team of Qualified Experienced Accountants" },
  { image: payLessTax, alt: "Pay Less Tax With Expert Advice" },
  { image: businessAnalytics, alt: "Business Analytics and Financial Insights" },
  { image: discoverTaxSavings, alt: "Discover How You Can Pay Less Tax" },
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl group">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-lg hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-lg hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-accent w-12 shadow-glow"
                  : "bg-white/60 hover:bg-white/80 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
