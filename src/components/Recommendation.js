import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import RecBody from './RecBody'
import CoffeeShopDetails from './CoffeeShopDetails'
import greetings from '../localData/greetings'

const Recommendation = (props) => {
  let greeting = greetings[Math.floor(Math.random()*greetings.length)]

  let shop = Object.assign({}, props.shops[Math.floor(Math.random()*props.shops.length)])
  debugger

  const CustomFlatButton = (props) => (
    <FlatButton {...props}
      style={{color: 'white', backgroundColor: 'red', marginLeft: 40, marginTop: 30, marginRight: 180}}
    />
  )

  return (
    <div>
      <RecBody
        shop={shop}
        greeting={greeting}
      />

      <CustomFlatButton
        label="Gimme Another!"
        onClick={() => this.newShop()}
      />

      <CustomFlatButton
        label="Where the F#@k is it?"
      />

    </div>
  )
}

export default Recommendation
