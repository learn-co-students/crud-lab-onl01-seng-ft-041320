
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let restaurant = { id: cuid(), text: action.text }
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      }
    case 'UPDATE_RESTAURANT':
      return {
        restaurants: state.restaurants.map(restaurant => {
          return restaurant.id === action.restaurant.id ? action.restaurant : restaurant
        }),
        reviews: [...state.reviews]
      }
    case 'DELETE_RESTAURANT':
      return {
        reviews: state.reviews.filter(review => review.restaurantId !== action.id),
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
      }
    case 'ADD_REVIEW':
      const review = {
        ...action.review,
        id: cuid()
      }
      return {
        reviews: [...state.reviews, review],
        restaurants: [...state.restaurants]
      }
    case 'DELETE_REVIEW':
      return {
        reviews: state.reviews.filter(review => review.id !== action.id),
        restaurants: [...state.restaurants]
      }
    default:
      return state
  }
}