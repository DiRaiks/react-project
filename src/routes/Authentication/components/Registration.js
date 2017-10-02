import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'

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
})


export class Authentication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      login: '',
      email: '',
      password: '',
      verifpass: ''
    }
    this.registration = this.registration.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  clearFields = () => {
    this.setState({
      name: '',
      login: '',
      email: '',
      password: '',
      verifpass: ''
    })
  }

  registration (e) {
    e.preventDefault();
    const user = {
      login: this.state.login,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.registrationUser(user)
  }

  render () {

    const {classes} = this.props

    return (
      <div>
        <h2>Registration</h2>
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
          label='Name Field'
          placeholder='Name'
          className={classes.textField}
          margin='normal'
          value={this.state.name}
          onChange={this.handleChange('name')}
          required
        /><br/>
        <TextField
          label='Email Field'
          placeholder='email@email.ru'
          className={classes.textField}
          margin='normal'
          value={this.state.email}
          onChange={this.handleChange('email')}
          required
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
          onClick={this.registration}
          disabled={!(this.state.password === this.state.verifpass) ||
          !this.state.login || !this.state.name || !this.state.email ||
          !this.state.password}
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

Authentication.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Authentication)
