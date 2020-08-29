import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: this.props.defaultInputValue || ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name: </label>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit"  />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
