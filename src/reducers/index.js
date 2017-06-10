import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import coffeeShopsReducer from './coffeeShopsReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
  loading: loadingReducer,
  shops: coffeeShopsReducer,
  message: errorReducer
})

export default rootReducer
