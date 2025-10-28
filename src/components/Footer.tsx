import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import headerLogo from "@/assets/logo-updated.png";
import accaLogo from "@/assets/acca-logo.png";
import aatLogo from "@/assets/aat-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";
import facebookLogo from "@/assets/facebook-logo.jpg";
import instagramLogo from "@/assets/instagram-logo.jpg";
import SoftwareCarousel from "./SoftwareCarousel";
const Footer = () => {
  return <>
      <SoftwareCarousel />
      <footer className="bg-primary text-white relative">
      {/* Social Media Icons - Fixed on the right */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 hidden lg:flex shadow-2xl">
        <a href="https://www.facebook.com/VMKTAX" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:shadow-2xl transition-all duration-300" aria-label="Facebook">
          <img src={facebookLogo} alt="Facebook" className="h-12 w-12 rounded-lg" />
        </a>
        <a href="https://www.linkedin.com/in/vmkaccountants/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:shadow-2xl transition-all duration-300" aria-label="LinkedIn">
          <img src={linkedinLogo} alt="LinkedIn" className="h-12 w-12 rounded-lg" />
        </a>
        <a href="https://www.instagram.com/vmkaccountants/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:shadow-2xl transition-all duration-300" aria-label="Instagram">
          <img src={instagramLogo} alt="Instagram" className="h-12 w-12 rounded-lg" />
        </a>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content - White Background */}
        <div className="bg-white rounded-xl shadow-large p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info with Logo */}
            <div>
              <img src={headerLogo} alt="VMK Accountants Ltd" className="h-16 w-auto mb-4" />
              <p className="text-foreground text-sm leading-relaxed mb-4">
                Today's business environment is fast moving, intricate, and highly competitive. Business owners need the support of professionals who provide on-time, effective solutions to help their business move forward. We aim to provide such a service.
              </p>
              <Link to="/about" className="text-primary text-sm font-medium hover:text-accent transition-colors">
                Read More About VMK Accountants Ltd.
              </Link>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-accent font-bold text-xl mb-6">Contact us</h4>
              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-semibold">VMK Accountants</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a href="tel:02089075656" className="hover:text-primary transition-colors">07956 309363</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a href="tel:07956309363" className="hover:text-primary transition-colors">0208 907 5656</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a href="mailto:admin@vmkaccountants.co.uk" className="hover:text-primary transition-colors break-all">
                    admin@vmkaccountants.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Sitemap */}
            <div>
              <h4 className="text-accent font-bold text-xl mb-6">Sitemap</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-foreground text-sm">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <Link to="/business-start-up/useful-links" className="hover:text-primary transition-colors">Useful Links</Link>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                <Link to="/business-start-up/company-formation" className="hover:text-primary transition-colors">Business start-up</Link>
                <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact us</Link>
                <Link to="/specialist-sectors" className="hover:text-primary transition-colors">Specialist sectors</Link>
              </div>

              {/* Professional Certifications */}
              <div className="flex items-center gap-4 mt-8">
                <img src={accaLogo} alt="ACCA Certified" className="h-16 w-auto" />
                <img src={aatLogo} alt="AAT Certified" className="h-16 w-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Register Section */}
        <div className="text-center mb-6">
          <h3 className="text-white text-xl font-semibold">Register Chartered Certified Accountants</h3>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="text-center text-white text-sm space-y-2">
          <p>
            Copyright © {new Date().getFullYear()} VMK Accountants Ltd. Director : Vipul Katkoria (FCCA) (MAAT) (BSC Hons) Registered in England & Wales No:- 04288796
          </p>
          <p>Website developed By : VMK Accountants Limited</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
        </div>
        </div>
      </footer>
    </>;
};
export default Footer;