import styled from '@emotion/styled'

export const buttonBase = `
  cursor: pointer;
  padding: 1.8rem 7.5rem;
  color: var(--white);
  text-transform: uppercase;
  background: var(--pastele-red);
  border: none;
  border-radius: 4px;
`

export const StyledButton = styled.button(
  ({ variant }: { variant?: 'transparent' | 'solid' | 'outline' }) => {
    if (variant === 'outline') {
      return `
      ${buttonBase}
      color: var(--pastele-red);
      background: transparent;
      border: 1px solid var(--pastele-red);
    `
    }
    if (variant === 'transparent') {
      return `
      ${buttonBase}
      padding: 1.1rem 1.8rem;
      color: var(--pastele-red);
      background: rgb(96 96 96 / 68%);
    `
    }
    return buttonBase
  }
)
