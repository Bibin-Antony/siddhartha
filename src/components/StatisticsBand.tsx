
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
    <section className="section bg-emerald-700 py-16 md:py-20 text-white">
      <div className="container-wide">
        <div className="text-center mb-12 reveal">
          <h2 className="text-white mb-4">
            <PencilUnderline color="bg-emerald-400">Why an Alternate Pathway?</PencilUnderline>
          </h2>
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
              <div className="flex flex-col items-center p-6 bg-emerald-800/30 rounded-lg h-full border border-emerald-600/20 hover:border-emerald-500/40 transition-all duration-300">
                <div className="mb-4 bg-emerald-600/30 p-3 rounded-full">
                  <img src={stat.icon || '/icon-stats.svg'} alt="" className="w-8 h-8" />
                </div>
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
