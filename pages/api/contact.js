import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, phone, email, service, message } = req.body;

  // Basic validation
  if (!name || !email || !message || !phone) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  // Create transporter using Outlook SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // TLS
    auth: {
      user: process.env.SMTP_USER,   // your Outlook email (sender)
      pass: process.env.SMTP_PASS,   // your Outlook password or App Password
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
  });

  // HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#F5F6FA;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F6FA;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(58,123,213,0.1);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#3A7BD5,#7B4FBF);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">
                📬 New Lead from Website
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
                Someone filled out the contact form on clickcartel.com
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Alert badge -->
              <div style="background:rgba(39,174,96,0.08);border:1px solid rgba(39,174,96,0.2);border-radius:8px;padding:12px 16px;margin-bottom:28px;display:flex;align-items:center;">
                <span style="color:#27AE60;font-size:13px;font-weight:600;">✅ New enquiry received — respond within 24 hours for best conversion</span>
              </div>

              <!-- Details -->
              <h2 style="margin:0 0 20px;color:#1A1F36;font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E2E6F0;padding-bottom:10px;">
                Contact Details
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F0F2F8;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="color:#8892B0;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">👤 Full Name</td>
                        <td style="color:#1A1F36;font-size:15px;font-weight:600;">${name}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F0F2F8;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="color:#8892B0;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">📞 Phone</td>
                        <td style="color:#1A1F36;font-size:15px;font-weight:600;">
                          <a href="tel:${phone}" style="color:#3A7BD5;text-decoration:none;">${phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F0F2F8;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="color:#8892B0;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">📧 Email</td>
                        <td style="color:#1A1F36;font-size:15px;font-weight:600;">
                          <a href="mailto:${email}" style="color:#3A7BD5;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #F0F2F8;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="color:#8892B0;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">🎯 Service</td>
                        <td style="color:#1A1F36;font-size:15px;font-weight:600;">${service || 'Not specified'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <h2 style="margin:28px 0 14px;color:#1A1F36;font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                💬 Message
              </h2>
              <div style="background:#F8F9FF;border:1px solid #E2E6F0;border-left:3px solid #3A7BD5;border-radius:8px;padding:20px;color:#4A5270;font-size:15px;line-height:1.75;">
                ${message.replace(/\n/g, '<br/>')}
              </div>

              <!-- CTA Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your enquiry at Click Cartel Digital Media&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out to Click Cartel Digital Media!%0D%0A%0D%0A"
                       style="display:inline-block;background:linear-gradient(135deg,#3A7BD5,#7B4FBF);color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;margin-right:12px;">
                      ✉️ Reply to ${name}
                    </a>
                    <a href="tel:${phone}"
                       style="display:inline-block;background:#27AE60;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">
                      📞 Call Now
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5F6FA;padding:24px 40px;border-top:1px solid #E2E6F0;text-align:center;">
              <p style="margin:0;color:#8892B0;font-size:12px;">
                This email was sent automatically from the contact form at
                <strong style="color:#3A7BD5;">Click Cartel Digital Media</strong> website.<br/>
                📍 Pune, Maharashtra · 📞 +91 90750 02323 · 📧 info@clickcartel.com
              </p>
              <p style="margin:8px 0 0;color:#B0B8CC;font-size:11px;">
                © 2025 Click Cartel Digital Media. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // Auto-reply HTML for the person who submitted
  const autoReplyHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank you - Click Cartel Digital Media</title>
</head>
<body style="margin:0;padding:0;background:#F5F6FA;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F6FA;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(58,123,213,0.1);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#3A7BD5,#7B4FBF);padding:40px;text-align:center;">
              <div style="font-size:48px;margin-bottom:12px;">🎉</div>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:800;">Thank You, ${name}!</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">
                We've received your message and will get back to you soon.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="color:#4A5270;font-size:15px;line-height:1.8;margin:0 0 20px;">
                Hi <strong>${name}</strong>,<br/><br/>
                Thank you for reaching out to <strong style="color:#3A7BD5;">Click Cartel Digital Media</strong>!
                We've received your enquiry and our team will review it shortly.
              </p>

              <div style="background:rgba(58,123,213,0.05);border:1px solid rgba(58,123,213,0.15);border-radius:10px;padding:20px 24px;margin-bottom:28px;">
                <h3 style="margin:0 0 14px;color:#1A1F36;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Your Submission Summary</h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding:6px 0;color:#8892B0;font-size:13px;width:120px;">Service:</td><td style="color:#1A1F36;font-size:13px;font-weight:600;">${service || 'Not specified'}</td></tr>
                  <tr><td style="padding:6px 0;color:#8892B0;font-size:13px;">Phone:</td><td style="color:#1A1F36;font-size:13px;font-weight:600;">${phone}</td></tr>
                  <tr><td style="padding:6px 0;color:#8892B0;font-size:13px;">Email:</td><td style="color:#1A1F36;font-size:13px;font-weight:600;">${email}</td></tr>
                </table>
              </div>

              <h3 style="margin:0 0 16px;color:#1A1F36;font-size:15px;font-weight:700;">What happens next?</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;vertical-align:top;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;height:36px;background:linear-gradient(135deg,#3A7BD5,#7B4FBF);border-radius:50%;text-align:center;vertical-align:middle;color:#fff;font-weight:800;font-size:14px;">1</td>
                        <td style="padding-left:14px;color:#4A5270;font-size:14px;line-height:1.6;">Our team reviews your enquiry within <strong>2-4 hours</strong> (Mon–Sat, 10am–7pm IST).</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;vertical-align:top;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;height:36px;background:linear-gradient(135deg,#3A7BD5,#7B4FBF);border-radius:50%;text-align:center;vertical-align:middle;color:#fff;font-weight:800;font-size:14px;">2</td>
                        <td style="padding-left:14px;color:#4A5270;font-size:14px;line-height:1.6;">We'll call or email you to schedule a <strong>free strategy session</strong>.</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;vertical-align:top;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:36px;height:36px;background:linear-gradient(135deg,#27AE60,#52C88A);border-radius:50%;text-align:center;vertical-align:middle;color:#fff;font-weight:800;font-size:14px;">3</td>
                        <td style="padding-left:14px;color:#4A5270;font-size:14px;line-height:1.6;">We build a <strong>customized growth plan</strong> tailored to your business.</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Contact info -->
              <div style="margin-top:28px;padding:20px 24px;background:#F8F9FF;border-radius:10px;border:1px solid #E2E6F0;">
                <p style="margin:0 0 8px;color:#1A1F36;font-weight:700;font-size:14px;">Need urgent help? Reach us directly:</p>
                <p style="margin:0;color:#4A5270;font-size:14px;">
                  📞 <a href="tel:+919075002323" style="color:#3A7BD5;text-decoration:none;">+91 90750 02323</a> &nbsp;|&nbsp;
                  📞 <a href="tel:+917219776117" style="color:#3A7BD5;text-decoration:none;">+91 72197 76117</a><br/>
                  📧 <a href="mailto:info@clickcartel.com" style="color:#3A7BD5;text-decoration:none;">info@clickcartel.com</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5F6FA;padding:24px 40px;border-top:1px solid #E2E6F0;text-align:center;">
              <p style="margin:0;color:#8892B0;font-size:12px;">
                <strong style="color:#3A7BD5;">Click Cartel Digital Media</strong><br/>
                📍 Pune, Maharashtra, India
              </p>
              <p style="margin:8px 0 0;color:#B0B8CC;font-size:11px;">
                © 2025 Click Cartel Digital Media. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    // Verify SMTP connection
    await transporter.verify();

    // 1. Send notification email TO Click Cartel
    await transporter.sendMail({
      from: `"Click Cartel Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || 'developer2@knightmotion.com',
      replyTo: email,
      subject: `🔔 New Lead: ${name} — ${service || 'General Enquiry'} | Click Cartel`,
      html: htmlContent,
      text: `New Contact Form Submission\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service || 'Not specified'}\n\nMessage:\n${message}`,
    });

    // 2. Send auto-reply TO the person who submitted
    await transporter.sendMail({
      from: `"Click Cartel Digital Media" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting Click Cartel Digital Media, ${name}! 🚀`,
      html: autoReplyHtml,
      text: `Hi ${name},\n\nThank you for reaching out to Click Cartel Digital Media!\n\nWe've received your enquiry and will get back to you within 24 hours.\n\nFor urgent queries:\nPhone: +91 90750 02323\nEmail: info@clickcartel.com\n\nBest regards,\nClick Cartel Digital Media Team\nPune, Maharashtra`,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you within 24 hours.',
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
