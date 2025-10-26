import SectorTemplate from "./SectorTemplate";
import { Laptop } from "lucide-react";

const ITContractors = () => {
  return (
    <SectorTemplate
      title="IT Contractors & Freelancers"
      icon={Laptop}
      intro="Specialist accounting for IT contractors, freelancers, and technology consultants. Expert IR35 guidance, limited company setup, and tax-efficient strategies for your contracting business."
      services={[
        "IR35 status determination and compliance",
        "Limited company formation and setup",
        "Contractor tax returns and planning",
        "Personal Service Company (PSC) accounting",
        "Expense claims and optimization",
        "Contract reviews and assessments",
        "Digital accounting software integration",
        "Real-time financial reporting",
        "Quarterly management accounts",
        "VAT registration and returns",
        "Dividend vs. salary planning",
        "End of contract financial reviews",
      ]}
      challenges={[
        {
          title: "IR35 Compliance",
          description: "Navigating complex IR35 regulations and determining your employment status for each contract.",
        },
        {
          title: "Tax Efficiency",
          description: "Extracting profits tax-efficiently through optimal salary and dividend combinations.",
        },
        {
          title: "Expense Management",
          description: "Identifying and claiming all allowable expenses while staying HMRC compliant.",
        },
        {
          title: "Multiple Contracts",
          description: "Managing finances across multiple contracts and clients simultaneously.",
        },
      ]}
      howWeHelp={[
        "Provide comprehensive IR35 status assessments for each contract, giving you peace of mind about your employment status",
        "Set up and manage your limited company with full accounting, bookkeeping, and Companies House compliance",
        "Optimize your tax position through strategic salary and dividend planning tailored to your income",
        "Integrate cloud accounting software (Xero, QuickBooks) for real-time visibility of your finances",
        "Handle all VAT requirements including registration, returns, and Making Tax Digital compliance",
        "Maximize your expense claims by identifying all allowable deductions specific to IT contractors",
        "Provide proactive tax planning advice to minimize your tax liability legally and ethically",
        "Offer year-round support with dedicated accountant access for contract and tax queries",
      ]}
    />
  );
};

export default ITContractors;
