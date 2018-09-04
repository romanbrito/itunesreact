import styled from 'styled-components'

export const Figure = styled.figure.attrs({
  className: "f5 flex bg-black-10"
})`
  flex: 1 1 200px;
  display: grid;
`
export const Image = styled.img.attrs({
  className: "h-100"
})`
  grid-column: 1;
  grid-row: 1;
`

export const Figcaption = styled.figcaption.attrs({
  className: "ph2"
})`
  width: 189px;
  grid-column: 2;
  grid-row: 1;
`
export const Link = styled.a.attrs({
  className: "link white"
})``

export const TrackName = styled.div.attrs({
  className: "truncate"
})``

export const TrackKind = styled.div.attrs({
  className: "truncate"
})``

export const ArtistName = styled.div.attrs({
  className: "truncate"
})``

export const ReleaseDate = styled.div.attrs({
  className: "truncate"
})``

export const Preview = styled.div.attrs({
  className: "pointer f1 flex flex-column justify-center items-center z-1"
})`
  grid-column: 1;
  grid-row: 1;
`