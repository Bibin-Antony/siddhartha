
import React from 'react';
import PencilUnderline from './PencilUnderline';

const StatisticsBand = () => {
  const stats = [
    {
      value: '24',
      unit: 'Lakh',
      description: 'students vie for 1,07,948 medical seats in India',
      icon: '/stats-india.svg'
    },
    {
      value: '22,666',
      unit: 'of 62,443',
      description: 'US applicants accepted (2021)',
      icon: '/stats-usa.svg'
    },
    {
      value: '42',
      unit: '%',
      description: 'US acceptance rate',
      icon: '/stats-percentage.svg'
    },
    {
      value: '<10',
      unit: '%',
      description: 'Canadian acceptance rate',
      icon: '/stats-canada.svg'
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-emerald-800 to-emerald-700 py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Why an Alternate Pathway?</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Medical school admissions are highly competitive globally. Our program offers a reliable alternative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="reveal transform transition-all duration-500 hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl h-full border border-emerald-500/30 hover:border-emerald-400/70 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6 bg-emerald-600/50 p-4 rounded-full">
                  <img src={stat.icon || '/icon-stats.svg'} alt="" className="w-12 h-12" />
                </div>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-white">{stat.value}</span>
                  <span className="text-2xl text-emerald-300 ml-2 mb-1">{stat.unit}</span>
                </div>
                <p className="text-emerald-100 text-center">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsBand;
