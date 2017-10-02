import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const style = {
  margin: 12,
}

export const Counter = () => (
  <div>
    {/*<TextField*/}
      {/*hintText='Login'*/}
      {/*floatingLabelText='Login Field'*/}
    {/*/><br />*/}
    {/*<TextField*/}
      {/*hintText='Name'*/}
      {/*floatingLabelText='Name Field'*/}
    {/*/><br />*/}
    {/*<TextField*/}
      {/*hintText='email@email.ru'*/}
      {/*floatingLabelText='Email Field'*/}
    {/*/><br />*/}
    {/*<TextField*/}
      {/*hintText='Password'*/}
      {/*floatingLabelText='Password Field'*/}
      {/*type='password'*/}
    {/*/><br />*/}
    {/*<TextField*/}
      {/*hintText='Password'*/}
      {/*floatingLabelText='Password Verification Field'*/}
      {/*type='password'*/}
    {/*/><br />*/}
  </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
