import React from 'react';
import './Gallery.css';
import ImageCard from './ImageCard';

const images = [
  { id: 1, src: 'racing1.jpg' },
  { id: 2, src: 'racing2.jpg' },
  { id: 3, src: 'racing3.jpg' },
];

function Gallery() {
  return (
    <div className="Gallery">
      {images.map((image) => (
        <ImageCard key={image.id} src={image.src} />
      ))}
    </div>
  );
}

export default Gallery;
