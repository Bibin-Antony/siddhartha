
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Check, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProgramsSnapshot = () => {
  const programs = [
    {
      title: 'Integrated BS/MD Program',
      description: 'Alternative path to pursue your dream of becoming a doctor.',
      icon: BookOpen,
      color: 'bg-emerald-100 text-emerald-700',
      link: '/programs/bs-md',
    },
    {
      title: 'The Process',
      description: 'Admission open only for the Fall semester in this joint venture.',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-700',
      link: '/programs/process',
    },
    {
      title: 'Key Benefits',
      description: 'USMLE preparation, qualified faculty, and modern facilities.',
      icon: Check,
      color: 'bg-emerald-100 text-emerald-700',
      link: '/programs/benefits',
    },
    {
      title: 'FAQ',
      description: 'Find answers to frequently asked questions about our programs.',
      icon: HelpCircle,
      color: 'bg-emerald-100 text-emerald-700',
      link: '/programs/faq',
    }
  ];

  return (
    <section id="programs" className="section bg-gradient-to-b from-white to-emerald-50 py-24">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-emerald-800 text-4xl md:text-5xl font-bold mb-6">
            Our Global Program
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
              <div className="h-2 bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className={`${program.color} p-4 rounded-full mb-6`}>
                    <program.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-emerald-800">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <Link to={program.link}>
                    <Button 
                      variant="ghost" 
                      className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 mt-auto group"
                    >
                      Read More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
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
