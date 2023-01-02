import styled from '@emotion/styled'

export const StyledSortSelect = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1.8rem;

  font-size: 16px;
  color: var(--primary-text);
  text-transform: uppercase;

  & .label {
    margin-right: 2.2rem;

    opacity: 0.6;
  }

  & .toggle {
    color: var(--primary-text);
    text-align: left;
  }

  ul {
    margin: 0;
    padding: 0;

    list-style: none;

    li {
      margin-bottom: 0.8rem;

      button {
        cursor: pointer;

        margin: 0;
        padding: 0;

        color: var(--primary-text);
        white-space: nowrap;

        background: none;
        border: none;
      }
    }
  }
`
