import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    icon: '🎨',
    title: 'Branding & Identity',
    desc: 'Strong, memorable brand identities — logos, visual systems, and positioning that make you unforgettable.',
    tags: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Trend-driven campaigns and viral content strategies that grow your reach, engagement, and brand recall.',
    tags: ['Instagram', 'LinkedIn', 'Meta Ads'],
  },
  {
    icon: '🔍',
    title: 'Search Engine Optimization',
    desc: 'Data-backed SEO strategies that rank your business on top of Google — local and national.',
    tags: ['On-Page SEO', 'Local SEO', 'Link Building'],
  },
  {
    icon: '💻',
    title: 'Website Development',
    desc: 'Fast, responsive, conversion-optimized websites that look stunning and turn visitors into customers.',
    tags: ['Next.js', 'WordPress', 'E-Commerce'],
  },
  {
    icon: '🚀',
    title: 'Performance Marketing',
    desc: 'ROI-focused ad campaigns across Google, Meta, and YouTube — every rupee working harder.',
    tags: ['Google Ads', 'Meta Ads', 'YouTube Ads'],
  },
  {
    icon: '🤖',
    title: 'AI Marketing & Automation',
    desc: 'Modern AI tools to automate your marketing funnels, chatbots, and content workflows.',
    tags: ['AI Content', 'Chatbots', 'Automation'],
  },
]

const whyItems = [
  { title: 'Focus on Real Business Growth', desc: 'Every strategy we build is designed to deliver measurable, tangible growth for your business.' },
  { title: 'Creative + Performance-Driven', desc: 'We blend creative storytelling with data-driven tactics for the best possible outcomes.' },
  { title: 'AI-Powered Execution', desc: 'We leverage cutting-edge AI tools to make your marketing faster, smarter, and more effective.' },
  { title: 'Customized Strategies', desc: 'No cookie-cutter templates. Every strategy is crafted specifically for your business goals.' },
  { title: 'Transparent Reporting', desc: 'You always know exactly what\'s happening — clear, honest, measurable reporting.' },
  { title: 'Dedicated Support', desc: 'A dedicated team committed to your growth with responsive consultation at every step.' },
]

const processSteps = [
  { num: '01', title: 'Discover & Understand', desc: 'We analyze your business, audience, and competitors to uncover real opportunities.' },
  { num: '02', title: 'Plan & Strategize', desc: 'We create a customized digital growth strategy tailored to your specific goals.' },
  { num: '03', title: 'Execute & Launch', desc: 'We run targeted campaigns across multiple platforms for maximum impact.' },
  { num: '04', title: 'Optimize & Scale', desc: 'We continuously improve results and scale what works for compounding growth.' },
]

