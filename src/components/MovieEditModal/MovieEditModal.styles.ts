import styled from '@emotion/styled'
import { Form } from 'formik'

export const StyledMovieEditModal = styled(Form)`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 60% 40%;
  column-gap: 3rem;

  width: 70vw;

  h2 {
    grid-column: 1 / 3;

    font-size: 4rem;
    font-weight: 300;
    color: var(--primary-text);
    text-transform: uppercase;
  }

  & .genres {
    & > span {
      color: var(--pastele-red);
      text-transform: uppercase;
    }

    .dropdown {
      button {
        padding: 1.8rem;

        color: var(--primary-text);

        opacity: 0.7;
        background-color: var(--light-gray);
        border: none;
        border-radius: 4px;
      }

      ul {
        margin: 0;
        padding: 0;

        list-style: none;
      }
    }
  }

  & .runtime {
    .input {
      padding: 1.6rem 1.8rem;
    }
  }

  & .overview {
    grid-column: 1 / 3;
  }

  footer {
    display: inline-flex;
    grid-column: 1 / 3;
    gap: 1.6rem;
    justify-content: flex-end;
  }
`
