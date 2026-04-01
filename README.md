# Click Cartel Digital Media — Landing Page

A premium dark-themed Next.js landing page for Click Cartel Digital Media, a digital marketing agency in Pune.

## 🚀 Pages
- **Home** (`/`) — Hero, About, Services, Why Choose Us, Process, CTA
- **Services** (`/services`) — Full service categories with hover animations
- **Contact** (`/contact`) — Contact form + info with submission handling

## ✨ Features
- Custom animated cursor
- Scroll-triggered reveal animations
- Floating background shapes & grid
- Marquee ticker bar
- Hover micro-interactions on all cards
- Mobile responsive with hamburger menu
- Noise texture overlay
- Premium Syne + DM Sans + Space Mono typography

## 🛠 Tech Stack
- **Next.js 14** (Pages Router)
- **Tailwind CSS**
- **Google Fonts** (Syne, DM Sans, Space Mono)
- Pure CSS animations (no external animation libraries needed)

## 📦 Setup & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## 🌐 Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! 🎉

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

## 📁 Project Structure
```
click-cartel/
├── pages/
│   ├── _app.js         # Global cursor + scroll animations
│   ├── _document.js    # Custom HTML head (fonts)
│   ├── index.js        # Home page
│   ├── services.js     # Services page
│   └── contact.js      # Contact page
├── components/
│   ├── Navbar.js       # Navigation with scroll effect
│   └── Footer.js       # Site footer
├── styles/
│   └── globals.css     # All styles + animations
├── public/             # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── vercel.json
```

## 📞 Business Info
- **Location:** Pune, Maharashtra
- **Phone:** +91 90750 02323 / +91 72197 76117
- **Email:** info@clickcartel.com
