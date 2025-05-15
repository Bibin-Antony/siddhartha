
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PencilUnderline from './PencilUnderline';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "The Siddhartha Global pathway made my dream of becoming a doctor possible. The transition from India to Curaçao was smooth, and the clinical rotations in the US gave me invaluable experience.",
      name: "Dr. Priya Sharma",
      role: "Recent Graduate, Class of 2021",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "As a faculty member, I've witnessed the incredible growth of students who come through this program. The comprehensive curriculum truly prepares them for global medical practice.",
      name: "Dr. Robert Miller",
      role: "Professor of Clinical Medicine",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      quote: "The mentorship I received during my journey was exceptional. The faculty truly cares about student success, and the international exposure is unmatched by other programs.",
      name: "Dr. Ananya Patel",
      role: "Practicing Physician, New York",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
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
          <h2 className="text-emerald-700 mb-4">
            <PencilUnderline>Success Stories</PencilUnderline>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni and faculty about their experiences.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 relative border border-emerald-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-lg mx-auto">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.error("Testimonial image failed to load");
                        e.currentTarget.src = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-100 text-emerald-700 rounded-full w-10 h-10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L5 6M5 6L10 1M5 6H19C20.1046 6 21 6.89543 21 8V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 13L19 18M19 18L14 23M19 18H5C3.89543 18 3 17.1046 3 16V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
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
