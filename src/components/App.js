import React, {Component} from 'react'
import Search from './Search'
import Result from './Result'
import {API} from '../constants'
import {Main, Header} from './StyledApp'

class App extends Component {

  state = {
    search: '',
    resultCount:0,
    results: []
  }

  render() {
    const {results} = this.state

    return (
      <Main>
        <Header>
          <Search submit={this.submit} onChangeInput={this.onChangeInput}/>
        </Header>
        {results.map(data =>
          <Result key={data.trackId ? data.trackId: data.collectionId} data={data}/>)}
      </Main>
    )
  }

  // Calling the iTunes API and fetching the info about the artist
  submit = e => {
    const artist = this.state.search
    // fetching object {resultCount: int, results: [] }
    fetchTerm(artist).then(
      data => this.setState(data)
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
      curr === element ? prev[curr] = newElement: prev[curr] = this.state[curr]
      return prev
    }, {})
    this.setState(newState)
  }
  //
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