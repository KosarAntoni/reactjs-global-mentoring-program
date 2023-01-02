import styled from '@emotion/styled'

export const StyledMovieCard = styled.div`
  position: relative;

  img {
    width: 100%;
    margin-bottom: 1.8rem;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;

    color: var(--primary-text);

    h3 {
      margin: 0;

      font-size: 1.8rem;
      font-weight: 500;

      opacity: 0.7;
    }

    p {
      margin: 0;

      font-size: 1.4rem;

      opacity: 0.5;
    }

    span {
      grid-area: 1 / 2 / 2 / 3;

      padding: 0.4rem 0.8rem;

      font-size: 1.4rem;

      opacity: 0.7;
      border: 1px solid var(--gray);
      border-radius: 4px;
    }
  }

  & .select {
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;

    display: none;
    flex-direction: column;

    background-color: var(--page-background);
    border-radius: 100%;

    &--open {
      width: 60%;

      border-radius: 4px;
    }

    button {
      cursor: pointer;

      align-self: flex-end;

      width: 3rem;
      height: 3rem;

      font-size: 2rem;
      color: var(--primary-text);

      background: none;
      border: none;
    }

    ul {
      margin: 0;
      padding: 0;

      list-style: none;

      li {
        cursor: pointer;

        margin-bottom: 1.2rem;
        padding: 0.7rem 2.3rem;

        color: var(--primary-text);

        &:hover {
          background-color: var(--pastele-red);
        }
      }
    }
  }

  &:hover {
    .select {
      display: flex;
    }
  }
`
