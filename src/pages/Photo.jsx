import { Link } from "react-router-dom";

export default function Photo() {
  return (
    <div>
      <div className="flex flex-col h-screen bg-gradient-to-r from-green-200 to-blue-200">
        <div className="flex flex-col place-items-center justify-start">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Welcome to the Photo Gallery
          </h1>
          <p className="text-lg text-center text-gray-600 mb-4">
            {" "}
            <Link to="/upload" className="text-black-600 hover:underline hover:bg-teal-600 rounded-md px-1">
              Upload
            </Link>{" "}
            and
            <Link to="/view" className="text-black-600 hover:underline hover:bg-teal-600 rounded-md px-1">
            view
            </Link>
            your photos!
          </p>
        </div>
      </div>
    </div>
  );
}
