import React from 'react'
import InputCity from './inputCity'
import ViewWeather from './ViewWeather'
import GoogleMapCity from './GoogleMaps'
import PropTypes from 'prop-types'

export class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let statusWeather = this.props.infoCity.weather
    const view = (
      <div>
        <ViewWeather infoCity={this.props.infoCity}/>
        <GoogleMapCity coord={this.props.infoCity.coord}/>
      </div>
    )
    return (
      <div>
        <InputCity searchCity={this.props.searchCity}/>
        {statusWeather ? view : ''}
      </div>
    )
  }
}

Weather.propTypes = {}

export default Weather
