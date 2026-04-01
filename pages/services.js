import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = [
  {
    icon: '🎨',
    title: 'Branding & Creative',
    desc: 'We create strong, memorable brand identities that make you instantly recognizable and stand out in crowded markets.',
    services: ['Branding & Identity', 'Logo Designing', 'Graphic Designing', 'Visual Identity Systems'],
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    desc: 'We help you reach the right audience and convert them into loyal, paying customers through smart multi-channel strategies.',
    services: ['Digital Marketing Strategy', 'Social Media Marketing', 'Search Engine Optimization (SEO)', 'Performance Marketing', 'Influencer Marketing'],
  },
  {
    icon: '💻',
    title: 'Web & Development',
    desc: 'We build high-performance websites and landing pages that look great and drive real business conversions.',
    services: ['Website Design & Development', 'Landing Page Design', 'E-Commerce Marketing', 'Web Optimization & CRO'],
  },
  {
    icon: '🎥',
    title: 'Content & Media',
    desc: 'We create content that engages audiences, sparks conversations, and drives measurable action for your brand.',
    services: ['Video Production', 'Content Creation', 'Scripts & Storytelling', 'Media Planning & Advertisement'],
  },
  {
    icon: '📈',
    title: 'Business Growth',
    desc: 'We strengthen your overall brand presence and business standing with research-backed, strategic decisions.',
    services: ['Business Research & Strategy', 'Corporate Events & Promotions', 'Online Reputation Management (ORM)', 'Market Research'],
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    desc: 'We use modern AI tools to make your marketing faster, smarter, and more efficient with automated growth systems.',
    services: ['AI-Powered Marketing Solutions', 'AI Content Creation', 'Chatbot & WhatsApp Automation', 'Marketing Automation Funnels'],
  },
  {
    icon: '🎯',
    title: 'Advanced Marketing',
    desc: 'We focus on performance, data-driven insights, and scaling your growth through proven conversion tactics.',
    services: ['Conversion Rate Optimization (CRO)', 'Local SEO & Google My Business', 'Email & SMS Marketing', 'Analytics & Reporting'],
  },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services — Click Cartel Digital Media</title>
        <meta name="description" content="End-to-end digital marketing services: SEO, social media, branding, web development, performance marketing, AI automation, and more." />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '160px 48px 80px', position: 'relative' }}>
        {/* BG glow */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(58,123,213,0.12), transparent)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 300, height: 300, background: 'radial-gradient(circle, rgba(123,79,191,0.1), transparent)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div className="reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Expertise</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-2px' }}>
            Complete Digital <span className="accent-blue">Marketing</span><br />Solutions
          </h1>
          <p className="section-desc" style={{ margin: '20px auto 0', maxWidth: 600, fontSize: '1rem' }}>
            At Click Cartel Digital Media, we offer end-to-end digital marketing services designed to build, grow, and scale your business using creativity, strategy, and AI.
          </p>
        </div>
      </div>

      {/* Categories */}
      <section style={{ paddingTop: 0 }}>
        <div className="svc-categories">
          {categories.map((cat, i) => (
            <div key={i} className="svc-cat reveal" data-delay={i * 0.06}>
              <div className="svc-cat-glow" />
              <span className="cat-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <ul className="svc-list">
                {cat.services.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 40 }}>
        <div className="cta-box reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Get Started</div>
          <h2>
            Looking for Complete<br />
            <span className="accent-blue">Digital Growth?</span>
          </h2>
          <p>Let&apos;s create a strategy tailored for your business and goals.</p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', position: 'relative', zIndex: 1 }}>
            📞 Get in Touch →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
