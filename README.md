# Click Cartel Digital Media — Complete Website

A premium, cinematic React.js website for Click Cartel Digital Media.

## Tech Stack
- React.js 18
- Tailwind CSS
- Framer Motion (page & scroll animations)
- GSAP (hero animations, orbs)
- React Router v6
- React Helmet Async (SEO)
- EmailJS (contact form)
- React CountUp (animated counters)

---

## ⚡ STEP 1 — Prerequisites

Install these ONCE on your machine:

```bash
# 1. Install Node.js (v18 or above) from https://nodejs.org
# Verify:
node -v
npm -v

# 2. Install Git from https://git-scm.com
# Verify:
git --version

# 3. Install VS Code from https://code.visualstudio.com
```

---

## 🚀 STEP 2 — Run Locally in VS Code

```bash
# 1. Open terminal in VS Code (Ctrl + ` on Windows / Cmd + ` on Mac)

# 2. Navigate to your desired folder
cd C:/Projects         # Windows
# OR
cd ~/Projects          # Mac/Linux

# 3. Copy/clone the project folder here (named clickcartel)

# 4. Open the project in VS Code
code clickcartel

# 5. Inside VS Code terminal, install dependencies
cd clickcartel
npm install

# 6. Start the development server
npm start
# → Opens at http://localhost:3000
```

---

## 📧 STEP 3 — Configure EmailJS (Contact Form)

1. Go to https://www.emailjs.com and create a free account
2. Add an **Email Service** (Gmail recommended) → copy **Service ID**
3. Create an **Email Template** with these variables:
   - `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{message}}`
   - Set "To Email" to: `heyansh@clickcartel.com`
   - Copy **Template ID**
4. Go to Account → **Public Key** → copy it

5. Open `src/components/pages/Contact.js` and replace:
```js
'YOUR_SERVICE_ID'   → your actual Service ID
'YOUR_TEMPLATE_ID'  → your actual Template ID
'YOUR_PUBLIC_KEY'   → your actual Public Key
```

---

## 🏗️ STEP 4 — Build for Production

```bash
# Creates optimized production build in /build folder
npm run build
```

---

## 🐙 STEP 5 — Push to GitHub

```bash
# 1. Create account at https://github.com

# 2. Create new repository named: clickcartel (don't add README)

# 3. In VS Code terminal (inside project folder):
git init
git add .
git commit -m "Initial commit: Click Cartel Digital Media website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/clickcartel.git
git push -u origin main

# Future updates:
git add .
git commit -m "Your commit message"
git push
```

---

## 🌐 STEP 6A — Deploy on Vercel (Recommended — FREE)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy (from project folder)
vercel

# Follow prompts:
# - Set up project? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: clickcartel
# - In which directory is your code? ./
# - Override settings? N

# 4. Production deploy
vercel --prod

# OR connect GitHub repo on vercel.com → Import Project → Auto-deploy on push
```

---

## 🌐 STEP 6B — Deploy on Netlify (FREE)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Build first
npm run build

# 4. Deploy
netlify deploy --prod --dir=build

# OR drag & drop the /build folder at netlify.com/drop
```

---

## 🌐 STEP 6C — Deploy on cPanel Hosting

```bash
# 1. Build the project locally
npm run build

# 2. This creates a /build folder with static files

# 3. Upload to cPanel:
#    - Open cPanel → File Manager → public_html
#    - Upload ALL contents of /build folder (not the folder itself)
#    - OR use FTP client (FileZilla)

# 4. For React Router to work on cPanel, create .htaccess in public_html:
```

Create file: `public_html/.htaccess`
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

---

## 🔄 STEP 7 — Connect Custom Domain (clickcartel.com)

### On Vercel:
1. Vercel Dashboard → Project → Settings → Domains
2. Add: `clickcartel.com` and `www.clickcartel.com`
3. Update DNS at your domain registrar:
   - A Record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

### On Netlify:
1. Netlify Dashboard → Site Settings → Domain Management
2. Add custom domain → Follow DNS instructions

---

## 📁 Project Structure

```
clickcartel/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.js          # Sticky glassmorphism navbar
│   │   │   ├── Footer.js          # Animated footer
│   │   │   ├── CustomCursor.js    # Custom cursor effect
│   │   │   └── AnimatedSection.js # Reusable scroll animation wrapper
│   │   ├── sections/
│   │   │   ├── HeroSection.js     # Cinematic hero with GSAP
│   │   │   ├── AboutSection.js    # Split layout about
│   │   │   ├── ServicesSection.js # Animated service cards
│   │   │   ├── WhyUsSection.js    # Counters + reasons
│   │   │   ├── ProcessSection.js  # 4-step animated process
│   │   │   ├── MarqueeSection.js  # Scrolling ticker
│   │   │   └── CTASection.js      # Premium CTA
│   │   └── pages/
│   │       ├── Home.js            # Home page
│   │       ├── Services.js        # Services with category tabs
│   │       └── Contact.js         # Contact form + map
│   ├── index.css                  # Global styles + Tailwind
│   ├── App.js                     # Router + page transitions
│   └── index.js                   # Entry point
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Recommended VS Code Extensions

Install these for best dev experience:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **Auto Import - ES6**
- **GitLens**

---

## 🔤 Fonts Used
- **Syne** — Display/headings (premium, geometric)
- **DM Sans** — Body text (clean, readable)
- **JetBrains Mono** — Labels, tags, monospace accents

---

## 🎨 Brand Colors
| Color | Hex |
|-------|-----|
| Background | `#030305` |
| Deep Black | `#08080f` |
| Purple Primary | `#6b2fb5` |
| Blue Primary | `#1a5fd4` |
| Electric Accent | `#00d4ff` |
| Gold | `#f5c842` |

---

## 📝 Notes
- Custom cursor is disabled on mobile (touch devices)
- Contact form requires EmailJS configuration to send emails
- Google Maps embed uses dark filter to match brand aesthetic
- All images use Unsplash CDN — replace with actual brand photos for production
- Remove `React.StrictMode` in `index.js` if you see double render issues in dev
