import React from 'react'
import PropTypes from 'prop-types'

export class News extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render () {
    return (
      <div>

      </div>
    )
  }
}

News.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default News
