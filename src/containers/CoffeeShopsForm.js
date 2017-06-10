import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';


class CoffeeShopsForm extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      description: '',
      website: '',
      address: '',
      food: '',
      price_range: '',
    }
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  };

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  };
  handleWebsiteChange(e) {
    this.setState({
      website: e.target.value
    });
  };
  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  };
  handleFoodChange(e, index, value) {
    console.log('Selected ' + value)
    this.setState({
      food: value
    });
  };
  handlePriceRangeChange(e, index, value) {
    this.setState({
      price_range: value
    });
  };

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.props.actions.addCoffeeShop(this.state)

    this.setState({
      name: '',
      description: '',
      website: '',
      address: '',
      food: '',
      price_range: ''
    })
  }

  render() {
    return(
      <div>

        <h1>Add a Coffee Shop. You Can Do It!</h1>

        <div className='message'>{this.props.message}</div>

        <ValidatorForm
          name="CoffeeShopForm"
          onSubmit={e => this.handleSubmit(e)}
        >

          <TextValidator
            hintText="Central Perk"
            name="CoffeeShopName"
            value={this.state.name}
            floatingLabelText="Name"
            onChange={e => this.handleNameChange(e)}
            validators={['required']}
            errorMessages={['This field is required, dude!']}
          />
          <br />

          <TextValidator
            hintText="Hipster customer service but delicious cold brew."
            name="CoffeeShopDescription"
            value={this.state.description}
            floatingLabelText="Description"
            onChange={e => this.handleDescriptionChange(e)}
            multiLine={true}
            rows={2}
            rowsMax={4}
            validators={['required']}
            errorMessages={['This field is required, dude!']}
          />
          <br />

          <TextValidator
            hintText="thejollygoat.com"
            name="CoffeeShopWebsite"
            value={this.state.website}
            floatingLabelText="Website"
            onChange={e => this.handleWebsiteChange(e)}
          />
          <br />

          <TextValidator
            hintText="520 West 8th Avenue, New York, NY 10018"
            name="CoffeeShopAddress"
            value={this.state.address}
            floatingLabelText="Address"
            onChange={e => this.handleAddressChange(e)}
            multiLine={true}
            rows={2}
            rowsMax={3}
            validators={['required']}
            errorMessages={['This field is required, dude!']}
          />
          <br />

          <SelectValidator
            floatingLabelText="Mad Delish Snacks?"
            name="CoffeeShopFood"
            value={this.state.food}
            onChange={(e, index, value) => this.handleFoodChange(e, index, value)}
            validators={['required']}
            errorMessages={['This field is required, dude!']}
          >
            <MenuItem value={true} primaryText="Yes" />
            <MenuItem value={false} primaryText="No" />
          </SelectValidator>
          <br />

          <SelectValidator
            floatingLabelText="Sad Nonprofit Wallet Pain"
            name="CoffeeShopPriceRange"
            value={this.state.price_range}
            onChange={(e, index, value) => this.handlePriceRangeChange(e, index, value)}
            validators={['required']}
            errorMessages={['This field is required, dude!']}
          >
            <MenuItem value={1} primaryText="$ - They're giving it away." />
            <MenuItem value={2} primaryText="$$ - Hurts so tasty." />
            <MenuItem value={3} primaryText="$$$ - Splurge, baby!" />

          </SelectValidator>
          <br />
          <br />

          <RaisedButton
            type="submit"
            backgroundColor="accent1Color"
          >
            Submit
          </RaisedButton>
        </ValidatorForm>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log('inside mapStateToProps')
  return {message: state.message}
}

const mapDispatchToProps = dispatch => {
  console.log('inside mapDispatchToProps')
  return {actions: bindActionCreators(actions, dispatch)}
}

export default CoffeeShopsForm = connect(mapStateToProps, mapDispatchToProps)(CoffeeShopsForm);
