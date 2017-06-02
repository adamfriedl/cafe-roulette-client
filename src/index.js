import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import coffeeShopsReducer from './reducers/coffeeShopsReducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {brown500, brown700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {WrapperApp} from './App';
import CoffeeShopsForm from './containers/CoffeeShopsForm'
import CoffeeShopsIndex from './components/CoffeeShopsIndex'


const store = createStore(
  coffeeShopsReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: brown500,
    primary2Color: brown700
  },
});


const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <WrapperApp />
  </MuiThemeProvider>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/coffeeshops/new' component={CoffeeShopsForm} />
        <Route path='/coffeeshops' component={CoffeeShopsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
