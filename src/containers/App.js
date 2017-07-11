import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import * as actions from '../actions/coffeeShopActions'
import CoffeeAppBar from '../components/CoffeeAppBar'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Recommendation from './Recommendation'
import CoffeeShopsForm from './CoffeeShopsForm'
import CoffeeShopsIndex from '../components/CoffeeShopsIndex'
import Footer from '../components/Footer'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     // shops: this.props.shops,
  //     // loading: this.props.loading
  //   }
  // }

  static propTypes = {
    loading: PropTypes.bool
  }

  componentDidMount() {
    this.props.actions.fetchCoffeeShops()
  }

  render() {

    const appStyle = {
      fontFamily: 'Patrick Hand SC',
      lineHeight: '1.2',
    }

    const containerStyle = {
      marginLeft: 40,
      marginRight: 40,
      paddingTop: 64
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
                    <Route exact path='/' component={Recommendation} />
                    <Route path='/coffeeshops/new' component={CoffeeShopsForm} />
                    <Route path='/coffeeshops' render={props => <CoffeeShopsIndex shops={this.props.shops} />} />
                  </Switch>
              }
              <Footer />
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
