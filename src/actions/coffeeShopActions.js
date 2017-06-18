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

export function upVote(id, data) {

  return function(dispatch) {
    return fetch('http://localhost:9000/coffee_shops/' + id, {
      method: 'PATCH',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    // }).then(
    //   res => dispatch({type: 'SUBMIT_FORM_SUCCESS', payload: res}),
    //   error => dispatch({type: 'SUBMIT_FORM_FAILURE', error: error,
    //   suppressGlobalErrorNotification: (
    //     error.response &&
    //     error.response.status === 400
    //   )
    }).then(res => res.json())
      .then(vote => dispatch({type: 'UPVOTE', payload: vote}))
  }
}

export function resetSuccessHandler() {

  return function(dispatch) {
    dispatch({type: 'RESET_SUCCESS_HANDLER'})
  }
}
