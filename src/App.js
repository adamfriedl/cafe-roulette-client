import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/coffeeShopActions'
import CoffeeAppBar from './presentation/CoffeeAppBar'
import Recommendation from './Recommendation'



class App extends Component {

  componentDidMount() {
    console.log('inside of componentDidMount')
    this.props.actions.fetchCoffeeShops()
  }

  render() {

    return (
      <div className="App">
        <CoffeeAppBar />
        <Recommendation shops={this.props.coffeeShops} />
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
