# 📧 EmailJS Setup Guide for Portfolio

## Current Status
✅ **EmailJS package installed**  
⚠️ **Configuration needed** (takes 5 minutes)

---

## 🚀 Quick Setup (5 Steps)

### Step 1: Create EmailJS Account
1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Create account with your Gmail: `humema.israr09@gmail.com`
4. Verify your email

### Step 2: Add Email Service
1. Click **"Email Services"** in left menu
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Login with your Gmail: `humema.israr09@gmail.com`
6. Click **"Create Service"**
7. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Click **"Email Templates"** in left menu
2. Click **"Create New Template"**
3. Design your email template:

**In "To Email" field:**
```
{{to_email}}
```

**In "Subject" field:**
```
{{subject}}
```

**In "Content" (HTML):**
```html
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Click **"Account"** (your name in top right)
2. Go to **"Account Settings"** or **"General"**
3. Find **"Public Key"**
4. **Copy the Public Key** (looks like: `user_xxxxxxx`)

### Step 5: Update Config File
Open: `src/app/config/emailjs.ts`

Replace these values:
```typescript
export const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID_HERE",     // Paste Service ID
  templateId: "YOUR_TEMPLATE_ID_HERE",   // Paste Template ID
  publicKey: "YOUR_PUBLIC_KEY_HERE",     // Paste Public Key
};
```

Example:
```typescript
export const EMAILJS_CONFIG = {
  serviceId: "service_abc123",
  templateId: "template_xyz789",
  publicKey: "user_def456",
};
```

---

## ✅ Test Your Setup

1. Save the config file
2. Go to: http://localhost:3000
3. Scroll to Contact section
4. Fill the form
5. Click "Send Message"
6. **Check your Gmail inbox** - you should receive the email! 🎉

---

## 🆘 Alternative: Direct Email

If you don't want to setup EmailJS right now:

**Just use the "Email Me Directly" button** in the contact form.
- It opens the user's email client
- Pre-fills the email with form data
- No setup required!

---

## 📝 Notes

- ✅ EmailJS is **100% FREE** (200 emails/month on free plan)
- ✅ No activation required like FormSubmit
- ✅ Works immediately after setup
- ✅ Professional and reliable
- ✅ Supports attachments and HTML emails

---

## Need Help?

If you face any issues:
1. Check your EmailJS dashboard for errors
2. Verify all 3 IDs are correct
3. Make sure Gmail is connected
4. Check spam folder in Gmail

**Or use the "Email Me Directly" button - works without any setup!**
