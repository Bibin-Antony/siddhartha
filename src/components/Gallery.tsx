import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import PencilUnderline from './PencilUnderline';
const Gallery = () => {
  const [activeImage, setActiveImage] = useState<null | string>(null);

  // Updated gallery images with uploaded images and high-quality Unsplash fallbacks
  const images = [{
    src: '/lovable-uploads/80bd682c-dad1-444f-afdf-11d7733030ef.png',
    alt: 'Medical Students in Front of Campus',
    size: 'large',
    fallback: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
  }, {
    src: '/lovable-uploads/a83c5359-cddd-4dc2-9712-4dd03393726d.png',
    alt: 'Medical Students in Lab Coats',
    size: 'small',
    fallback: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070'
  }, {
    src: '/lovable-uploads/40a234d1-f97c-4586-b4ab-16ef8337efff.png',
    alt: 'Students at Medical Simulation Lab',
    size: 'medium',
    fallback: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070'
  }, {
    src: '/lovable-uploads/691d3a47-4c62-4327-8942-0999636c3cd1.png',
    alt: 'Medical Training with Mannequin',
    size: 'medium',
    fallback: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070'
  }, {
    src: '/lovable-uploads/f1020951-7240-4403-81bc-e34f674a001d.png',
    alt: 'Student with Pre-Med Program Brochure',
    size: 'small',
    fallback: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070'
  }, {
    src: '/lovable-uploads/40a234d1-f97c-4586-b4ab-16ef8337efff.png',
    alt: 'Advanced Medical Technology Training',
    size: 'large',
    fallback: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2070'
  }];
  return <section className="section bg-emerald-50 py-20">
      <div className="container-wide">
        <div className="text-center mb-12 reveal">
          <h2 className="text-emerald-700 mb-4">
            <PencilUnderline>Our Campus & Facilities</PencilUnderline>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our world-class facilities in India and Curaçao.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => <div key={index} className={`reveal overflow-hidden rounded-lg cursor-pointer ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : image.size === 'medium' ? 'md:col-span-2 lg:col-span-1' : ''}`} style={{
          animationDelay: `${index * 0.1}s`
        }} onClick={() => setActiveImage(image.src)}>
              <div className="group h-64 md:h-80 w-full bg-gray-200 relative overflow-hidden">
                
                
              </div>
            </div>)}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button variant="outline" size="icon" className="absolute top-4 right-4 rounded-full bg-white/10 border-0 text-white hover:bg-white/20" onClick={() => setActiveImage(null)}>
            <X size={20} />
          </Button>
          <div className="max-w-5xl max-h-[80vh] relative">
            <img src={activeImage} alt="Enlarged view" className="max-w-full max-h-[80vh] object-contain" />
          </div>
        </div>}
    </section>;
};
export default Gallery;