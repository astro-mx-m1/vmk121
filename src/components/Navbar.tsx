import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Phone } from "lucide-react";
import logoMain from "@/assets/logo-updated.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const locations = [
  { name: "Kenton", path: "/locations/kenton" },
  { name: "Harrow", path: "/locations/harrow" },
  { name: "Kingsbury", path: "/locations/kingsbury" },
  { name: "Stanmore", path: "/locations/stanmore" },
  { name: "Wembley", path: "/locations/wembley" },
  { name: "Finchley", path: "/locations/finchley" },
  { name: "Northwood", path: "/locations/northwood" },
  { name: "Edgware", path: "/locations/edgware" },
  { name: "Southall", path: "/locations/southall" },
  { name: "Hayes", path: "/locations/hayes" },
  { name: "Wood Green", path: "/locations/wood-green" },
  { name: "Watford", path: "/locations/watford" },
  { name: "Hendon", path: "/locations/hendon" },
  { name: "Northolt", path: "/locations/northolt" },
  { name: "London", path: "/locations/london" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-lg">
      {/* Top Row - Logo & User Login */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-end">
            {/* Logo on the right side */}
            <div className="flex items-center gap-8">
              <div className="hidden lg:flex items-center gap-4">
                <Button 
                  variant="secondary"
                  className="uppercase tracking-wide"
                >
                  USER LOGIN
                </Button>
              </div>

              <Link to="/" className="flex items-center" style={{ marginRight: '5ch' }}>
                <img 
                  src={logoMain} 
                  alt="VMK Accountants Limited - Business Advisors & Tax Consultant | Licensed & Regulated" 
                  style={{
                    width: '250px',
                    height: 'auto',
                    maxHeight: '80px',
                    transform: 'scale(1.5)',
                  }}
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation & Phone */}
      <div className="bg-background border-b-4 border-accent">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {/* Home Icon */}
              <Link
                to="/"
                className={`px-6 py-5 transition-colors ${
                  isActive("/") 
                    ? "bg-accent" 
                    : "bg-accent/90 hover:bg-accent"
                }`}
              >
                <Home className="h-5 w-5 text-accent-foreground" />
              </Link>

              {/* Menu Items */}
              <Link
                to="/about"
                className={`px-5 py-5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors relative ${
                  isActive("/about") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                About us
              </Link>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-semibold text-primary hover:text-primary/80 bg-transparent px-5 py-5 h-auto">
                      Our Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-background">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services/business-services"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary"
                            >
                              <div className="text-sm font-medium leading-none">Business Services</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Accounting, bookkeeping, payroll & company support
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services/taxation-services"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary"
                            >
                              <div className="text-sm font-medium leading-none">Taxation Services</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Tax planning, returns, VAT & compliance
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services/other-services"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary"
                            >
                              <div className="text-sm font-medium leading-none">Other Services</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Tax investigation, fee protection & financial services
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/specialist-sectors"
                className={`px-5 py-5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors relative ${
                  isActive("/specialist-sectors") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                Specialist sectors
              </Link>

              <Link
                to="/making-tax-digital"
                className={`px-5 py-5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors relative ${
                  isActive("/making-tax-digital") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                Making Tax Digital
              </Link>

              {/* Business Start-Up Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-semibold text-primary hover:text-primary/80 bg-transparent px-5 py-5 h-auto">
                      Business Startup
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-2 p-4 bg-background">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/business-start-up/company-formation" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary">
                              Company Formation
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/business-start-up/self-assessment-registration" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary">
                              Self-Assessment Registration
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/business-start-up/vat-registration" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary">
                              VAT Registration
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/business-start-up/paye-registration" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary">
                              PAYE Registration
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/business-start-up/business-planning" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary">
                              Business Planning
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/business-start-up/useful-links" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary">
                              Useful Links
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Locations Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-semibold text-primary hover:text-primary/80 bg-transparent px-5 py-5 h-auto">
                      Areas We Cover
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-background">
                        {locations.map((loc) => (
                          <li key={loc.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={loc.path}
                                className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:shadow-md hover:-translate-y-0.5 focus:bg-accent/10 focus:text-primary"
                              >
                                <div className="text-sm font-bold leading-none group-hover:text-primary transition-colors">{loc.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-foreground">
                                  Accountants in {loc.name}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/contact"
                className={`px-5 py-5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors relative ${
                  isActive("/contact") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Phone Number */}
            <div className="hidden lg:flex items-center bg-primary text-white px-8 py-5">
              <Phone className="h-5 w-5 mr-3" />
              <span className="text-xl font-bold tracking-wide">07956309363</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b animate-fade-in">
          <div className="container mx-auto px-6 py-4 space-y-3">
            <Link to="/contact">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase">
                USER LOGIN
              </Button>
            </Link>
            
            <Link
              to="/"
              className="block py-2 text-sm font-semibold text-primary hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <div className="text-sm font-semibold text-foreground mb-2">Our Services</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/business-services"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Business Services
                </Link>
                <Link
                  to="/services/taxation-services"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Taxation Services
                </Link>
                <Link
                  to="/services/other-services"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Other Services
                </Link>
              </div>
            </div>
            <Link
              to="/specialist-sectors"
              className="block py-2 text-sm font-semibold text-primary hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Specialist Sectors
            </Link>
            <Link
              to="/making-tax-digital"
              className="block py-2 text-sm font-semibold text-primary hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Making Tax Digital
            </Link>
            <div className="py-2">
              <div className="text-sm font-semibold text-foreground mb-2">Business Start-Up</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/business-start-up/company-formation"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company Formation
                </Link>
                <Link
                  to="/business-start-up/self-assessment-registration"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Self-Assessment Registration
                </Link>
                <Link
                  to="/business-start-up/vat-registration"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  VAT Registration
                </Link>
                <Link
                  to="/business-start-up/paye-registration"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PAYE Registration
                </Link>
                <Link
                  to="/business-start-up/business-planning"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Business Planning
                </Link>
                <Link
                  to="/business-start-up/useful-links"
                  className="block py-1 text-sm text-muted-foreground hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Useful Links
                </Link>
              </div>
            </div>
            <div className="py-2">
              <div className="text-sm font-semibold text-foreground mb-2">Areas We Cover</div>
              <div className="pl-4 space-y-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.path}
                    to={loc.path}
                    className="block py-1 text-sm text-muted-foreground hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/about"
              className="block py-2 text-sm font-semibold text-primary hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="pt-4 border-t">
              <a href="tel:07956309363" className="flex items-center justify-center bg-primary text-white px-6 py-4 rounded-md">
                <Phone className="h-5 w-5 mr-3" />
                <span className="text-lg font-bold">07956309363</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
