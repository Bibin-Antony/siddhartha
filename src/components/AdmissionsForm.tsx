
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdmissionsForm = () => {
  const [email, setEmail] = useState('');
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
            <h2 className="text-emerald-700 mb-4">Start Your Medical Journey Today</h2>
            <p className="text-gray-600 mb-6">
              Take the first step towards your medical career by applying to our globally recognized program.
              Our admissions team will guide you through every step of the process.
            </p>
            
            <div className="bg-emerald-50 p-6 rounded-lg mb-6">
              <h3 className="text-emerald-800 text-xl font-semibold mb-4">Eligibility Criteria</h3>
              <ul className="space-y-2">
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
          </div>
          
          <div className="reveal delay-200">
            <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Apply Now</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-700 hover:bg-emerald-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Now'}
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
