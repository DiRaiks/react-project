import React from 'react'
import InputCity from './inputCity'
import ViewWeather from './ViewWeather'
import PropTypes from 'prop-types'

export class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <InputCity searchCity={this.props.searchCity} />
        <ViewWeather infoCity={this.props.infoCity} />
      </div>
    )
  }
}

Weather.propTypes = {}

export default Weather
