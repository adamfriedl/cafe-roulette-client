import React, { Component } from 'react';
import CoffeeShop from './CoffeeShop';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/coffeeShopActions'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import CoffeeCupIcon from './assets/CoffeeCupIcon'


class App extends Component {


  componentDidMount() {
    console.log('inside of componentDidMount')
    this.props.actions.fetchCoffeeShops()
  }


  render() {

    return (
      <div className="App">
        <AppBar
          title="Where's for Coffee?"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />
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
