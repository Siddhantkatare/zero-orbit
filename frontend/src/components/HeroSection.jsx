import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = ({ hero }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.05)_50%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
              {hero.badge}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">{hero.title.line1}</span>
              <span className="block text-black">
                {hero.title.line2}
              </span>
              <span className="block text-4xl lg:text-5xl text-gray-700 mt-2">
                {hero.title.line3}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {hero.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="border-2 border-gray-300 hover:border-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
                <Play className="mr-2 h-5 w-5 group-hover:text-black" />
                {hero.cta.secondary}
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative mx-auto lg:mx-0 max-w-lg">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 mb-4">
                  <div className="w-16 h-16 bg-black rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Creative Solutions</h3>
                  <p className="text-gray-600 text-sm">Transforming your vision into reality</p>
                </div>
                
                <div className="space-y-3">
                  {['Brand Identity', 'UI/UX Design', 'Digital Marketing'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-10 animate-bounce" style={{animationDuration: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;