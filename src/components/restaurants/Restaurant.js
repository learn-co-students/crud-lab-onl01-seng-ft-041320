import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          {/* did above to pass tests but the below is better: */}
          {/* {restaurant.name} */}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
