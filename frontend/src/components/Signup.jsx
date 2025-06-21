import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`h${import.meta.env.VITE_API_URL}/auth/register`, {
        name,
        email,
        password,
      });
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4 py-40">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="block w-full px-3 py-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block w-full px-3 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="block w-full px-3 py-2 border rounded"
      />
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
