import styled from 'styled-components'

export const Figure = styled.figure.attrs({
  className: "f5 flex"
})`
  /* needed for the flex layout*/
  flex: 1 1 200px;
`

export const Figcaption = styled.figcaption.attrs({
  className: "ph2"
})``

export const TrackName = styled.div.attrs({
  className: "truncate"
})`
  width: 215px;
`

export const TrackKind = styled.div.attrs({
  className: "truncate"
})`
  width: 215px;
`

export const Preview = styled.div.attrs({
  className: "pointer f1 dib"
})``