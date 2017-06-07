import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import MenuItem from 'material-ui/MenuItem';


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
  handleFoodChange(e) {
    this.setState({
      food: e.target.value
    });
  };
  handlePriceRangeChange(e) {
    this.setState({
      price_range: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault()
    // console.log(this.state)
    this.props.actions.addCoffeeShop(this.state)
  }

  render() {
    return(
      <ValidatorForm
        ref='form'
        onSubmit={e => this.handleSubmit(e)}
        onError={errors => console.log(errors)}
      >
        <p>
          <TextValidator
              floatingLabelText="Name"
              onChange={e => this.handleNameChange(e)}
              name="name"
              value={this.name}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
          />
        </p>

        <p>
          <TextValidator
              floatingLabelText="Description"
              onChange={e => this.handleDescriptionChange(e)}
              name="description"
              value={this.description}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
          />
        </p>

        <p>
          <TextValidator
              floatingLabelText="Website"
              onChange={e => this.handleWebsiteChange(e)}
              name="description"
              value={this.website}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
          />
        </p>

        <p>
          <TextValidator
              floatingLabelText="Address"
              onChange={e => this.handleAddressChange(e)}
              name="address"
              value={this.address}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
          />
        </p>


        <p>
          <SelectValidator
            floatingLabelText="Has Mad Delish Snacks?"
            onChange={e => this.handleFoodChange(e)}
            name="food"
            >
            <MenuItem value={1} primaryText="Yup " />
            <MenuItem value={2} primaryText="Nope - all about the beans" />
          </SelectValidator>
        </p>


        <p>
          <TextValidator
              floatingLabelText="Wallet Pain"
              onChange={e => this.handlePriceRangeChange(e)}
              name="price_range"
              value={this.price_range}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
          />
        </p>



        <br />
        <RaisedButton type="submit">Submit</RaisedButton>
      </ValidatorForm>



      // <div>
      //   <form onSubmit={e => this.handleSubmit(e)} >
      //     <p>
      //       <label>Name</label>
      //       <input type="text" id='name' onChange={e => this.handleNameChange(e)} placeholder='Bean There, Drank That' />
      //     </p>
      //     <input type="submit" />
      //   </form>
      // </div>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   console.log('inside mapDispatchToProps')
//   return {actions: bindActionCreators(actions, dispatch)}
// }

export default CoffeeShopsForm
 // = connect(null, mapDispatchToProps)(CoffeeShopsForm);
