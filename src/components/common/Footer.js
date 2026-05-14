import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const socials = [
  { name: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Twitter', href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.527-8.601L1.5 2.25h5.093l4.26 5.634 5.391-5.634zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
];

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const services = ['Branding & Identity', 'Social Media Marketing', 'SEO', 'Performance Marketing', 'Web Development', 'AI Marketing'];

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="relative bg-deep-black border-t border-white/5 overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb w-96 h-96 bg-purple-900/30 -bottom-48 -left-24 animate-float-slow" />
      <div className="orb w-64 h-64 bg-blue-900/20 -bottom-32 right-0 animate-float" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col leading-none mb-5">
              <span className="font-display font-800 text-2xl tracking-tight text-white">
                CLICK <span className="gradient-text">CARTEL</span>
              </span>
              <span className="font-mono text-[0.6rem] text-white/30 tracking-[0.25em] uppercase mt-1">
                Digital Media
              </span>
            </Link>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-6">
              A results-driven digital marketing agency in Pune helping brands grow with powerful strategies and creative storytelling.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center hover:border-purple-400/50 transition-all hover:shadow-glow-purple group"
                >
                  <svg className="w-4 h-4 fill-white/40 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-[0.15em] uppercase text-white/60 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="font-body text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-4 h-px bg-purple-500 group-hover:w-6 transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-[0.15em] uppercase text-white/60 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="font-body text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-4 h-px bg-blue-500 group-hover:w-6 transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-[0.15em] uppercase text-white/60 mb-5">Contact</h4>
            <ul className="space-y-4">
              {[
                { icon: '📍', text: 'Pune, Maharashtra, India' },
                { icon: '📞', text: '+91 90750 02323' },
                { icon: '📞', text: '+91 72197 76117' },
                { icon: '✉️', text: 'info@clickcartel.com' },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5">{c.icon}</span>
                  <span className="font-body text-white/40 text-sm">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="gradient-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[0.7rem] text-white/25 tracking-widest">
            © 2025 CLICK CARTEL DIGITAL MEDIA. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[0.7rem] text-white/25 tracking-wider">
            clickcartel.com
          </p>
        </div>
      </div>
    </footer>
  );
}
