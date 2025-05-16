
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { BookOpen, Users, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProgramsPage = () => {
  useEffect(() => {
    document.title = "Programs | Siddhartha Global & Avalon University";
  }, []);

  const programs = [
    {
      id: 'bs-md',
      title: 'Integrated BS/MD Program',
      description: 'An alternative path to pursue your dream of becoming a doctor through our unique integrated program.',
      icon: BookOpen,
      color: 'bg-emerald-100 text-emerald-700',
      features: [
        'Complete your pre-med studies in India',
        'Transfer smoothly to Avalon University',
        'Earn your MD degree in Curaçao',
        'Complete clinical rotations in the US',
        'Prepare for USMLE examinations',
        'Opportunity for global residency placements'
      ],
      image: '/bs-md-program.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1770'
    },
    {
      id: 'process',
      title: 'The Process',
      description: 'A straightforward admission process designed for committed students seeking an alternative path to medical education.',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-700',
      features: [
        'Admission only for Fall semester',
        'Minimum +12 qualification required',
        'Preferred GPA of 3.0 (60%) or higher',
        'Transcripts from recognized institutions',
        'Statement of Purpose',
        'Letter of Recommendation',
        'Video interview (MCAT not required)'
      ],
      image: '/admission-process.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1674'
    },
    {
      id: 'benefits',
      title: 'Key Benefits',
      description: 'Our program offers numerous advantages for students pursuing their medical education through our pathway.',
      icon: Check,
      color: 'bg-emerald-100 text-emerald-700',
      features: [
        'CAAM-HP & ACCM accredited program',
        'World-class faculty and mentors',
        'Modern facilities and infrastructure',
        'US clinical rotations',
        'USMLE preparation and support',
        'Competitive tuition fees',
        'Global recognition of qualifications'
      ],
      image: '/program-benefits.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1770'
    },
    {
      id: 'faq',
      title: 'FAQ',
      description: 'Find answers to frequently asked questions about our programs, admission process, and career opportunities.',
      icon: HelpCircle,
      color: 'bg-emerald-100 text-emerald-700',
      features: [
        'Is the program recognized worldwide?',
        'What are the career prospects?',
        'Can I practice in the United States?',
        'How do I apply for the program?',
        'What is the tuition structure?',
        'Are scholarships available?',
        'What support services are provided?'
      ],
      image: '/program-faq.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&w=1770'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <ScrollReveal>
        <main>
          {/* Page Header */}
          <section className="bg-gradient-to-r from-emerald-800 to-emerald-700 py-20 md:py-28">
            <div className="container-wide">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  Discover our comprehensive pathways designed to help you achieve your dream of becoming a physician.
                </p>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container-wide">
              {programs.map((program, index) => (
                <div 
                  id={program.id}
                  key={program.id} 
                  className={`mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} reveal`}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = program.fallbackImage;
                          e.currentTarget.onerror = null;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className={`${program.color} p-3 rounded-full inline-flex items-center justify-center mb-4`}>
                          <program.icon size={24} />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-emerald-800 mb-4">{program.title}</h2>
                      <p className="text-gray-700 text-lg mb-6">{program.description}</p>
                      
                      <h3 className="text-xl font-semibold text-emerald-700 mb-4">Key Features</h3>
                      <ul className="space-y-3 mb-8">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mt-1 bg-emerald-100 rounded-full p-1">
                              <Check className="h-4 w-4 text-emerald-700" />
                            </div>
                            <span className="ml-3 text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to={`/programs/${program.id}`}>
                        <Button className="bg-emerald-700 hover:bg-emerald-800 group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default ProgramsPage;
