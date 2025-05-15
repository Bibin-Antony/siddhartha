
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ThreeStepProcess from '@/components/ThreeStepProcess';
import About from '@/components/About';
import ProgramsSnapshot from '@/components/ProgramsSnapshot';
import StatisticsBand from '@/components/StatisticsBand';
import AdmissionsForm from '@/components/AdmissionsForm';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "Siddhartha Global & Avalon University - Empowering Future Doctors";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <ScrollReveal>
        <main>
          <Hero />
          <ThreeStepProcess />
          <About />
          <ProgramsSnapshot />
          <StatisticsBand />
          <AdmissionsForm />
          <Gallery />
          <Testimonials />
        </main>
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
