const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 2525,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  console.log("📧 sendEmail called for:", to);

  try {
    const info = await transporter.sendMail({
      from: `"ChefNest" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email Sent");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
  } catch (err) {
    console.error("❌ Email Error:", err);
    console.error(err);
  }
};

module.exports = sendEmail;