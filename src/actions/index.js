//FUNCTIONS ARE ACTION CREATORS || THE OBJECTS THEMSELVES ARE ACTIONS
export const addRestaurant = (text) => ({ type: 'ADD_RESTAURANT', text })
export const deleteRestaurant = (id) => ({ type: 'DELETE_RESTAURANT', id })
export const addReview = (review) => ({ type: 'ADD_REVIEW', review })
export const deleteReview = (id) => ({ type: 'DELETE_REVIEW', id })