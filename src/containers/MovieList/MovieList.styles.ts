import styled from '@emotion/styled'

export const StyledMovieList = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-bottom: 7rem;
`
export const StyledMovieListHeader = styled.header`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 2rem;

  &::after {
    content: '';

    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;

    height: 2px;

    background-color: var(--gray);
  }
`

export const StyledMovieListCount = styled.p`
  margin-bottom: 2.8rem;

  color: var(--white);

  b {
    font-weight: 500;
  }
`

export const StyledMovieListList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5.5rem;
`
