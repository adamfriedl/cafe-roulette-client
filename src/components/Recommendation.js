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
        <strong>Description</strong><br />
        {shop.description}
      </p>
      <p>
        <strong>Mad Delish Snacks?</strong><br />
        {shop.food
          ? <em>You know it!</em>
          : <em>Negative!</em>
        }
      </p>
      <p>
        <strong>Nonprofit Wallet Pain?</strong><br />
        {shop.price_range}
      </p>
    </div>
  )
}

export default Recommendation
