import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
          <div className="flex items-center justify-between">
            {/* Logo on the left side */}
            <Link to="/" className="flex items-center" style={{ marginLeft: '5ch' }}>
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

            {/* User Login on the right */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="secondary"
                className="uppercase tracking-wide"
              >
                USER LOGIN
              </Button>
            </div>

            {/* Mobile Menu Button - Visible & Styled */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="outline" 
                  size="icon" 
                  aria-label="Toggle menu"
                  className="bg-accent text-accent-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-2 border-accent"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link to="/" className="text-lg font-medium hover:text-accent transition-colors">
                    Home
                  </Link>
                  
                  <Link to="/about" className="text-lg font-medium hover:text-accent transition-colors">
                    About Us
                  </Link>
                  
                  <Link to="/testimonials" className="text-lg font-medium hover:text-accent transition-colors">
                    Testimonials
                  </Link>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Our Services</h3>
                    <Link to="/services/business-services" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      Business Services
                    </Link>
                    <Link to="/services/taxation-services" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      Taxation Services
                    </Link>
                    <Link to="/services/other-services" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      Other Services
                    </Link>
                  </div>

                  <Link to="/specialist-sectors" className="text-lg font-medium hover:text-accent transition-colors">
                    Specialist Sectors
                  </Link>

                  <Link to="/making-tax-digital" className="text-lg font-medium hover:text-accent transition-colors">
                    Making Tax Digital
                  </Link>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Business Startup</h3>
                    <Link to="/business-start-up/company-formation" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      Company Formation
                    </Link>
                    <Link to="/business-start-up/vat-registration" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      VAT Registration
                    </Link>
                    <Link to="/business-start-up/paye-registration" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      PAYE Registration
                    </Link>
                    <Link to="/business-start-up/self-assessment-registration" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      Self Assessment Registration
                    </Link>
                    <Link to="/business-start-up/business-planning" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      Business Planning
                    </Link>
                    <Link to="/business-start-up/useful-links" className="block text-muted-foreground hover:text-accent transition-colors pl-4">
                      Useful Links
                    </Link>
                  </div>

                  <Link to="/locations" className="text-lg font-medium hover:text-accent transition-colors">
                    Areas We Cover
                  </Link>

                  <Link to="/contact" className="text-lg font-medium text-accent hover:text-accent/80 transition-colors">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
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
                className={`px-6 py-5 transition-all duration-300 hover:shadow-xl hover:scale-110 hover:-translate-y-1 hover:bg-accent/20 ${
                  isActive("/") 
                    ? "bg-accent" 
                    : "bg-accent/90"
                }`}
              >
                <Home className="h-5 w-5 text-accent-foreground" />
              </Link>

              {/* Menu Items */}
              <Link
                to="/about"
                className={`px-5 py-5 text-sm font-semibold text-primary transition-all relative hover:text-accent hover:shadow-lg ${
                  isActive("/about") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                About us
              </Link>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-semibold text-primary hover:text-accent hover:shadow-lg transition-all bg-transparent px-5 py-5 h-auto">
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
                className={`px-5 py-5 text-sm font-semibold text-primary hover:text-accent hover:shadow-lg transition-all relative ${
                  isActive("/specialist-sectors") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                Specialist sectors
              </Link>

              <Link
                to="/making-tax-digital"
                className={`px-5 py-5 text-sm font-semibold text-primary hover:text-accent hover:shadow-lg transition-all relative ${
                  isActive("/making-tax-digital") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                Making Tax Digital
              </Link>

              {/* Business Start-Up Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-semibold text-primary hover:text-accent hover:shadow-lg transition-all bg-transparent px-5 py-5 h-auto">
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
                    <NavigationMenuTrigger className="text-sm font-semibold text-primary hover:text-accent hover:shadow-lg transition-all bg-transparent px-5 py-5 h-auto">
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
                className={`px-5 py-5 text-sm font-semibold text-primary hover:text-accent hover:shadow-lg transition-all relative ${
                  isActive("/contact") ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-accent" : ""
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Phone Number with Stunning Hover Effect */}
            <a 
              href="tel:07956309363"
              className="hidden lg:flex items-center bg-primary text-primary-foreground px-8 py-5 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] hover:scale-105 hover:-translate-y-1"
            >
              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              
              {/* Content */}
              <Phone className="h-5 w-5 mr-3 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="text-xl font-bold tracking-wide relative z-10 group-hover:text-accent-foreground group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                07956309363
              </span>
            </a>
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
