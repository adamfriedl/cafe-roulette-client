import fetch from 'isomorphic-fetch'

export function fetchCoffeeShops() {

  return function(dispatch) {
    dispatch({type: 'LOADING_COFFEE_SHOPS'})
    return fetch('http://localhost:9000/coffee_shops')
      .then(res => res.json())
      .then(shops => dispatch({type: 'FETCH_COFFEE_SHOPS', payload: shops}))
  }
}
