import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

const categories = [
  {
    id: 'branding',
    label: 'Branding & Creative',
    icon: '✦',
    services: [
      { title: 'Branding & Identity', desc: 'Build a powerful, cohesive brand identity that commands attention and builds lasting trust with your audience.', icon: '🏆' },
      { title: 'Logo Designing', desc: 'Iconic, versatile logos crafted to represent your brand essence across every medium and touchpoint.', icon: '✏️' },
      { title: 'Graphic Designing', desc: 'Visually stunning creatives for social, print, and digital that tell your brand story without words.', icon: '🎨' },
    ],
  },
  {
    id: 'digital',
    label: 'Digital Marketing',
    icon: '📱',
    services: [
      { title: 'Digital Marketing Strategy', desc: 'Comprehensive, data-backed digital strategies aligned with your business goals and market opportunity.', icon: '🎯' },
      { title: 'Social Media Marketing', desc: 'Platform-specific campaigns that grow your following, drive engagement, and convert audiences into customers.', icon: '📲' },
      { title: 'SEO', desc: 'Technical, on-page, and off-page SEO to dominate search rankings and drive qualified organic traffic.', icon: '🔍' },
      { title: 'Performance Marketing', desc: 'High-ROI paid campaigns on Google, Meta, and beyond — precision-targeted to reach buyers ready to convert.', icon: '📈' },
      { title: 'Influencer Marketing', desc: 'Strategic partnerships with the right influencers to amplify your reach and build authentic brand credibility.', icon: '🌟' },
    ],
  },
  {
    id: 'web',
    label: 'Web & Development',
    icon: '🌐',
    services: [
      { title: 'Website Design & Development', desc: 'Stunning, conversion-optimized websites built for speed, UX, and results across all devices.', icon: '💻' },
      { title: 'Landing Page Design', desc: 'High-converting landing pages engineered to capture leads and drive campaign performance.', icon: '🖥️' },
      { title: 'E-Commerce Marketing', desc: 'End-to-end e-commerce growth strategies that drive traffic, reduce cart abandonment, and maximize revenue.', icon: '🛒' },
    ],
  },
  {
    id: 'content',
    label: 'Content & Media',
    icon: '🎬',
    services: [
      { title: 'Video Production', desc: 'Cinematic brand films, product videos, reels, and testimonials that captivate and convert.', icon: '🎥' },
      { title: 'Content Creation', desc: 'Engaging, on-brand content for every platform — written, visual, and video — that drives real engagement.', icon: '✍️' },
      { title: 'Scripts & Storytelling', desc: 'Compelling brand narratives and ad scripts that resonate emotionally and drive action.', icon: '📝' },
      { title: 'Media Planning & Advertisement', desc: 'Strategic media buying and planning to maximize your ad spend across TV, OOH, digital, and more.', icon: '📡' },
    ],
  },
  {
    id: 'business',
    label: 'Business Growth',
    icon: '📊',
    services: [
      { title: 'Business Research & Strategy', desc: 'In-depth market research, competitor analysis, and strategic planning to unlock your growth potential.', icon: '🔬' },
      { title: 'Corporate Events & Promotions', desc: 'Memorable brand events, product launches, and promotional activations that create real buzz.', icon: '🎉' },
      { title: 'ORM', desc: 'Online Reputation Management to protect, build, and enhance your brand image across all digital channels.', icon: '🛡️' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: '🤖',
    services: [
      { title: 'AI-Powered Marketing Solutions', desc: 'Leverage cutting-edge AI to hyper-personalize campaigns, predict behaviour, and automate at scale.', icon: '🧠' },
      { title: 'AI Content Creation', desc: 'AI-assisted content pipelines that produce high-quality, on-brand content at unprecedented speed.', icon: '⚡' },
      { title: 'Chatbot & WhatsApp Automation', desc: 'Intelligent chatbots and WhatsApp flows that qualify leads, support customers, and drive conversions 24/7.', icon: '💬' },
      { title: 'Marketing Automation Funnels', desc: 'Sophisticated automation funnels that nurture leads through every stage of the buying journey automatically.', icon: '🔄' },
    ],
  },
  {
    id: 'advanced',
    label: 'Advanced Marketing',
    icon: '🚀',
    services: [
      { title: 'CRO', desc: 'Conversion Rate Optimization — systematic testing and optimization to convert more visitors into paying customers.', icon: '📉' },
      { title: 'Local SEO & Google My Business', desc: 'Dominate local search results and Google Maps to capture high-intent customers in your area.', icon: '📍' },
      { title: 'Email & SMS Marketing', desc: 'High-deliverability email and SMS campaigns that nurture relationships and drive repeat revenue.', icon: '✉️' },
      { title: 'Analytics & Reporting', desc: 'Comprehensive analytics setup, custom dashboards, and actionable reporting for complete marketing visibility.', icon: '📊' },
    ],
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="service-card group"
    >
      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500/15 to-blue-500/15 border border-white/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="font-display font-700 text-base text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
      <p className="font-body text-sm text-white/40 leading-relaxed">{service.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState('branding');
  const current = categories.find((c) => c.id === active);

  return (
    <>
      <Helmet>
        <title>Services | Click Cartel Digital Media</title>
        <meta name="description" content="Full-spectrum digital marketing services — branding, SEO, social media, web development, AI marketing, performance ads, and more." />
        <link rel="canonical" href="https://clickcartel.com/services" />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d0520 0%, #030305 100%)' }}>
        <div className="orb w-96 h-96 bg-purple-800/20 top-0 left-1/4 animate-float-slow" />
        <div className="orb w-64 h-64 bg-blue-800/15 top-1/4 right-0 animate-float" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400/70">What We Offer</span>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="font-display font-800 text-5xl md:text-7xl mt-4 leading-tight">
              Our <span className="gradient-text">Services</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="font-body text-xl text-white/45 mt-6 leading-relaxed max-w-2xl mx-auto">
              A complete digital marketing ecosystem — every service you need to build, grow, and dominate your market.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 bg-deep-black/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-display font-600 text-sm whitespace-nowrap transition-all duration-300 ${
                  active === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-glow-purple'
                    : 'text-white/40 hover:text-white glass border border-white/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 relative" style={{ background: '#030305' }}>
        <div className="orb w-80 h-80 bg-purple-900/20 top-20 right-0 animate-float-slow" />
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div key={active}>
              <div className="mb-10">
                <h2 className="font-display font-800 text-3xl md:text-4xl text-white">
                  {current.icon} {current.label}
                </h2>
                <div className="gradient-divider mt-4 max-w-xs" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {current.services.map((s, i) => (
                  <ServiceCard key={s.title} service={s} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-deep-black">
        <div className="orb w-96 h-96 bg-purple-800/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-800 text-4xl md:text-5xl leading-tight mb-4">
              Looking for <span className="gradient-text">Complete Digital Growth?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="font-body text-white/45 text-lg mb-8 leading-relaxed">
              Let's create a strategy tailored for your business. Free consultation, zero commitment.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <Link to="/contact" className="btn-primary text-base px-10 py-4">
              <span>Get in Touch</span>
              <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
