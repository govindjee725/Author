import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Only needed if you're using Axios

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual News API key
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a991fcf04b4e46a1a5e4273e3f10f854');
        setNews(response.data.articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching news: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Latest News</h1>
      {news.length === 0 ? (
        <p className="text-xl text-center text-gray-600">No news available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/300x200'}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h2>
                  <p className="text-gray-600 text-sm">{article.description || 'No description available.'}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
