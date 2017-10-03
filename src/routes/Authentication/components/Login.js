import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'

import Snackbar from 'material-ui/Snackbar'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  success: {
    color: '#69F0AE'
  },
  fail: {
    color: 'red'
  }
})

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      verifpass: ''
    }
    this.loginUser = this.loginUser.bind(this)
  }

  clearFields = () => {
    this.setState({
      login: '',
      password: '',
      verifpass: ''
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  loginUser () {
    const user = {
      login: this.state.login,
      password: this.state.password
    }
    this.props.loginUser(user)
  }

  render() {

    const {classes} = this.props

    return (
      <div>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.login === 'SUCCESS'}
          autoHideDuration={6000}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span className={classes.success} id="message-id">You are Login</span>}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.login === 'FAIL'}
          autoHideDuration={6000}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span className={classes.fail} id="message-id">{this.props.errorLogin}</span>}
        />


        <h2>Login</h2>
        <TextField
          label='Login Field'
          placeholder='Login'
          className={classes.textField}
          margin='normal'
          required
          value={this.state.login}
          onChange={this.handleChange('login')}
        /><br/>
        <TextField
          label='Password Field'
          placeholder='Password'
          className={classes.textField}
          type='password'
          autoComplete='current-password'
          margin='normal'
          value={this.state.password}
          onChange={this.handleChange('password')}
          required
        /><br/>
        <TextField
          label='Password Verificaton Field'
          placeholder='Password'
          type='password'
          className={classes.textField}
          margin='normal'
          value={this.state.verifpass}
          onChange={this.handleChange('verifpass')}
          required
        /><br/>
        <Button
          raised
          color="primary"
          disabled={!(this.state.password === this.state.verifpass) ||
          !this.state.login || !this.state.password}
          onClick={this.loginUser}
          className={classes.button}>
          Registration
        </Button>
        <Button
          raised
          color="accent"
          onClick={this.clearFields}
          className={classes.button}>
          Clear
        </Button>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
