import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import FeaturedCourses from './components/FeaturedCourses';
import SuccessStories from './components/SuccessStories';
import TrustIndicators from './components/TrustIndicators';
import CTASection from './components/CTASection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>SAP Classes Pro - Transform Your Career with Real-World SAP Expertise</title>
        <meta name="description" content="Master SAP FICO, MM, SD, ABAP, and S/4HANA with hands-on training from industry experts. Join 50,000+ professionals who transformed their careers with 95% certification rate." />
        <meta name="keywords" content="SAP training, SAP certification, SAP FICO, SAP MM, SAP S/4HANA, SAP courses, SAP career, online SAP training" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        
        <main className="flex-1 pt-16">
          <HeroSection />
          <FeaturedCourses />
          <SuccessStories />
          <TrustIndicators />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;