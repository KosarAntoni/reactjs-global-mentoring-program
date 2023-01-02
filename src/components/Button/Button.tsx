import React, { FC } from 'react'

import { StyledButton } from './Button.styles'

import { ButtonProps } from './Button.models'

const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, style = 'solid', className, ...props }) => (
    <StyledButton
      className={className}
      variant={style}
      {...props}
    >
      {children}
    </StyledButton>
  )

export default Button
