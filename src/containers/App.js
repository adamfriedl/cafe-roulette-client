import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import * as actions from '../actions/coffeeShopActions'
import CoffeeAppBar from '../components/CoffeeAppBar'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Recommendation from '../components/Recommendation'
import CoffeeShopsForm from './CoffeeShopsForm'
import CoffeeShopsIndex from '../components/CoffeeShopsIndex'
import Rubik from '../assets/fonts/Rubik/Rubik-Black.ttf'

class App extends Component {

  static propTypes = {
    loading: PropTypes.bool
  }

  componentDidMount() {
    this.props.actions.fetchCoffeeShops()
  }

  render() {

    const appStyle = {
      fontFamily: 'Rubik',
      fontSize: 18,
      margin: 5
    }

    const containerStyle = {
      margin: 40,
    }

    return (
      <div className="App" style={appStyle}>
        <Router >
          <div>
            <CoffeeAppBar />
            <div style={containerStyle}>
              {this.props.loading
                ? <h2>Loading...</h2>
                : <Switch>
                    <Route exact path='/' render={props => <Recommendation shops={this.props.shops} />} />
                    <Route path='/coffeeshops/new' component={CoffeeShopsForm} />
                    <Route path='/coffeeshops' render={props => <CoffeeShopsIndex shops={this.props.shops} />} />
                  </Switch>
              }
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    shops: state.shops
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
