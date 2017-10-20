import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames';
import Card, {CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

export class AllPosts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {this.props.posts.author}
              </Avatar>
            }
            title={this.props.posts.author}
            subheader={this.props.posts.createdAt}
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {this.props.posts.text}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <div className={classes.flexGrow} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

AllPosts.propTypes = {}

export default withStyles(styles)(AllPosts);
