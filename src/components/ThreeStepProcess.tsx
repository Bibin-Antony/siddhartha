
import React from 'react';
import { Book, Landmark, Globe } from 'lucide-react';
import PencilUnderline from './PencilUnderline';

const ThreeStepProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Start in India',
      description: 'Equip yourself with the foundational skills and knowledge needed to succeed in your MD journey.',
      icon: Book,
      color: 'bg-emerald-100 text-emerald-700',
      image: '/india-education.jpg'
    },
    {
      id: 2,
      title: 'Fly to the Caribbean',
      description: 'Become a certified MD in the beautiful island of Curaçao at Avalon University.',
      icon: Landmark,
      color: 'bg-emerald-200 text-emerald-700',
      image: '/curacao-campus.jpg'
    },
    {
      id: 3,
      title: 'Global Medical Career',
      description: 'Clinical rotations in the US with potential residency placements worldwide.',
      icon: Globe,
      color: 'bg-emerald-300 text-emerald-700',
      image: '/medical-career.jpg'
    }
  ];

  return (
    <section className="section bg-emerald-50 py-16 md:py-24">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-700 mb-4">
            <PencilUnderline>Give Wings to Your Dreams</PencilUnderline>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our three-step pathway connects Indian education to international medical practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="reveal" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="card bg-white h-full flex flex-col overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <step.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="mr-2 bg-emerald-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {step.id}
                    </span>
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                </div>
                
                <div className={`h-1 ${index === 0 ? 'bg-emerald-300' : index === 1 ? 'bg-emerald-500' : 'bg-emerald-700'}`}></div>
              </div>
            </div>
          ))}

          {/* Connection lines between cards (visible on desktop only) */}
          <div className="absolute top-1/2 left-1/4 right-3/4 h-0.5 bg-emerald-300 hidden md:block transform translate-y-24"></div>
          <div className="absolute top-1/2 left-2/4 right-1/4 h-0.5 bg-emerald-300 hidden md:block transform translate-y-24"></div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
