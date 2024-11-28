import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const PhotoCard = ({ photo }) => {
  const [likedPhotos, setLikedPhotos] = useState(new Set());

  const toggleLike = (photoId) => {
    setLikedPhotos((prev) => {
      const newLikedPhotos = new Set(prev);
      if (newLikedPhotos.has(photoId)) {
        newLikedPhotos.delete(photoId);
      } else {
        newLikedPhotos.add(photoId);
      }
      return newLikedPhotos;
    });
  };

  return (
    <div key={photo.id} className="border rounded-lg overflow-hidden">
          <img src={photo.url} alt={photo.description} className="w-full h-auto" />
          <div className="p-2">
            <h2 className="font-bold">{photo.title}</h2>
            <p>{photo.description}</p>
            <button 
              onClick={() => toggleLike(photo.id)} 
              className={`absolute top-2 right-2 ${likedPhotos.has(photo.id) ? 'text-red-500' : 'text-gray-500'}`}
            >
              <Heart />
            </button>
          </div>
      </div>
  );
};

export default PhotoCard;