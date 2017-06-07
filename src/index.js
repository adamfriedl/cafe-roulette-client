import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import coffeeShopsReducer from './reducers/coffeeShopsReducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {brown700, brown900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {WrapperApp} from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = createStore(
  coffeeShopsReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: brown700,
    primary2Color: brown900
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <WrapperApp />
  </MuiThemeProvider>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
