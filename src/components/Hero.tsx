
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-emerald-700 min-h-screen flex items-center">
      {/* Background image with reduced overlay for better visibility */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
          alt="Medical Students" 
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/50 to-emerald-700/40"></div>
      </div>
      
      {/* Hero content */}
      <div className="container-wide relative z-10 pt-24">
        <div className="grid lg:grid-cols-1 gap-8 items-center">
          <div className="text-white reveal">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-600/40 rounded-full border border-emerald-500/30 backdrop-blur-sm">
              <span className="text-sm font-medium text-emerald-100">Charting a New Course to Medical Excellence — Trust the experts.</span>
            </div>
            
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering 
              <span className="relative ml-2">
                Future Doctors
                <span className="absolute bottom-2 left-0 w-full h-1 bg-emerald-400"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-emerald-50 mb-10 max-w-xl">
              Pathway to Global Pre-Med → MD Program in USA
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-700 hover:bg-emerald-50 transform hover:-translate-y-1 transition-all text-base font-semibold px-8 h-14 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/20 transform hover:-translate-y-1 transition-all text-base font-semibold px-8 h-14 focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-emerald-700"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Siddhartha Global
              </Button>
            </div>
            
            {/* Highlight stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
              <div className="bg-emerald-600/40 p-4 rounded-lg border border-emerald-500/30 backdrop-blur-sm">
                <div className="font-bold text-2xl text-white">50+</div>
                <div className="text-emerald-100 text-sm">Years of Experience</div>
              </div>
              
              <div className="bg-emerald-600/40 p-4 rounded-lg border border-emerald-500/30 backdrop-blur-sm">
                <div className="font-bold text-2xl text-white">100%</div>
                <div className="text-emerald-100 text-sm">Global Recognition</div>
              </div>
              
              <div className="bg-emerald-600/40 p-4 rounded-lg border border-emerald-500/30 backdrop-blur-sm">
                <div className="font-bold text-2xl text-white">5000+</div>
                <div className="text-emerald-100 text-sm">Successful Alumni</div>
              </div>
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
