
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Check, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BSMDProgram = () => {
  useEffect(() => {
    document.title = "BS/MD Program | Siddhartha Global & Avalon University";
  }, []);

  const programBenefits = [
    'Seamless transition from pre-medical to medical studies',
    'Study first phase in India, reducing initial costs',
    'Guaranteed pathway to MD degree upon meeting requirements',
    'World-class faculty and modern facilities',
    'Clinical rotations in the US',
    'USMLE preparation and support',
    'Global recognition of qualifications'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <ScrollReveal>
        <main>
          {/* Page Header */}
          <section className="bg-gradient-to-r from-emerald-800 to-emerald-700 py-20 md:py-28">
            <div className="container-wide">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrated BS/MD Program</h1>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  An alternative path to pursue your dream of becoming a doctor through our unique integrated program.
                </p>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container-wide">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-emerald-800 text-3xl font-bold mb-6">Program Overview</h2>
                  <p className="text-gray-700 mb-4">
                    Our Integrated BS/MD Program offers a unique pathway for aspiring physicians. This program is specifically designed for students who are committed to pursuing a career in medicine but seek an alternative route to traditional medical education.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Through our partnership between Siddhartha Global and Avalon University School of Medicine, students can begin their journey in India before continuing their medical education in Curaçao, ultimately leading to clinical rotations in the United States.
                  </p>
                  <p className="text-gray-700 mb-6">
                    This comprehensive program provides a seamless transition from pre-medical studies to the full MD curriculum, ensuring students receive continuous support throughout their educational journey.
                  </p>
                  
                  <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 rounded-r-lg mb-6">
                    <p className="text-emerald-800 italic">
                      "Our integrated program creates a clear pathway to success, combining the rigors of medical education with a supportive environment designed to help you thrive."
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/bs-md-program.jpg" 
                      alt="BS/MD Program Students" 
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1770";
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-emerald-800 text-3xl font-bold mb-8 text-center">Program Structure</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-lg border border-emerald-100 overflow-hidden">
                    <div className="h-2 bg-emerald-400"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-emerald-800">Phase 1: Pre-Medical Studies</h3>
                      <p className="text-gray-700 mb-4">Begin your journey in India with foundational pre-medical courses.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">2-3 year duration</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">Focus on basic sciences</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">Expert guidance from faculty</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg border border-emerald-100 overflow-hidden">
                    <div className="h-2 bg-emerald-500"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-emerald-800">Phase 2: MD Program</h3>
                      <p className="text-gray-700 mb-4">Continue your studies at Avalon University in Curaçao.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">Advanced medical curriculum</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">State-of-the-art facilities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">USMLE preparation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg border border-emerald-100 overflow-hidden">
                    <div className="h-2 bg-emerald-700"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-emerald-800">Phase 3: Clinical Rotations</h3>
                      <p className="text-gray-700 mb-4">Complete your training with clinical rotations in the US.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">US hospital experience</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">Hands-on patient care</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-1 bg-emerald-100 rounded-full p-1 mr-2">
                            <Check className="h-3 w-3 text-emerald-700" />
                          </div>
                          <span className="text-gray-700">Residency preparation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-16 grid md:grid-cols-2 gap-12">
                <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-100">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-800">Program Benefits</h3>
                  <ul className="space-y-4">
                    {programBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 bg-emerald-100 rounded-full p-1.5">
                          <Check className="h-4 w-4 text-emerald-700" />
                        </div>
                        <span className="ml-3 text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-emerald-800">Admission Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    To be eligible for our BS/MD program, you should meet the following criteria:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mt-1 bg-emerald-100 rounded-full p-1.5">
                        <Check className="h-4 w-4 text-emerald-700" />
                      </div>
                      <span className="ml-3 text-gray-700">Minimum +12 qualification with preferred GPA of 3.0 (60%) or higher</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-emerald-100 rounded-full p-1.5">
                        <Check className="h-4 w-4 text-emerald-700" />
                      </div>
                      <span className="ml-3 text-gray-700">Transcripts from recognized institutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-emerald-100 rounded-full p-1.5">
                        <Check className="h-4 w-4 text-emerald-700" />
                      </div>
                      <span className="ml-3 text-gray-700">Statement of Purpose</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-emerald-100 rounded-full p-1.5">
                        <Check className="h-4 w-4 text-emerald-700" />
                      </div>
                      <span className="ml-3 text-gray-700">Letter of Recommendation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-emerald-100 rounded-full p-1.5">
                        <Check className="h-4 w-4 text-emerald-700" />
                      </div>
                      <span className="ml-3 text-gray-700">Successful completion of video interview</span>
                    </li>
                  </ul>
                  
                  <p className="text-gray-700 mt-4">
                    <span className="font-semibold">Note:</span> MCAT is not required for admission to our program.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-emerald-800 text-2xl font-bold mb-6">Ready to Begin Your Medical Journey?</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                  Take the first step toward your dream of becoming a doctor. Apply now to our BS/MD program and begin your journey to a fulfilling medical career.
                </p>
                <Link to="/admissions">
                  <Button className="bg-emerald-700 hover:bg-emerald-800 group text-lg py-6 px-10">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default BSMDProgram;
