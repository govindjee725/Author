const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const Book = require('../models/book');

const router = express.Router();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer middleware for file uploads
const upload = multer({ dest: 'uploads/' });

/**
 * @desc Fetch all books
 * @route GET /api/books
 */
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }); // Sort by newest
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books' });
  }
});

/**
 * @desc Add a new book
 * @route POST /api/books
 */
router.post('/', upload.single('image'), async (req, res) => {
  const { title, description, author,introduction } = req.body;
  const image = req.file;

  if (!title || !description || !author || !introduction ||!image ) {
    return res.status(400).json({ message: 'All fields (title, description, author, image) are required' });
  }

  try {
    // Upload the image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(image.path, {
      folder: 'books', // Organize images in a "books" folder
    });

    // Create the book object
    const newBook = new Book({
      title,
      description,
      author,
      introduction, 
      imageUrl: uploadedImage.secure_url,
      // Use the Cloudinary image URL
    });

    // Save the book to the database
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error('Error saving book:', error);
    res.status(500).json({ message: 'Error saving book' });
  }
});

/**
 * @desc Get details of a specific book
 * @route GET /api/books/:id
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ message: 'Error fetching book' });
  }
});

/**
 * @desc Update a book
 * @route PUT /api/books/:id
 */
router.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, description, author,introduction } = req.body;
  const image = req.file;

  try {
    const updatedData = { title, description, author,introduction };

    // If a new image is uploaded, update the image URL
    if (image) {
      const uploadedImage = await cloudinary.uploader.upload(image.path, {
        folder: 'books',
      });
      updatedData.imageUrl = uploadedImage.secure_url;
    }

    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ message: 'Error updating book' });
  }
});

/**
 * @desc Delete a book
 * @route DELETE /api/books/:id
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ message: 'Error deleting book' });
  }
});

module.exports = router;
