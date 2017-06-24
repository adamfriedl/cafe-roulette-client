import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import CoffeeShopDetails from './CoffeeShopDetails'
import greetings from '../localData/greetings'


const Recommendation = (props) => {

  // function gimmeNewShop() {
  //   console.log('Hello there!')
  //   let shop = Object.assign({}, props.shops[Math.floor(Math.random()*props.shops.length)])
  //   return shop
  // }

  let greeting = greetings[Math.floor(Math.random()*greetings.length)]

  let shop = Object.assign({}, props.shops[Math.floor(Math.random()*props.shops.length)])

  let greetingStyle = {
    fontSize: '3em',
    lineHeight: 1.2
  }

  const CustomFlatButton = (props) => (
    <FlatButton {...props}
      style={{color: 'white', margin: 20, backgroundColor: 'red'}}
    />
  )

  return (
    <div>
      <p style={greetingStyle}>
        {greeting} <a href='{shop.website}'>{shop.name}</a>
      </p>

      <div>
        <h1>Description</h1>
        <p style={{fontSize: '1.3em', marginTop: -20}}>{shop.description}</p>

      <CoffeeShopDetails
          shop={shop}
        />
      </div>

      <CustomFlatButton
        label="Gimme Another!"
        onClick={() => this.gimmeNewShop()}
      />

      <CustomFlatButton
        label="Where the F#@k is it?"
      />

    </div>
  )
}

export default Recommendation
