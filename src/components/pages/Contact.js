import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../common/AnimatedSection';

const services = [
  'Branding & Identity', 'Social Media Marketing', 'SEO', 'Performance Marketing',
  'Website Design & Development', 'AI Marketing & Automation', 'Video Production',
  'Influencer Marketing', 'Business Strategy', 'Graphic Designing',
  'Corporate Events', 'Email & SMS Marketing', 'Other',
];

const contactCards = [
  {
    icon: '📍',
    title: 'Visit Us',
    lines: ['Pune, Maharashtra', 'India'],
    color: 'from-purple-600/20 to-purple-800/10',
    border: 'border-purple-500/20',
  },
  {
    icon: '📞',
    title: 'Call Us',
    lines: ['+91 90750 02323', '+91 72197 76117'],
    color: 'from-blue-600/20 to-blue-800/10',
    border: 'border-blue-500/20',
    href: 'tel:+919075002323',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    lines: ['info@clickcartel.com'],
    color: 'from-purple-600/20 to-blue-600/10',
    border: 'border-white/10',
    href: 'mailto:info@clickcartel.com',
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-]{8,}$/.test(form.phone)) e.phone = 'Valid phone required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message too short';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      // EmailJS — replace with your Service ID, Template ID, Public Key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          to_email: 'heyansh@clickcartel.com',
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Click Cartel Digital Media</title>
        <meta name="description" content="Get in touch with Click Cartel Digital Media — digital marketing agency in Pune. Book a free strategy call today." />
        <link rel="canonical" href="https://clickcartel.com/contact" />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d0520 0%, #030305 100%)' }}>
        <div className="orb w-96 h-96 bg-purple-800/20 top-0 right-1/4 animate-float-slow" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400/70">Let's Connect</span>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="font-display font-800 text-5xl md:text-7xl mt-4 leading-tight">
              Get In <span className="gradient-text">Touch</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="font-body text-xl text-white/45 mt-5 leading-relaxed">
              Ready to grow? Let's talk about your goals and build a strategy that delivers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-0 relative" style={{ background: '#030305' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactCards.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.15}>
                <div className={`rounded-2xl p-6 bg-gradient-to-br ${c.color} border ${c.border} text-center group hover:scale-[1.02] transition-all`}>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{c.icon}</div>
                  <h3 className="font-display font-700 text-base text-white mb-2">{c.title}</h3>
                  {c.lines.map((line) => (
                    c.href ? (
                      <a key={line} href={c.href} className="block font-body text-sm text-white/60 hover:text-white transition-colors">{line}</a>
                    ) : (
                      <p key={line} className="font-body text-sm text-white/60">{line}</p>
                    )
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 relative" style={{ background: '#030305' }}>
        <div className="orb w-80 h-80 bg-blue-900/20 top-0 right-0 animate-float" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="glass rounded-2xl p-8 md:p-10 border border-white/8">
                  <h2 className="font-display font-800 text-2xl text-white mb-8">Send Us a Message</h2>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name */}
                    <div>
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="form-input"
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1 font-mono">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="form-input"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="form-label">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="form-input"
                        style={{ appearance: 'none' }}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1 font-mono">{errors.service}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your business and goals..."
                        className="form-input resize-none"
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="relative z-10">Sending...</span>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="relative z-10 w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Right info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <AnimatedSection delay={0.2}>
                {/* Map embed */}
                <div className="rounded-2xl overflow-hidden border border-white/8 h-64">
                  <iframe
                    title="Click Cartel Digital Media Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.12491427782!2d73.72283!3d18.52431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="glass rounded-2xl p-6 border border-white/8 flex-1">
                  <h3 className="font-display font-700 text-lg text-white mb-4">Business Hours</h3>
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
                    { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
                    { day: 'Sunday', time: 'By Appointment' },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                      <span className="font-body text-sm text-white/40">{h.day}</span>
                      <span className="font-mono text-xs text-purple-300">{h.time}</span>
                    </div>
                  ))}

                  <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/20">
                    <p className="font-mono text-xs text-purple-300 tracking-wider uppercase mb-1">Response Time</p>
                    <p className="font-display font-700 text-white text-lg">Within 4 Hours</p>
                    <p className="font-body text-xs text-white/40 mt-1">During business hours</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Success / Error popup */}
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className={`glass-strong rounded-2xl px-8 py-5 flex items-center gap-4 shadow-glass border ${
              status === 'success' ? 'border-green-400/30' : 'border-red-400/30'
            }`}>
              <span className="text-2xl">{status === 'success' ? '✅' : '❌'}</span>
              <div>
                <p className="font-display font-700 text-white text-sm">
                  {status === 'success' ? 'Message Sent!' : 'Something went wrong'}
                </p>
                <p className="font-body text-xs text-white/50">
                  {status === 'success' ? "We'll get back to you within 4 hours." : 'Please try again or email us directly.'}
                </p>
              </div>
              <button onClick={() => setStatus('idle')} className="ml-4 text-white/30 hover:text-white transition-colors">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
