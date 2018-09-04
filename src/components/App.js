import React, {Component} from 'react'
import Search from './Search'
import Result from './Result'
import {API} from '../constants'
import {Container, Main, Header, Title, Subtitle, AvModal, AvModalContent, MediaTitle, Media} from './StyledApp'

class App extends Component {

  state = {
    search: '',
    resultCount: 0,
    results: [],
    preview: 0,
    avModal: false
  }

  render() {
    const {results} = this.state

    return (
      <Container>
        <Main>
          <Header>
            <Title>iTunes Search with React</Title>
            <Subtitle>Your favorite artists from the iTunes library</Subtitle>
            <Search submit={this.submit} onChangeInput={this.onChangeInput}/>
          </Header>
          {results.map((data, idx) =>
            <Result key={data.trackId ? data.trackId : data.collectionId} data={data} idx={idx}
                    showAvModal={this.showAvModal} stopMedia={this.stopMedia} pauseMedia={this.pauseMedia}/>)}
        </Main>

        <AvModal>
          <AvModalContent>
            <MediaTitle>{this.state.results.length > 0 && this.state.results[this.state.preview].trackName}</MediaTitle>
            <Media controls>
              Your browser does not support this media
            </Media>
          </AvModalContent>
        </AvModal>

      </Container>
    )
  }

  // Calling the iTunes API and fetching the info about the artist
  submit = e => {
    const artist = this.state.search
    // fetching object {resultCount: int, results: [] }
    fetchTerm(artist).then(
      data => this.setState(data)
    ).then(
      () => showResults()
    )
  }

  // Controlled component functions: onChangeInput and newState
  onChangeInput = e => {
    const {name, value} = e.target
    this.newState(name, value)
  }

  // Generate new state after input has changed
  newState = (element, newElement) => {
    const newState = Object.keys(this.state).reduce((prev, curr) => {
      curr === element ? prev[curr] = newElement : prev[curr] = this.state[curr]
      return prev
    }, {})
    this.setState(newState)
  }
  //

  // Show AVmodal and play
  showAvModal = num => {
    const MEDIA = document.querySelector('.media')
    const MEDIAMODAL = document.querySelector('.av-modal')

    // if preview is paused just continue playing
    if (this.state.avModal && this.state.preview === num) {
      MEDIA.play()
    } else { // else start a new preview
      this.setState({
        preview: num,
        avModal: true
      })

      MEDIAMODAL.classList.remove('dn')
      MEDIA.pause()
      MEDIA.removeAttribute('src')
      MEDIA.setAttribute('src', this.state.results[num].previewUrl)
      MEDIA.load()
      MEDIA.play()

      // close media modal when click elsewhere
      MEDIAMODAL.addEventListener('click', e => {
        this.stopMedia()
      })
    }
  }

  // Stop media
  stopMedia = () => {
    const MEDIA = document.querySelector('.media')
    const MEDIAMODAL = document.querySelector('.av-modal')
    if (this.state.avModal) {
      MEDIAMODAL.classList.add('dn')
      this.setState({avModal: false})
      MEDIA.pause()
      MEDIA.removeAttribute('src')
    }
  }

  // Stop media
  pauseMedia = () => {
    const MEDIA = document.querySelector('.media')
    if (this.state.avModal) {
      MEDIA.pause()
    }
  }

}

export default App

// fetch function
const fetchTerm = (term) => {
  const searchAPI = API + term
  return fetch(searchAPI, {
    method: 'POST'
  }).then(res => {
    return res.json()
  }).then(data => {
    return data
  }).catch(err => console.log(err))
}


// Reveal results
const showResults = () => {
  const HEADER = document.querySelector('.header')
  if (HEADER.getAttribute('aria-label') !== 'search') {
    HEADER.classList.remove('vh-100')
    HEADER.setAttribute('aria-label', 'search')
  }
}