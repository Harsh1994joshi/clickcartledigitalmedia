import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Contact Us — Click Cartel Digital Media</title>
        <meta name="description" content="Get in touch with Click Cartel Digital Media. Book a free strategy call or send us a message about your digital marketing needs." />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '160px 48px 60px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 60, right: 0, width: 360, height: 360, background: 'radial-gradient(circle, rgba(58,123,213,0.12), transparent)', borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div className="reveal-left">
          <div className="section-label">Contact</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-2px' }}>
            Let&apos;s <span className="accent-blue">Connect</span>
          </h1>
          <p className="section-desc">
            We&apos;re here to help you grow your business with the right digital strategy. Reach out anytime.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="contact-grid">
          {/* Info */}
          <div className="reveal-left">
            <div className="contact-info">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <img src="/logo.jpg" alt="Click Cartel" style={{ width: 48, height: 48, borderRadius: 12, objectFit: 'cover', filter: 'drop-shadow(0 0 8px rgba(58,123,213,0.3))' }} />
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', background: 'linear-gradient(135deg,#3A7BD5,#7B4FBF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Click Cartel</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace', letterSpacing: 1, textTransform: 'uppercase' }}>Digital Media</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 20, lineHeight: 1.7 }}>
                Reach out through any channel — we respond fast and are committed to your growth.
              </p>

              {[
                { icon: '📍', label: 'Location', lines: ['Pune, Maharashtra, India'] },
                { icon: '📞', label: 'Phone', lines: ['+91 90750 02323', '+91 72197 76117'], hrefs: ['tel:+919075002323', 'tel:+917219776117'] },
                { icon: '📧', label: 'Email', lines: ['info@clickcartel.com'], hrefs: ['mailto:info@clickcartel.com'] },
                { icon: '⏰', label: 'Hours', lines: ['Mon – Sat: 10am – 7pm IST'] },
              ].map((d) => (
                <div className="c-detail" key={d.label}>
                  <div className="c-icon">{d.icon}</div>
                  <div className="c-text">
                    <h4>{d.label}</h4>
                    {d.lines.map((line, i) => (
                      d.hrefs ? (
                        <a key={i} href={d.hrefs[i]} style={{ display: 'block' }}>{line}</a>
                      ) : (
                        <p key={i}>{line}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: 12, fontFamily: 'Space Mono, monospace', textTransform: 'uppercase', letterSpacing: 1 }}>
                  Follow Us
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {[['📷', 'Instagram'], ['💼', 'LinkedIn'], ['📘', 'Facebook']].map(([icon, label]) => (
                    <a
                      key={label}
                      href="#"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-muted)', background: 'rgba(58,123,213,0.06)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', textDecoration: 'none', transition: 'all 0.3s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.4)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(58,123,213,0.12)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(58,123,213,0.06)' }}
                    >
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <div className="contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '56px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 20 }}>🎉</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', marginBottom: 10, background: 'linear-gradient(135deg,#3A7BD5,#7B4FBF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 32, fontSize: '0.95rem' }}>
                    Thanks for reaching out! Our team will get back to you within 24 hours to discuss how we can help grow your business.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                    className="btn-secondary"
                    style={{ border: '1px solid var(--border2)', borderRadius: 9, padding: '12px 28px', cursor: 'pointer', background: 'transparent', color: '#ccc', fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.35rem', marginBottom: 6 }}>
                    Send Us a Message
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginBottom: 30 }}>
                    Fill out the form and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                      <label>Service Required</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option value="branding">Branding &amp; Identity</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="social">Social Media Marketing</option>
                        <option value="web">Website Development</option>
                        <option value="performance">Performance Marketing</option>
                        <option value="ai">AI Marketing &amp; Automation</option>
                        <option value="content">Content &amp; Video Production</option>
                        <option value="influencer">Influencer Marketing</option>
                        <option value="events">Corporate Events &amp; Promotions</option>
                        <option value="consultation">Free Strategy Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Message *</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your business and what you're looking to achieve..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className="form-submit" disabled={loading}>
                      {loading ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                          <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                          Sending...
                        </span>
                      ) : "Send Message — Let's Build Something Great →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 80 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
          Let&apos;s Build Something{' '}
          <span className="accent-blue">Great Together.</span>
        </h2>
      </section>

      <Footer />
    </>
  )
}
