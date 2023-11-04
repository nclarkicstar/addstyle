import React from 'react';

const CircleRating = ({ rating }) => {
    
    const circles = [];
    for (let i = 1; i <=5; i++) {
        if (i <= rating) {
            circles.push(<i key={i} className="fa-solid fa-circle text-primary"></i>)
        } else if ( i === Math.ceil(rating) && !Number.isInteger(rating)) {
            circles.push(<i key={i} className="fa-solid fa-circle-half-stroke text-primary"></i>)
        } else {
            circles.push(<i key={i} className="fa-regular fa-circle text-primary"></i>)
        }       
    }
  return (
   <>{circles}</>
  )
}

export default CircleRating;
