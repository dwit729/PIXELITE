
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = ({ folderId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/images/${folderId}`);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, [folderId]);

  return (
    <div className="gallery">
      {images.map(image => (
        <div key={image.id} className="gallery-item">
          <img src={image.url} alt={image.name} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
