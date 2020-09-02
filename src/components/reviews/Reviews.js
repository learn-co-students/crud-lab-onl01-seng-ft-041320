import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props 
    const finalReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const reviewList = finalReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;