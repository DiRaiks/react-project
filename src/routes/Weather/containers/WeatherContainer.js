import { connect } from 'react-redux'
import { searchCity } from '../modules/weather'

import Weather from '../components/Weather'

const mapDispatchToProps = {
  searchCity,
}

const mapStateToProps = (state) => ({
  infoCity: state.weather.infoCity
})

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
