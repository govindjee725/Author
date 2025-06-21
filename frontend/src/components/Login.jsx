import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 py-40">
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
        Login
      </button>
    </form>
  );
};

export default Login;
