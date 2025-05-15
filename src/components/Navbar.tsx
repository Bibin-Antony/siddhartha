
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
    <nav className={`navbar ${isScrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
      <div className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/logo-placeholder.svg" 
              alt="Siddhartha Global & Avalon University" 
              className="h-10 w-auto"
            />
            <span className={`text-lg font-semibold transition-colors duration-300 ${isScrolled ? 'text-emerald-700' : 'text-white'}`}>
              Siddhartha Global
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('about')}
            className={`cursor-pointer font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-100'}`}
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('programs')}
            className={`cursor-pointer font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-100'}`}
          >
            Programs
          </a>
          <a 
            onClick={() => scrollToSection('admission-form')}
            className={`cursor-pointer font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-100'}`}
          >
            Admissions
          </a>
          <a 
            onClick={() => scrollToSection('contact')}
            className={`cursor-pointer font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-100'}`}
          >
            Contact
          </a>
          <Button 
            variant={isScrolled ? "default" : "secondary"} 
            className={isScrolled ? "bg-emerald-700 hover:bg-emerald-800 text-white font-medium" : "border-white text-white hover:bg-white/20 font-medium"}
            onClick={() => scrollToSection('admission-form')}
          >
            Apply Now
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className={`p-2 rounded-md ${isScrolled ? 'text-charcoal' : 'text-white'} bg-white/10 backdrop-blur-sm`}
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
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('programs')}
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >
              Programs
            </a>
            <a 
              onClick={() => scrollToSection('admission-form')}
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >
              Admissions
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >
              Contact
            </a>
            <Button 
              variant="default" 
              className="w-full bg-emerald-700 hover:bg-emerald-800 mt-4 text-white font-medium"
              onClick={() => scrollToSection('admission-form')}
            >
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
