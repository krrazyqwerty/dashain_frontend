import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[648px] mx-1 bg-gradient-to-r from-teal-200 to-purple-500 overflow-hidden">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-9">
          💗 Welcome to Our Family! 💗
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700">
            Already a member? Please{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              login
            </Link>{" "}
            to continue! 😊
          </label>
        </div>

        <div>
          <label className="block text-gray-700">
            Not a member yet? Please proceed to{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              register!
            </Link>{" "}
            👍
          </label>
        </div>
      </div>
    </div>
  );
}
