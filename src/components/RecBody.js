import React, {Component} from 'react'
import CoffeeShopDetails from './CoffeeShopDetails'

class RecBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shop: props.shop
    }
  }
  componentWillReceiveProps(newProps) {
    console.log("I'm newProps!")
    if (this.props.shop !== newProps.shop) {
      this.setState({
        shop: newProps.shop
      })
    }
  }

  render() {

    let greetingStyle = {
        fontSize: '3em',
        lineHeight: 1.2
      }

    return (
      <div>
        <p style={greetingStyle}>
         <a href='{this.state.shop.website}'>{this.state.shop.name}</a>
        </p>

        <div>
          <h1>Description</h1>
          <p style={{fontSize: '1.3em', marginTop: -20}}>{this.state.shop.description}</p>

        <CoffeeShopDetails
            shop={this.state.shop}
          />
        </div>

      </div>
    )
  }
}

export default RecBody
