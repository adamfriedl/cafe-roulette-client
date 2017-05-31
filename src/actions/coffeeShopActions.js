import fetch from 'isomorphic-fetch'

export function fetchCoffeeShops() {

  return function(dispatch) {
    // dispatch({type: 'LOADING_COFFEE_SHOPS'})
    return fetch('http://localhost:9000/coffee_shops/sample')
      .then(res => res.json())
      .then(shop => dispatch({type: 'FETCH_COFFEE_SHOPS', payload: shop}))
  }
}
