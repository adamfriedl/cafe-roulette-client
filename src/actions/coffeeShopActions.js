import fetch from 'isomorphic-fetch'

export function fetchCoffeeShops() {

  return function(dispatch) {
    dispatch({type: 'LOADING_COFFEE_SHOPS'})
    return fetch('http://localhost:9000/coffee_shops')
      .then(res => res.json())
      .then(shops => dispatch({type: 'FETCH_COFFEE_SHOPS', payload: shops}))
  }
}

export function addCoffeeShop(data) {

  return function(dispatch) {
    return fetch('http://localhost:9000/coffee_shops', {
      method: 'POST',
      mode: 'CORS',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(body => dispatch({type: 'ADD_COFFEE_SHOP', payload: body}))

     // WHAT TO DO HERE? CONFUSED AS HOW TO POST
  }
}
