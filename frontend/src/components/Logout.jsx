import React from "react";
import axios from "axios";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/logout");
      alert(response.data.message);
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <button onClick={handleLogout} className="py-2 px-4 bg-red-500 text-white rounded">
      Logout
    </button>
  );
};

export default Logout;
