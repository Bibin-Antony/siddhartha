
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Check, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProgramsSnapshot = () => {
  const programs = [
    {
      title: 'Integrated BS/MD Program',
      description: 'Alternative path to pursue your dream of becoming a doctor.',
      icon: BookOpen,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Medical student learning at desk with stethoscope and medical books'
    },
    {
      title: 'The Process',
      description: 'Admission open only for the Fall semester in this joint venture.',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Group of medical students collaborating on research project'
    },
    {
      title: 'Key Benefits',
      description: 'USMLE preparation, qualified faculty, and modern facilities.',
      icon: Check,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1643202494693-c77f5cec8b8d?q=80&w=2080&auto=format&fit=crop',
      imageAlt: 'Medical student benefiting from advanced medical technology'
    },
    {
      title: 'FAQ',
      description: 'Find answers to frequently asked questions about our programs.',
      icon: HelpCircle,
      color: 'bg-emerald-100 text-emerald-700',
      link: '#',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2080&auto=format&fit=crop',
      imageAlt: 'Student consulting with academic advisor about medical program'
    }
  ];

  return (
    <section id="programs" className="section bg-gradient-to-b from-white to-emerald-50 py-24">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-800 text-4xl md:text-5xl font-bold mb-6">
            Programs Snapshot
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive medical education pathways designed for student success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="reveal border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden transform hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-40 relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Image failed to load: ${program.image}`);
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.classList.add("bg-emerald-100");
                    e.currentTarget.parentElement!.classList.add("flex");
                    e.currentTarget.parentElement!.classList.add("items-center");
                    e.currentTarget.parentElement!.classList.add("justify-center");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`${program.color} p-3 rounded-full mb-4 mt-2`}>
                    <program.icon size={24} />
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 mt-auto group"
                  >
                    <a href={program.link} className="flex items-center">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
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
