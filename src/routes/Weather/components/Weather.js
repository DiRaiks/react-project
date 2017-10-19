import React from 'react'
import InputCity from './inputCity'
import ViewWeather from './ViewWeather'
import GoogleMapCity from './GoogleMaps'
import Post from './Post'
import PropTypes from 'prop-types'

export class Weather extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    if (!this.props.auth) {
      this.props.router.push('authentication')
    }
  }

  render() {
    let statusWeather = this.props.infoCity.weather
    const view = (
      <div>
        <ViewWeather infoCity={this.props.infoCity}/>
        <div style={{width: '100%', height: '300px'}}>
          <GoogleMapCity coord={this.props.infoCity.coord}/>
        </div>
        <Post userId={this.props.user.id}/>
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
