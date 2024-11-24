// import { Link } from "react-router-dom";
import { Images, Upload, Users, User } from "lucide-react";

export default function Photo() {
  return (
    <div className="h-screen m-1 py-2 bg-gradient-to-r from-purple-300 to-blue-300 font-mono font-bold">
      <div className="flex justify-between">
        <div className="flex flex-auto px-2 mb-3">
          <h1 className="flex text-4xl font-bold font-mono mx-1 gap-2">
            {" "}
            <Images size={40}/>
            Photos
          </h1>
        </div>
        <div className="flex ">
          <button className="flex text-xl bg-blue-400 rounded-md mx-3 px-2 py-1 mb-4 gap-2 font-bold font-mono hover:bg-blue-500">
            {" "}
            <Upload />
            Upload Photos
          </button>
        </div>
      </div>

      <div className="flex flex-1 m-2">
        <div className="flex flex-start text-xl px-2 py-1 mb-4">
          <button className="flex flex-1 font-bold font-mono hover:bg-blue-500 py-3 px-2 rounded gap-2">
            {" "}
            <Users />
            Family Photos
          </button>
        </div>
        <div className="flex flex-end text-xl px-2 py-1 mb-4">
          <button className="flex flex-1 font-bold font-mono mx-2 hover:bg-blue-500 py-3 px-2 rounded gap-2">
            {" "}
            <User /> My Photos
          </button>
        </div>
      </div>
    </div>
  );
}
// <div>
//   <div className="flex flex-col h-screen bg-gradient-to-r from-green-200 to-blue-200">
//     <div className="flex flex-col place-items-center justify-start">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//         Welcome to the Photo Gallery
//       </h1>
//       <p className="text-lg text-center text-gray-600 mb-4">
//         {" "}
//         <Link to="/upload" className="text-black-600 hover:underline hover:bg-teal-600 rounded-md px-1">
//           Upload
//         </Link>{" "}
//         and
//         <Link to="/view" className="text-black-600 hover:underline hover:bg-teal-600 rounded-md px-1">
//         view
//         </Link>
//         your photos!
//       </p>
//     </div>
//   </div>
// </div>
