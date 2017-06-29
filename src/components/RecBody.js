import React from 'react'
import CoffeeShopDetails from './CoffeeShopDetails'

const RecBody = (props) => {

let greetingStyle = {
    fontSize: '3em',
    lineHeight: 1.2
  }

  return (
    <div>
      <p style={greetingStyle}>
        {props.greeting} <a href='{props.shop.website}'>{props.shop.name}</a>
      </p>

      <div>
        <h1>Description</h1>
        <p style={{fontSize: '1.3em', marginTop: -20}}>{props.shop.description}</p>

      <CoffeeShopDetails
          shop={props.shop}
        />
      </div>

    </div>
  )
}

export default RecBody
