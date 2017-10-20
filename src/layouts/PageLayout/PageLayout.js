import React from 'react'
import {browserHistory} from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import {withStyles} from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import HomeIcon from 'material-ui-icons/Home'
import NewsIcon from 'material-ui-icons/Dvr'
import LoginIcon from 'material-ui-icons/Input'
import LogoutIcon from 'material-ui-icons/LabelOutline'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

export class PageLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      auth: false
    }
    // this.changeAuth = this.changeAuth.bind(this)
  }

  handleDrawerOpen = () => {
    this.setState({open: true})
  };

  handleDrawerClose = () => {
    this.setState({open: false})
  };

  goToHome = () => {
    browserHistory.push(`/`)
  };
  goToWeather = () => {
    browserHistory.push(`/weather`)
  };
  goToAuth = () => {
    browserHistory.push(`/authentication`)
  };
  logOut = () => {
    localStorage.removeItem('Token')
    browserHistory.push(`/authentication`)
  }

  render() {
    const {classes} = this.props

    let statusAuth = false
    if (localStorage.getItem('Token')) {
      statusAuth = true
    }
    const authButton = (
      <ListItem button onClick={this.goToAuth}>
        <ListItemIcon>
          <LoginIcon/>
        </ListItemIcon>
        <ListItemText primary='Registartion/Login'/>
      </ListItem>
    )
    const logoutButton = (
      <ListItem button onClick={this.logOut}>
        <ListItemIcon>
          <LogoutIcon/>
        </ListItemIcon>
        <ListItemText primary='Logout'/>
      </ListItem>
    )
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color='contrast'
                aria-label='open drawer'
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon/>
              </IconButton>
              <Typography type='title' color='inherit' noWrap>
                Weather
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            type='permanent'
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon/>
                </IconButton>
              </div>
              <Divider/>
              <List className={classes.list}>
                <ListItem button onClick={this.goToHome}>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Home'/>
                </ListItem>
              </List>
              <Divider/>
              <List className={classes.list}>
                <ListItem button onClick={this.goToWeather}>
                  <ListItemIcon>
                    <NewsIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Weather'/>
                </ListItem>
              </List>
              <Divider/>
              <List className={classes.list}>
                {statusAuth ? logoutButton : authButton}
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Typography type='body1' noWrap>
              <div className='page-layout__viewport'>
                {this.props.children}
              </div>
            </Typography>
          </main>
        </div>
      </div>
    )
  }
}

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default withStyles(styles)(PageLayout)
