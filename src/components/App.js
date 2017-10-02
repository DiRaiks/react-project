import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'

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