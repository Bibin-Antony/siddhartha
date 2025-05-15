
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PencilUnderline from './PencilUnderline';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="admission-form" className="section py-24 bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              <PencilUnderline>Start Your Medical Journey</PencilUnderline> Today
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Take the first step towards your medical career by applying to our globally recognized program.
              Our admissions team will guide you through every step of the process.
            </p>
            
            <Card className="bg-emerald-50 border-none shadow-md mb-8">
              <CardContent className="p-8">
                <h3 className="text-emerald-800 text-2xl font-bold mb-6">Eligibility Criteria</h3>
                <ul className="space-y-4">
                  {eligibilityCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="bg-emerald-100 rounded-full p-1 text-emerald-700">
                        <Check className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="relative">
              <img 
                src="/admissions-team.jpg" 
                alt="Our Admissions Team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-emerald-500">
                <div className="text-base font-bold text-emerald-700">24/7 Support</div>
                <div className="text-sm text-gray-500">We're here to help you succeed</div>
              </div>
            </div>
          </div>
          
          <div className="reveal order-1 md:order-2 delay-200">
            <Card className="shadow-2xl rounded-xl border-none overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-emerald-800 text-center">Apply Now</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Enter your full name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-gray-300 focus:border-emerald-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-gray-300 focus:border-emerald-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-gray-300 focus:border-emerald-500 h-12"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 group text-base font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : (
                        <>
                          Submit Application 
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  By submitting this form, you agree to our <a href="#" className="text-emerald-700 hover:underline">Privacy Policy</a> and <a href="#" className="text-emerald-700 hover:underline">Terms of Service</a>.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsForm;
