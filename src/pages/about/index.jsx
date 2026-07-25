import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import VideoIntroduction from './components/VideoIntroduction';
import CareerTimeline from './components/CareerTimeline';
import CertificationsSection from './components/CertificationsSection';
import ExpertiseAreas from './components/ExpertiseAreas';
import ThoughtLeadership from './components/ThoughtLeadership';
import StudentTestimonials from './components/StudentTestimonials';
import ContactSection from './components/ContactSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 pt-16">
        <HeroSection />
        <VideoIntroduction />
        <CareerTimeline />
        <ExpertiseAreas />
        <CertificationsSection />
        <ThoughtLeadership />
        <StudentTestimonials />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default About;