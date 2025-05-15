
import React from 'react';
import { Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
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
                />
                <span className="text-lg font-semibold text-white">Siddhartha Global</span>
              </div>
              <p className="text-emerald-100 mb-4">
                Providing accessible pathways to medical education without compromising on quality or recognition.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-emerald-100 hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#programs" className="text-emerald-100 hover:text-white transition-colors">Programs</a>
                </li>
                <li>
                  <a href="#admission-form" className="text-emerald-100 hover:text-white transition-colors">Admissions</a>
                </li>
                <li>
                  <a href="#contact" className="text-emerald-100 hover:text-white transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-emerald-300" />
                  <span className="text-emerald-100">+91 960 697 4400</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-emerald-300" />
                  <a href="mailto:admissions@siddharthaglobal.com" className="text-emerald-100 hover:text-white transition-colors">
                    admissions@siddharthaglobal.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-emerald-100 mb-3">
                Subscribe to our newsletter for updates on admissions and programs.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-emerald-700 text-white rounded-l-md px-4 py-2 focus:outline-none flex-grow"
                />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500 rounded-l-none">
                  Subscribe
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
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">Sitemap</a>
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
          <Button 
            className="bg-emerald-700 hover:bg-emerald-800"
            onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Footer;
