
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdmissionsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Admissions | Siddhartha Global & Avalon University";
  }, []);

  const eligibilityCriteria = [
    'Minimum of +12 qualification',
    'GPA ≥ 3.0 (60%)',
    'Official transcripts from recognized institutions',
    'Statement of Purpose',
    'Letter of Recommendation',
    'Video interview',
    'MCAT not required'
  ];

  const applicationProcess = [
    {
      title: 'Submit Application',
      description: 'Complete our online application form with your personal and academic information.'
    },
    {
      title: 'Document Verification',
      description: 'Our admissions team will review your transcripts and supporting documents.'
    },
    {
      title: 'Interview',
      description: 'Participate in a video interview to discuss your aspirations and motivations.'
    },
    {
      title: 'Admission Decision',
      description: 'Receive a decision within 2-3 weeks of completing your application.'
    },
    {
      title: 'Enrollment',
      description: 'Accept your offer and complete the enrollment process for the Fall semester.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setPhone('');
      setRequirement('');
      toast({
        title: "Application initiated!",
        description: "We'll contact you shortly with next steps.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <ScrollReveal>
        <main>
          {/* Page Header */}
          <section className="bg-gradient-to-r from-emerald-800 to-emerald-700 py-20 md:py-28">
            <div className="container-wide">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Medical Journey</h1>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  Begin your path to becoming a doctor with our straightforward admissions process.
                </p>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section id="admissions-process" className="py-16 bg-white">
            <div className="container-wide">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-emerald-800 text-3xl font-bold mb-8">Application Process</h2>
                  
                  <div className="space-y-8">
                    {applicationProcess.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="mr-6">
                          <div className="bg-emerald-700 text-white h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold">
                            {index + 1}
                          </div>
                          {index < applicationProcess.length - 1 && (
                            <div className="w-px h-full bg-emerald-200 mx-auto my-2"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 p-6 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex items-center mb-4">
                      <Calendar className="mr-3 text-emerald-700" />
                      <h3 className="font-bold text-emerald-800">Important Dates</h3>
                    </div>
                    <p className="mb-4 text-emerald-800 font-medium">
                      Please note: Admission is restricted to only the Fall semester in this Joint Venture.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-32 font-semibold">Application Opens:</div>
                        <div>January 15th</div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 font-semibold">Application Deadline:</div>
                        <div>July 15th</div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-32 font-semibold">Classes Begin:</div>
                        <div>September 1st</div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <Card className="shadow-lg border-none overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6 text-emerald-800 text-center">Apply Now</h2>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-5">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <Input 
                              id="name" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="border-gray-300 focus:border-emerald-500 h-10"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <Input 
                              id="email" 
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="border-gray-300 focus:border-emerald-500 h-10"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <Input 
                              id="phone" 
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="border-gray-300 focus:border-emerald-500 h-10"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                              Program of Interest <span className="text-red-500">*</span>
                            </label>
                            <Select required>
                              <SelectTrigger className="border-gray-300 focus:border-emerald-500 h-10 w-full">
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bs-md">Integrated BS/MD Program</SelectItem>
                                <SelectItem value="md-only">MD Program Only</SelectItem>
                                <SelectItem value="pre-med">Pre-Med Program</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">
                              Additional Information
                            </label>
                            <Textarea 
                              id="requirement"
                              value={requirement}
                              onChange={(e) => setRequirement(e.target.value)}
                              className="border-gray-300 focus:border-emerald-500 min-h-[100px]"
                              placeholder="Tell us about your background and why you're interested in our program."
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-emerald-700 hover:bg-emerald-800 group h-12 text-base font-medium"
                          >
                            {isSubmitting ? "Submitting..." : (
                              <>
                                Submit Application 
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                      
                      <div className="mt-5 text-center text-sm text-gray-500">
                        By submitting this form, you agree to our <a href="#" className="text-emerald-700 hover:underline">Privacy Policy</a> and <a href="#" className="text-emerald-700 hover:underline">Terms of Service</a>.
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Eligibility Section */}
              <div>
                <h2 className="text-emerald-800 text-3xl font-bold mb-6 text-center">Eligibility Requirements</h2>
                
                <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-100 mb-8">
                  <p className="text-gray-700 mb-6">
                    To be eligible for our programs, you should meet the following criteria:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    {eligibilityCriteria.map((criterion, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="mt-1 bg-emerald-100 rounded-full p-1">
                          <Check className="h-4 w-4 text-emerald-700" />
                        </div>
                        <span className="text-gray-700">{criterion}</span>
                      </div>
                    ))}
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

export default AdmissionsPage;
