import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AutomationSection from './AutomationSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { mockData } from '../data/mock';

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setData(mockData);
    }, 100);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header navigation={data.navigation} />
      <section id="home">
        <HeroSection hero={data.hero} />
      </section>
      <section id="automation">
        <AutomationSection automation={data.automation} />
      </section>
      <section id="services">
        <ServicesSection services={data.services} />
      </section>
      <section id="work">
        <WorkSection work={data.work} />
      </section>
      <section id="contact">
        <ContactSection contact={data.contact} />
      </section>
      <Footer footer={data.footer} />
    </div>
  );
};

export default Homepage;