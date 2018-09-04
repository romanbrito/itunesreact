import React, {Component} from 'react'
import Search from './Search'
import Result from './Result'
import {API} from '../constants'
import {Main, Header, Title, Subtitle, AvModal, Media} from './StyledApp'

class App extends Component {

  state = {
    search: '',
    resultCount: 0,
    results: [],
    avModal: false,
    preview: 0
  }

  render() {
    const {results} = this.state

    return (
      <Main>
        <Header>
          <Title>iTunes Search with React</Title>
          <Subtitle>Your favorite artists from the iTunes library</Subtitle>
          <Search submit={this.submit} onChangeInput={this.onChangeInput}/>
        </Header>
        {results.map((data, idx) =>
          <Result key={data.trackId ? data.trackId : data.collectionId} data={data} idx={idx} showAvModal={this.showAvModal}/>)}

        <AvModal>
          <Media controls>
            Your browser does not support this media
          </Media>
        </AvModal>

      </Main>
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

  // Show AVmodal
  showAvModal = num => {

    this.setState({
      avModal: true,
      preview: num
    })

    const MEDIA = document.querySelector('.media')
    const MEDIAMODAL = document.querySelector('.av-modal')
    MEDIAMODAL.classList.remove('dn')
    MEDIA.pause()
    MEDIA.removeAttribute('src')
    MEDIA.setAttribute('src', this.state.results[num].previewUrl)
    MEDIA.load()
    MEDIA.play()
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