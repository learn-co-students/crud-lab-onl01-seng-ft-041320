import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render(props) {
    return (
      <ul>
        {this.props.reviews.map(review => {
          return < Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>
        })}
      </ul>
    );
  }
};

export default Reviews;
