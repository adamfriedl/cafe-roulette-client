import React from 'react'
import CoffeeShop from './CoffeeShop';

const Recommendation = (props) => {

  const coffeeShop = () =>
     props.shops.map((shop) => shop.name )

  return(
  <p>
    Well, thats just great, Susan. You definitely owe me a no-whip skinny latte after this. Let's do {coffeeShop()}
  </p>
)
}

export default Recommendation
