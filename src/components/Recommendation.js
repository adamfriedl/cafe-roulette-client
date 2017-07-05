/* eslint-disable no-undef */

import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';
import FlatButton from 'material-ui/FlatButton';
import RecBody from './RecBody'
import greetings from '../localData/greetings'
import Drawer from 'material-ui/Drawer'
import SimpleMap from './SimpleMap'

class Recommendation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      shop: Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)]),
      greeting: greetings[Math.floor(Math.random()*greetings.length)],
      open: false,
      center: {
        lat: null,
        lng: null
      }
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

  getAddress() {
    const geocoder = new google.maps.Geocoder
    let address = this.state.shop.address
    console.log('initializeGeocoder method says the address is ' + this.state.shop.address)
    geocoder.geocode({'address': address}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log('Status is OK!')
        this.setState({
          center: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          },
          open: true
        })
        console.log('initializeGeocoder method NOW says the address is ' + this.state.shop.address)

      }
      else
      {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    })
  }

  render() {
    return (
      <div>

        <Drawer
        docked={false}
        width={400}
        onRequestChange={this.toggleDrawer}
        open={this.state.open}
        openSecondary={true}
        >

          <SimpleMap
            center={this.state.center}
            lat={this.state.center.lat}
            lng={this.state.center.lng}
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
          onClick={() => this.getAddress()}
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
