/* eslint-disable no-undef */
/* global.google */
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

  initializeGeocoder() {
    const geocoder = new google.maps.Geocoder()
    const address = this.state.shop.address
    geocoder.geocode({'address': address}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log('LatLng is ' + results[0].geometry.location.lat(), results[0].geometry.location.lng())
        this.setState({
          center: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          },
          open: true
        })
        console.log(this.state.center)
        console.log("Results are " + results[0].geometry.location.lng())
        // return results
        // var marker = new google.maps.Marker({
        //     map: map,
        //     position: results[0].geometry.location
        // });
      }
      else
      {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    })
  }

  componentDidMount = () => {
    this.initializeGeocoder()
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
