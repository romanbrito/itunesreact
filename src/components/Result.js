import React from 'react'
import PropTypes from 'prop-types'
import {FiInfo, FiPlayCircle, FiStopCircle, FiPauseCircle} from 'react-icons/fi'
import {Figure, Figcaption, TrackName, Preview, StopPreview, PausePreview} from './StyledResult'

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
      {props.data.previewUrl &&
      <StopPreview
        onClick={() => props.stopMedia()}
      >
        <FiStopCircle/>
      </StopPreview>}
      {props.data.previewUrl &&
      <PausePreview
        onClick={() => props.pauseMedia()}
      >
        <FiPauseCircle/>
      </PausePreview>}
    </Figcaption>
  </Figure>

Result.propTypes = {
  data: PropTypes.object,
  showAvModal: PropTypes.func
}

export default Result
