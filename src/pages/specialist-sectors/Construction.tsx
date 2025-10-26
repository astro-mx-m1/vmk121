import SectorTemplate from "./SectorTemplate";
import { HardHat } from "lucide-react";

const Construction = () => {
  return (
    <SectorTemplate
      title="Construction Industry Specialists"
      icon={HardHat}
      intro="Specialist accounting for construction businesses, contractors, and subcontractors. Expert CIS compliance, job costing, subcontractor management, and construction-specific tax planning."
      services={[
        "CIS registration and monthly returns",
        "Subcontractor verification and statements",
        "Job costing and project accounting",
        "Construction contract accounting",
        "Plant and machinery capital allowances",
        "Reverse charge VAT for construction",
        "Gross payment status applications",
        "Construction company accounts",
        "Payroll with CIS deductions",
        "Cash flow management for projects",
        "Tender and bid support",
        "Construction sector tax planning",
      ]}
      challenges={[
        {
          title: "CIS Compliance",
          description: "Managing Construction Industry Scheme deductions, verifications, and monthly return submissions.",
        },
        {
          title: "Job Costing",
          description: "Tracking costs and profitability across multiple concurrent construction projects.",
        },
        {
          title: "Cash Flow Management",
          description: "Managing cash flow with CIS deductions, staged payments, and retention clauses.",
        },
        {
          title: "Reverse Charge VAT",
          description: "Navigating the domestic reverse charge VAT rules for construction services.",
        },
      ]}
      howWeHelp={[
        "Register your business for CIS and handle all monthly return submissions with subcontractor verification",
        "Implement job costing systems to track profitability on each construction project accurately",
        "Manage CIS deductions for both contractors and subcontractors with proper tax credit reconciliation",
        "Apply for gross payment status to improve cash flow by receiving payments without CIS deductions",
        "Handle reverse charge VAT requirements specific to construction and building services",
        "Claim capital allowances on construction equipment, machinery, and vehicles to reduce tax",
        "Provide cash flow forecasting tailored to construction payment terms and retention clauses",
        "Support tender and bid processes with accurate financial projections and costing",
      ]}
    />
  );
};

export default Construction;
