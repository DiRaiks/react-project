import React from 'react'
import PropTypes from 'prop-types'

export class InputCity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityName: ''
    }
    this.searchCity = this.searchCity.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  searchCity() {
    this.props.saveCity(this.state.cityName)
    this.props.searchCity(this.state.cityName)
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange('cityName')} value={this.state.cityName} />
        <input type='button' value='Search' onClick={this.searchCity} />
      </div>
    )
  }
}

InputCity.propTypes = {}

export default InputCity
