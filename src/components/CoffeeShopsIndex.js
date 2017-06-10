import React from 'react'

const CoffeeShopsIndex = (props) => {

  let shops = props.shops.map(shop =>
    <div>
      <h2>{shop.name}</h2>
      <p>
        {shop.description}<br />
        <a href='{shop.website}'>{shop.website}</a><br />
        {shop.address}<br />
        
      </p>
    </div>
  )

  return(
    <div>
      <h1>Every Single Awesome Shop</h1>
      {shops}
    </div>
  )
}

export default CoffeeShopsIndex
