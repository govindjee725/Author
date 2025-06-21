const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
            {/* Section 1: Writer's Name & Branding */}
            <div>
              <h2 className="text-2xl font-semibold text-white">Helton</h2>
              <p className="text-sm text-gray-400 mt-2">
                Inspiring through words. Exploring stories that matter.
              </p>
            </div>
  
            {/* Section 2: Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/books" className="hover:text-white transition">Books</a></li>
                <li><a href="" className="hover:text-white transition">Quotes</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
  
            {/* Section 3: Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <p className="mt-2 text-gray-400">For inquiries or to submit a movie/TV quote:</p>
              <p className="text-gray-400">
                <a href="mailto:contact@frankhelton.com" className="hover:text-white transition">
                  contact@frankhelton.com
                </a>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                *Use "Movie Quote" or "TV Quote" in the subject line.*
              </p>
            </div>
  
          </div>
  
          {/* Divider Line */}
          <div className="border-t border-gray-700 my-6"></div>
  
          {/* Bottom Section: Social Media & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Helton. All rights reserved.</p>
  
            {/* Social Media Icons (Optional) */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://twitter.com/helton" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-gray-400 hover:text-white transition text-lg"></i>
              </a>
              <a href="https://facebook.com/helton" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-gray-400 hover:text-white transition text-lg"></i>
              </a>
              <a href="https://linkedin.com/in/helton" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-gray-400 hover:text-white transition text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  