const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const session = require('express-session');
const sendEmail = require('./config/sendEmail'); 
const passport = require('passport');
const MongoStore = require('connect-mongo');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorMiddleware');
require("./config/passport")(passport);
const nodemailer = require("nodemailer");
const { sendSubscriptionEmail } = require("./config/emailService");
// Import routes
const bookRoutes = require('../backend/routes/bookRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // To handle JSON payloads
app.use(express.urlencoded({ extended: true }));

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);




// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration


// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to handle form data and file uploads
const upload = multer({ dest: 'uploads/' });

// Routes
app.use('/api/books', bookRoutes); // Use bookRoutes for all book-related endpoints
app.use('/auth', authRoutes);


// Route to handle book form submission
app.post('/api/books/upload', upload.single('image'), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file;

  if (!title || !description || !image) {
    return res.status(400).json({ message: 'Title, description, and image are required' });
  }

  try {
    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(image.path, {
      folder: 'books/', // Optional folder for image organization
    });

    const bookData = {
      title,
      description,
      imageUrl: uploadedImage.secure_url, // URL of the uploaded image
    };

    res.status(201).json({
      message: 'Image uploaded successfully',
      data: bookData,
    });
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body; // Extract 'email' from request body

  if (!email) {
    return res.status(400).json({ message: "Email is required!" });
  }

  try {
    await sendSubscriptionEmail(email); // Use sendSubscriptionEmail function

    res.json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, country, place, phone, message } = req.body;

  if (!name || !email || !country || !place || !phone || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    await sendEmail(name, email, country, place, phone, message);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

app.use(errorHandler);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
