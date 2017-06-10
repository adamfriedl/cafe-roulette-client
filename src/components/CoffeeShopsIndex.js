import React from 'react'

const CoffeeShopsIndex = (props) => {

  let shops = props.shops.map(shop => (
    <div>
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
    </div>
  ))

  return(
    <div>
      <h1>Every Single Awesome Shop</h1>
      {shops}
    </div>
  )
}

export default CoffeeShopsIndex
