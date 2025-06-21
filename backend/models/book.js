const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: { 
    type: String, 
    required: true 
  },
  

  imageUrl: {
    type: String, // Field for storing image URL
    required: true,
  },
  introduction: { 
    type: String, 
    required: true 
  },

  createdAt: {
     type: Date,
      default: Date.now 
    },
  
}, {
  timestamps: true,
});

module.exports = mongoose.model('Book', bookSchema);
