const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your App password
  },
});

// Function to send subscription email to you
const sendSubscriptionEmail = async (subscriberEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your own email
    to: process.env.ADMIN_EMAIL, // ✅ Change this to your own email
    subject: "New Subscriber Alert 🚀",
    text: `A new user has subscribed with this email: ${subscriberEmail}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Subscription notification sent successfully.");
  } catch (error) {
    console.error("Error sending subscription email:", error);
  }
};

module.exports = { sendSubscriptionEmail };
