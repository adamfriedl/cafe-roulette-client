import React from 'react'

const Recommendation = (props) => {

  const coffeeShop = () =>
    //  props.shops.map((shop) => shop.name)
    props.shops.slice(-1[0])
  const shops = props.shops
  const randomShop = () => props.shops[Math.floor(Math.random() * 2)]
  //  var pickAFruit = function () {
  //  var todaysFruit = selectFruit[Math.floor(Math.random() * 4)];
  //  return todaysFruit;
  //  };

  return(
  <p>
    Well, thats just great, Susan. You definitely owe me a no-whip skinny latte after this. Let's do {props.shop.name}
  </p>
  )
}

export default Recommendation
