import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview({restaurantId: this.props.restaurant.id, text: this.state.text})
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            id='text'
            name='text'
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type='submit' value='Add Review' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
