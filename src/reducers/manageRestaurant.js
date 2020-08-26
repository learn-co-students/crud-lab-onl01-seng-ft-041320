import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], 
    reviews: []
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
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return { ...state, restaurants }
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                // this is labeled/nested as review from the mapDispatchToProps and the review input being an object that has nested attributes
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return { ...state, reviews: [...state.reviews, review] }
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id)
            console.log(reviews)
            return { ...state, reviews }
        default:
            return state
    }
}
