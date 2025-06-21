const nodemailer = require('nodemailer');

const sendEmail = async (name, email, country, place, phone, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your email app password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'your-email@example.com',  // Change this to your email
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Country: ${country}
      Place: ${place}
      Phone: ${phone}
      Message: ${message}
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
