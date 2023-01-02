import styled from '@emotion/styled'
import Image from 'next/image'

import MovieDetails from 'components/MovieDetails'
import Search from 'components/Search'

export const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  row-gap: 3.5rem;
  height: 100%;
  padding: 1.8rem 7rem;
  }
`
export const StyledHeaderBackground = styled(Image)`
  position: absolute;
  z-index: -1;
  top: -20%;
  left: -10%;
  width: 120%;
  opacity: 0.3;
  filter: blur(4px);
`

export const StyledHeaderSearch = styled(Search)`
  grid-area: 2 / 1 / 2 / 3;
  width: 90%;
  margin: 1.8rem auto 15rem;
`
export const StyledHeaderDetails = styled(MovieDetails)`
  grid-area: 2 / 1 / 2 / 3;
`

export const StyledSearchButton = styled.button`
  cursor: pointer;

  position: relative;

  display: block;

  box-sizing: border-box;
  width: 16px;
  height: 16px;
  margin-top: -4px;
  margin-left: -4px;

  background: none;
  border: 2px solid var(--pastele-red);
  border-radius: 100%;

  &::after {
    content: '';

    position: absolute;
    top: 10px;
    left: 12px;
    transform: rotate(-45deg);

    display: block;

    box-sizing: border-box;
    width: 2px;
    height: 8px;

    background: var(--pastele-red);
    border-radius: 3px;
  }
`
