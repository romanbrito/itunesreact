import styled from 'styled-components'
import '../css/App.css'

export const Container = styled.div.attrs({
  className: "container"
})``

export const Main = styled.main.attrs({
  className: "App sans-serif bg-center"
})`
  background-image: url("https://res.cloudinary.com/spottermart/image/upload/c_scale,h_820/v1536059222/Dog.jpg");
  @media screen and (min-width: 480px) {
    background-image: url("https://res.cloudinary.com/spottermart/image/upload/c_scale,h_1425/v1536059222/Dog.jpg");
  }
`

export const Header = styled.header.attrs({
  'aria-label': 'landing-page',
  className: "header vh-100 flex justify-center flex-column items-center"
})`
  grid-column: 1 / -1;
`

export const Title = styled.h1.attrs({
  className: "f2 fw7 red"
})``

export const Subtitle = styled.p.attrs({
  className: "f3 fw7 near-white"
})``

export const AvModal = styled.figure.attrs({
  className: "av-modal dn ma0 fixed z-1 top-0 left-0 bg-black-70 w-100 h-100"
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
  className: "media db center pb3 ma0"
})`
  width: 320px;
  height: 240px;
  
  @media screen and (min-width: 480px) {
  width: 640px;
  height: 380px;
  }
`

export const CloseModal = styled.button.attrs({
  className: "pointer bg-blue near-white w3 ma2"
})``