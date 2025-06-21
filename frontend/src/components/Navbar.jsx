import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa'; // Import FontAwesome icons
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedIn'); // Check for login state in localStorage
    if (loggedInUser === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Toggle dropdown menus
  const handleDropdownToggle = (e, dropdown) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.setItem('loggedIn', 'false'); // Set login state to false
    setIsLoggedIn(false); // Update local state
  };

  return (
    <nav
      className={`bg-mate shadow-md fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="hover:text-blue-500">
            Writers' Way
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 lg:items-center absolute lg:static top-16 lg:top-auto right-4 lg:right-auto bg-mate lg:bg-transparent rounded-md p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out`}
        >
          {/* Dropdowns */}
          <Link to="/" className="text-white hover:text-gray-200">
            Home Page
          </Link>
          <div className="relative">
            <button
              onClick={(e) => handleDropdownToggle(e, 'solutions')}
              className="flex items-center text-white hover:text-gray-200"
              aria-haspopup="true"
              aria-expanded={openDropdown === 'solutions'}
            >
              Writing<ChevronDownIcon className="h-5 w-5 ml-1" />
            </button>
            {openDropdown === 'solutions' && (
              <div className="absolute bg-white shadow-lg mt-2 w-48 z-10 rounded-md animate-fade-in">
                
                <Link to="/lock" className="block px-4 py-2 hover:bg-gray-100">
                  writing Section
                </Link>
                <Link to="/books" className="block px-4 py-2 hover:bg-gray-100">
                  Show Writing Section
                </Link>
              </div>
            )}
          </div>
          
          {/* <Link to="/news" className="text-white hover:text-gray-200">
            News
          </Link> */}
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="/blog" className="text-white hover:text-gray-200">
            Favorites
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>

          {/* Login/Logout with Circular Buttons */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
