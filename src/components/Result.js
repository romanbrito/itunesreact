import React from 'react'

const Result = (props) =>
  <figure>
    <img src={props.data.artworkUrl100} alt={props.data.artistName}/>
    <figcaption>{props.data.trackId}</figcaption>
  </figure>

export default Result