import styled from '@emotion/styled'

export const StyledSearch = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  gap: 4rem 1.4rem;

  & .heading {
    margin: 0;

    font-size: 4rem;
    font-weight: 300;
    color: var(--white);
  }

  & .input {
    grid-area: 2 / 1;
  }

  & .button {
    grid-area: 2 / 2;
  }
`
