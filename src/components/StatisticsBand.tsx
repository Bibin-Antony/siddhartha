
import React from 'react';

const StatisticsBand = () => {
  const stats = [
    {
      value: '24',
      unit: 'Lakh',
      description: 'students vie for 1,07,948 medical seats in India',
    },
    {
      value: '22,666',
      unit: 'of 62,443',
      description: 'US applicants accepted (2021)',
    },
    {
      value: '42',
      unit: '%',
      description: 'US acceptance rate',
    },
    {
      value: '<10',
      unit: '%',
      description: 'Canadian acceptance rate',
    },
  ];

  return (
    <section className="section bg-emerald-700 py-16 md:py-20 text-white">
      <div className="container-wide">
        <div className="text-center mb-12 reveal">
          <h2 className="text-white mb-4">Why an Alternate Pathway?</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Medical school admissions are highly competitive globally. Our program offers a reliable alternative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="reveal text-center"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col items-center p-6 bg-emerald-800/30 rounded-lg h-full">
                <div className="flex items-end mb-3">
                  <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
                  <span className="text-xl text-emerald-300 ml-1">{stat.unit}</span>
                </div>
                <p className="text-emerald-100">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsBand;
