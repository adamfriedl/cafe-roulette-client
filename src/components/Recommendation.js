import React from 'react'
import { Link } from 'react-router-dom'


const Recommendation = (props) => {




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
        Goodnight kittens and goodnight mittens. Goodnight clocks and goodnight <a href='{shop.website}'>{shop.name}</a>
      </p>
      <p>
        <strong>Fun Fact</strong><br />
        {shop.description}
      </p>
      <p>
        <strong>Tasty Food Things?</strong><br />
        {shop.food
          ? <em>Thumbs up!</em>
          : <em>NotYum!</em>
        }
      </p>
      <p>
        <strong>Estimated pain relative to my nonprofit salary?</strong><br />
        {shop.price_range}
      </p>
      // <Link to='/coffeeshops/new'>Submit a Coffee Shop</Link>
    </div>
  )
}

export default Recommendation
