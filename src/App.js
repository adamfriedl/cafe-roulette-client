import React, { Component } from 'react';
import logo from './logo.svg';
import CoffeeShop from './CoffeeShop';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/coffeeShopActions'
import AppBar from 'material-ui/AppBar'
import CoffeeAppBar from './CoffeeAppBar'


class App extends Component {


  componentDidMount() {
    console.log('inside of componentDidMount')
    this.props.actions.fetchCoffeeShops()
  }


  render() {

    return (
      <div className="App">
        <AppBar
          title="Where's for Coffee?" />
        <p>
          Hey Sexy, let's grab a coffee from around the way.
        </p>
        <CoffeeShop shops={this.props.coffeeShops}/>
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
