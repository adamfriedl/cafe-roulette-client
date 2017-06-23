import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {brown600, brown800, blue600, blue800, lightblue500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {WrapperApp} from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin'


injectTapEventPlugin()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue600,
    primary2Color: blue800,
    accent1Color: lightblue500
  }
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
