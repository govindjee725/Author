import React from 'react';

const GuidePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      {/* <header className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">Author's Guide</h1>
          <p className="text-gray-600 mt-2">
            A collection of insightful guides to enhance your knowledge and skills.
          </p>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-gray-700 mt-4">
            Welcome to the guide section of the website. Here, you'll find carefully curated content
            designed to provide you with valuable insights, strategies, and actionable steps to achieve
            your goals.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc ml-6 mt-4 text-gray-700">
            <li>
              <a href="#guide-1" className="text-blue-500 hover:underline">
                Understanding Creativity
              </a>
            </li>
            <li>
              <a href="#guide-2" className="text-blue-500 hover:underline">
                Writing Your First Book
              </a>
            </li>
            <li>
              <a href="#guide-3" className="text-blue-500 hover:underline">
                Building a Personal Brand
              </a>
            </li>
          </ul>
        </section>

        {/* Featured Guides */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div
              id="guide-1"
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="img12.jpg"
                alt="Guide 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Understanding Creativity
                </h3>
                <p className="text-gray-700 mt-2">
                  Dive deep into the principles of creativity and learn how to cultivate it in your
                  daily life.
                </p>
                <a
                  href="/guides/understanding-creativity"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Guide 2 */}
            <div
              id="guide-2"
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="img21.jpg"
                alt="Guide 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Writing Your First Book
                </h3>
                <p className="text-gray-700 mt-2">
                  A step-by-step guide to turning your ideas into a published book.
                </p>
                <a
                  href="/guides/writing-your-first-book"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Guide 3 */}
            <div
              id="guide-3"
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://via.placeholder.com/300"
                alt="Guide 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Building a Personal Brand
                </h3>
                <p className="text-gray-700 mt-2">
                  Learn the secrets of building an impactful personal brand that resonates with your
                  audience.
                </p>
                <a
                  href="/guides/building-a-personal-brand"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p>&copy; 2025 Author's Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GuidePage;
