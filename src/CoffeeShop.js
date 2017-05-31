import React from 'react'

const CoffeeShop = (props) => {

  const arr = props.shops

  const randomChoice = arr => {
    const randIndex = Math.floor(Math.random() * props.shops.length);
    return props['shops'][0]['name'];
  };

  function coffeeShop() {
    return props.shops.map((shop, index) => shop.name )}

  return (
    <div>
        {coffeeShop()}
    </div>
  )
}

export default CoffeeShop
