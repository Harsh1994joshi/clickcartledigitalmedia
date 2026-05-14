import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import WhyUsSection from '../sections/WhyUsSection';
import ProcessSection from '../sections/ProcessSection';
import MarqueeSection from '../sections/MarqueeSection';
import CTASection from '../sections/CTASection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Click Cartel Digital Media | Digital Marketing Agency Pune</title>
        <meta name="description" content="A results-driven digital marketing agency in Pune specializing in SEO, social media marketing, branding, website development, and performance marketing." />
        <meta name="keywords" content="digital marketing agency pune, SEO pune, social media marketing, branding, performance marketing, click cartel" />
        <link rel="canonical" href="https://clickcartel.com" />
        <meta property="og:title" content="Click Cartel Digital Media | Digital Marketing Agency Pune" />
        <meta property="og:description" content="We help businesses grow with powerful digital strategies, creative storytelling, and performance-driven marketing." />
        <meta property="og:url" content="https://clickcartel.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
