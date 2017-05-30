import React from 'react'

const CoffeeShop = (props) => {

  function randomShop() {
    return props.shops.map((shop, index) => (
      <li key={index}>
        {shop.name}
      </li>
    ))
  }

  return (
    <div>
      <ul>
        {randomShop()}
      </ul>
    </div>
  )
}

export default CoffeeShop
