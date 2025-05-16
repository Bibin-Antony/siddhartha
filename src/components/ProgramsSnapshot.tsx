
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Check, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProgramsSnapshot = () => {
  const programs = [
    {
      title: 'Integrated BS/MD Program',
      description: 'Find out all you need to know about becoming a doctor.',
      icon: BookOpen,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Medical students in a lab'
    },
    {
      title: 'The Process',
      description: 'Admission is only for the Fall semester in this joint venture.',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Group of medical students collaborating'
    },
    {
      title: 'Key Benefits',
      description: 'We provide you with your choice of learning option.',
      icon: Check,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1560582861-45078880e48e?q=80&w=2074&auto=format&fit=crop',
      imageAlt: 'Medical benefits visualization'
    },
    {
      title: 'FAQ',
      description: 'Questions about becoming a doctor.',
      icon: HelpCircle,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Students consulting with academic advisor'
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container-wide">
        <div className="mb-10 reveal">
          <h2 className="text-emerald-800 text-3xl font-bold mb-4">
            Our Global Program
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="reveal border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Image failed to load: ${program.image}`);
                    e.currentTarget.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop";
                  }}
                />
              </div>
              <CardContent className="p-5">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 px-0 justify-start mt-auto group"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSnapshot;
