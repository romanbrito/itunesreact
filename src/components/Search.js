import React from 'react'
import PropTypes from 'prop-types'
import {
  SearchSection,
  SearchInput,
  Label,
  SearchButton
} from './StyledSearch'

const Search = (props) =>
  <SearchSection>
    <Label htmlFor="search">Itunes Search</Label>
    <SearchInput
      name="search"
      id="search"
      placeholder="Search Itunes"
      onChange={e => props.onChangeInput(e)}
      onKeyPress={e => e.key === 'Enter' ? props.submit(e) : ''}
    />
    <SearchButton
      onClick={e => props.submit(e)}
    >
      Search
    </SearchButton>
  </SearchSection>

Search.propTypes = {
  submit: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired
}

export default Search