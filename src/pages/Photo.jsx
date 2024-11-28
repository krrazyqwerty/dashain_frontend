// import { Link } from "react-router-dom";
import { Images, Upload, Users, User } from "lucide-react";
import FamilyPhotos from "../components/Photo/FamilyPhotos";
import PhotoUpload from "../components/Photo/PhotoUpload";
// import MyPhotos from "../components/Photo/MyPhotos"
import { useState } from "react";

const photoList = [
  {
    id: 1,
    title: "Mountains",
    description: "Travel diaries",
    url: "https://picsum.photos/id/29/350/250",
    username: "Alice",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    uploadDate: "2023-10-01",
  },
  {
    id: 2,
    title: "Work Time",
    description: "When I used to work",
    url: "https://picsum.photos/id/1/350/250",
    username: "Bob",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    uploadDate: "2023-10-02",
  },
  {
    id: 3,
    title: "View",
    description: "Travel diaries",
    url: "https://picsum.photos/id/28/367/267",
    username: "Charlie",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    uploadDate: "2023-10-03",
  },
  {
    id: 4,
    title: "Light House",
    description: "Travel diaries",
    url: "https://picsum.photos/id/58/367/267",
    username: "Diana",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    uploadDate: "2023-10-04",
  },
  {
    id: 5,
    title: "Beach Sunset",
    description: "A beautiful sunset at the beach",
    url: "https://picsum.photos/id/10/350/250",
    username: "Eve",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    uploadDate: "2023-10-05",
  },
  {
    id: 6,
    title: "City Skyline",
    description: "The skyline of a bustling city",
    url: "https://picsum.photos/id/20/350/250",
    username: "Frank",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    uploadDate: "2023-10-06",
  },
  {
    id: 7,
    title: "Forest Trail",
    description: "A serene trail through the forest",
    url: "https://picsum.photos/id/30/350/250",
    username: "Grace",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    uploadDate: "2023-10-07",
  },
  {
    id: 8,
    title: "Snowy Mountains",
    description: "Snow-covered peaks in winter",
    url: "https://picsum.photos/id/40/350/250",
    username: "Hank",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    uploadDate: "2023-10-08",
  },
  {
    id: 9,
    title: "Barn or a Farm",
    description: "I have always wondered, if it is called a Barn or a Farm",
    url: "https://picsum.photos/id/85/350/250",
    username: "Ivy",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    uploadDate: "2023-10-09",
  },
];

const myphotos=[{
  id: 1,
  title: "Mountains",
  description: "Travel diaries",
  url: "https://picsum.photos/id/29/350/250",
  username: "Alice",
  profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
  uploadDate: "2023-10-01",
},
{
  id: 2,
  title: "Work Time",
  description: "When I used to work",
  url: "https://picsum.photos/id/1/350/250",
  username: "Bob",
  profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  uploadDate: "2023-10-02",
},]

export default function Photo() {
  const [showUpload, setShowUpload] = useState(false);
  const [activeView, setActiveView] = useState("family");
  const [listPhoto, setListPhoto ] = useState(photoList);

  const closeModel = () => {
    setShowUpload(false);
  };

  return (
    <div className="min-h-screen m-1 py-2 bg-gradient-to-r from-purple-200 to-blue-200 font-mono font-bold">
      {/*yo photo page ko header, in which page name Photos and an 
      Upload button is integrated */}
      <div className="flex justify-between">
        <div className="flex items-center px-2 mb-3">
          <h1 className="flex text-4xl  font-bold font-mono mx-1 gap-2">
            <Images size={40} />
            Photos
          </h1>
        </div>

        <div>
          <button onClick={() => setShowUpload(!showUpload)} className="flex text-xl bg-blue-400 rounded-md mx-3 px-2 py-1 mb-4 gap-2 font-bold font-mono hover:bg-blue-500">           
            <Upload />
            { showUpload ? "Upload Photos" : "Upload Photos"}
          </button>
        </div>
      </div>

{/*yo chai Family photos and My photos ko lagi */}
      <div className="flex flex-1">
        <div className="flex flex-start text-xl px-2 py-1">
          <button 
            onClick={() => setActiveView("family")}
            className="flex flex-1 font-bold font-mono hover:bg-blue-500 py-3 px-2 rounded gap-2">
            <Users />
            Family Photos
          </button>
        </div>
        <div className="flex flex-end text-xl px-2 py-1">
          <button 
            onClick={() => setActiveView("my")}
            className="flex flex-1 font-bold font-mono mx-2 hover:bg-blue-500 py-3 px-2 rounded gap-2">
            <User /> My Photos
          </button>
        </div>
      </div>

     
      <FamilyPhotos 
          photos={ activeView ==="my"?myphotos:listPhoto}        
          />
          {showUpload && <PhotoUpload onClose={closeModel}/>}
    </div>

    
  );
}
