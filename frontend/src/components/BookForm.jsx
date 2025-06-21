import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [introduction, setintroduction] = useState("");
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // 🔐 Check authentication before showing content
  useEffect(() => {
    if (!sessionStorage.getItem("authenticated")) {
      navigate("/"); // Redirect to lock page if not authenticated
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !author || !introduction || !image) {
      setErrorMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("introduction", introduction);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/api/books", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadedImageUrl(response.data.imageUrl);
      setTitle("");
      setDescription("");
      setAuthor("");
      setIntroduction("");
      setImage(null);
      setErrorMessage("");
      setSuccessMessage("Book uploaded successfully!");
    } catch (error) {
      setErrorMessage("Failed to upload book. Please try again.");
    }
  };

  const handleRedirect = () => {
    navigate('/books');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow-lg py-24">
      <h2 className="text-2xl font-bold text-center mb-6">Upload a New Book</h2>

      {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-medium">
          Description
        </label>
        <textarea
          id="description"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      

      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-medium">
          Author
        </label>
        <input
          id="author"
          type="text"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="briefIntroduction" className="block text-gray-700 font-medium">
          Brief Introduction
        </label>
        <textarea
          id="introduction"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={introduction}
          onChange={(e) => setintroduction(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 w-full md:w-1/2 lg:w-1/4">
          Image
        </label>
        <input
          id="image"
          type="file"
          className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400  md:w-1/2 lg:w-1/4"
          onChange={handleImageChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      >
        Upload Book
      </button>

      <button
        type="button"
        onClick={handleRedirect}
        className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Go to Books Page
      </button>

      {uploadedImageUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700">Uploaded Book Cover</h3>
          <img
  src={uploadedImageUrl}
  alt="Uploaded Book Cover"
  className="w-auto h-auto max-w-full max-h-96 mx-auto mt-4 border rounded shadow-lg object-contain"
/>
        </div>
      )}
    </form>
  );
};

export default BookForm;
