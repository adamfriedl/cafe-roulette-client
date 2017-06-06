import React, { Component } from 'react';
import CoffeeShopsForm from './CoffeeShopsForm';
import { createCoffeeShop } from '../actions/CreateCoffeeShop';

export default class CreateCoffeeShop extends Component {

    handleSubmit(data) {
        createCoffeeShop(data);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}></Form>
            </div>
        );
    }
}

// I'M STILL DOING THIS WITH LOCAL STATE. I THINK I'M ABOUT TO CRACK IT, BUT DON'T KNOW IT WILL QUALIFY FOR PROJECT
