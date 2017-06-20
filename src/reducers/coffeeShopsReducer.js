const coffeeShopsReducer = (state = [], action) => {
  switch (action.type) {

    case 'FETCH_COFFEE_SHOPS':
      return action.payload

    case 'UPVOTE_SHOP': {
      return state.map(shop => {
        if (shop.id !== action.id) {
          debugger
          return shop
        }

        return Object.assign({}, shop,
          {votes: action.votes}
        )
      })
    }


    default:
      return state
  }
}

export default coffeeShopsReducer
