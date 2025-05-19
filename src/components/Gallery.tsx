
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import PencilUnderline from './PencilUnderline';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<null | string>(null);

  // Updated gallery images with new uploaded images
  const images = [
    {
      src: '/lovable-uploads/855d4886-be9c-4dc1-858f-7964172b5fa3.png',
      alt: 'Medical Students in Lab Coats',
      size: 'large',
      fallback: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070'
    }, {
      src: '/lovable-uploads/48df9a07-fe31-48ac-b8da-2818b5c9f54a.png',
      alt: 'Student with Pre-Med Program Brochure',
      size: 'small',
      fallback: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070'
    }, {
      src: '/lovable-uploads/5485d921-b94f-4703-bea6-6eee1b523a8f.png',
      alt: 'Students at Medical Lecture',
      size: 'medium',
      fallback: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070'
    }, {
      src: '/lovable-uploads/5b420525-c621-4377-a252-73998d230a85.png',
      alt: 'Medical Training Class',
      size: 'medium',
      fallback: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070'
    }, {
      src: '/lovable-uploads/691d3a47-4c62-4327-8942-0999636c3cd1.png',
      alt: 'Medical Training with Equipment',
      size: 'small',
      fallback: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070'
    }, {
      src: '/lovable-uploads/40a234d1-f97c-4586-b4ab-16ef8337efff.png',
      alt: 'Advanced Medical Technology Training',
      size: 'large',
      fallback: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2070'
    }
  ];
  
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
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.log(`Gallery image failed, using fallback for ${image.alt}`);
                    const target = e.currentTarget;
                    target.src = image.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/80 p-2 rounded-full">
                    <Search className="h-5 w-5 text-emerald-700" />
                  </div>
                </div>
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
