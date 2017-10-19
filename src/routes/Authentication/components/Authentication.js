import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Registration from './Registration'
import Login from './Login'
import ChangeIcon from 'material-ui-icons/TrendingFlat'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

export class Authentication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewRegistration: true
    }
    this.logOrReg = this.logOrReg.bind(this)
    this.changeLocation = this.changeLocation.bind(this)
    this.changeAuthStatus = this.changeAuthStatus.bind(this)
  }

  componentDidMount() {
    if (!localStorage.getItem('Token')) {
      this.changeAuthStatus()
    }
  }

  logOrReg() {
    this.setState({
      viewRegistration: !this.state.viewRegistration
    })
  }

  changeLocation() {
    this.props.router.push('/weather')
  }

  changeAuthStatus() {
    this.props.changeAuthStatus()
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        {this.state.viewRegistration
          ? <Registration
            registration={this.props.registration}
            errorRegistration={this.props.errorRegistration}
            registrationUser={this.props.registrationUser}/>
          : <Login
            login={this.props.login}
            errorLogin={this.props.errorLogin}
            loginUser={this.props.loginUser}
            changeLocation={this.changeLocation}
            auth={this.props.auth}
          />}
        <Button
          fab
          color="primary"
          aria-label="add"
          onClick={this.logOrReg}
          className={classes.button}>
          <ChangeIcon/>
        </Button>
      </div>
    )
  }
}

Authentication.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Authentication)
