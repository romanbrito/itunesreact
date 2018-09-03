import React from 'react'
import PropTypes from 'prop-types'
import {FiInfo} from 'react-icons/fi'

const Result = (props) =>
  <figure>
    <img src={props.data.artworkUrl100} alt={props.data.artistName}/>
    <figcaption>
      <FiInfo/> {props.data.trackName && props.data.trackName}
    </figcaption>
  </figure>

Result.propTypes = {
  data: PropTypes.object
}

export default Result