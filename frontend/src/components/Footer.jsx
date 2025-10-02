import React from 'react';
import { Separator } from './ui/separator';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ footer }) => {
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">
                {footer.company.name}
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {footer.company.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {footer.company.social.map((social, index) => {
                  const IconComponent = socialIcons[social.platform];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{footer.services.title}</h3>
              <ul className="space-y-3">
                {footer.services.items.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{footer.links.title}</h3>
              <ul className="space-y-3">
                {footer.links.items.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{footer.contact.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 leading-relaxed">{footer.contact.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400">{footer.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400">{footer.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {footer.bottom.copyright}
            </div>
            <div className="flex space-x-6">
              {footer.bottom.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;