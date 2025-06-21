// src/components/BlogAndReads.jsx
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Drive-by Management",
    excerpt: "The Boss calls a meeting to solve a problem or to get ideas relevant to a situation...",
    fullText: "The Boss calls a meeting to solve a problem or to get ideas relevant to a situation. The Boss begins by telling the group he/she is certain the group can develop a list of good ideas. The Boss says he/she will write everyone’s ideas down—on a flip chart, whiteboard, or whatever. People start throwing out ideas and the Boss begins writing them down. But you're sitting quietly because you’re thinking through the problem or situation. You develop your idea and then—You present your novel idea by saying, “This may sound crazy, but why don’t we try this?” You go on to describe your unusual idea in detail. Your intellectual offspring, your baby, so to speak, is out for all to hear. The room goes silent. Your peers don’t look directly at you. The Boss doesn’t write your idea down, maybe stares at you, and might say something like, “Okay, now can we have a good idea.”Your idea is instantly disrespected and shot down. Figuratively, this is a violent act. Others witness this act, and a witness to violence is also a victim of that violence. The witness or witnesses share the trauma. So, what do the witnesses learn? Keep quiet so you and your ideas, your intellectual offspring, don’t get shot down in such a way. They also learn to keep their mouths shut or submit only ideas they think the Boss wants to hear. This is what I call Drive-by Management. As a Boss, here’s the meeting you want to be known for. There are generally two parts to problem-solving and idea-generation meetings: The generation of ideas and the evaluation of ideas. The first part is simple, have people throw out any ideas they have, including those that may sound crazy. The second part is to have evaluation criteria to find the best idea or ideas. Both processes are done without the participation of people’s egos. These are reason activities, not emotional activities. There are many ways to structure such meetings. But ALWAYS write down everyone’s ideas—no matter how silly, stupid, or unrelated those ideas seem. If you judge or evaluate ideas before the evaluation process, you’ll lose valuable participation from others. Value every idea you get and treat each idea with respect. Don’t do a Drive-by on someone’s idea. Why? Because the evaluation process will weed out lesser ideas and move the best to the top. Many times, final ideas are an amalgam of more than one idea. Another reason to encourage unusual, even ‘stupid’ ideas—many things we take for common today started as ‘stupid’ ideas.",
    image: "Ocean copy.JPG",
  },
  {
    id: 2,
    title: "A Meeting We’ve All Been To",
    excerpt: "A humorous take on management failures and lessons learned.",
    fullText: "A humorous take on management failures and lessons learned. Meetings can sometimes be inefficient, unproductive, and full of distractions. Here’s how to improve them...",
    image: "failure.jpg",
  },
];

const favoriteReads = [
  {
    id: 1,
    title: "The Razor’s Edge by W. Somerset Maugham",
    description:
      "A young WWI pilot returns and begins a lifelong journey to answer the hard questions about life. A journey that includes many inner explorations.",
  },
  {
    id: 2,
    title: "The Lords of Discipline by Pat Conroy",
    description:
      "Set at a military institute in South Carolina. A young cadet encounters conflicts that accelerate his growth into adulthood.",
  },
  {
    id: 3,
    title: "Man’s Search for Meaning by Viktor Frankl",
    description:
      "Viktor Frankl spent over three years as a prisoner in a Nazi concentration camp. He secretly wrote a book about love, making it a timeless masterpiece.",
  },
  {
    id: 4,
    title: "The Bhagavad Gita (Eknath Easwaran Translation)",
    description:
      "A Hindu scripture about Arjuna’s moral dilemmas before battle, with profound philosophical insights applicable today.",
  },
  {
    id: 5,
    title: "Anything written by Malcolm Gladwell",
    description:
      "Malcolm Gladwell’s books offer insightful, entertaining, and educational perspectives on human behavior and psychology.",
  },
];

const BlogAndReads = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const blogsPerPage = 3;

  const handlePageClick = ({ selected }) => setCurrentPage(selected);
  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  const displayedBlogs = blogs.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="container mx-auto">
        {/* Blog Section */}
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {displayedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
             <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                <p className="text-gray-600">
                  {expandedBlog === blog.id ? blog.fullText : `${blog.excerpt} `}
                </p>
                <button
                  onClick={() => toggleReadMore(blog.id)}
                  className="mt-4 text-blue-500 hover:text-blue-600 font-medium flex items-center"
                >
                  {expandedBlog === blog.id ? "Show Less" : "Read More"} <FaArrowRight className="ml-2" />
                </button>
              </div>
            
            </div>
          ))}
        </div>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={Math.ceil(blogs.length / blogsPerPage)}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center items-center mt-8"
          pageClassName="mx-2"
          pageLinkClassName="px-4 py-2 border rounded hover:bg-gray-200"
          activeLinkClassName="bg-blue-500 text-white"
          previousLinkClassName="px-4 py-2 border rounded hover:bg-gray-200"
          nextLinkClassName="px-4 py-2 border rounded hover:bg-gray-200"
        />

        {/* Favorite Reads Section */}
        <h2 className="text-4xl font-bold text-[#30D5C8] text-center mt-16 mb-12">
          Some of Frank’s Favorite Reads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="Rider.jpeg"
              alt="Biking and Travel Adventure"
              className="rounded-lg shadow-lg w-144"
            />
          </div>
          <div className="space-y-8 text-left">
            {favoriteReads.slice(0, 3).map((book) => (
              <div key={book.id}>
                <h3 className="text-2xl font-semibold">{book.title}</h3>
                <p className="mt-2 text-gray-700">{book.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="rest.JPG"
              alt="Bookshelf with Classics"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-8 text-left">
            {favoriteReads.slice(3).map((book) => (
              <div key={book.id}>
                <h3 className="text-2xl font-semibold">{book.title}</h3>
                <p className="mt-2 text-gray-700">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndReads;
