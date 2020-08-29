import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import RestaurantInput from './RestaurantInput'

class Restaurant extends Component {
  state = {
    isUpdating: false
  }

  toggleUpdate = () => {
    this.setState(prevState => {
      return {
        isUpdating: !prevState.isUpdating
      }
    })
  }

  handleUpdate = text => {
    const updatedRestaurant = {
      text,
      id: this.props.restaurant.id
    }
    this.props.updateRestaurant(updatedRestaurant)
    this.setState({
      isUpdating: false
    })
  }

  render() {
    const { restaurant } = this.props;
    const { isUpdating } = this.state
    
    return (
      <div>
        <li>
          { isUpdating 
          ? <RestaurantInput handleRestaurant={this.handleUpdate} defaultInputValue={restaurant.text} />
          : <p>{restaurant.text}</p>}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <button onClick={this.toggleUpdate}>Update</button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
