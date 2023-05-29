import React from 'react';
import './ImageCard.css';

export default function ImageCard({ src, alt }) {
  return (
    <div className="image-card">
      <div className="image-card__image">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
