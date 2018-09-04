import React from 'react'
import PropTypes from 'prop-types'
import {FiInfo, FiPlayCircle, FiFilm, FiMusic} from 'react-icons/fi'
import {Figure, Figcaption, TrackName, TrackKind, Preview} from './StyledResult'

const Result = (props) =>
  <Figure>
    <img src={props.data.artworkUrl100} alt={props.data.artistName}/>
    <Figcaption>
      {props.data.trackName &&
      <TrackName><FiInfo/> {props.data.trackName}</TrackName>}
      {props.data.kind &&
      <TrackKind>{props.data.kind === 'feature-movie' ? <FiFilm/> : <FiMusic/>} {props.data.kind}</TrackKind>}
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
