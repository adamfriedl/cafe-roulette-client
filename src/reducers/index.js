import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
import coffeeShopsReducer from './coffeeShopsReducer'

const rootReducer = combineReducers({
  shop: coffeeShopsReducer
})

export default rootReducer
