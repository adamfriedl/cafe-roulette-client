const coffeeShopsReducer = (state = {loading: false, shops: []}, action) => {
  switch (action.type) {

    case 'LOADING_COFFEE_SHOPS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_COFFEE_SHOPS':
      return {loading: false, shops: action.payload}

    case 'ADD_COFFEE_SHOP':
      return {loading: false, shops: [...state.shops, action.payload]}

    default:
      return state
  }
}

export default coffeeShopsReducer
