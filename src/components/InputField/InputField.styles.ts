import styled from '@emotion/styled'

export const StyledInputField = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;

  padding-bottom: 1.8rem;

  & .label {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--pastele-red);
    text-transform: uppercase;
  }

  & .error {
    position: absolute;
    bottom: 0;

    font-size: 1.4rem;
    color: var(--pastele-red);
  }
`
