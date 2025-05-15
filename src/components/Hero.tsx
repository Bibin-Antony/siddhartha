
import React from 'react';
import { Button } from '@/components/ui/button';
import PencilUnderline from './PencilUnderline';

const Hero = () => {
  return (
    <div className="relative bg-emerald-700 min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      {/* Hero content */}
      <div className="container-wide relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white reveal">
            <div className="text-sm font-medium mb-4 text-emerald-100">Charting a New Course to Medical Excellence — Trust the experts.</div>
            <h1 className="text-white mb-6">
              Empowering <PencilUnderline>Future Doctors</PencilUnderline>
            </h1>
            <p className="text-xl md:text-2xl font-light text-emerald-50 mb-8">
              Pathway to Global Pre-Med → MD Program in USA
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-700 hover:bg-emerald-50 transform hover:-translate-y-1 transition-all"
                onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/20 transform hover:-translate-y-1 transition-all"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Siddhartha Global
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end reveal delay-200">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
              <img 
                src="/medical-students.jpg" 
                alt="Medical Students" 
                className="relative z-10 rounded-lg shadow-2xl max-w-md"
              />
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
