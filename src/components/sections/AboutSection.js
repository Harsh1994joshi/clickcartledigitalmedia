import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../common/AnimatedSection';

const pillars = [
  { icon: '⚡', label: 'AI-Powered' },
  { icon: '🎯', label: 'Performance-Driven' },
  { icon: '🔥', label: 'Results-Focused' },
  { icon: '💡', label: 'Creative-First' },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-deep-black relative overflow-hidden">
      <div className="orb w-96 h-96 bg-purple-900/25 top-0 -right-32 animate-float-slow" />
      <div className="gradient-divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <AnimatedSection direction="right">
            <div className="relative">
              {/* Main card */}
              <div className="glass rounded-2xl overflow-hidden aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-strong rounded-xl p-4">
                    <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-purple-300 mb-1">Our Mission</p>
                    <p className="font-display font-600 text-white text-sm leading-snug">
                      "Helping brands grow in today's competitive digital space."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass-strong rounded-xl p-4 min-w-[140px] border border-purple-500/20 shadow-glow-purple"
              >
                <div className="font-display font-800 text-3xl gradient-text">2025</div>
                <div className="font-mono text-[0.6rem] tracking-widest uppercase text-white/40 mt-0.5">Founded</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-strong rounded-xl p-4 min-w-[160px] border border-blue-500/20 shadow-glow-blue"
              >
                <div className="font-display font-800 text-3xl gradient-text">360°</div>
                <div className="font-mono text-[0.6rem] tracking-widest uppercase text-white/40 mt-0.5">Digital Services</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right text */}
          <div ref={ref}>
            <AnimatedSection delay={0.15}>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400/70">Who We Are</span>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <h2 className="font-display font-800 text-4xl md:text-5xl leading-tight mt-4 mb-6">
                Built for Brands That <span className="gradient-text">Refuse to Settle</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <p className="font-body text-white/50 leading-relaxed mb-4">
                Click Cartel Digital Media is a full-service digital marketing agency founded in 2025, focused on helping businesses grow in today's competitive digital space.
              </p>
              <p className="font-body text-white/50 leading-relaxed mb-4">
                We combine creativity, strategy, and AI-powered tools to deliver marketing solutions that drive visibility, engagement, and conversions. Our goal is simple — to help your business grow with the right digital approach.
              </p>
              <p className="font-body text-white/50 leading-relaxed mb-8">
                From startups to established brands, we offer complete end-to-end digital marketing services tailored to your business needs.
              </p>
            </AnimatedSection>

            {/* Pillars */}
            <AnimatedSection delay={0.45}>
              <div className="grid grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <div key={p.label} className="glass rounded-xl p-4 flex items-center gap-3 border border-white/5 hover:border-purple-400/30 transition-all group">
                    <span className="text-xl">{p.icon}</span>
                    <span className="font-display font-600 text-sm text-white/70 group-hover:text-white transition-colors">{p.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
