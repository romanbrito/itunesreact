import React from 'react'
import PropTypes from 'prop-types'

const Result = (props) =>
  <figure>
    <img src={props.data.artworkUrl100} alt={props.data.artistName}/>
    <figcaption>{props.data.trackId}</figcaption>
  </figure>

Result.propTypes = {
  data: PropTypes.object
}

export default Result