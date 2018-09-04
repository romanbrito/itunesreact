import React from 'react'
import PropTypes from 'prop-types'
import {FiInfo, FiPlayCircle, FiFilm, FiMusic, FiUser, FiCalendar} from 'react-icons/fi'
import {Figure, Figcaption, TrackName, TrackKind, ArtistName, Preview, ReleaseDate, Image} from './StyledResult'

const Result = (props) =>
  <Figure>
    <Image src={props.data.artworkUrl100} alt={props.data.artistName}/>
    {props.data.previewUrl &&
    <Preview
      onClick={() => props.showAvModal(props.idx)}
    >
      <FiPlayCircle/>
    </Preview>}
    <Figcaption>
      {props.data.trackName &&
      <TrackName><FiInfo/> {props.data.trackName}</TrackName>}
      {props.data.kind &&
      <TrackKind>{props.data.kind === 'feature-movie' ? <FiFilm/> : <FiMusic/>} {props.data.kind}</TrackKind>}
      {props.data.artistName &&
      <ArtistName><FiUser/> {props.data.artistName}</ArtistName>}
      {props.data.releaseDate &&
      <ReleaseDate><FiCalendar/> {props.data.releaseDate.slice(0,10)}</ReleaseDate>}
    </Figcaption>
  </Figure>

Result.propTypes = {
  data: PropTypes.object,
  showAvModal: PropTypes.func
}

export default Result
