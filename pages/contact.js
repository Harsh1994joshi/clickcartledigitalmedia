import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'Branding & Identity', label: 'Branding & Identity' },
  { value: 'Search Engine Optimization (SEO)', label: 'Search Engine Optimization (SEO)' },
  { value: 'Social Media Marketing', label: 'Social Media Marketing' },
  { value: 'Website Design & Development', label: 'Website Design & Development' },
  { value: 'Performance Marketing', label: 'Performance Marketing' },
  { value: 'AI Marketing & Automation', label: 'AI Marketing & Automation' },
  { value: 'Content & Video Production', label: 'Content & Video Production' },
  { value: 'Influencer Marketing', label: 'Influencer Marketing' },
  { value: 'Graphic & Logo Designing', label: 'Graphic & Logo Designing' },
  { value: 'Corporate Events & Promotions', label: 'Corporate Events & Promotions' },
  { value: 'Online Reputation Management', label: 'Online Reputation Management' },
  { value: 'Free Strategy Consultation', label: 'Free Strategy Consultation' },
  { value: 'Other', label: 'Other' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
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
        <div style={{ position: 'absolute', top: 60, right: 0, width: 360, height: 360, background: 'radial-gradient(circle, rgba(58,123,213,0.1), transparent)', borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div className="reveal-left">
          <div className="section-label">Contact</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-2px' }}>
            Let&apos;s <span className="accent-blue">Connect</span>
          </h1>
          <p className="section-desc">
            We&apos;re here to help you grow your business with the right digital strategy. Fill the form and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="contact-grid">

          {/* Left: Info Card */}
          <div className="reveal-left">
            <div className="contact-info">
              {/* Logo + brand */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <img src="/logo.jpg" alt="Click Cartel" style={{ width: 48, height: 48, borderRadius: 12, objectFit: 'cover', boxShadow: '0 4px 14px rgba(58,123,213,0.2)' }} />
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', background: 'linear-gradient(135deg,#3A7BD5,#7B4FBF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Click Cartel</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace', letterSpacing: 1, textTransform: 'uppercase' }}>Digital Media</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 20, lineHeight: 1.7 }}>
                Reach out through any channel. We respond fast and are committed to your growth.
              </p>

              {/* Contact details */}
              {[
                {
                  icon: '📍', label: 'Location',
                  content: <p>Pune, Maharashtra, India</p>
                },
                {
                  icon: '📞', label: 'Phone',
                  content: <>
                    <a href="tel:+919075002323" style={{ display: 'block' }}>+91 90750 02323</a>
                    <a href="tel:+917219776117" style={{ display: 'block' }}>+91 72197 76117</a>
                  </>
                },
                {
                  icon: '📧', label: 'Email',
                  content: <a href="mailto:info@clickcartel.com">info@clickcartel.com</a>
                },
                {
                  icon: '⏰', label: 'Business Hours',
                  content: <p>Mon – Sat: 10am – 7pm IST</p>
                },
              ].map((d) => (
                <div className="c-detail" key={d.label}>
                  <div className="c-icon">{d.icon}</div>
                  <div className="c-text">
                    <h4>{d.label}</h4>
                    {d.content}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: 12, fontFamily: 'Space Mono, monospace', textTransform: 'uppercase', letterSpacing: 1 }}>
                  Follow Us
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {[['📷', 'Instagram'], ['💼', 'LinkedIn'], ['📘', 'Facebook']].map(([icon, label]) => (
                    <a
                      key={label}
                      href="#"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-muted)', background: 'rgba(58,123,213,0.05)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', textDecoration: 'none', transition: 'all 0.3s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.35)'; e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.background = 'rgba(58,123,213,0.08)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(58,123,213,0.05)' }}
                    >
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="reveal-right">
            <div className="contact-form">

              {/* SUCCESS STATE */}
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '56px 0' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', marginBottom: 10, background: 'linear-gradient(135deg,#3A7BD5,#7B4FBF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 10, fontSize: '0.95rem' }}>
                    Thank you for reaching out! We&apos;ve sent a confirmation to your email.
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 36, lineHeight: 1.7 }}>
                    Our team will get back to you within <strong style={{ color: 'var(--blue)' }}>24 hours</strong> to discuss how we can help grow your business.
                  </p>
                  {/* What happens next */}
                  <div style={{ background: 'rgba(58,123,213,0.05)', border: '1px solid rgba(58,123,213,0.15)', borderRadius: 12, padding: '20px 24px', marginBottom: 32, textAlign: 'left' }}>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', marginBottom: 12, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: 1 }}>What happens next?</p>
                    {[
                      '📋 We review your enquiry within 2–4 hours',
                      '📞 We call or email you to schedule a free strategy session',
                      '🚀 We build a customised growth plan for your business',
                    ].map((step, i) => (
                      <p key={i} style={{ color: 'var(--text-dim)', fontSize: '0.88rem', margin: '6px 0', lineHeight: 1.6 }}>{step}</p>
                    ))}
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                    style={{ border: '1.5px solid var(--border)', borderRadius: 9, padding: '12px 28px', cursor: 'pointer', background: '#fff', color: 'var(--text-dim)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  >
                    ← Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.35rem', marginBottom: 6, color: 'var(--text-main)' }}>
                    Send Us a Message
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginBottom: 30 }}>
                    Fill out the form below — we&apos;ll get back to you within 24 hours.
                  </p>

                  {/* ERROR BANNER */}
                  {status === 'error' && (
                    <div style={{ background: 'rgba(220,53,69,0.07)', border: '1px solid rgba(220,53,69,0.25)', borderRadius: 8, padding: '12px 16px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: '1rem' }}>⚠️</span>
                      <p style={{ color: '#DC3545', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
                        {errorMsg}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Row: Name + Phone */}
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Service */}
                    <div className="form-group">
                      <label>Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label>Message *</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your business and what you're looking to achieve..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        style={{ minHeight: 130 }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="form-submit"
                      disabled={status === 'loading'}
                      style={{ opacity: status === 'loading' ? 0.85 : 1 }}
                    >
                      {status === 'loading' ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
                          <span style={{
                            display: 'inline-block',
                            width: 18, height: 18,
                            border: '2.5px solid rgba(255,255,255,0.35)',
                            borderTopColor: '#fff',
                            borderRadius: '50%',
                            animation: 'spin 0.75s linear infinite'
                          }} />
                          Sending your message...
                        </span>
                      ) : (
                        "Send Message — Let's Build Something Great →"
                      )}
                    </button>

                    <p style={{ textAlign: 'center', marginTop: 14, color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                      🔒 Your information is safe and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 80 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
          Let&apos;s Build Something{' '}
          <span className="accent-blue">Great Together.</span>
        </h2>
      </section>

      <Footer />

      {/* Spin keyframe for loader */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
