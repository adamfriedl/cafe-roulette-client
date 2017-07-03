import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MyCoffeeShop from './MyCoffeeShop'

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 17
  };

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <GoogleMapReact
        center={this.props.center}
        zoom={this.props.zoom}
      >
        <MyCoffeeShop
          lat={this.props.lat}
          lng={this.props.lng}
          text={'!'}
        />

      </GoogleMapReact>
    );
  }
}
