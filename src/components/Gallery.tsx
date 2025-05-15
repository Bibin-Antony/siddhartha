
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import PencilUnderline from './PencilUnderline';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<null | string>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
      alt: 'Main Campus Building',
      size: 'large',
    },
    {
      src: 'https://images.unsplash.com/photo-1599508704512-4a91fd9668b4?q=80&w=2835&auto=format&fit=crop',
      alt: 'Modern Lecture Hall',
      size: 'small',
    },
    {
      src: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop',
      alt: 'Advanced Medical Laboratory',
      size: 'medium',
    },
    {
      src: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop',
      alt: 'International Students in Discussion',
      size: 'medium',
    },
    {
      src: 'https://images.unsplash.com/photo-1618944847828-82e943c3bdb6?q=80&w=2070&auto=format&fit=crop',
      alt: 'Beautiful Curaçao Campus',
      size: 'small',
    },
    {
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
      alt: 'Clinical Training with Professionals',
      size: 'large',
    },
  ];

  return (
    <section className="section bg-emerald-50 py-20">
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
          {images.map((image, index) => (
            <div 
              key={index}
              className={`reveal overflow-hidden rounded-lg cursor-pointer ${
                image.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : image.size === 'medium' 
                    ? 'md:col-span-2 lg:col-span-1' 
                    : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveImage(image.src)}
            >
              <div className="group h-64 md:h-80 w-full bg-gray-200 relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <p className="text-white">{image.alt}</p>
                  <Button variant="outline" size="icon" className="rounded-full bg-white/20 border-0 text-white hover:bg-white/40">
                    <Search size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-4 right-4 rounded-full bg-white/10 border-0 text-white hover:bg-white/20"
            onClick={() => setActiveImage(null)}
          >
            <X size={20} />
          </Button>
          <div className="max-w-5xl max-h-[80vh] relative">
            <img 
              src={activeImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
