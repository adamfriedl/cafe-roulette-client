import React from 'react'

const CoffeeShop = (props) => {

  function firstTitle() {
    return props.shops.map((shop, index) => (
      <li key={index}>
        {shop.title}
      </li>
    ))
  }

  return (
    <div>
      <ul>
        {firstTitle()}
      </ul>
    </div>
  )
}

export default CoffeeShop
