import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = ({ folderId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/albums/images/${folderId}`);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, [folderId]);

  return (
    <div className='d-flex flex-row align-items-center justify-content-center'>
    <div className="d-flex flex-row align-items-center flex-wrap w-75">
      {images.map(image => (
        <div key={image.id} className="">
          <img className='m-3 rounded border border-white' src={image.url} alt={image.name} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
