
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const AdmissionsForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const eligibilityCriteria = [
    'GPA ≥ 3.0 (60%)',
    'Transcripts',
    'Statement of Purpose',
    'Letter of Recommendation',
    'Video Interview (MCAT not required)'
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
      setRequirement('');
      toast({
        title: "Application initiated!",
        description: "We'll contact you shortly with next steps.",
      });
    }, 1500);
  };

  return (
    <section id="admission-form" className="py-16 bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              Start your Admission process by filling out this form. Our team will revert back shortly.
            </h2>
            
            <p className="text-gray-600 mb-8">
              Note: Admission is only for the fall semester in this joint venture.
            </p>
            
            <Card className="bg-gray-50 border-none shadow-md mb-8">
              <CardContent className="p-6">
                <h3 className="text-emerald-800 text-xl font-bold mb-4">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="bg-emerald-100 rounded-full p-1.5 text-emerald-700">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <p className="text-gray-600">
              Admission is only for the Fall semester in this joint venture.
            </p>
          </div>
          
          <div className="reveal delay-200">
            <Card className="shadow-xl rounded-lg border-none overflow-hidden bg-teal-800 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Apply Now</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Enter your full name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-gray-300 bg-white/90 text-gray-800 focus:border-orange-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-gray-300 bg-white/90 text-gray-800 focus:border-orange-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-gray-300 bg-white/90 text-gray-800 focus:border-orange-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="requirement" className="block text-sm font-medium mb-2">
                        Requirement <span className="text-red-400">*</span>
                      </label>
                      <Input 
                        id="requirement" 
                        type="text" 
                        placeholder="Tell us about your requirements" 
                        required 
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="border-gray-300 bg-white/90 text-gray-800 focus:border-orange-500 h-12"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Now'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsForm;
