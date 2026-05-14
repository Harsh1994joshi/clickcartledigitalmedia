import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const WORDS = ['Market', 'Create', 'Dominate', 'Scale', 'Lead'];

export default function HeroSection() {
  const wordRef = useRef(null);
  const wordIdx = useRef(0);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    // Floating orbs via GSAP
    gsap.to(orb1Ref.current, { y: -40, x: 20, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to(orb2Ref.current, { y: 30, x: -30, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });

    // Word cycling
    const cycle = setInterval(() => {
      wordIdx.current = (wordIdx.current + 1) % WORDS.length;
      if (wordRef.current) {
        gsap.to(wordRef.current, {
          opacity: 0, y: -20, duration: 0.3, ease: 'power2.in',
          onComplete: () => {
            if (wordRef.current) wordRef.current.textContent = WORDS[wordIdx.current];
            gsap.fromTo(wordRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
          },
        });
      }
    }, 2200);

    return () => clearInterval(cycle);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient noise">
      {/* Ambient orbs */}
      <div ref={orb1Ref} className="orb w-[600px] h-[600px] bg-purple-800/20 top-1/4 -left-48" />
      <div ref={orb2Ref} className="orb w-[500px] h-[500px] bg-blue-800/15 bottom-1/4 -right-32" />
      <div className="orb w-96 h-96 bg-blue-electric/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

      {/* Grid lines background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-purple-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-300/70">
              Digital Marketing Agency · Pune
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-display font-800 text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
            <span className="block text-white">We Don't Just</span>
            <span className="block gradient-text">
              <span ref={wordRef}>{WORDS[0]}</span> Brands
            </span>
            <span className="block text-white/90">— We Build Brands</span>
            <span className="block text-white">That <span className="gradient-text-gold">Lead.</span></span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="font-body text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
            We help businesses grow with powerful digital strategies, creative storytelling,
            and performance-driven marketing that delivers <em className="text-white/70 not-italic">real results.</em>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              <span>Book a Free Strategy Call</span>
              <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
            <Link to="/services" className="btn-outline text-base px-8 py-4">
              <span>View Our Services</span>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap items-center justify-center gap-12"
          >
            {[
              { num: '50+', label: 'Brands Scaled' },
              { num: '200%', label: 'Avg ROI Increase' },
              { num: '13+', label: 'Core Services' },
              { num: '2025', label: 'Founded' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-800 text-3xl gradient-text">{s.num}</div>
                <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-purple-400/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
