import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api"
import toast from "react-hot-toast"

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", formData);
      localStorage.setItem("token", response.data.token);
      toast.success("Registration successful!");
      navigate("/events");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold m-1">
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
              value={formData.username}
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
              value={formData.email}
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
              value={formData.password}
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
