
import React from 'react';
import { Book, GraduationCap, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ThreeStepProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Start in India',
      description: 'Equip yourself with the foundational skills and knowledge needed to succeed in your MD journey.',
      icon: Book,
      color: 'bg-emerald-600 text-white',
      image: '/india-education.jpg'
    },
    {
      id: 2,
      title: 'Fly to the Caribbean',
      description: 'Become a certified MD in the beautiful island of Curaçao at Avalon University.',
      icon: GraduationCap,
      color: 'bg-emerald-600 text-white',
      image: '/curacao-campus.jpg'
    },
    {
      id: 3,
      title: 'Global Medical Career',
      description: 'Clinical rotations in the US with potential residency placements worldwide.',
      icon: Globe,
      color: 'bg-emerald-600 text-white',
      image: '/medical-career.jpg'
    }
  ];

  return (
    <section className="section bg-emerald-50 py-24 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-800 text-4xl md:text-5xl font-bold mb-6">
            Give Wings to Your Dreams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our three-step pathway connects Indian education to international medical practice.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-emerald-300 hidden lg:block transform translate-y-12 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="reveal" style={{animationDelay: `${index * 0.2}s`}}>
                <Card className="bg-white overflow-hidden shadow-xl h-full transition-all duration-300 hover:-translate-y-2 border-none">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
                    <div className="absolute top-4 right-4 bg-white text-emerald-700 font-bold h-12 w-12 rounded-full flex items-center justify-center shadow-lg">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md`}>
                      <step.icon size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-emerald-800">{step.title}</h3>
                    <p className="text-gray-600 flex-grow">{step.description}</p>
                  </div>
                  
                  <div className={`h-3 ${
                    index === 0 ? 'bg-emerald-400' 
                    : index === 1 ? 'bg-emerald-500' 
                    : 'bg-emerald-700'
                  }`}></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
