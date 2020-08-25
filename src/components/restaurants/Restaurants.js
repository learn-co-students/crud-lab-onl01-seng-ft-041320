import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <div>
        <h1>Restaurants</h1>
        <ul>
          {this.props.restaurants.map(rest => <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={this.props.deleteRestaurant} />)}
        </ul>
      </div>
    );
  }
};

export default Restaurants;