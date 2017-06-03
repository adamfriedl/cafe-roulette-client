import React, { Component } from 'react';

class CoffeeShopsForm extends Component {

  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };
  render() {
    return(
      <div>
        <form>
          <p>
            <label>Name</label>
            <input type="text" onChange={event => this.handleEvent(event)} placeholder='Bean There, Drank That' />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default CoffeeShopsForm;
