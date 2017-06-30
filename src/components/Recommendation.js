import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';
import FlatButton from 'material-ui/FlatButton';
import RecBody from './RecBody'
import greetings from '../localData/greetings'
import Drawer from 'material-ui/Drawer'
import AsyncCoffeeShopMap from './AsyncCoffeeShopMap'
import withScriptjs from "react-google-maps/lib/async/withScriptjs"

class Recommendation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      shop: Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)]),
      greeting: greetings[Math.floor(Math.random()*greetings.length)],
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  newShop() {
    console.log('Hi, Im newShop!')
    this.setState({
      shop: Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)]),
      greeting: greetings[Math.floor(Math.random()*greetings.length)]
    })
    console.log(this.state.shop)
  }

  render() {
    // let greeting = greetings[Math.floor(Math.random()*greetings.length)]

    // let shop = Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)])

    return (
      <div>

        <Drawer
          docked={false}
          width={400}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
          openSecondary={true}
        >
          <AsyncCoffeeShopMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrBZpXEt2eFvE4OOuXT3KqI60s2vRS8YY"
            loadingElement={
              <div style={{ height: '100%', width: '100%' }} />
            }
            containerElement={
              <div style={{ height: '100%', width: '100%' }} />
            }
            mapElement={
              <div style={{ height: '100%', width: '100%' }} />
            }
            position={{lat: 25.363882, lng: -131.044922}}
          />

        </Drawer>

        <RecBody
          shop={this.state.shop}
          greeting={this.state.greeting}
        />

        <FlatButton
          style={{color: 'white', marginLeft: 40, marginTop: 30, marginRight: 180}}
          backgroundColor="red"
          label="Gimme Another!"
          onClick={() => this.newShop()}
        />

        <FlatButton
          style={{color: 'white', marginLeft: 40, marginTop: 30, marginRight: 180}}
          backgroundColor="red"
          label="Where the F#@k is it?"
          onClick={() => this.toggleDrawer()}
        />


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    shops: state.shops
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default Recommendation = connect(mapStateToProps, mapDispatchToProps)(Recommendation)
