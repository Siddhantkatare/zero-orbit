import React from 'react';
import { Button } from './ui/button';

const Header = ({ navigation }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {navigation.logo}
            </div>
          </div>

          {/* Navigation - Always Visible */}
          <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8">
            {navigation.items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 px-2 sm:px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;