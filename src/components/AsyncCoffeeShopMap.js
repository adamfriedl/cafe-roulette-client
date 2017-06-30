import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import withScriptjs from "react-google-maps/lib/async/withScriptjs"

const AsyncCoffeeShopMap = withScriptjs(withGoogleMap(
  props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: 50, lng: 120 }}
      onClick={props.onMapClick}
    >

    </GoogleMap>
)));

export default AsyncCoffeeShopMap
