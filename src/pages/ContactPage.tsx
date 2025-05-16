
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us | Siddhartha Global & Avalon University";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  We're here to answer your questions and help guide you on your medical journey.
                </p>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container-wide">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-2">
                  <div className="mb-12">
                    <h2 className="text-emerald-800 text-3xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-gray-700 mb-8">
                      Have questions about our programs or admissions process? Our team is ready to assist you. Choose the most convenient way to reach us.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Call Us</h3>
                          <p className="text-gray-700 mb-1">Admissions Office</p>
                          <a href="tel:+919606974400" className="text-emerald-700 hover:text-emerald-800 font-medium">
                            +91 960 697 4400
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Email Us</h3>
                          <p className="text-gray-700 mb-1">For admissions inquiries</p>
                          <a href="mailto:admissions@siddharthaglobal.com" className="text-emerald-700 hover:text-emerald-800 font-medium">
                            admissions@siddharthaglobal.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                          <p className="text-gray-700">
                            Siddhartha Academy Complex,<br />
                            Vijayawada, Andhra Pradesh,<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl mb-4">Office Hours</h3>
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Monday - Friday:</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Saturday:</span>
                          <span>9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <h2 className="text-emerald-800 text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          id="name" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="border-gray-300 focus:border-emerald-500"
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
                          className="border-gray-300 focus:border-emerald-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="subject" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="border-gray-300 focus:border-emerald-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea 
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-gray-300 focus:border-emerald-500 min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-emerald-700 hover:bg-emerald-800 group"
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-16">
                <h2 className="text-emerald-800 text-2xl font-bold mb-6">Our Location</h2>
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                  <iframe 
                    title="Siddhartha Global Location" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122307.19252733868!2d80.51071751147261!3d16.506197026594373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1659458905914!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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

export default ContactPage;
