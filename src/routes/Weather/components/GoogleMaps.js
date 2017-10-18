import React from 'react'
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps'
import { compose, withProps } from "recompose"

import PropTypes from 'prop-types'

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: props.coord.lat, lng: props.coord.lon }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.coord.lat, lng: props.coord.lon }} />}
  </GoogleMap>
)

export class GoogleMapsCity extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 2000)
  }

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false })
  //   this.delayedShowMarker()
  // }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        coord={this.props.coord}
        // onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
export default GoogleMapsCity
