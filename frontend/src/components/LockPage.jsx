import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LockPage = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const correctPassword = import.meta.env.VITE_APP_PASSWORD; // Prevent undefined issue
  // Read password from .env

  const handleUnlock = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating async check

    if (password === correctPassword) {
      sessionStorage.setItem("authenticated", "true"); // Store session flag
      navigate("/bookform"); // Redirect to book form
    } else {
      alert("❌ Incorrect password! Try again.");
      setPassword(""); // Clear input
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold">🔒 Enter Password to Access</h2>
        <input
          type="password"
          className="mt-4 p-2 border rounded-lg"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={handleUnlock}
          className={`ml-2 px-4 py-2 text-white rounded-lg ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Checking..." : "Unlock"}
        </button>
      </div>
    </div>
  );
};

export default LockPage;
