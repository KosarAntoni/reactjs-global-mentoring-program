import React, { FC } from 'react'
import classNames from 'classnames'

import { ButtonProps } from './Button.models'

import './Button.styles.scss'

const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> =
 ({ children, style = 'solid', className, ...props }) => (
   <button
    className={classNames('button', { [`button--${style}`]: style }, className)}
    {...props}
   >
     {children}
   </button>
 )

export default Button
