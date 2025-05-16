
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-neutral-900 min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/63b21c7c-360b-4a54-91a0-bd51e7ad03d1.png" 
          alt="Medical Students Celebrating" 
          className="h-full w-full object-cover"
          loading="eager"
          onError={(e) => {
            console.error("Hero image failed to load");
            e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Hero content */}
      <div className="container-wide relative z-10 py-16">
        <div className="max-w-3xl">
          <div className="text-white reveal">
            <span className="uppercase text-sm font-medium tracking-wider text-orange-400 mb-3 block">
              Welcome to Siddhartha Global
            </span>
            
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              "Charting a New Course to Medical Excellence" Trust the experts
            </h1>
            
            <p className="text-lg md:text-xl font-light text-white/90 mb-8 max-w-2xl">
              Unlock your potential with an innovative pathway to an MD, crafted for driven individuals seeking a professional purpose. With guidance from expert mentors with academic experience, paving your journey towards a fulfilling medical career.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white transform hover:-translate-y-1 transition-all text-base font-semibold px-8 h-12"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/10 transform hover:-translate-y-1 transition-all text-base font-semibold px-8 h-12"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
