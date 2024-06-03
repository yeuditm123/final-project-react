// StarRating.js

import React from 'react';
import Rating from 'react-rating-stars-component';
import './StarRating.css'

const StarRating = ({ onRate }) => {
  return (
    <div className='stars'>
    <Rating
      count={5}
      size={24}
      classNames={'starsRating'}
      onChange={(rating) => onRate(rating)}
    />
    </div>
  );
};

export default StarRating;
