export default function coffeeShopsReducer(state = [], action) {
  switch (action.type) {

    case 'LOADING_COFFEE_SHOPS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_COFFEE_SHOPS':
      return action.payload

    default:
      return state
  }
}
