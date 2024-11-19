import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogIn} from "lucide-react"
import toast from "react-hot-toast"
import api from "../utils/api"

export default function Login() {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      history.push("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-gray-500">
      <form
        id="login-form"
        name="login-form"
        className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full"
        onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label htmlFor="login" className="block text-gray-700">
            Username:
          </label>
          <input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            id="login"
            name="login"
            placeholder="Enter your Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Login
          </button>

          <p className="mt-4 text-gray-600">
            Are you a new user? Please {" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              register
            </Link>
            , here first and be a Proud Family Member!❤
          </p>
        </div>
      </form>
    </div>
  );
}
