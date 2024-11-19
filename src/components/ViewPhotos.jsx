import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('/api/photos'); // Assuming there's an API endpoint to fetch photos
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>View Photos</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={photo.description} style={{ width: '100%', height: 'auto' }} />
            <div className="photo-actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
