import React, { Component } from 'react';

class Review extends Component {

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={() => this.props.deleteReview(this.props.review.id)}> x </button>
      </div>
    );
  }

};

export default Review;
