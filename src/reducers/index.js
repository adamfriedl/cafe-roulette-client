import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
import coffeeShopsReducer from './coffeeShopsReducer'

export default combineReducers({
  coffeeShops: coffeeShopsReducer
})
