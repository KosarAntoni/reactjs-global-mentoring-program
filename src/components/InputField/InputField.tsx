import React, { FC } from 'react'
import classNames from 'classnames'

import Input from 'components/Input/Input'

import { InputFieldProps } from './InputField.models'

import './InputField.styles.scss'

const InputField: FC<InputFieldProps> = ({ id, value, error, label, className, ...props }) => {
  return (
    <label className={classNames('input-field', className)} htmlFor={id}>
      <span className='input-field__label'>
        {label}
      </span>

      <Input {...{ id, value, ...props }} />

      {error && (
        <span className='input-field__error'>
          {error}
        </span>
      )}
    </label>
  )
}

export default InputField
