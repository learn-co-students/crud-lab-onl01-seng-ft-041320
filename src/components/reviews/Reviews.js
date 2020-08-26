// import React from 'react';
import React, { Component } from 'react'
import Review from './Review';

// const Reviews = props => {
//   const reviews = props.reviews.filter(review => review.restaurantId === props.restaurantId)
//   .map((review) => {
//     return < Review key={review.id} review={review} deleteReview={props.deleteReview} />
//   })

//   return (
//     <ul>
//       {reviews}
//     </ul>
//   );
// }

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;