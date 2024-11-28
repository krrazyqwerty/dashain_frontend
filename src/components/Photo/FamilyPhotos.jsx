import { useState } from "react";
import { Heart, Share2, Trash } from "lucide-react";
import PhotoModal from "./PhotoModal";

export default function FamilyPhotos({ photos }) {
  const [likesCount, setLikesCount] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLike = (photoId) => {
    setLikesCount((prev) => ({
      ...prev,
      [photoId]: (prev[photoId] || 0) + 1,
    }));
  };

  const openModal = (photo) => {
    setSelectedImage(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="mx-auto my-auto px-8 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <button
              // onClick={() => handleDelete(photo.id)}
              className={`absolute top-3 right-3 z-30 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600`}>
              <Trash className="w-4 h-4" />
            </button>

            {/*yo chai photo ma like garna ko lagi ra like ko counter ko lagi */}
            <div className="absolute top-3 left-3 z-20 flex items-center bg-white/40 backdrop-blur-sm rounded-full px-3 py-1.5 space-x-2">
              <button
                onClick={() => handleLike(photo.id)}
                className="flex items-center">
                <Heart className="w-6 h-6 fill-primary text-primary" />
                <span className="text-black text-sm font-medium ml-1">
                  {likesCount[photo.id] || 0}
                </span>
              </button>
            </div>

            {/*yo chai photo lai full screen banauna ko lagi ani fullscreen vayeko photo lai close garauna ko lagi */}
            <div className="relative aspect-[4/3]">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
                onClick={() => openModal(photo)}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20">
                        <img
                          src={photo.profileImage}
                          alt={photo.username}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{photo.username}</p>
                        <p className="text-xs text-gray-500">
                          {photo.uploadDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="transform transition hover:scale-110">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PhotoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage?.url}
        imageTitle={selectedImage?.title}
      />
    </div>
  );
}
