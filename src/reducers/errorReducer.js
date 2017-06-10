const errorsReducer = (state = null, action) => {
  switch (action.type) {

    case 'SUBMIT_FORM_SUCCESS':
      return Object.assign({}, state, {message: 'Congrats, you did it!'})

    case 'SUBMIT_FORM_FAILURE':
      return Object.assign({}, state, {message: 'There was an error, yo!'})

    default:
      return state
  }
}

export default errorsReducer
