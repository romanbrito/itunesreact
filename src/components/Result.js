import React from 'react'
import PropTypes from 'prop-types'
import {FiInfo} from 'react-icons/fi'
import {Figure} from './StyledResult'

const Result = (props) =>
  <Figure>
    <img src={props.data.artworkUrl100} alt={props.data.artistName}/>
    <figcaption>
      <FiInfo/> {props.data.trackName && props.data.trackName}
    </figcaption>
  </Figure>

Result.propTypes = {
  data: PropTypes.object
}

export default Result