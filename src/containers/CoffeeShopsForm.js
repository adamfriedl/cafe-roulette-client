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

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault()
    // console.log(this.state)
    this.props.actions.addCoffeeShop(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)} >
          <p>
            <label>Name</label>
            <input type="text" id='name' onChange={event => this.handleNameChange(event)} placeholder='Bean There, Drank That' />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  console.log('inside mapDispatchToProps')
  return {actions: bindActionCreators(actions, dispatch)}
}

export default CoffeeShopsForm = connect(null, mapDispatchToProps)(CoffeeShopsForm);
