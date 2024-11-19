import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); // Added to handle errors
  const { username, email, password } = formData;
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.msg); // Set error if response is not ok
      } else {
        setError(null); // Clear error if response is ok
        console.log(data.message);
        // Redirect to login page after successful registration
        navigate("/login"); // Using navigate for redirection
      }
    } catch (error) {
      setError("Error: " + error.message); // Set error if catch block is reached
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Registration Page</h1>
        <p className="text-gray-700 mb-4">
          Welcome! Please fill in the details below to create your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 ">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
              value={username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
              value={password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Already have an account? Please{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            login
          </Link>
          .
        </p>
        {error && <p className="mt-4 text-red-500">{error}</p>} 
      </div>
    </div>
  );
}
