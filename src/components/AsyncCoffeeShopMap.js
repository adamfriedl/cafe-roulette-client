import React from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import withScriptjs from "react-google-maps/lib/async/withScriptjs"

const AsyncCoffeeShopMap = withGoogleMap(
  props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={6}
      center={{ lat: -20, lng: 30 }}
      onClick={props.onMapClick}
    >

    </GoogleMap>
  )
)


export default AsyncCoffeeShopMap
