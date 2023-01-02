import React, { FC } from 'react'
import classNames from 'classnames'

import { StyledInput } from './Input.styles'

import { InputProps } from './Input.models'

const Input: FC<InputProps> = ({ className, ...props }) =>
  <StyledInput className={classNames('input', className)} {...props} />

export default Input
