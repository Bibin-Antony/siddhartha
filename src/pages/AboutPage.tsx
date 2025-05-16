
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Check } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Siddhartha Global & Avalon University";
  }, []);

  const features = [
    "CAAM-HP & ACCM Accredited Institution",
    "US Clinical Rotations",
    "Global Recognition",
    "Experienced Faculty",
    "Modern Facilities",
    "Supportive Learning Environment"
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About Siddhartha Global</h1>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  A 50+ year legacy of distinctive learning and innovative pathways to medical education.
                </p>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container-wide">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl mb-6">
                    <img 
                      src="/campus-building.jpg" 
                      alt="Siddhartha Academy Campus" 
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1770";
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="/campus-students.jpg" 
                      alt="Students at Siddhartha Academy" 
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770";
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-emerald-800 text-3xl font-bold mb-6">Our Legacy of Excellence</h2>
                  <p className="text-gray-700 mb-6">
                    The name Siddhartha Academy of Higher Education (sahe.in) needs no introduction, known for its distinctive learning over the last 50 years. Siddhartha Global has partnered with Avalon University School of Medicine, a distinguished Caribbean medical school, to offer a unique opportunity for aspiring doctors.
                  </p>
                  <p className="text-gray-700 mb-6">
                    It's important to note that Caribbean medical schools vary significantly in terms of accreditation, tuition, size, location, and attrition rates. This partnership ensures that students benefit from accredited programs, competitive tuition, and a supportive learning environment. Additionally, students will have the chance to complete clinical rotations in the US, with the potential for residency placements both in the US and around the world.
                  </p>
                  <p className="text-gray-700 mb-8">
                    Avalon University School of Medicine (AUSOM) stands as one of the few fully accredited Caribbean medical schools. By 2024, all Caribbean medical schools must obtain accreditation from one of three accrediting bodies: CAAM-HP, ACCM, or NVAO. Both CAAM-HP and ACCM have adopted standards equivalent to those of the LCME, the accrediting body for U.S. medical schools.
                  </p>
                  
                  <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 rounded-r-lg">
                    <p className="text-emerald-800 italic">
                      "Among the 83 Caribbean medical schools, Avalon is one of only 15 that have earned accreditation. Remarkably, it is the only medical school in the Caribbean accredited by both CAAM-HP and ACCM."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-emerald-800 text-3xl font-bold mb-8 text-center">Why Choose Siddhartha Global & Avalon?</h2>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 rounded-full p-2 mt-1">
                          <Check className="h-5 w-5 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{feature}</h3>
                          <p className="text-gray-600">
                            Our program provides students with {feature.toLowerCase()} to ensure their success in the medical field.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-emerald-800 text-3xl font-bold mb-8 text-center">Our Mission & Vision</h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-100">
                    <h3 className="text-emerald-800 text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-700 mb-4">
                      To provide accessible pathways to high-quality medical education that prepares students for global medical practice, focusing on comprehensive training, clinical excellence, and ethical patient care.
                    </p>
                    <p className="text-gray-700">
                      We are committed to nurturing a diverse generation of physicians who will serve communities worldwide with compassion, knowledge, and integrity.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-100">
                    <h3 className="text-emerald-800 text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-gray-700 mb-4">
                      To be recognized globally as a premier institution offering innovative medical education pathways that bridge geographical and cultural boundaries.
                    </p>
                    <p className="text-gray-700">
                      We aim to transform medical education access while maintaining the highest standards of academic excellence and clinical competency for a new generation of globally-oriented physicians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
