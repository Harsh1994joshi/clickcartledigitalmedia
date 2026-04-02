# Click Cartel Digital Media — Website

Premium light-mode Next.js landing page for Click Cartel Digital Media with a **fully working contact form** that sends emails to your Outlook inbox.

---

## 📧 Contact Form Setup (IMPORTANT — Do this first!)

The contact form uses **Nodemailer + Outlook SMTP** to send emails.

### Step 1 — Set up your environment variables

Create a file called `.env.local` in the project root:

```env
SMTP_USER=your-outlook-email@outlook.com
SMTP_PASS=your-password-or-app-password
RECEIVER_EMAIL=developer2@knightmotion.com
```

### Step 2 — Get your Outlook App Password (if 2FA is enabled)

If your Microsoft account has Two-Factor Authentication (recommended):

1. Go to → https://account.microsoft.com/security
2. Click **"Advanced security options"**
3. Scroll to **"App passwords"** → click **"Create a new app password"**
4. Copy the generated password → paste it as `SMTP_PASS`

> ⚠️ If 2FA is NOT enabled, you can use your regular Outlook password as `SMTP_PASS`. But enabling 2FA is strongly recommended.

### Step 3 — Allow SMTP on your Outlook account

Make sure **SMTP AUTH** is enabled for your account:
1. Go to → https://outlook.live.com/mail/options/mail/accounts
2. Or go to Outlook.com → Settings → View all Outlook settings → Mail → Sync email
3. Make sure **"Let devices and apps use POP"** or SMTP is enabled

---

## 🚀 Deploy to Vercel

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/click-cartel.git
git push -u origin main
```

### Step 2 — Import on Vercel
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repository
3. Click **Environment Variables** and add:

| Key | Value |
|-----|-------|
| `SMTP_USER` | `your-outlook-email@outlook.com` |
| `SMTP_PASS` | `your-app-password` |
| `RECEIVER_EMAIL` | `developer2@knightmotion.com` |

4. Click **Deploy** → Done! 🎉

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Create your env file
cp .env.example .env.local
# Then edit .env.local with your real credentials

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
click-cartel/
├── pages/
│   ├── api/
│   │   └── contact.js      ← Email API route (Nodemailer)
│   ├── _app.js             ← Cursor + scroll animations
│   ├── _document.js        ← Google Fonts
│   ├── index.js            ← Home page
│   ├── services.js         ← Services page
│   └── contact.js          ← Contact page (form)
├── components/
│   ├── Navbar.js
│   └── Footer.js
├── styles/
│   └── globals.css         ← All styles (light mode)
├── public/
│   └── logo.jpg            ← Your brand logo
├── .env.example            ← Template (safe to commit)
├── .env.local              ← Your secrets (NEVER commit)
└── package.json
```

---

## ✉️ How the contact form works

1. User fills the form and clicks **Send**
2. Form calls `/api/contact` (POST request)
3. API validates the fields
4. **Email 1**: Sends a rich HTML notification to `developer2@knightmotion.com` with the lead details + Reply button
5. **Email 2**: Sends a branded auto-reply confirmation to the person who submitted
6. User sees a success screen

---

## 🎨 Tech Stack
- **Next.js 14** (Pages Router)
- **Nodemailer** (SMTP email)
- **Tailwind CSS**
- **Google Fonts** — Syne, DM Sans, Space Mono
- **Vercel** — deployment platform

---

## 📞 Business Info
- **Location:** Pune, Maharashtra
- **Phone:** +91 90750 02323 / +91 72197 76117
- **Email:** info@clickcartel.com
