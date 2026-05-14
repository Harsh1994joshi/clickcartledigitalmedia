import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../common/AnimatedSection';

const steps = [
  { num: '01', title: 'Discover & Understand', desc: 'We deep-dive into your business, industry, competitors, and goals to build a complete picture.' },
  { num: '02', title: 'Plan & Strategize', desc: 'A custom roadmap crafted with precision — every tactic aligned to your unique growth objectives.' },
  { num: '03', title: 'Execute & Launch', desc: 'Flawless execution across all channels — creative, technical, and paid — with obsessive attention to detail.' },
  { num: '04', title: 'Optimize & Scale', desc: 'Continuous data analysis, A/B testing, and iteration to compound your results and scale what works.' },
];

function Step({ step, index, total }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="relative flex flex-col items-center text-center">
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="h-full origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(107,47,181,0.6), rgba(26,95,212,0.3))' }}
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400" />
        </div>
      )}

      {/* Number bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 200 }}
        className="relative z-10 w-24 h-24 rounded-full glass-strong border border-purple-500/30 flex items-center justify-center mb-6 shadow-glow-purple group hover:scale-110 transition-transform duration-300"
      >
        <span className="font-display font-800 text-2xl gradient-text">{step.num}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.2 + 0.3 }}
      >
        <h3 className="font-display font-700 text-lg text-white mb-2">{step.title}</h3>
        <p className="font-body text-sm text-white/40 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
      </motion.div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#030305' }}>
      <div className="orb w-80 h-80 bg-blue-900/20 bottom-0 right-1/4 animate-float" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-blue-400/70">Our Process</span>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display font-800 text-4xl md:text-5xl mt-4 leading-tight">
              How We <span className="gradient-text">Deliver Results</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="font-body text-white/40 max-w-xl mx-auto mt-4 leading-relaxed">
              A proven 4-step framework that transforms your business goals into measurable digital wins.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((s, i) => (
            <Step key={s.num} step={s} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
