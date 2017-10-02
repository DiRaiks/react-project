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
  }
  logOrReg() {
    this.setState({
      viewRegistration: !this.state.viewRegistration
    })
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        { this.state.viewRegistration ? <Registration registrationUser={ this.props.registrationUser }/> : <Login /> }
        <Button
          fab
          color="primary"
          aria-label="add"
          onClick={this.logOrReg}
          className={classes.button}>
          <ChangeIcon />
        </Button>
      </div>
    )
  }
}

Authentication.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Authentication)
