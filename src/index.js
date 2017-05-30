import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {WrapperApp} from './App';
// import './App.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const App = () => (
  <MuiThemeProvider>
    <WrapperApp />
  </MuiThemeProvider>
)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
