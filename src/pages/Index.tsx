
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
import NotificationBanner from '@/components/NotificationBanner';

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "Siddhartha Global & Avalon University - Empowering Future Doctors";
  }, []);

  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NotificationBanner />
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
