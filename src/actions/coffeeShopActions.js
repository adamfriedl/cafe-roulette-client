import fetch from 'isomorphic-fetch'
import thunk from 'redux-thunk'

export function fetchCoffeeShops() {

  return function(dispatch) {
    dispatch({type: 'LOADING_COFFEE_SHOPS'})
    return fetch('http://localhost:9000/coffee_shops')
      .then(res => res.json())
      .then(shops => dispatch({type: 'FETCH_COFFEE_SHOPS', payload: shops}))
  }
}

export function addCoffeeShop(data) {

  // return function(dispatch) {
  //   dispatch({type: 'ADD_COFFEE_SHOP'})
    return fetch('http://localhost:9000/coffee_shops/', {
      method: 'POST',
      mode: 'CORS',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => res).catch(err => err)
  // }
}
