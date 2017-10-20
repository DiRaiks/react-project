import { connect } from 'react-redux'
import { searchCity, createPost, getPosts } from '../modules/weather'

import Weather from '../components/Weather'

const mapDispatchToProps = {
  searchCity,
  createPost,
  getPosts
}

const mapStateToProps = (state) => ({
  infoCity: state.weather.infoCity,
  user: state.auth.user,
  auth: state.auth.Authorization,
  posts: state.weather.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
