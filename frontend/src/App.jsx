import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Blog from './components/Blog';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/about';
import Contact from './components/Contact';
import GuidePage from './components/Guide';
import Login from './components/Login';
import Signup from './components/Signup';
import BookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import Logout from './components/Logout';
import LockPage from "./components/LockPage";
import Footer from './components/Footer';
const App = () => {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<BookList />} />
        {/* <Route path="/news" element={<News />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<Signup />} />
        <Route path="/lock" element={<LockPage />} />
        <Route path="/bookform" element={<BookForm />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
       <Footer/>
    </Router>
  );
};

export default App;
