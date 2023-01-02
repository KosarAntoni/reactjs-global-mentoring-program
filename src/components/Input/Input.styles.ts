import styled from '@emotion/styled'

export const StyledInput = styled.input`
  padding: 1.8rem;

  color: var(--primary-text);

  opacity: 0.7;
  background-color: var(--light-gray);
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--pastele-red) inset;
  }
`
