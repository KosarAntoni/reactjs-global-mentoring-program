import styled from '@emotion/styled'

export const StyledGenreSelect = styled.div`
  display: flex;
  flex-direction: row;

  & .genre {
    cursor: pointer;

    margin-right: 3rem;
    padding-bottom: 2.2rem;

    font-size: 1.6rem;
    color: var(--primary-text);
    text-transform: uppercase;

    background: none;
    border: none;

    &--selected {
      position: relative;

      &::after {
        content: '';

        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 2px;

        background-color: var(--pastele-red);
      }
    }
  }
`
