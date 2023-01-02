import styled from '@emotion/styled'

export const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: row;

  color: var(--primary-text);

  & .heading {
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      margin: 0;

      font-size: 4rem;
      font-weight: 300;
      text-transform: uppercase;
    }

    span {
      width: 6rem;
      height: 6rem;
      margin-left: 2.6rem;

      font-size: 2rem;
      line-height: 6rem;
      text-align: center;
      vertical-align: middle;

      border: 1px solid var(--primary-text);
      border-radius: 10rem;
    }
  }

  & .genres {
    margin-top: 0;

    font-size: 1.4rem;

    opacity: 0.5;
  }

  & .information {
    display: inline-grid;
    grid-template-columns: auto auto;
    column-gap: 5rem;

    font-size: 2.4rem;
    color: var(--pastele-red);
  }

  & .overview {
    font-size: 2rem;

    opacity: 0.5;
  }

  img {
    width: 32rem;
    margin-right: 5.8rem;
  }
`
