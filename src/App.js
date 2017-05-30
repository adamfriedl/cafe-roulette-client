import React, { Component } from 'react';
import logo from './logo.svg';
import CoffeeShop from './CoffeeShop';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/coffeeShopActions'


class App extends Component {


  componentDidMount() {
    console.log('inside of componentDidMount')
    console.log(this.props)
    this.props.actions.fetchCoffeeShops()
    // {debugger}
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hey Sexy, let's grab a coffee from around the way.

        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('inside mapStateToProps')
  return {coffeeShops: state.shops}
}

const mapDispatchToProps = dispatch => {
  console.log('inside mapDispatchToProps')
  return {actions: bindActionCreators(actions, dispatch)}
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
