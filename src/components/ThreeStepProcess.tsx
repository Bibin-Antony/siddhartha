
import React from 'react';
import { ArrowUp, ArrowRight, Book, User, Globe } from 'lucide-react';

const ThreeStepProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Start in India',
      description: 'Equip yourself with the foundational skills and knowledge needed to succeed in your MD journey.',
      icon: Book,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      id: 2,
      title: 'Fly to the Caribbean',
      description: 'Become a certified MD in the beautiful island of Curaçao at Avalon University.',
      icon: ArrowUp,
      color: 'bg-emerald-200 text-emerald-700',
    },
    {
      id: 3,
      title: 'Global Medical Career',
      description: 'Clinical rotations in the US with potential residency placements worldwide.',
      icon: Globe,
      color: 'bg-emerald-300 text-emerald-700',
    }
  ];

  return (
    <section className="section bg-emerald-50 py-16 md:py-24">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-700 mb-4">Give Wings to Your Dreams</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our three-step pathway connects Indian education to international medical practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="reveal delay-100">
              <div className="card bg-white h-full flex flex-col">
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
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <ArrowRight className="text-emerald-500" size={32} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
