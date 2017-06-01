import React from 'react'

const Recommendation = (props) => {

  // let shop = props.shops.map(shop => shop.name)
  // uses shop with brackets around in the return function

  let shop = Object.assign({}, props.shops[Math.floor(Math.random()*props.shops.length)])


  return (
    <div>
      {shop.name}
    </div>
  )
}
export default Recommendation
