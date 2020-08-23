import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props
    const individualRestaurantReviews = reviews.filter( review => review.restaurantId === restaurantId )
      
    const reviewArray = individualRestaurantReviews.map( (review, index) => {
      return (
        <Review
        key={index}
        review={review}
        deleteReview={deleteReview}
        />
      )
    })

    return (
      <div>
        <ul>
          {reviewArray}
        </ul>
      </div>
    );
  }
};

export default Reviews;