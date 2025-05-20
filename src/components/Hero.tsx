
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-emerald-700 min-h-screen  flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      {/* Hero image with multiple fallbacks for reliability */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/hero-students.jpg" 
          alt="Medical students in graduation" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // First fallback - try unsplash image
            console.log("Primary image failed, trying fallback #1");
            const target = e.currentTarget;
            target.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070";
            // Set up second fallback in case the first one fails
            target.onerror = () => {
              console.log("First fallback failed, trying fallback #2");
              // Second fallback - another unsplash image
              target.src = "https://images.unsplash.com/photo-1580281657702-257584fb0119?q=80&w=2070";
              // Third fallback in case the second one fails
              target.onerror = () => {
                console.log("Second fallback failed, using gradient fallback");
                // Final fallback - hide the image and rely on the gradient background
                target.style.display = 'none';
              };
            };
          }}
        />
        {/* Enhanced overlay with gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-700/90"></div>
      </div>
      
      {/* Hero content with improved styling and mobile responsiveness */}
      <div className="container-wide relative z-10 py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white text-center lg:text-left px-4 md:px-0 reveal">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-600/40 rounded-full border border-emerald-500/40 backdrop-blur-sm">
              <span className="text-sm font-medium text-emerald-100">"Charting a New Course to Medical Excellence" — Trust the experts.</span>
            </div>
            
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Empowering 
              <span className="relative ml-2">
                Future Doctors
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 bg-emerald-400"></span>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-emerald-50 mb-6 md:mb-10 mx-auto lg:mx-0 max-w-xl">
              Unlock your potential with an innovative pathway to an MD, tailored for driven individuals seeking a non-traditional route.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-emerald-50 transform hover:-translate-y-1 transition-all duration-300 text-base font-semibold px-6 md:px-8 h-12 md:h-14 rounded-md shadow-lg"
                >
                  About Siddhartha Global
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white bg-transparent hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 text-base font-semibold px-6 md:px-8 h-12 md:h-14 rounded-md"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            
            {/* Highlight stats with refined styling and improved mobile layout */}
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mx-auto lg:mx-0 max-w-lg">
              <div className="bg-emerald-600/40 p-4 rounded-lg border border-emerald-500/40 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="font-bold text-2xl text-white">50+</div>
                <div className="text-emerald-100 text-sm">Years of Experience</div>
              </div>
              
              <div className="bg-emerald-600/40 p-4 rounded-lg border border-emerald-500/40 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="font-bold text-2xl text-white">100%</div>
                <div className="text-emerald-100 text-sm">Global Recognition</div>
              </div>
              
              <div className="bg-emerald-600/40 p-4 rounded-lg border border-emerald-500/40 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="font-bold text-2xl text-white">5000+</div>
                <div className="text-emerald-100 text-sm">Successful Alumni</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block reveal delay-200">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-8 border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-500/30">
                <img 
                  src="/lovable-uploads/5485d921-b94f-4703-bea6-6eee1b523a8f.png" 
                  alt="Medical Students" 
                  className="w-full h-auto"
                  onError={(e) => {
                    // Higher quality medical students fallback image
                    console.log("Secondary image failed, trying fallback");
                    const target = e.currentTarget;
                    target.src = "https://images.unsplash.com/photo-1580281657702-257584fb0119?q=80&w=2070";
                  }}
                />
                {/* Feature badge with enhanced styling */}
                <div className="absolute top-6 right-6 bg-white py-2 px-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="text-sm font-semibold text-emerald-700">CAAM-HP Accredited</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-64 h-64 bg-emerald-300 rounded-full filter blur-3xl opacity-30 animate-float delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Visible image for mobile devices */}
        <div className="block lg:hidden my-8 reveal">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="/lovable-uploads/48df9a07-fe31-48ac-b8da-2818b5c9f54a.png" 
                alt="Medical Students" 
                className="w-full h-auto"
                onError={(e) => {
                  console.log("Mobile image failed, trying fallback");
                  const target = e.currentTarget;
                  target.src = "https://images.unsplash.com/photo-1580281657702-257584fb0119?q=80&w=2070";
                }}
              />
              {/* Feature badge with enhanced styling */}
              <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="text-xs font-semibold text-emerald-700">CAAM-HP Accredited</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-emerald-300 rounded-full filter blur-3xl opacity-30 animate-float delay-1000"></div>
          </div>
        </div>
        
        {/* Refined scroll indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-pulse-gentle">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/70"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
