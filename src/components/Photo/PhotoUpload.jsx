import React, { useState } from "react";
import { BookImage, X } from "lucide-react";

export default function PhotoUpload({ onClose, onUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedImage && title) {
      const newPhoto = {
        id: Date.now(),
        url: selectedImage,
        title,
        description,
      };
      onUpload(newPhoto);
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center w-1/3">
        <h2 className="text-center text-xl font-bold mb-2">Upload Photo</h2>
        {/* <div className="flex flex-wrap justify-center align-middle">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div> */}

        <div className="relative flex flex-col justify-center items-center border border-dashed h-32 w-32 p-4">
          {selectedImage ? (
            <div>
              <img
                src={selectedImage}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover rounded-md"
                style={{ opacity: 1 }}
              />
              <button
                onClick={handleCancel}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md">
                <X size={20} className="text-red-500" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <BookImage size={30} className="text-gray-500" />
              </div>
              <h2 className="text-gray-500 text-center mt-2">No Image Selected</h2>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex">
            <label className="cursor-pointer w-full flex justify-center mt-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <span className="bg-blue-500 text-white font-bold rounded-lg p-2 hover:bg-blue-700 w-full text-center">
                Choose File
              </span>
            </label>
          </div>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 border rounded w-full p-1"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 border rounded w-full p-1"
          />

          <div className="flex justify-between w-full mt-4">
            <button
              onClick={handleUpload}
              className="bg-blue-500 text-white rounded px-4 py-2 w-full mr-2 hover:bg-blue-700">
              Upload
            </button>

            <button
              onClick={onClose}
              className="bg-red-500 text-white rounded px-4 py-2 w-full hover:bg-red-700">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
