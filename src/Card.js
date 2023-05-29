import React from 'react';
import './Card.css';

export default function CardRight(props) {
  return (
    <div className="cardRight">
      <div className="cardRight-details">
        <h2>{props.details}</h2>
      </div>
      <div className="cardRight-image">
        <img src="racing3.jpg" alt="Card Image" />
      </div>
    </div>
  );
}

function CardLeft(props) {
    return (
      <div className="cardLeft">
        <div className="cardLeft-image">
          <img src="racing3.jpg" alt="Card Image" />
        </div>
        <div className="cardLeft-details">
          <h2>{props.details}</h2>
        </div>
      </div>
    );
  }

  export {CardLeft};
