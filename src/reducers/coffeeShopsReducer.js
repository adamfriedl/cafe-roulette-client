export default function coffeeShopsReducer(state = {loading: false, coffeeShops: []}, action) {
  switch (action.type) {
    case 'LOADING_COFFEE_SHOPS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_COFFEE_SHOPS':
      return {loading: false, coffeeShops: action.payload}
    default:
      return state
  }
}
