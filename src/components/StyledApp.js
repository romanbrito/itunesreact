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
  className: "av-modal dn fixed top-0 left-0 bg-black-70 center z-2 w-100 h-100"
})`
  padding-top: 100px;
`

export const AvModalContent = styled.div.attrs({
  className: "modal-content center bg-white w-100 br3"
})`
  @media screen and (min-width: 480px) {
  width: 700px;
  }
`

export const MediaTitle = styled.h2.attrs({
  className: "tc pt2"
})``

export const Media = styled.video.attrs({
  className: "media db center pb3"
})`
  width: 320px;
  height: 240px;
  
  @media screen and (min-width: 480px) {
  width: 640px;
  height: 380px;
  }
`