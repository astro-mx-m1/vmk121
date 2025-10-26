import SectorTemplate from "./SectorTemplate";
import { Home } from "lucide-react";

const PropertyLandlords = () => {
  return (
    <SectorTemplate
      title="Property & Landlords"
      icon={Home}
      intro="Specialist accounting for landlords, property investors, and property portfolio owners. Expert guidance on rental income, capital gains, mortgage interest relief, and property tax planning."
      services={[
        "Rental income accounts and reporting",
        "Property tax returns (SA105)",
        "Capital gains tax calculations",
        "Mortgage interest relief advice",
        "Allowable expenses identification",
        "Property portfolio accounting",
        "Furnished holiday lettings (FHL) accounts",
        "Rent-a-room scheme guidance",
        "Property development accounting",
        "Stamp duty land tax (SDLT) advice",
        "Property company incorporation",
        "Estate planning for property portfolios",
      ]}
      challenges={[
        {
          title: "Mortgage Interest Relief",
          description: "Navigating the restricted mortgage interest relief rules and Section 24 restrictions.",
        },
        {
          title: "Capital Gains Tax",
          description: "Calculating and minimizing CGT on property disposals, including principal private residence relief.",
        },
        {
          title: "Allowable Expenses",
          description: "Distinguishing between capital improvements and allowable revenue expenses.",
        },
        {
          title: "Company vs Personal",
          description: "Deciding whether to hold properties personally or through a limited company structure.",
        },
      ]}
      howWeHelp={[
        "Prepare comprehensive rental accounts with all allowable expenses properly identified and claimed",
        "Navigate the mortgage interest relief restrictions (Section 24) and advise on tax-efficient strategies",
        "Calculate capital gains tax on property disposals with all available reliefs including PPR relief",
        "Advise on property structure - whether personal ownership or limited company is more tax-efficient for your portfolio",
        "Handle all property tax return requirements including SA105 supplementary pages",
        "Identify capital allowances on fixtures and fittings to reduce your tax liability",
        "Provide furnished holiday lettings accounting with the specific FHL tax advantages",
        "Offer estate planning advice to minimize inheritance tax on your property portfolio",
      ]}
    />
  );
};

export default PropertyLandlords;
