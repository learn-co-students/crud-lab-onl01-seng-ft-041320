import React from 'react';
// import React, { Component } from 'react'
import Review from './Review';

const Reviews = props => {
  // debugger
  const associatedReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId)
  const reviews = associatedReviews.map((review) => {
    return < Review key={review.id} review={review} deleteReview={props.deleteReview} />
  })

  return (
    <ul>
      {reviews}
    </ul>
  );
}

export default Reviews;