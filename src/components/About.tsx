
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const highlights = [
    'Accredited by CAAM-HP & ACCM',
    'US clinical rotations',
    'Competitive tuition',
    'Supportive learning environment',
    'Global recognition',
    'Expert faculty mentors'
  ];

  return (
    <section id="about" className="section py-24 bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative rounded-xl shadow-2xl overflow-hidden">
              <img 
                src="/campus-building.jpg" 
                alt="Siddhartha Global Campus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-700/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="reveal delay-200">
            <h2 className="text-emerald-800 mb-4 text-4xl font-bold">
              <span className="relative">
                50+ Years
                <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400"></span>
              </span>
              {" "}of Distinctive Learning
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Siddhartha Academy of Higher Education has delivered distinctive learning for 
              over five decades. Through a unique partnership with fully-accredited Avalon 
              University School of Medicine, we offer an alternative, globally recognised 
              pathway to an MD.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 bg-emerald-100 rounded-full p-1.5">
                    <Check className="h-4 w-4 text-emerald-700" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 rounded-r-lg">
              <p className="text-emerald-800 italic">
                "Our mission is to provide an accessible pathway to medical education without compromising on quality or recognition."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
