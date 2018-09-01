import React from 'react'
import PropTypes from 'prop-types'
import {
  SearchInput,
  Label,
  SearchButton
} from './StyledSearch'

const Search = (props) =>
  <section>
    <Label htmlFor="search">Search</Label>
    <SearchInput
      name="search"
      id="search"
      placeholder="What are you looking for..."
      onChange={e => props.onChangeInput(e)}
      onKeyPress={e => e.key === 'Enter' ? props.submit(e) : ''}
    />
    <SearchButton
      onClick={e => props.submit(e)}
    >
      Search
    </SearchButton>
  </section>

Search.propTypes = {
  submit: PropTypes.func,
  onChangeInput: PropTypes.func
}

export default Search