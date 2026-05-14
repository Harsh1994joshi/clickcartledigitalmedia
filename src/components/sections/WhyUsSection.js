import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../common/AnimatedSection';

const reasons = [
  { icon: '📈', title: 'Focus on Real Business Growth', desc: 'Every strategy we build is tied to measurable KPIs that impact your bottom line.' },
  { icon: '🎨', title: 'Creative + Performance-Driven', desc: 'Beautiful creativity backed by relentless data. We never sacrifice one for the other.' },
  { icon: '🤖', title: 'AI-Powered Marketing Execution', desc: 'We harness cutting-edge AI tools to automate, optimize, and scale your campaigns faster.' },
  { icon: '🔧', title: 'Customized Strategies', desc: 'No cookie-cutter packages. Every plan is tailored uniquely to your business, industry, and goals.' },
  { icon: '📊', title: 'Transparent Reporting', desc: 'Real-time dashboards and clear reports so you always know exactly where your investment goes.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'A dedicated team that treats your business like their own, always available when you need us.' },
];

const stats = [
  { end: 50, suffix: '+', label: 'Brands Scaled' },
  { end: 200, suffix: '%', label: 'Avg ROI Boost' },
  { end: 13, suffix: '+', label: 'Services Offered' },
  { end: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function WhyUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-deep-black relative overflow-hidden">
      <div className="orb w-96 h-96 bg-purple-900/20 top-0 left-0 animate-float-slow" />
      <div className="gradient-divider" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Stats row */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-purple-400/20 transition-all">
              <div className="font-display font-800 text-4xl md:text-5xl gradient-text">
                {inView ? (
                  <CountUp end={s.end} duration={2.5} delay={i * 0.3} suffix={s.suffix} />
                ) : '0'}
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400/70">Why Choose Us</span>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display font-800 text-4xl md:text-5xl mt-4 leading-tight">
              The <span className="gradient-text">Cartel Advantage</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <div className="service-card h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl mb-4 border border-white/10">
                  {r.icon}
                </div>
                <h3 className="font-display font-700 text-lg text-white mb-2">{r.title}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
