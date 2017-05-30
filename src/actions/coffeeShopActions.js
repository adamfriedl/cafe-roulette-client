import fetch from 'isomorphic-fetch'

export function fetchCoffeeShops() {

  return function(dispatch) {
    dispatch({type: 'LOADING_COFFEE_SHOPS'})
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(coffeeShops => dispatch({type: 'FETCH_COFFEE_SHOPS', payload: coffeeShops}))
  }
}
