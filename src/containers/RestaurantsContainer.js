import React, { Component } from 'react'
import {connect} from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput handleRestaurant={this.props.addRestaurant} />
        <Restaurants
          updateRestaurant={this.props.updateRestaurant}
          deleteRestaurant={this.props.deleteRestaurant}
          restaurants={this.props.restaurants}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
    updateRestaurant: restaurant => dispatch({type: 'UPDATE_RESTAURANT', restaurant}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)