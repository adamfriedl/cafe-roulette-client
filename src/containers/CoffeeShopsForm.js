import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


class CoffeeShopsForm extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      description: '',
      website: '',
      address: '',
      food: '',
      price_range: ''
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
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)} >

          <TextField
            hintText="Central Perk"
            value={this.state.name}
            floatingLabelText="Name"
            onChange={e => this.handleNameChange(e)}
          />
          <br />

          <TextField
            hintText="Hipster customer service but delicious cold brew."
            value={this.state.description}
            floatingLabelText="Description"
            onChange={e => this.handleDescriptionChange(e)}
            multiLine={true}
            rows={2}
            rowsMax={4}
          />
          <br />

          <TextField
            hintText="thejollygoat.com"
            value={this.state.website}
            floatingLabelText="Website"
            onChange={e => this.handleWebsiteChange(e)}
          />
          <br />

          <TextField
            hintText="520 West 8th Avenue, New York, NY 10018"
            value={this.state.address}
            floatingLabelText="Address"
            onChange={e => this.handleAddressChange(e)}
            multiLine={true}
            rows={2}
            rowsMax={3}
          />
          <br />

          <SelectField
            floatingLabelText="Mad Delish Snacks?"
            value={this.state.food}
            onChange={(e, index, value) => this.handleFoodChange(e, index, value)}
          >
            <MenuItem value={true} primaryText="Yes" />
            <MenuItem value={false} primaryText="No" />
          </SelectField>
          <br />

          <SelectField
            floatingLabelText="Sad Nonprofit Wallet Pain"
            value={this.state.price_range}
            onChange={(e, index, value) => this.handlePriceRangeChange(e, index, value)}
          >
            <MenuItem value={1} primaryText="$ - They're giving it away." />
            <MenuItem value={2} primaryText="$$ - Hurts so tasty." />
            <MenuItem value={3} primaryText="$$$ - Splurge, baby!" />

          </SelectField>
          <br />





          <br />
          <br />

          <RaisedButton type="submit" >Submit</RaisedButton>
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
