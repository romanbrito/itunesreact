import styled from 'styled-components'
import '../css/App.css'

export const Container = styled.div.attrs({
  className: "container"
})``

export const Main = styled.main.attrs({
  className: "App sans-serif"
})``

export const Header = styled.header.attrs({
  'aria-label': 'landing-page',
  className: "header vh-100 flex justify-center flex-column items-center"
})`
  grid-column: 1 / -1;
`

export const Title = styled.h1.attrs({
  className: "f-4"
})``

export const Subtitle = styled.p.attrs({
  className: "f-4"
})``

export const AvModal = styled.figure.attrs({
  'aria-hidden': 'true',
  className: "av-modal dn fixed top-0 bg-white br3 center"
})`
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

export const MediaTitle = styled.h2.attrs({
  className: "tc"
})``

export const Media = styled.video.attrs({
  className: "media"
})`
  width: 320px;
  height: 240px;
`