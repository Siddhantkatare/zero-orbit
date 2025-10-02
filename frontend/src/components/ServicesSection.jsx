import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Palette, Monitor, Printer, BarChart3, Share2, Box } from 'lucide-react';

const ServicesSection = ({ services }) => {
  const icons = {
    palette: Palette,
    monitor: Monitor,
    printer: Printer,
    chart: BarChart3,
    share: Share2,
    box: Box
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4">
            <Box className="w-4 h-4 mr-2" />
            {services.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.items.map((service, index) => {
            const IconComponent = icons[service.icon];
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-200 hover:border-black hover:bg-gray-50 text-black font-semibold transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{services.cta.title}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">{services.cta.subtitle}</p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {services.cta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;