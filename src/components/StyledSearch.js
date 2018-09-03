import styled from 'styled-components'

export const SearchSection = styled.section.attrs({
  className: "f3 flex flex-wrap justify-center w-100"
})``

export const SearchInput = styled.input.attrs({
  className: "w-100 w-50-ns"
})`max-width: 500px;`

export const SearchButton = styled.button.attrs({
  className: "pointer w-100 w-20-ns"
})`
  @media screen and (min-width: 480px) {
    max-width: 200px;
    }
`