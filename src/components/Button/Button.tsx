import React, { FC } from 'react'
import classNames from 'classnames'

import { StyledButton } from './Button.styles'

import { ButtonProps } from './Button.models'

const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ children, style = 'solid', className, ...props }) => (
    <StyledButton
      className={classNames(style, className)}
      {...props}
    >
      {children}
    </StyledButton>
  )

export default Button
