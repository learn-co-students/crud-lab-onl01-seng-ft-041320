import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  
  
  render() {
    const restaurants = props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant}/>)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;