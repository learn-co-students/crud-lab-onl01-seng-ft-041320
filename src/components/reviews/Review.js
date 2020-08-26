import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    // don't have to use this if not referencing it in li below:
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
          {/* or could use: */}
          {/* {this.props.review.text} */}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
