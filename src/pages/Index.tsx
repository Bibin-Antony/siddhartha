
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ThreeStepProcess from '@/components/ThreeStepProcess';
import About from '@/components/About';
import ProgramsSnapshot from '@/components/ProgramsSnapshot';
import StatsBand from '@/components/StatsBand';
import AdmissionsForm from '@/components/AdmissionsForm';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import NotificationBanner from '@/components/NotificationBanner';

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "Siddhartha Global & Avalon University - Medical Education Pathway";
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

  // Fix for scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
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
          <StatsBand />
          <AdmissionsForm />
        </main>
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
