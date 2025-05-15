
import React from 'react';
import { Button } from '@/components/ui/button';

const ProgramsSnapshot = () => {
  const programs = [
    {
      title: 'Integrated BS/MD Program',
      description: 'Alternative path to pursue your dream of becoming a doctor.',
      icon: '/icon-program.svg',
      link: '#',
    },
    {
      title: 'The Process',
      description: 'Admission open only for the Fall semester in this joint venture.',
      icon: '/icon-process.svg',
      link: '#',
    },
    {
      title: 'Key Benefits',
      description: 'USMLE preparation, qualified faculty, and modern facilities.',
      icon: '/icon-benefits.svg',
      link: '#',
    },
    {
      title: 'FAQ',
      description: 'Find answers to frequently asked questions about our programs.',
      icon: '/icon-faq.svg',
      link: '#',
    }
  ];

  return (
    <section id="programs" className="section bg-gradient-to-b from-white to-emerald-50 py-20">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-700 mb-4">Programs Snapshot</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive medical education pathways designed for student success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="card reveal bg-white border border-gray-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-emerald-50 p-4 rounded-full">
                  <img src={program.icon} alt={program.title} className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{program.title}</h3>
              <p className="text-gray-600 text-center mb-4">{program.description}</p>
              <div className="mt-auto text-center">
                <Button variant="link" className="text-emerald-700 hover:text-emerald-800">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSnapshot;
