import React, { FC } from 'react'
import classNames from 'classnames'

import { InputProps } from './Input.models'

const Input: FC<InputProps> = ({ className, ...props }) =>
  <input className={classNames('input', className)} {...props}/>

export default Input
