import React from 'react'
import PropTypes from 'prop-types'
import {FiInfo, FiPlayCircle} from 'react-icons/fi'
import {Figure, Figcaption, TrackName, Preview} from './StyledResult'

const Result = (props) =>
  <Figure>
    <img src={props.data.artworkUrl100} alt={props.data.artistName}/>
    <Figcaption>
      {props.data.trackName &&
      <TrackName><FiInfo/> {props.data.trackName}</TrackName>}
      {props.data.previewUrl &&
      <Preview
        onClick={() => props.showAvModal(props.idx)}
      >
        <FiPlayCircle/>
      </Preview>}
    </Figcaption>
  </Figure>

Result.propTypes = {
  data: PropTypes.object,
  showAvModal: PropTypes.func
}

export default Result
