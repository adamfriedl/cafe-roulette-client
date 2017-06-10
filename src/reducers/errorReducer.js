const errorReducer = (state = '', action) => {
  switch (action.type) {

    case 'SUBMIT_FORM_SUCCESS':
      // return 'this is the SUBMIT_FORM_SUCCESS case'
      return 'Congrats, you did it!'

    case 'SUBMIT_FORM_FAILURE':
      return "Ugh, it didn't work!"

    default:
      return state
  }
}

export default errorReducer
