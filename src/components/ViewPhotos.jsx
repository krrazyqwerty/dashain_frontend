import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewPhotos() {

  return (

    <div>

      <h1>Photos here!</h1>
    </div>
  )
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     try {
  //       const response = await axios.get('/api/photos'); 
  //       setPhotos(response.data);
  //     } catch (error) {
  //       console.error('Error fetching photos:', error);
  //     }
  //   };

  //   fetchPhotos();
  // }, []);

  // return (
  //   <div>
  //     <h1>View Photos</h1>
  //     <div className="photo-grid">
  //       {photos.map((photo) => (
  //         <div key={photo.id} className="photo-item">
  //           <img src={photo.url} alt={photo.description} style={{ width: '100%', height: 'auto' }} />
  //           <div className="photo-actions">
  //             <button>{photo.likes} Likes</button>
  //             <button>{photo.comments} Comments</button>
  //             <button>{photo.shares} Shares</button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}
