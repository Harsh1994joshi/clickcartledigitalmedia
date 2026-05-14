import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-black to-blue-900/40" />
      <div className="orb w-[500px] h-[500px] bg-purple-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="orb w-72 h-72 bg-blue-600/15 top-0 right-1/4 animate-float" />
      <div className="orb w-64 h-64 bg-purple-600/15 bottom-0 left-1/4 animate-float-slow" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-300/60 mb-6 block">
            Ready to Scale?
          </span>
          <h2 className="font-display font-800 text-5xl md:text-7xl leading-tight mb-6">
            Ready to Grow <br />
            <span className="gradient-text">Your Business?</span>
          </h2>
          <p className="font-body text-xl text-white/50 mb-10 leading-relaxed">
            Let's build a strategy that delivers real results. <br className="hidden md:block" />
            Your next level is one conversation away.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-10 py-4">
              <span>Contact Us Today</span>
              <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
            <a href="tel:+919075002323" className="btn-outline text-base px-10 py-4">
              <span>📞 Call Now</span>
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-white/25">
            {['No Lock-in Contracts', 'Free Strategy Call', 'Dedicated Account Manager'].map((t) => (
              <div key={t} className="flex items-center gap-2 font-mono text-[0.7rem] tracking-widest uppercase">
                <span className="text-purple-400">✓</span>
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
