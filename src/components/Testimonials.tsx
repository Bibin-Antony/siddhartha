
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "The Siddhartha Global pathway made my dream of becoming a doctor possible. The transition from India to Curaçao was smooth, and the clinical rotations in the US gave me invaluable experience.",
      name: "Dr. Priya Sharma",
      role: "Recent Graduate, Class of 2021",
      image: "/testimonials/person-1.jpg"
    },
    {
      quote: "As a faculty member, I've witnessed the incredible growth of students who come through this program. The comprehensive curriculum truly prepares them for global medical practice.",
      name: "Dr. Robert Miller",
      role: "Professor of Clinical Medicine",
      image: "/testimonials/person-2.jpg"
    },
    {
      quote: "The mentorship I received during my journey was exceptional. The faculty truly cares about student success, and the international exposure is unmatched by other programs.",
      name: "Dr. Ananya Patel",
      role: "Practicing Physician, New York",
      image: "/testimonials/person-3.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-white py-20">
      <div className="container-wide">
        <div className="text-center mb-12 reveal">
          <h2 className="text-emerald-700 mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni and faculty about their experiences.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-lg mx-auto">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="text-emerald-700 text-4xl font-serif mb-4">"</div>
                <p className="text-gray-700 italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="text-emerald-800 font-bold">{testimonials[activeIndex].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[activeIndex].role}</div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-emerald-200 hover:bg-emerald-100"
                onClick={prevTestimonial}
              >
                <ArrowLeft className="h-4 w-4 text-emerald-700" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-emerald-200 hover:bg-emerald-100"
                onClick={nextTestimonial}
              >
                <ArrowRight className="h-4 w-4 text-emerald-700" />
              </Button>
            </div>
            
            <div className="absolute top-4 left-0 w-full flex justify-center">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex ? 'bg-emerald-700' : 'bg-emerald-200'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
