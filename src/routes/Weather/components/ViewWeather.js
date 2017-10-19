import React from 'react'
import PropTypes from 'prop-types'

export class ViewWeather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let img = `http://openweathermap.org/img/w/${this.props.infoCity.weather[0].icon}.png`,
      clouds = this.props.infoCity.clouds.all,
      name = this.props.infoCity.name,
      humidity = this.props.infoCity.main.humidity,
      wind = this.props.infoCity.wind.speed,
      pressure = this.props.infoCity.main.pressure,
      tempKel = this.props.infoCity.main.temp,
      tempCel = Math.ceil(tempKel - 273.15),
      moreLinkId = this.props.infoCity.id,
      moreLink = `http://openweathermap.org/city/${moreLinkId}?utm_source=openweathermap&amp;utm_medium=widget&amp;utm_campaign=html_old`,
      country = this.props.infoCity.sys.country

    return (
      <div>
        <div>
          <div style={{fontSize: 'medium', fontWeight: 'bold', marginBottom: '0px'}}>{name} {country}</div>
          <div style={{float: 'left', width: '130px'}}>
            <div style={{display: 'block', clear: 'left'}}>
              <div style={{float: 'left'}} title='Titel'>
                <img height='45' width='45'
                     style={{
                       border: 'medium none',
                       width: '45px',
                       height: '45px',
                       background: `url(${img}) repeat scroll 0% 0% transparent`
                     }}
                     alt="title" src="http://openweathermap.org/images/transparent.png"/>
              </div>
              <div style={{float: 'left'}}>
                <div
                  style={{display: 'block', clear: 'left', fontSize: 'medium', fontWeight: 'bold', padding: '0pt 3pt'}}
                  title="Current Temperature">{tempCel}°C
                </div>
                <div style={{display: 'block', width: '85px', overflow: 'visible'}}></div>
              </div>
            </div>
            <div style={{display: 'block', clear: 'left', fontSize: 'small'}}>Clouds: {clouds}</div>
            <div style={{display: 'block', clear: 'left', color: 'gray', fontSize: 'x-small'}}>Humidity: {humidity}%
            </div>
            <div style={{display: 'block', clear: 'left', color: 'gray', fontSize: 'x-small'}}>Wind: {wind} m/s</div>
            <div style={{display: 'block', clear: 'left', color: 'gray', fontSize: 'x-small'}}>Pressure: {pressure}hpa
            </div>
          </div>
          <div style={{display: 'block', clear: 'left', color: 'gray', fontSize: 'x-small'}}>
            <a
              href={moreLink}
              target="_blank">More..</a>
          </div>
        </div>
      </div>
    )
  }
}

ViewWeather.propTypes = {}

export default ViewWeather
