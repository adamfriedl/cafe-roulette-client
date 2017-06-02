import React from 'react'


const Recommendation = (props) => {

  // let shop = props.shops.map(shop => shop.name)
  // uses shop with brackets around in the return function
  debugger
  let shop = Object.assign({}, props.shops[Math.floor(Math.random()*props.shops.length)])

  let pStyle = {
    fontSize:40,
    lineHeight: 1.3,
    fontStyle:'italic',
    fontWeight:'bold',
    textTransform:'uppercase',
  }

  return (
    <div>
      <p style={pStyle}>
        Goodnight kittens and goodnight mittens. Goodnight clocks and goodnight <a href='http://cafegrumpy.com'>{shop.name}</a>
      </p>
      <p>
        <strong>Fun Fact</strong><br />
        {shop.description}
      </p>
      <p>
        <strong>Tasty Food Things?</strong><br />
        {shop.food
          ? <em>Yum!</em>
          : <em>NotYum!</em>
        }
      </p>
      <p>
        <strong>Estimated pain relative to my nonprofit salary?</strong><br />
        {shop.price_range}
      </p>
    </div>
  )
}

export default Recommendation
