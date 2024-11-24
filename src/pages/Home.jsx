import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[648px] bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold overflow-hidden m-1">
      <div className="bg-slate-800 text-white rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl text-wrap mb-7">
          Welcome to Our Family!
        </h1>
        <div className="mb-4">
          <label className="text-xl text-gray-300">
            Already a member? Please{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              login
            </Link>{" "}
            to continue! 😊
          </label>
        </div>

        <div>
          <label className="text-xl text-gray-300">
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
