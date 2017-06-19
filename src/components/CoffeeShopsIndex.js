import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions'
import Votes from './Votes'

class CoffeeShopsIndex extends Component {

  constructor(props) {
    super(props)

  }

  update(id) {
    fetch('http://localhost:9000/coffee_shops/' + id)
      .then(res => res.json())
      .then(shop => console.log(shop)
    )
  }

  render() {
    let shops = this.props.shops.map(shop => (
      <div key={shop.id}>
        <h2>{shop.name}</h2>
        <p>
          <strong>Description</strong><br />
          {shop.description}
        </p>
        <p>
          <strong>Website</strong><br />
          <a href={shop.website}>{shop.website}</a>
        </p>
        <p>
          <strong>Address</strong><br />
          {shop.address}
        </p>
        <p>
          <strong>Mad Delish Snacks?</strong><br />
          {shop.food
            ? <span>You know it!</span>
            : <span>Negative!</span>
          }
        </p>
        <p>
          <strong>Wallet Pain</strong><br />
          {shop.price_range}
        </p>

        <Votes shop={shop}/>

        <button
          onClick={() => this.update(shop.id)}
        >
          Update!
        </button>

      </div>
    ))

    return(
      <div>
        <h1>Every Single Awesome Shop</h1>
        {shops}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default CoffeeShopsIndex = connect(null, mapDispatchToProps)(CoffeeShopsIndex);
