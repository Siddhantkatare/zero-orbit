import React from 'react';
import { Button } from './ui/button';
import { Zap, Target, Cpu, Rocket } from 'lucide-react';

const AutomationSection = ({ automation }) => {
  const icons = {
    zap: Zap,
    target: Target,
    cpu: Cpu,
    rocket: Rocket
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-900/30 text-orange-300 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            {automation.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {automation.title.split(' ').map((word, index) => (
              <span key={index} className={index === automation.title.split(' ').length - 1 ? 'text-orange-400' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {automation.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {automation.features.map((feature, index) => {
            const IconComponent = icons[feature.icon];
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4">{automation.cta.title}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{automation.cta.subtitle}</p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {automation.cta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;