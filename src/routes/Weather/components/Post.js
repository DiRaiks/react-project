import React from 'react'
import PropTypes from 'prop-types'

export class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.createPost = this.createPost.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  createPost(e) {
    e.preventDefault()
    console.log('create', this.props.userId)
  }

  render() {
    return (
      <form onSubmit={this.createPost}>
        <label>
          Text
          <textarea placeholder='Text' value={this.state.text} onChange={this.handleChange('text')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

Post.propTypes = {}

export default Post
