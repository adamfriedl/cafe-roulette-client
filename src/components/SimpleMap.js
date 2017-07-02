import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 17
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GoogleMapReact
        center={this.props.center}
        zoom={this.props.zoom}
      >
        <Map
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}
