
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import NotificationBanner from '@/components/NotificationBanner';
import { CheckCircle, Globe, Award, Star, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UsefulInfoPage = () => {
  // Update page title
  useEffect(() => {
    document.title = "Useful Information - Siddhartha Global & Avalon University";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NotificationBanner />
      <Navbar />
      
      <ScrollReveal>
        <main className="flex-grow pt-32 pb-20">
          {/* Page Header */}
          <section className="bg-emerald-700 py-16 relative">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="container-wide relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Useful Information</h1>
              <p className="text-xl text-emerald-50 max-w-2xl">
                Key achievements, rankings, and opportunities for our graduates
              </p>
            </div>
          </section>
          
          {/* Achievements Section */}
          <section className="py-16 bg-white">
            <div className="container-wide">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
                  Achievements
                </h2>
                
                <div className="grid gap-8 md:grid-cols-2">
                  {/* 50 Matches */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full mr-4">
                        <Award className="h-8 w-8 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-semibold text-emerald-800">50 MATCHES</h3>
                    </div>
                    <p className="text-gray-700">
                      Avalon had the highest number of residency matches this year 2024 with more than 50 matches in the USA so far.
                    </p>
                  </div>
                  
                  {/* 100% */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full mr-4">
                        <CheckCircle className="h-8 w-8 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-semibold text-emerald-800">100%</h3>
                    </div>
                    <p className="text-gray-700">
                      Avalon achieved 100% USMLE Step 2 pass percentage in the 1st quarter 2024.
                    </p>
                  </div>
                  
                  {/* Accredited */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full mr-4">
                        <Star className="h-8 w-8 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-semibold text-emerald-800">ACCREDITED</h3>
                    </div>
                    <p className="text-gray-700">
                      Avalon is one in only 7 fully accredited medical schools in 80+ Caribbean offshore med schools.
                    </p>
                  </div>
                  
                  {/* Top 5 */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-full mr-4">
                        <GraduationCap className="h-8 w-8 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-semibold text-emerald-800">TOP 5</h3>
                    </div>
                    <p className="text-gray-700">
                      Constantly ranked as top 5 offshore med school destinations to start medical career in North America.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Global Impact Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-wide">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                  Medical Education With a Global Impact
                </h2>
                
                <div className="mt-8 p-8 bg-white rounded-xl shadow-lg border border-emerald-100">
                  <div className="flex items-center justify-center mb-6">
                    <Globe className="h-12 w-12 text-emerald-700" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                    After graduating with MD from Siddhartha Global Avalon collaborative program
                  </h3>
                  
                  <p className="text-xl font-medium text-gray-700 mb-8">
                    Eligible to Practice or do Post Graduation around the World
                  </p>
                  
                  <div className="flex justify-center">
                    <Link to="/contact">
                      <Button 
                        size="lg" 
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8"
                      >
                        Contact Us for Details
                      </Button>
                    </Link>
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

export default UsefulInfoPage;
