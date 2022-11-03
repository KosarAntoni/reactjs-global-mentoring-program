import React, { FC } from 'react'
import classNames from 'classnames'

import { InputProps } from './Input.models'

import './Input.styles.scss'

const Input: FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) =>
  <input className={classNames('input', className)} {...props}/>

export default Input
