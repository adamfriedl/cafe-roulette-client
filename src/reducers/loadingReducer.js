const loadingReducer = (state = false, action) => {
  switch (action.type) {

    case 'LOADING_COFFEE_SHOPS':
      return true

    case 'FETCH_COFFEE_SHOPS':
      return false

    default:
      return state
  }
}

export default loadingReducer
