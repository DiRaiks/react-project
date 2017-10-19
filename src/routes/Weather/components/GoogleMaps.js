import React from 'react'
import GoogleMapReact from 'google-map-react'

export class GoogleMapsCity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: 11
    }
  }

  render() {
    const center = {
      lat: this.props.coord.lat,
      lng: this.props.coord.lon
    }
    return (
      <GoogleMapReact
        center={center}
        defaultZoom={this.state.zoom}
      >
        {/*<AnyReactComponent*/}
          {/*lat={59.955413}*/}
          {/*lng={30.337844}*/}
          {/*text={'Kreyser Avrora'}*/}
        {/*/>*/}
      </GoogleMapReact>
    );
  }
}

export default GoogleMapsCity
