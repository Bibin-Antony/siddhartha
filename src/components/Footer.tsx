
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Linkedin, Instagram, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Clear form
    form.reset();
    
    // Show success message
    toast({
      title: "Subscribed!",
      description: `You'll receive updates at ${email}`,
    });
  };

  return (
    <>
      <footer id="contact" className="bg-emerald-800 text-white pt-16 pb-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and about */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo-placeholder.svg" 
                  alt="Siddhartha Global & Avalon University" 
                  className="h-10 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5z'/%3E%3Cpath d='M2 17l10 5 10-5'/%3E%3Cpath d='M2 12l10 5 10-5'/%3E%3C/svg%3E";
                    e.currentTarget.onerror = null;
                  }}
                />
                <span className="text-lg font-semibold text-white">Siddhartha Global</span>
              </div>
              <p className="text-emerald-100 mb-4">
                Providing accessible pathways to medical education without compromising on quality or recognition.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-100 hover:text-white transition-colors p-2 bg-emerald-700/50 rounded-full hover:bg-emerald-700">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors p-2 bg-emerald-700/50 rounded-full hover:bg-emerald-700">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors p-2 bg-emerald-700/50 rounded-full hover:bg-emerald-700">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            {/* About links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> Overview
                  </Link>
                </li>
                <li>
                  <Link to="/about/advantage" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> The SG-Avalon Advantage
                  </Link>
                </li>
                <li>
                  <Link to="/about/message-ssahe" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> Message from SSAHE
                  </Link>
                </li>
                <li>
                  <Link to="/about/message-avalon" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> Message from Avalon
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Programs links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/programs/bs-md" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> Integrated BS/MD Program
                  </Link>
                </li>
                <li>
                  <Link to="/programs/process" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> The Process
                  </Link>
                </li>
                <li>
                  <Link to="/programs/benefits" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> Key Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/programs/faq" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/admissions" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span> Admissions
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone size={18} className="text-emerald-300 mt-1 flex-shrink-0" />
                  <a href="tel:+919606974400" className="text-emerald-100 hover:text-white transition-colors">
                    +91 960 697 4400
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail size={18} className="text-emerald-300 mt-1 flex-shrink-0" />
                  <a href="mailto:admissions@siddharthaglobal.com" className="text-emerald-100 hover:text-white transition-colors">
                    admissions@siddharthaglobal.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-emerald-300 mt-1 flex-shrink-0" />
                  <span className="text-emerald-100">
                    Siddhartha Academy Complex, Vijayawada, Andhra Pradesh, India
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mt-6 mb-4">Newsletter</h3>
              <form className="flex" onSubmit={handleSubscribe}>
                <div className="relative flex-grow">
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Your email" 
                    className="bg-emerald-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-400 border-emerald-600 flex-grow"
                    required
                  />
                </div>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500 rounded-l-none">
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </div>
          
          <hr className="border-emerald-700 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Siddhartha Global & Avalon University. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-emerald-200 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-emerald-200 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-emerald-200 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Sticky footer with CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 py-3 z-40 md:hidden">
        <div className="container-wide flex justify-between items-center">
          <div>
            <a href="tel:+919606974400" className="flex items-center text-emerald-700">
              <Phone size={18} className="mr-2" />
              <span className="font-semibold">Call Us</span>
            </a>
          </div>
          <Link to="/admissions">
            <Button 
              className="bg-emerald-700 hover:bg-emerald-800"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
