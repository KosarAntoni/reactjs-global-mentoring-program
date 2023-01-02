import styled from '@emotion/styled'

export const StyledCheckboxField = styled.label`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  & input {
    position: absolute;

    opacity: 0;

    &:checked ~ .custom-checkbox {
      background-color: var(--pastele-red);

      &::after {
        opacity: 1;
      }
    }
  }

  & .custom-checkbox {
    position: relative;

    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.6rem;

    background-color: var(--white);
    border-radius: 4px;

    &::after {
      content: '';

      position: absolute;
      top: 20%;
      left: 35%;
      transform: rotate(45deg);

      width: 0.2rem;
      height: 0.6rem;

      opacity: 0;
      border: solid var(--white);
      border-width: 0 2px 2px 0;
    }
  }

  & .label {
    font-size: 2rem;
    color: var(--primary-text);
  }
`
