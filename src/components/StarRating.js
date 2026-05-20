import React, { useState } from 'react';
import Star from './Star';

function StarRating() {
  const [rating, setRating] = useState(0);

  const getRatingTitle = (currentRating) => {
    switch (currentRating) {
      case 1: return 'Poor';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Very Good';
      case 5: return 'Excellent';
      default: return 'Select a rating';
    }
  };

  const renderStarRating = () => {
    const maxStars = 5;
    const starsSelected = [];

    for (let currentRating = 1; currentRating <= maxStars; currentRating++) {
        starsSelected.push(
        <Star
            key={currentRating}
            selected={currentRating <= rating}
            onClick={() => setRating(currentRating)}
        />
        );
    } return starsSelected;
  };

  return (
    <div className="rating-container">
        <div className='stars'>{renderStarRating()}</div>
        <h2 className='rating-title'>{getRatingTitle(rating)}</h2>
    </div>
  );
}

export default StarRating;