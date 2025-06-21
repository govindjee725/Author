import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Unable to fetch books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/book/${id}`); // Navigate to the details page with the book's ID
  };

  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded max-w-lg mx-auto mt-6">
        {error}
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        <p>No books available. Add some books to display here.</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto p-6 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">Explore My Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book._id}
            onClick={() => handleCardClick(book._id)}
            className="relative group bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
          >
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs uppercase px-2 py-1 rounded-full">
              Bestseller
            </span>
            
            <img
              src={book.imageUrl || 'https://via.placeholder.com/300x400?text=No+Image'}
              alt={book.title}
              className="w-full h-72 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900 truncate">{book.title}</h3>
              <p className="text-gray-700 mt-2 truncate">{book.author}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;
