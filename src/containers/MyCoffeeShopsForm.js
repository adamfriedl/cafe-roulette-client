import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class MyCoffeeShopsForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.value;
        this.setState({ name });
    }

    handleSubmit(e) {
      e.preventDefault()
      console.log(this.state)
      this.props.actions.addCoffeeShop(this.state)
    }

    render() {
        const { name } = this.state.name;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={e => this.handleSubmit(e)}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    floatingLabelText="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={name}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <RaisedButton type="submit" />
            </ValidatorForm>
        );
    }
}
