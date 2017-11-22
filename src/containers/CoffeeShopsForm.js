import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/coffeeShopActions';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from 'react-material-ui-form-validator';

class CoffeeShopsForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      website: '',
      address: '',
      food: '',
      price_range: '',
      votes: 0
    };
  }

  componentDidMount() {
    this.props.actions.resetSuccessHandler();
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }
  handleWebsiteChange(e) {
    this.setState({
      website: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleFoodChange(e, index, value) {
    this.setState({
      food: value
    });
  }

  handlePriceRangeChange(e, index, value) {
    this.setState({
      price_range: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.actions
      .addCoffeeShop(this.state)
      .then(res => this.props.actions.backgroundFetchCoffeeShops());

    this.setState({
      name: '',
      description: '',
      website: '',
      address: '',
      food: '',
      price_range: ''
    });

    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    const flexContainer = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const inputStyle = {
      fontFamily: 'Patrick Hand SC',
      fontSize: '1.3em'
    };

    return (
      <div style={{ fontFamily: 'Patrick Hand SC' }}>
        <div style={flexContainer}>
          <h1>Add a Coffee Shop. You Can Do It!</h1>
        </div>

        <div style={flexContainer}>
          <div className="message">{this.props.message}</div>
        </div>

        <div style={flexContainer}>
          <ValidatorForm
            name="CoffeeShopForm"
            onSubmit={e => this.handleSubmit(e)}>
            <TextValidator
              hintText="Central Perk"
              style={inputStyle}
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
              style={inputStyle}
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
              hintText="http://"
              style={inputStyle}
              name="CoffeeShopWebsite"
              value={this.state.website}
              floatingLabelText="Website"
              onChange={e => this.handleWebsiteChange(e)}
              validators={['required']}
              errorMessages={['This field is required, dude!']}
            />
            <br />

            <TextValidator
              hintText="520 West 8th Avenue, New York, NY 10018"
              style={inputStyle}
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
              floatingLabelText="Delish Snacks?"
              style={inputStyle}
              name="CoffeeShopFood"
              value={this.state.food}
              onChange={(e, index, value) =>
                this.handleFoodChange(e, index, value)}
              validators={['required']}
              errorMessages={['This field is required, dude!']}>
              <MenuItem value={true} style={inputStyle} primaryText="Ouais!" />
              <MenuItem value={false} style={inputStyle} primaryText="Nein!" />
            </SelectValidator>
            <br />

            <SelectValidator
              floatingLabelText="Gimme that paper?"
              style={inputStyle}
              name="CoffeeShopPriceRange"
              value={this.state.price_range}
              onChange={(e, index, value) =>
                this.handlePriceRangeChange(e, index, value)}
              validators={['required']}
              errorMessages={['This field is required, dude!']}>
              <MenuItem
                value={'$'}
                style={inputStyle}
                primaryText="$-It's practically free"
              />
              <MenuItem
                value={'$$'}
                style={inputStyle}
                primaryText="$$-Julian is buying!"
              />
            </SelectValidator>
            <br />
            <br />

            <FlatButton
              style={{ color: 'white' }}
              backgroundColor="red"
              type="submit"
              label="Submit"
            />
          </ValidatorForm>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { message: state.message };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default (CoffeeShopsForm = connect(mapStateToProps, mapDispatchToProps)(
  CoffeeShopsForm
));
