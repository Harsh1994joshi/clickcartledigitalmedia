import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../common/AnimatedSection';

const services = [
  { icon: '✦', title: 'Branding & Identity', desc: 'Craft a powerful, memorable brand identity that resonates with your target audience and sets you apart.' },
  { icon: '📱', title: 'Social Media Marketing', desc: 'Strategic social media campaigns that build communities, drive engagement, and convert followers into customers.' },
  { icon: '🔍', title: 'SEO', desc: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic and sustainable growth.' },
  { icon: '🌐', title: 'Website Design & Dev', desc: 'Premium, conversion-optimized websites built to impress and perform across all devices.' },
  { icon: '🎯', title: 'Performance Marketing', desc: 'ROI-focused paid campaigns across Google, Meta, and beyond — every rupee spent with precision.' },
  { icon: '🤖', title: 'AI Marketing & Automation', desc: 'Leverage cutting-edge AI tools to automate, personalize, and scale your marketing efforts.' },
  { icon: '🎬', title: 'Video Production', desc: 'Cinematic brand stories and content that captivate, engage, and convert your audience.' },
  { icon: '🌟', title: 'Influencer Marketing', desc: 'Connect with the right voices to amplify your brand reach and build authentic trust.' },
  { icon: '📊', title: 'Business Strategy', desc: 'Data-backed research and strategies to position your business for scalable, long-term growth.' },
  { icon: '🎨', title: 'Graphic Designing', desc: 'Visually striking designs that communicate your brand story with clarity and impact.' },
  { icon: '📡', title: 'Media Planning & Ads', desc: 'Comprehensive media planning to maximize reach and impact across all advertising channels.' },
  { icon: '🎉', title: 'Corporate Events', desc: 'End-to-end corporate event planning and brand activations that leave lasting impressions.' },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="service-card group"
    >
      {/* Glow border effect */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'linear-gradient(135deg, rgba(107,47,181,0.15), rgba(26,95,212,0.15))', borderRadius: 12 }}
      />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 transition-all duration-300 ${
          hovered ? 'bg-purple-500/20 scale-110' : 'bg-white/5'
        }`}>
          {service.icon}
        </div>
        <h3 className="font-display font-700 text-lg text-white mb-2 group-hover:gradient-text transition-all">
          {service.title}
        </h3>
        <p className="font-body text-sm text-white/40 leading-relaxed">
          {service.desc}
        </p>
        <div className={`mt-4 flex items-center gap-2 font-mono text-[0.7rem] tracking-widest uppercase transition-all duration-300 ${
          hovered ? 'text-purple-400 gap-3' : 'text-white/20'
        }`}>
          <span>Explore</span>
          <span>→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#030305' }}>
      <div className="orb w-80 h-80 bg-blue-900/20 top-20 right-0 animate-float" />
      <div className="orb w-64 h-64 bg-purple-900/20 bottom-20 left-0 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-blue-400/70">What We Do</span>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display font-800 text-4xl md:text-5xl mt-4 leading-tight">
              Full-Spectrum <span className="gradient-text">Digital Services</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="font-body text-white/40 max-w-xl mx-auto mt-4 leading-relaxed">
              From strategy to execution — every service designed to drive real, measurable business growth.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-14">
            <Link to="/services" className="btn-outline">
              <span>View All Services</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
