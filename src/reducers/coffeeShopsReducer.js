const coffeeShopsReducer = (state = [], action) => {
  switch (action.type) {

    case 'FETCH_COFFEE_SHOPS':
      return action.payload

    default:
      return state
  }
}

export default coffeeShopsReducer
