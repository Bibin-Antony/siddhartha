
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PencilUnderline from './PencilUnderline';

const AdmissionsForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const eligibilityCriteria = [
    '12th grade completion or equivalent',
    'GPA ≥ 3.0/60%',
    'Official transcripts',
    'Personal statement',
    'Letters of recommendation',
    'Video interview',
    'MCAT not required'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      setName('');
      setPhone('');
      toast({
        title: "Application initiated!",
        description: "We'll contact you shortly with next steps.",
      });
    }, 1500);
  };

  return (
    <section id="admission-form" className="section py-20 bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-emerald-700 mb-4">
              <PencilUnderline>Start Your Medical Journey</PencilUnderline> Today
            </h2>
            <p className="text-gray-600 mb-6">
              Take the first step towards your medical career by applying to our globally recognized program.
              Our admissions team will guide you through every step of the process.
            </p>
            
            <div className="bg-emerald-50 p-6 rounded-lg mb-6 border border-emerald-100">
              <h3 className="text-emerald-800 text-xl font-semibold mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3">
                {eligibilityCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="mt-1 bg-emerald-100 rounded-full p-1">
                      <Check className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-gray-700">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="/admissions-team.jpg" 
                alt="Our Admissions Team" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-emerald-100">
                <div className="text-sm font-medium text-emerald-700">24/7 Support</div>
                <div className="text-xs text-gray-500">We're here to help you</div>
              </div>
            </div>
          </div>
          
          <div className="reveal delay-200">
            <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Apply Now</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your full name" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition-all"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-700 hover:bg-emerald-800 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : (
                      <>
                        Submit Now 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                By submitting this form, you agree to our <a href="#" className="text-emerald-700 hover:underline">Privacy Policy</a> and <a href="#" className="text-emerald-700 hover:underline">Terms of Service</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsForm;
