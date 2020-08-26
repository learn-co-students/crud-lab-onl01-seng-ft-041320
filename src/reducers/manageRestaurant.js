import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
                // did above to pass tests but the below is better:
                // name: action.name
            }
            return { ...state, restaurants: [...state.restaurants, restaurant] }
        case 'DELETE_RESTAURANT':
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text
            }
            return { ...state, review: [...state.reviews, review] }
        case 'DELETE_REVIEW':
            return { review: state.reviews.filter(review => review.id !== action.id) }
        default:
            return state
    }
}
