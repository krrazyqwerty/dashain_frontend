import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-l from-blue-200 to-blue-700 font-bold font-mono text-xl p-4 m-1">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/family"
            className="text-white hover:text-gray-300 transition duration-200">
            Family
          </Link>
        </li>
        <li>
          <Link
            to="/photos"
            className="text-white hover:text-gray-300 transition duration-200">
            Photos
          </Link>
        </li>
        {/* <li>
          <Link
            to="/images"
            className="text-white hover:text-gray-300 transition duration-200">
            Images
          </Link>
        </li> */}
        <li>
          <Link
            to="/events"
            className="text-white hover:text-gray-300 transition duration-200">
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="text-white hover:text-gray-300 transition duration-200">
            Dashboard
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}
