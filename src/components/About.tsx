
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070";
                  e.currentTarget.onerror = null;
                }}
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
            <p className="text-gray-700 mb-6 text-lg">
              Collaborative effort to establish a distinctive pathway to the Pre-MD program in the USA
            </p>
            <p className="text-gray-700 mb-6">
              The name Siddhartha Academy of Higher Education (sahe.in) needs no introduction, known for its distinctive learning over the last 50 years. Siddhartha Global has partnered with Avalon University School of Medicine, a distinguished Caribbean medical school, to offer a unique opportunity for aspiring doctors.
            </p>
            <p className="text-gray-700 mb-8">
              Avalon University School of Medicine (AUSOM) stands as one of the few fully accredited Caribbean medical schools. By 2024, all Caribbean medical schools must obtain accreditation from one of three accrediting bodies: CAAM-HP, ACCM, or NVAO.
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
            
            <Link to="/about">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
