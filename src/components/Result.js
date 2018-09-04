import React from 'react'
import PropTypes from 'prop-types'
import {FiInfo} from 'react-icons/fi'
import {Figure, Figcaption} from './StyledResult'

const Result = (props) =>
  <Figure>
    <img src={props.data.artworkUrl100} alt={props.data.artistName}/>
    <Figcaption>
      <FiInfo/>
      {props.data.trackName &&
      <div>{props.data.trackName}</div>}
      {/*<div className="dn">*/}
        {/*<video controls>*/}
          {/*<source src={props.data.previewUrl}/>*/}
          {/*Your browser does not support the video tag*/}
        {/*</video>*/}
      {/*</div>*/}
    </Figcaption>
  </Figure>

Result.propTypes = {
  data: PropTypes.object
}

export default Result