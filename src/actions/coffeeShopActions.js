import fetch from 'isomorphic-fetch'

export function fetchCoffeeShops() {

  return function(dispatch) {
    dispatch({type: 'LOADING_COFFEE_SHOPS'})
    return fetch(
      // 'http://localhost:9000/coffee_shops')
    'https://floating-temple-82552.herokuapp.com/coffee_shops')
      .then(res => res.json())
      .then(shops => dispatch({type: 'FETCH_COFFEE_SHOPS', payload: shops}))
  }
}

export function backgroundFetchCoffeeShops() {

  return function(dispatch) {
    return fetch(
      // 'http://localhost:9000/coffee_shops')
    'https://floating-temple-82552.herokuapp.com/coffee_shops')
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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(
      res => dispatch({type: 'SUBMIT_FORM_SUCCESS', payload: res}),
      error => dispatch({type: 'SUBMIT_FORM_FAILURE', error: error,
      suppressGlobalErrorNotification: (
        error.response &&
        error.response.status === 400
      )
    }))
  }
}

export function upVote(id, voteTicker) {

  return function(dispatch) {
    return fetch('http://localhost:9000/coffee_shops/' + id, {
      method: 'PATCH',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({votes: voteTicker})
    }).then(res => res.json())
      .then(shop => console.log(shop))
      .then(shop => dispatch({type: 'UPVOTE_SHOP', id, votes: voteTicker}))

  }
}

export function resetSuccessHandler() {

  return function(dispatch) {
    dispatch({type: 'RESET_SUCCESS_HANDLER'})
  }
}
