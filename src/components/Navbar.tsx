
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-orange-500 text-white py-2 px-4">
        <div className="container-wide flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+919606974400" className="flex items-center text-sm">
              <Phone size={14} className="mr-1" />
              +91 9606974400
            </a>
            <a href="mailto:admissions@siddharthaglobal.com" className="flex items-center text-sm">
              <Mail size={14} className="mr-1" />
              admissions@siddharthaglobal.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className={`bg-white shadow-md sticky top-0 z-50`}>
        <div className="container-wide flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="/logo-placeholder.svg" 
                alt="Siddhartha Global & Avalon University" 
                className="h-12 w-auto"
              />
              <span className="text-lg font-semibold text-emerald-700 hidden md:inline">
                Siddhartha Global & Avalon University
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              onClick={() => scrollToSection('about')}
              className="cursor-pointer font-medium transition-colors duration-300 text-gray-700 hover:text-emerald-700"
            >
              About Us
            </a>
            <a 
              onClick={() => scrollToSection('programs')}
              className="cursor-pointer font-medium transition-colors duration-300 text-gray-700 hover:text-emerald-700"
            >
              Programs
            </a>
            <a 
              onClick={() => scrollToSection('admission-form')}
              className="cursor-pointer font-medium transition-colors duration-300 text-gray-700 hover:text-emerald-700"
            >
              Admissions
            </a>
            <a 
              className="cursor-pointer font-medium transition-colors duration-300 text-gray-700 hover:text-emerald-700"
            >
              Useful Information
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer font-medium transition-colors duration-300 text-gray-700 hover:text-emerald-700"
            >
              Contact Us
            </a>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium"
              onClick={() => scrollToSection('admission-form')}
            >
              Apply Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-700 rounded-md font-medium"
              >
                About
              </a>
              <a 
                onClick={() => scrollToSection('programs')}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-700 rounded-md font-medium"
              >
                Programs
              </a>
              <a 
                onClick={() => scrollToSection('admission-form')}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-700 rounded-md font-medium"
              >
                Admissions
              </a>
              <a 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-700 rounded-md font-medium"
              >
                Useful Information
              </a>
              <a 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-700 rounded-md font-medium"
              >
                Contact Us
              </a>
              <Button 
                variant="default" 
                className="w-full bg-orange-500 hover:bg-orange-600 mt-4 text-white font-medium"
                onClick={() => scrollToSection('admission-form')}
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
