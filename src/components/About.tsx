
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column with image */}
          <div className="lg:w-1/3 reveal">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1613066576681-71d9ea240fc9?q=80&w=2070&auto=format&fit=crop" 
                alt="Siddhartha Global Campus" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.currentTarget.src = "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?q=80&w=2070&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
          
          {/* Right column with content */}
          <div className="lg:w-2/3 reveal delay-200">
            <h2 className="text-emerald-800 mb-4 text-4xl font-bold flex items-center">
              <span className="text-orange-500 mr-2">50+</span> Years of Distinctive Learning
            </h2>
            
            <p className="text-gray-700 mb-4">
              Collaborative effort to establish a distinctive pathway to the Pre-MD program in the USA
            </p>
            
            <p className="text-gray-700 mb-4">
              For ages, Siddhartha Academy of Higher education helps all minds in Vijayawada to learn for Academic learning alike. As a data suggests, only about 4% of the students make it through the NEET examinations. In this potentially relevant Caribbean medical school, to offer a simple opportunity for aspiring doctors. The exposure is vast and Caribbean-quality patients very efficient for an MD degree. This partnership ensures that students benefit from consistent program, completion, tuition, and a pathway towards a successful career.
            </p>
            
            <p className="text-gray-700 mb-5">
              Additionally, CAAM-HP is the legally constituted body established in 2003 that grants accreditation to medical, dental, veterinary and other health professions programs leading to professional or academic awards in CARICOM member states. This international recognition provides the potential for academic placements both in the US and around the world.
            </p>

            <p className="text-gray-700 mb-6">
              Another reason to attend Avalon University School of Medicine, which is one of the best Caribbean medical schools, is that students can transfer from intermediate US medical schools; most of these universities have some sort of U.S. medical alliance, in which case their institutions and faculty are connected to U.S. medical schools. Moreover, the M.D. diploma medical degree holder is eligible to practice in all 50 U.S. states and territories. The M.D. degree that is obtained in the Caribbean is regarded as equal to public M.D. and other degrees from institutions in the US.
            </p>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
