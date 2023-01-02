import styled from '@emotion/styled'

export const StyledButton = styled.button`
  cursor: pointer;

  padding: 1.8rem 7.5rem;

  color: var(--white);
  text-transform: uppercase;

  background: var(--pastele-red);
  border: none;
  border-radius: 4px;

  &.outline {
    color: var(--pastele-red);

    background: transparent;
    border: 1px solid var(--pastele-red);
  }

  &.transparent {
    padding: 1.1rem 1.8rem;

    color: var(--pastele-red);

    background: rgb(96 96 96 / 68%);
  }
`
