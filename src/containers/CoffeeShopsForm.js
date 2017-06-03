import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';

class CoffeeShopsForm extends Component {

  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  getInitialState() {
     return {
       name: ''
     }
   }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault()
    this.props.actions.addCoffeeShop(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)} >
          <p>
            <label>Name</label>
            <input type="text" onChange={event => this.handleChange(event)} placeholder='Bean There, Drank That' />
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  console.log('inside mapDispatchToProps')
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrappedCoffeeShopsForm = connect(null, mapDispatchToProps)(CoffeeShopsForm);
