import SectorTemplate from "./SectorTemplate";
import { Stethoscope } from "lucide-react";

const Medical = () => {
  return (
    <SectorTemplate
      title="Medical (Doctors & Dentists)"
      icon={Stethoscope}
      intro="Specialist accounting for doctors, dentists, GPs, and medical professionals. Expert management of NHS income, private practice accounts, locum work, and medical sector tax planning."
      services={[
        "NHS income management and reconciliation",
        "Private practice accounting",
        "Locum accountant services",
        "Medical expense claims and optimization",
        "Partnership accounts for GP practices",
        "CQC compliance financial reporting",
        "Medical indemnity and insurance planning",
        "Superannuation and pension advice",
        "Medical equipment capital allowances",
        "Practice valuations and goodwill",
        "Succession planning for medical practices",
        "Medical sector tax planning",
      ]}
      challenges={[
        {
          title: "NHS & Private Income",
          description: "Managing and reconciling income from both NHS work and private practice activities.",
        },
        {
          title: "Medical Expenses",
          description: "Identifying and claiming all allowable professional expenses including CPD, indemnity, and equipment.",
        },
        {
          title: "Practice Partnerships",
          description: "Complex partnership accounting for GP surgeries and dental practices with multiple partners.",
        },
        {
          title: "Regulatory Compliance",
          description: "Maintaining financial records that meet medical regulatory body requirements.",
        },
      ]}
      howWeHelp={[
        "Reconcile and manage all NHS income including pension contributions and superannuation deductions",
        "Set up and maintain separate accounting for private practice work with proper income allocation",
        "Provide locum accountant services specifically designed for medical professionals working across multiple locations",
        "Identify and claim all medical-specific tax reliefs including professional subscriptions, indemnity insurance, and CPD costs",
        "Handle partnership accounts for GP practices including profit allocation and partner tax returns",
        "Advise on optimal practice structure (sole trader, partnership, limited company) based on your circumstances",
        "Manage medical equipment purchases with capital allowances to reduce your tax liability",
        "Provide succession and retirement planning tailored to medical professionals",
      ]}
    />
  );
};

export default Medical;
