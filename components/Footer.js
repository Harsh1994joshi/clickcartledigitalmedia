import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src="/logo.jpg" alt="Click Cartel" className="footer-logo-img" />
            <div className="footer-logo-name">
              <strong>Click Cartel</strong>
              <span>Digital Media</span>
            </div>
          </div>
          <p>
            A results-driven digital marketing agency in Pune. We grow businesses with powerful strategies, AI-powered tools, and creative storytelling.
          </p>
          <div className="footer-social">
            {[['📷','Instagram'],['💼','LinkedIn'],['📘','Facebook'],['🐦','X / Twitter']].map(([icon, label]) => (
              <a key={label} href="#" className="soc-btn" title={label}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/#about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">SEO & Digital Marketing</Link></li>
            <li><Link href="/services">Social Media Marketing</Link></li>
            <li><Link href="/services">Branding & Identity</Link></li>
            <li><Link href="/services">Web Development</Link></li>
            <li><Link href="/services">Performance Marketing</Link></li>
            <li><Link href="/services">AI & Automation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="tel:+919075002323">+91 90750 02323</a></li>
            <li><a href="tel:+917219776117">+91 72197 76117</a></li>
            <li><a href="mailto:info@clickcartel.com">info@clickcartel.com</a></li>
            <li><a href="#">Pune, Maharashtra 🇮🇳</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Click Cartel Digital Media. All rights reserved.</p>
        <p>Built with ❤️ in Pune, India</p>
      </div>
    </footer>
  )
}
