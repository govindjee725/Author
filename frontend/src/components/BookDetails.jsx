import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams(); // Extract the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError('Unable to fetch book details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  // const handleDelete = async () => {
  //   const confirmDelete = window.confirm("Are you sure you want to delete this book?");
  //   if (!confirmDelete) return;

  //   try {
  //     await axios.delete(`http://localhost:5000/api/books/${id}`);
  //     alert("Book deleted successfully!");
  //     navigate('/'); // Redirect to the book list page
  //   } catch (error) {
  //     console.error('Error deleting book:', error);
  //     alert("Failed to delete the book. Please try again later.");
  //   }
  // };

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

  return (
    <section className="max-w-5xl mx-auto p-32">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back
      </button>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src={book.imageUrl || 'https://via.placeholder.com/300x400?text=No+Image'}
          alt={book.title}
          className="w-full lg:w-1/3 h-auto rounded-lg shadow-lg"
        />
        <div className="mt-6 lg:mt-0 lg:ml-8">
          <h1 className="text-3xl font-bold text-black">{book.title}</h1>
          <p className="text-gray-700 mt-4">{book.description}</p>
          <p className="text-gray-700 mt-4">{book.introduction}</p>
          {/* <button
            onClick={handleDelete}
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete Book
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
