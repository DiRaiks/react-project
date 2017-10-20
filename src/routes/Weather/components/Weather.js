import React from 'react'
import InputCity from './inputCity'
import ViewWeather from './ViewWeather'
import GoogleMapCity from './GoogleMaps'
import Post from './Post'
import AllPosts from './allPosts'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = {
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
};

export class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
      postsArray: [],
      value: 0,
    }
    this.saveCity = this.saveCity.bind(this)
  }

  componentDidMount() {
    if (!this.props.auth) {
      this.props.router.push('authentication')
    }
  }

  componentWillReceiveProps(nextProps) {

    console.log('trigger', nextProps)
    this.setState({
      postsArray: nextProps.posts.map((item) => {
        console.log(item)
        return (
          <div key={item.id}>
            <AllPosts posts={item}/>
          </div>
        )
      })
    })
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  saveCity(city) {
    this.setState({
      cityName: city
    })
    this.props.getPosts(city)
  }

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    let statusWeather = this.props.infoCity.weather
    const view = (
      <div>
        <ViewWeather infoCity={this.props.infoCity}/>
        <div style={{width: '100%', height: '300px'}}>
          <GoogleMapCity coord={this.props.infoCity.coord}/>
        </div>
        <Post createPost={this.props.createPost} cityName={this.state.cityName} user={this.props.user}/>
      </div>
    )
    return (
      <div>
        <InputCity saveCity={this.saveCity} searchCity={this.props.searchCity}/>
        {statusWeather ? view : ''}
        {this.state.postsArray}
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationButton label="Map" icon={<RestoreIcon />} />
          <BottomNavigationButton label="Posts" icon={<FavoriteIcon />} />
          <BottomNavigationButton label="Add Post" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

Weather.propTypes = {}

export default withStyles(styles)(Weather)
