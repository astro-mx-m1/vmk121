import capiumLogo from "@/assets/software/capium.png";
import freeagentLogo from "@/assets/software/freeagent.png";
import moneysoftLogo from "@/assets/software/moneysoft.jpeg";
import quickbooksLogo from "@/assets/software/quickbooks.png";
import sageLogo from "@/assets/software/sage.png";
import xeroLogo from "@/assets/software/xero.png";
import cchLogo from "@/assets/software/cch.png";
import odooLogo from "@/assets/software/odoo.png";
import quickfileLogo from "@/assets/software/quickfile.jpg";
import zohoLogo from "@/assets/software/zoho.png";

const SoftwareCarousel = () => {
  const softwares = [
    { name: "Xero", logo: xeroLogo, url: "https://www.xero.com" },
    { name: "QuickBooks", logo: quickbooksLogo, url: "https://quickbooks.intuit.com" },
    { name: "Sage", logo: sageLogo, url: "https://www.sage.com" },
    { name: "FreeAgent", logo: freeagentLogo, url: "https://www.freeagent.com" },
    { name: "Capium", logo: capiumLogo, url: "https://www.capium.com" },
    { name: "Moneysoft", logo: moneysoftLogo, url: "https://www.moneysoft.co.uk" },
    { name: "CCH", logo: cchLogo, url: "https://www.wolterskluwer.com" },
    { name: "Odoo", logo: odooLogo, url: "https://www.odoo.com" },
    { name: "QuickFile", logo: quickfileLogo, url: "https://www.quickfile.co.uk" },
    { name: "Zoho", logo: zohoLogo, url: "https://www.zoho.com" },
  ];

  // Duplicate for seamless loop
  const duplicatedSoftwares = [...softwares, ...softwares];

  return (
    <div className="bg-gradient-to-r from-background via-muted/30 to-background py-8 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
          We Work With Industry-Leading Software
        </h3>
        <div className="relative">
          <div className="flex animate-marquee hover:pause">
            {duplicatedSoftwares.map((software, index) => (
              <a
                key={index}
                href={software.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <img
                  src={software.logo}
                  alt={software.name}
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCarousel;
