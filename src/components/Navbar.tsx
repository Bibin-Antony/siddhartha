
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
          <a href="#about" className={`transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-200'}`}>
            About
          </a>
          <a href="#programs" className={`transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-200'}`}>
            Programs
          </a>
          <a href="#admissions" className={`transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-200'}`}>
            Admissions
          </a>
          <a href="#contact" className={`transition-colors duration-300 ${isScrolled ? 'text-charcoal hover:text-emerald-700' : 'text-white hover:text-emerald-200'}`}>
            Contact
          </a>
          <Button 
            variant={isScrolled ? "default" : "secondary"} 
            className={isScrolled ? "bg-emerald-700 hover:bg-emerald-800" : "border-white text-white hover:bg-white/20"}
            onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className={`p-2 rounded-md ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#about" 
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#programs" 
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#admissions" 
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admissions
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-charcoal hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              className="w-full bg-emerald-700 hover:bg-emerald-800 mt-4"
              onClick={() => {
                document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
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
