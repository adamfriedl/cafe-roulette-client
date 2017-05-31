import React, { Component } from 'react';
import CoffeeShop from './CoffeeShop';
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
        <p>
          Hey Sexy, let's grab a coffee from around the way.
          <CoffeeShop shops={this.props.coffeeShops}/>
          <Recommendation shops={this.props.coffeeShops} />
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
