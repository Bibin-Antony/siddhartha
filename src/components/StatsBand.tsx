
import React from 'react';

const StatsBand = () => {
  const stats = [
    {
      id: 1,
      value: '24',
      unit: 'Lakh',
      description: 'students vie for 1,07,948 medical seats in India',
      bgColor: 'bg-orange-500'
    },
    {
      id: 2,
      value: '154',
      description: 'MD schools in the US and Canada with 77 in Canada',
      bgColor: 'bg-orange-500'
    },
    {
      id: 3,
      value: '42',
      unit: '%',
      description: 'US acceptance rate',
      bgColor: 'bg-orange-500'
    },
    {
      id: 4,
      value: '<10',
      unit: '%',
      description: 'Canadian acceptance rate',
      bgColor: 'bg-orange-500'
    },
    {
      id: 5,
      value: '41,013',
      description: 'students applied to medical schools in Canada, only 2,300 were accepted',
      bgColor: 'bg-orange-500'
    },
    {
      id: 6,
      value: 'Curaçao\'s',
      description: 'Acceptance rate is less than 10% whereas all the other US Caribbean med scripts',
      bgColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-teal-800 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-900 opacity-50"></div>
      
      <div className="container-wide relative z-10">
        <div className="mb-12 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why an Alternate Pathway to MD Program:</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="flex items-start space-x-4 reveal"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full flex-shrink-0">
                {stat.id}
              </div>
              
              <div>
                {stat.value && (
                  <div className="font-bold text-xl flex items-baseline">
                    <span>{stat.value}</span>
                    {stat.unit && <span className="ml-1 text-sm">{stat.unit}</span>}
                  </div>
                )}
                <p className="text-white/90">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
