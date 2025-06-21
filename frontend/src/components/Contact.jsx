import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    place: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // ✅ State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is not valid';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.place) newErrors.place = 'Place is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state on new submission
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          setSuccess(true); // ✅ Show success message
          setFormData({ name: '', email: '', country: '', place: '', phone: '', message: '' }); // Clear form
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Contact Us</h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        
        {/* ✅ Success Message with Green Tick */}
        {success && (
          <div className="flex items-center text-green-600 font-semibold mb-6">
            <span className="text-2xl mr-2">✅</span>
            <span>Message sent successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>

          {/* Country Field */}
          <div className="mb-6">
            <label htmlFor="country" className="block text-lg font-medium text-gray-700">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.country ? 'border-red-500' : ''}`}
              placeholder="Enter your country"
            />
            {errors.country && <p className="text-red-500 text-sm mt-2">{errors.country}</p>}
          </div>

          {/* Place Field */}
          <div className="mb-6">
            <label htmlFor="place" className="block text-lg font-medium text-gray-700">Place</label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.place ? 'border-red-500' : ''}`}
              placeholder="Enter your place"
            />
            {errors.place && <p className="text-red-500 text-sm mt-2">{errors.place}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
              rows="5"
              placeholder="Write your message"
            />
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

            {/* Contact Information Section */}
        <div className="mt-10 text-center text-gray-700">
        <p className="text-lg font-semibold">For general inquiries, questions, or to submit a movie or TV quote:</p>
        <p className="text-blue-600 text-lg font-semibold">
          <a href="mailto:Contact@frankhelton.com">Contact@frankhelton.com</a>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          PLEASE NOTE: When submitting a movie or TV quote, please write “Movie Quote” or “TV Quote” in the subject line.
        </p>
      </div>


    </section>
  );
};

export default Contact;
