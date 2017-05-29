import React from 'react'

const CoffeeShop = (props) => {

  const allShops = () => (
    props.coffeeShops.map((coffeeShop, index) => (
      <li key={index}>
        {coffeeShop.name}
      </li>
    ))
  )

  return (
    <div>
      <ul>
        {randomShop()}
      </ul>
    </div>
  )
}

export default CoffeeShop
