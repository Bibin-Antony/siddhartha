
import React from 'react';
import { Book, GraduationCap, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ThreeStepProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Give wings to your dreams',
      description: 'An Exclusive partnership for aspiring doctors who have the skill and determination.',
      icon: Book,
      color: 'bg-orange-500 text-white',
      image: '/lovable-uploads/63b21c7c-360b-4a54-91a0-bd51e7ad03d1.png',
      bgColor: 'bg-orange-500'
    },
    {
      id: 2,
      title: 'Start in India',
      description: 'Your journey will be transformed with a structured pre-medical science curriculum in India.',
      icon: GraduationCap,
      color: 'bg-orange-500 text-white',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
      bgColor: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'Fly to the Caribbean',
      description: 'Become a certified MD in the beautiful island of Curaçao at Avalon University.',
      icon: Globe,
      color: 'bg-emerald-600 text-white',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop',
      bgColor: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div key={step.id} className="reveal" style={{animationDelay: `${index * 0.2}s`}}>
              <Card className={`overflow-hidden shadow-xl h-full transition-all duration-300 hover:-translate-y-2 border-none ${step.bgColor}`}>
                <div className="p-6 text-white">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/90">{step.description}</p>
                    
                    <div className="mt-4">
                      <step.icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
