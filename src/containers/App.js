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

class App extends Component {

  propTypes = {
    loading: PropTypes.bool
  }

  componentDidMount() {
    console.log('inside of componentDidMount')
    this.props.actions.fetchCoffeeShops()
  }

  render() {

    return (
      <div className="App">
        <Router >
          <div>
            <CoffeeAppBar />
            {this.props.loading
              ? <h2>Loading...</h2>
              : <Switch>
                  <Route exact path='/' render={props => <Recommendation shops={this.props.shops} {...props} />} />
                  <Route path='/coffeeshops/new' component={CoffeeShopsForm} />
                  <Route path='/coffeeshops' component={CoffeeShopsIndex} />
                </Switch>
            }
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('inside mapStateToProps')
  return {
    loading: state.loading,
    shops: state.shops
  }
}

const mapDispatchToProps = dispatch => {
  console.log('inside mapDispatchToProps')
  return {actions: bindActionCreators(actions, dispatch)}
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
