import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import StarBorder from 'material-ui-icons/StarBorder';

export default class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 17
  };

  render() {
    return (
      <GoogleMapReact center={this.props.center} zoom={this.props.zoom}>
        <StarBorder color={'blue'} lat={this.props.lat} lng={this.props.lng} />
      </GoogleMapReact>
    );
  }
}
