import React, { Component } from 'react';


class CoffeeShopsIndex extends Component {

  constructor(props) {
    super(props)

    let shops = this.props.shops
    shops.map((shop, index) => {
      shop.state = {
        votes: 0
      }
    })
  }

  upVote(id) {
    console.log(this.props.shops.filter(shop => shop.id === id)[0].state.votes += 1)
      // votes: this.props.shops[0].state.votes + 1
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
        <p>
          Votes: {shop.state.votes}
        </p>

        <button
          onClick={() => this.upVote(shop.id)}>
          Upvote!
        </button>
        <br />

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

export default CoffeeShopsIndex
