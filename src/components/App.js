import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
import setCurrentUser from '../store/auth'
import jwt from 'jsonwebtoken'

const theme = createMuiTheme({
  palette: {
    type: 'light'
  },
});

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }
  componentDidMount() {
    if (localStorage.hardToken) {
      // setAuthorizationToken(localStorage.hardToken);
      this.props.store.dispatch(setCurrentUser(jwt.decode(localStorage.hardToken)))
    }
  }

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={this.props.store}>
          <div style={{ height: '100%' }}>
            <Router history={browserHistory} children={this.props.routes} />
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
