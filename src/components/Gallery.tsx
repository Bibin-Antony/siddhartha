
import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: '/gallery/campus-1.jpg',
      alt: 'Campus Building',
      size: 'large',
    },
    {
      src: '/gallery/classroom-1.jpg',
      alt: 'Modern Classroom',
      size: 'small',
    },
    {
      src: '/gallery/lab-1.jpg',
      alt: 'Medical Laboratory',
      size: 'medium',
    },
    {
      src: '/gallery/students-1.jpg',
      alt: 'Students in Discussion',
      size: 'medium',
    },
    {
      src: '/gallery/curacao-1.jpg',
      alt: 'Curaçao Campus',
      size: 'small',
    },
    {
      src: '/gallery/doctor-1.jpg',
      alt: 'Clinical Training',
      size: 'large',
    },
  ];

  return (
    <section className="section bg-emerald-50 py-20">
      <div className="container-wide">
        <div className="text-center mb-12 reveal">
          <h2 className="text-emerald-700 mb-4">Our Campus & Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our world-class facilities in India and Curaçao.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`reveal overflow-hidden rounded-lg ${
                image.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : image.size === 'medium' 
                    ? 'md:col-span-2 lg:col-span-1' 
                    : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group h-64 md:h-80 w-full bg-gray-200 relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
