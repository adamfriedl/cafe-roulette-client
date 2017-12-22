import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/coffeeShopActions';
import CoffeeAppBar from '../components/CoffeeAppBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Recommendation from '../components/Recommendation';
import CoffeeShopsForm from './CoffeeShopsForm';
import CoffeeShopsIndex from '../components/CoffeeShopsIndex';
import Footer from '../components/Footer';

class App extends Component {
  // eslint-disable-next-line
  static propTypes = {
    loading: PropTypes.bool
  };

  componentDidMount() {
    this.props.actions.fetchCoffeeShops();
  }

  render() {
    const appStyle = {
      fontFamily: 'Patrick Hand SC',
      lineHeight: '1.2'
    };

    const childDivStyle = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    };

    const containerStyle = {
      flex: '1 0 auto',
      margin: '0 auto',
      marginLeft: 40,
      marginRight: 40,
      paddingTop: 64
    };

    return (
      <div className="App" style={appStyle}>
        <Router basename={process.env.PUBLIC_URL}>
          <div style={childDivStyle}>
            <CoffeeAppBar />
            <div style={containerStyle}>
              {this.props.loading ? (
                <h2>Loading...</h2>
              ) : (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <Recommendation shops={this.props.shops} />
                    )}
                  />
                  <Route path="/coffeeshops/new" component={CoffeeShopsForm} />
                  <Route
                    path="/coffeeshops"
                    render={props => (
                      <CoffeeShopsIndex shops={this.props.shops} />
                    )}
                  />
                </Switch>
              )}
            </div>
            <Footer />
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
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
