
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-teal-900 text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Mission & Vision</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">International Admissions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Student Life in Curaçao</a>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">MD Program</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Pre-Medical Program</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Clinical Rotations</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Residency Placements</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Admissions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>+91 9606974400</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>admissions@siddharthaglobal.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>Siddhartha Academy Complex, Vijayawada, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-teal-800 mb-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Siddhartha Global & Avalon University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
