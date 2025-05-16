
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-emerald-700 min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      {/* Hero image with fallback */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-students.jpg" 
          alt="Medical students in graduation" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070";
            e.currentTarget.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 to-emerald-700/80"></div>
      </div>
      
      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-700 opacity-90"></div>
      
      {/* Hero content */}
      <div className="container-wide relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white reveal">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-600/30 rounded-full border border-emerald-500/30">
              <span className="text-sm font-medium text-emerald-100">"Charting a New Course to Medical Excellence" — Trust the experts.</span>
            </div>
            
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering 
              <span className="relative ml-2">
                Future Doctors
                <span className="absolute bottom-2 left-0 w-full h-1 bg-emerald-400"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-emerald-50 mb-10 max-w-xl">
              Unlock your potential with an innovative pathway to an MD, tailored for driven individuals seeking a non-traditional route.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-700 hover:bg-emerald-50 transform hover:-translate-y-1 transition-all text-base font-semibold px-8 h-14"
                >
                  About Siddhartha Global
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white/20 transform hover:-translate-y-1 transition-all text-base font-semibold px-8 h-14"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            
            {/* Highlight stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
              <div className="bg-emerald-600/30 p-4 rounded-lg border border-emerald-500/30 backdrop-blur-sm">
                <div className="font-bold text-2xl text-white">50+</div>
                <div className="text-emerald-100 text-sm">Years of Experience</div>
              </div>
              
              <div className="bg-emerald-600/30 p-4 rounded-lg border border-emerald-500/30 backdrop-blur-sm">
                <div className="font-bold text-2xl text-white">100%</div>
                <div className="text-emerald-100 text-sm">Global Recognition</div>
              </div>
              
              <div className="bg-emerald-600/30 p-4 rounded-lg border border-emerald-500/30 backdrop-blur-sm">
                <div className="font-bold text-2xl text-white">5000+</div>
                <div className="text-emerald-100 text-sm">Successful Alumni</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block reveal delay-200">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-8 border-white/10">
                <img 
                  src="/medical-students.jpg" 
                  alt="Medical Students" 
                  className="w-full h-auto"
                  onError={(e) => {
                    // Higher quality medical students fallback image
                    e.currentTarget.src = "https://images.unsplash.com/photo-1580281657702-257584fb0119?q=80&w=2070";
                    e.currentTarget.onerror = null;
                  }}
                />
                {/* Feature badge */}
                <div className="absolute top-6 right-6 bg-white py-2 px-4 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-emerald-700">CAAM-HP Accredited</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-64 h-64 bg-emerald-300 rounded-full filter blur-3xl opacity-30 animate-float delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/70"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
