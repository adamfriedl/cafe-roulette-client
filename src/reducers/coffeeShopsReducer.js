const coffeeShopsReducer = (state = [], action) => {
  switch (action.type) {

    case 'FETCH_COFFEE_SHOPS':
      return action.payload

    case 'UPVOTE_SHOP':
      // NOT CURRENTLY STRUCTURING DATA CORRECTLY

    default:
      return state
  }
}

export default coffeeShopsReducer
