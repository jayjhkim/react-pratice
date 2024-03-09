import React, { useState } from 'react';

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (selected) => {
    setSelectedStars(selected);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleStarClick(starValue)}
            style={{ cursor: 'pointer', color: starValue <= selectedStars ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;