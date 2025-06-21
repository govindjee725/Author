import React, { useState } from "react";
import axios from "axios";
const HomePage = () => {
  const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubscribe = async (e) => {
      e.preventDefault();
      if (!email.includes("@")) {
        setMessage("Please enter a valid email.");
        return;
      }
  
      try {
        const response = await axios.post("http://localhost:5000/subscribe", { email });
        setMessage(response.data.message);
        setEmail(""); // Clear input after submission
      } catch (error) {
        setMessage("Something went wrong. Try again!");
      }
    };
  return (
    <div className="bg-gray-50 py-8 pb-0 mb-0">
      {/* Hero Section */}
      <section className="relative bg-[#30D5C8] text-white text-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to My World of Words</h1>
          <p className="text-xl mb-6">
            Discover stories, insights, and a journey through the art of storytelling.
          </p>
          <div className="flex flex-col items-center gap-6">
          <img
              src="frankhome.jpg"
              alt="Author"
              className="rounded-full w-28 h-32 md:w-32 md:h-36 lg:w-40 lg:h-48 border-2"
          />
          <a
              href="#books"
              className="bg-white text-[#30D5C8] font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition"
          >
              Explore My Books
          </a>
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <a href="/about">
          <h2 className="text-4xl font-bold text-[#30D5C8] mb-4">About Me</h2>
          </a>
          <p className="text-gray-700 text-lg">
          Frank has a master’s degree in Counselor Education.  He’s been a speaker, trainer, and seminar presenter in the United States and abroad. His presentations focused on management, leadership skills, and related topics.  He consistently received high praise for his training presentations.  
          As an employee assistance professional for a large corporation, Frank helped individuals find resolutions to behavioral and performance issues in their personal and workplace lives.
          His community service included being a former Advisory Board Member for Faith House Domestic Violence Center and over 10 years in the Arizona Rangers Law Enforcement Auxiliary. He was also a former president of a community anti-substance abuse organization.
          Frank and his wife, Alice, married each other twice. It’s possible they were the only ones who could put up with each other. 
          Frank enjoys riding his mountain bike, collecting cufflinks, and trying to satisfy a curiosity about ‘why we’re here’.
          Early in life, Frank had no specific recollection of a particular life’s calling. Wanting to do so many different things. he hoped to use any abilities he had for noble causes. Sometimes, however, because of alcohol, he missed the mark. Sober now, for a long time, he strives to live a life more principled. 
          Frank was drafted into the U. S. Army after receiving his undergraduate degree. He served at Fort Knox, Kentucky as a Classification-Interviewer at the Reception Station. This was an experience that was invaluable and helped shape some of his future perceptions. 

          </p>
        </div>
      </section>

       {/* Favorites Section */}
       <section id="favorites" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#30D5C8] mb-12">Favorites</h2>
          <div className="text-center text-gray-700 text-lg">
            <h3 className="text-2xl font-semibold text-[#30D5C8] mb-4">Some of Frank’s Favorite Movies and TV Programs</h3>
            <ul className="list-none">
              <li>Chinatown (1974)</li>
              <li>A River Runs Through It (1992)</li>
              <li>Tombstone (1993)</li>
              <li>The Razor’s Edge (1946)</li>
              <li>The Thomas Crown Affair (1968)</li>
              <li>The Great Gatsby (1974)</li>
              <li>The Best Man (1964)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Highlighted Books Section */}
      <section id="books" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#30D5C8] mb-12">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Book Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
              <img
                src="875789.jpg"
                alt="How to Be the Boss You Always Wanted to Work For"
                className="w-full  object-cover group-hover:scale-105 transform transition-transform"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-violet-900">How to Be the Boss You Always Wanted to Work For</h3>
                <p className="text-gray-600 mt-2">
                My next book which I’ve already completed much of the work on, will be How to Be the Boss You Always Wanted to Work For. The subtitle is And the Leader You Always Wanted to Follow.
                </p>
                <a
                  href="/books"
                  className="text-[#30D5C8] font-semibold mt-4 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
              <img
                src="732000.jpg"
                alt="To kill Mockingbird"
                className="w-full  object-cover group-hover:scale-105 transform transition-transform"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-violet-900">He’s what every boy wants to be when he grows up and wishes he had been when he’s an old man</h3>
                <p className="text-gray-600 mt-2">
                Recall the line from Quiz Show: “If you want to be a knight, act like a knight.” It’s never too late to begin living the life role you want.....
                </p>
                <a
                  href="/books"
                  className="text-[#30D5C8] font-semibold mt-4 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
              <img
                src="Know.jpg"
                alt="You know what they say, ‘If you don’t have anything nice to say, come sit by me."
                className="w-full h-64 object-cover group-hover:scale-105 transform transition-transform"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-violet-900">You know what they say, ‘If you don’t have anything nice to say, come sit by me.</h3>
                <p className="text-gray-600 mt-2">
                The gentle sunlight filters through the window, casting a golden hue over the desk where words come to life. Each scratch of the fountain pen on paper whispers tales untold, ideas shaping themselves into sentences.....
                </p>
                <a
                  href="/books"
                  className="text-[#30D5C8] font-semibold mt-4 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
            {/* Repeat book cards as needed */}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#30D5C8] mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <span>
              <img src="/gallery/AZ Hike1 copy.JPG" alt="Gallery Image 1" className="rounded-lg shadow-lg h-96 w-96" />
              <h3>AZ hike</h3>
            </span>
            <span>
              <img src="/gallery/Bell Rock Sedona copy.JPG" alt="Gallery Image 2" className="rounded-lg shadow-lg h-96 w-96 gap-4" />
              <h1 className="b">Bell Rock, Sedona</h1>
            </span> 
            <span>
              <img src="/gallery/Mushroom rocks copy.JPG" alt="Gallery Image 2" className="rounded-lg shadow-lg h-96 w-96 gap-4" />
              <h1 className="b">Mushroom rocks</h1>
            </span>
            <span>
              <img src="/gallery/Ramsey Canyon copy.JPG" alt="Gallery Image 2" className="rounded-lg shadow-lg h-96 w-96 gap-4" />
              <h1 className="b">Ramsey Canyon</h1>
            </span>
            <span>
              <img src="/gallery/Wild Ponies on Res copy.jpg" alt="Gallery Image 2" className="rounded-lg shadow-lg h-96 w-96 gap-4" />
              <h1 className="b">Wild ponies</h1>
            </span> 
            <span>
              <img src="/gallery/Desert Trail copy.jpeg" alt="Gallery Image 3" className="rounded-lg shadow-lg h-96 w-96" />
              <h3>Desert trail</h3>
            </span>
            
           
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#30D5C8] mb-12">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Testimonial */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700">
                "An absolutely brilliant book! It captivated me from the first page and left me wanting
                more."
              </p>
              <span className="block mt-4 text-[#30D5C8] font-bold">- Govind Kumar</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700">
              "An extraordinary book that exceeded all my expectations! I couldn't put it down."
                more."
              </p>
              <span className="block mt-4 text-[#30D5C8] font-bold">- Vikash Sengar</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700">
              "A masterpiece! This book grabbed my attention instantly and kept me hooked until the very end."
              </p>
              <span className="block mt-4 text-[#30D5C8] font-bold">- Anjani Singh</span>
            </div>
            {/* Repeat testimonials as needed */}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      {/* <section className="bg-violet-700 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">
            Subscribe to my newsletter and never miss a new release or update.
          </p>
          <form className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-gray-900 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-violet-700 font-semibold rounded-r hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
       <section className="bg-[#30D5C8] text-white py-16 px-6 text-center  w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-6">
          Subscribe to my newsletter and never miss a new release or update.
        </p>
        <p className="text-lg mb-6">
        “Wisdom can be found in the most unlikely places.” A Good Year (2006)
        </p>
        <p className="text-lg mb-6">
        “I am fearful when I see people substituting fear for reason.” The Day the Earth Stood Still” (1951)
        </p>
        <form className="flex flex-col sm:flex-row justify-center" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 text-gray-900 rounded-l focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-[#30D5C8] font-semibold rounded-r hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-green-300">{message}</p>}
      </div>
    </section>
    </div>
  );
};

export default HomePage;