const marqueeItems = [
  'SEO', 'SOCIAL MEDIA', 'BRANDING', 'WEB DEVELOPMENT',
  'PERFORMANCE MARKETING', 'AI AUTOMATION', 'VIDEO PRODUCTION',
  'GRAPHIC DESIGN', 'INFLUENCER MARKETING', 'CONTENT CREATION',
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Click Cartel Digital Media — We Build Brands That Lead</title>
        <meta name="description" content="A results-driven digital marketing agency in Pune specializing in SEO, social media marketing, branding, website development, and performance marketing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />

      {/* ===== HERO ===== */}
      <div className="hero">
        {/* Background */}
        <div className="hero-bg">
          <div className="hero-grid" />
          {/* Orbs */}
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />
          {/* Floating rings */}
          <div className="fring fring1" />
          <div className="fring fring2" />
          <div className="fring fring3" />
          <div className="fring fring4" />
          {/* Dots */}
          <div className="fdot fdot1" />
          <div className="fdot fdot2" />
          <div className="fdot fdot3" />
          <div className="fdot fdot4" />
          <div className="fdot fdot5" />
          {/* Lines */}
          <div className="fline fline1" />
          <div className="fline fline2" />
        </div>

        {/* Content */}
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Digital Marketing Agency — Pune, India
            </div>

            <h1 className="hero-title">
              We Don&apos;t Just<br />
              Market <span className="grad-text">Brands</span> —<br />
              We Build Brands<br />
              <span className="outline-text">That Lead.</span>
            </h1>

            <p className="hero-desc">
              We help businesses grow with powerful digital strategies, creative storytelling, and performance-driven marketing that delivers real results.
            </p>
            <p className="hero-subdesc">
              SEO · Social Media · Branding · Web Dev · Performance Marketing · AI
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                📞 Book a Free Strategy Call
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services →
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {[
                { num: '2025', suffix: '✦', label: 'Founded' },
                { num: '13', suffix: '+', label: 'Services' },
                { num: '100', suffix: '%', label: 'Commitment' },
                { num: 'AI', suffix: '✦', label: 'Powered' },
              ].map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-number">{s.num}<span style={{ fontSize: '1.2rem' }}>{s.suffix}</span></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Display */}
          <div className="hero-logo-display">
            <div className="hero-logo-glow">
              <img src="/logo.jpg" alt="Click Cartel Digital Media" className="hero-logo-img" />
            </div>
            <p className="hero-logo-tag">Click Cartel · Digital Media</p>
          </div>
        </div>
      </div>

      {/* ===== MARQUEE ===== */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i}>
              {marqueeItems.map((item, j) => (
                <span key={j} className="marquee-item">
                  {item}
                  <span className="marquee-sep" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ===== ABOUT ===== */}
      <section id="about">
        <div className="about-grid">
          {/* Text */}
          <div className="reveal-left">
            <div className="section-label">About Click Cartel</div>
            <h2 className="section-title">
              Full-Service Digital<br />
              <span className="accent-blue">Marketing Agency</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: 18 }}>
              Click Cartel Digital Media is a full-service digital marketing agency founded in 2025, focused on helping businesses grow in today&apos;s competitive digital space.
            </p>
            <p className="section-desc" style={{ marginBottom: 18 }}>
              We combine creativity, strategy, and AI-powered tools to deliver marketing solutions that drive visibility, engagement, and conversions. Our goal is simple — to help your business grow with the right digital approach.
            </p>
            <p className="section-desc" style={{ marginBottom: 32 }}>
              From startups to established brands, we offer complete end-to-end digital marketing services tailored to your business needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Growing Today →
            </Link>
          </div>

          {/* Visual card */}
          <div className="reveal-right">
            <div className="about-card">
              <div className="about-card-glow" />

              {/* Logo inside card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <img src="/logo.jpg" alt="Click Cartel" style={{ width: 64, height: 64, borderRadius: 14, objectFit: 'cover', filter: 'drop-shadow(0 0 12px rgba(58,123,213,0.3))' }} />
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg,#3A7BD5,#7B4FBF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Click Cartel</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace', letterSpacing: 1, textTransform: 'uppercase' }}>Digital Media · Pune</div>
                </div>
              </div>

              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.25rem', marginBottom: 12 }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                To help every business grow by combining the power of creativity, data-driven strategy, and AI-powered marketing — delivering real, measurable results that matter.
              </p>

              <div className="about-mini-grid">
                {[
                  { icon: '🧠', label: 'AI-Powered' },
                  { icon: '📊', label: 'Data-Driven' },
                  { icon: '🎯', label: 'Goal-Focused' },
                  { icon: '💡', label: 'Creative-First' },
                ].map((m) => (
                  <div className="mini-card" key={m.label}>
                    <div className="mi">{m.icon}</div>
                    <p>{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="about-pill">📍 Pune, Maharashtra</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <div className="section-wide" style={{ background: 'rgba(58,123,213,0.03)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 0 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Our Core <span className="accent-blue">Services</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
              Comprehensive digital marketing solutions designed to build, grow, and scale your business.
            </p>
          </div>

          <div className="services-grid">
            {services.map((svc, i) => (
              <div key={i} className="service-card reveal" data-delay={i * 0.07}>
                <div className="svc-arrow">↗</div>
                <div className="svc-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="svc-tags">
                  {svc.tags.map((t, j) => <span key={j} className="svc-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: 44, paddingBottom: 0 }}>
            <Link href="/services" className="btn-secondary">
              View All 13+ Services →
            </Link>
          </div>
        </div>
      </div>

      {/* ===== WHY CHOOSE ===== */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 48 }}>
          <div className="reveal-left">
            <div className="section-label">Why Us</div>
            <h2 className="section-title">
              Why Choose<br />
              <span className="accent-blue">Click Cartel?</span>
            </h2>
            <p className="section-desc">
              We&apos;re not just another agency — we&apos;re your growth partner committed to delivering real, measurable results.
            </p>
          </div>
          <div />
        </div>
        <div className="why-grid">
          {whyItems.map((item, i) => (
            <div key={i} className="why-item reveal" data-delay={i * 0.07}>
              <div className="why-check">✓</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <div className="section-wide" style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Process</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              How We <span className="accent-green">Work</span>
            </h2>
          </div>
          <div className="process-grid" style={{ paddingBottom: 0 }}>
            <div className="process-connector" />
            {processSteps.map((step, i) => (
              <div key={i} className="process-step reveal" data-delay={i * 0.1}>
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <section>
        <div className="cta-box reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Get Started</div>
          <h2>
            Ready to Grow Your{' '}
            <span className="accent-blue">Business?</span>
          </h2>
          <p>Let&apos;s build a strategy that delivers real results for your brand.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <Link href="/contact" className="btn-primary">📞 Contact Us Today</Link>
            <Link href="/services" className="btn-secondary">Explore Services →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
