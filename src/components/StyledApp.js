import styled from 'styled-components'
import '../css/App.css'

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