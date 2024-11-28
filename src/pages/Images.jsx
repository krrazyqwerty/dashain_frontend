// import MyImages from "../components/Images/MyImages";
import { Link } from "react-router-dom";
import { Images, Upload, User, Users } from "lucide-react";

export default function AllImages() {
  return (
    <div className="min-h-screen font-mono text-xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 gap-2 m-1 p-2">

      {/* image page ko logo and upload photo ko lagi */}
      <div className="flex justify-between mb-2">
        <p className="flex flex-auto gap-2 text-2xl m-1">
        <Users/>
          Images</p>
        <button className="flex justify-end items-end bg-blue-300 p-2 rounded-lg hover:bg-blue-500">
          <Upload/>
          Upload Images
        </button>
      </div>


      {/* family images and personal images tabs ko lagi */}
      
        <div className="flex space-x-4">
          <button className="bg-blue-300 p-2 rounded-lg hover:bg-blue-500 gap-2">
            <Users />
            Family Images
          </button>
        <button className="bg-blue-300 p-2 rounded-lg hover:bg-blue-500 gap-2">
          <Link to="/myImages" className="text-white hover:text-black" />
          <User/>
          My Images
        </button>
        </div>
        {/* <MyImages /> */}
      </div>
  );
}
