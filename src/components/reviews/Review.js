import React, { Component } from 'react';

class Review extends Component {

  handleOnCLick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnCLick}> X </button>
      </div>
    );
  }

};

export default Review;
