import React, { FC } from 'react'

import Input from 'components/Input/Input'

import { StyledInputField } from './InputField.styles'

import { InputFieldProps } from './InputField.models'

const InputField: FC<InputFieldProps> = ({ id, value, error, label, className, ...props }) => {
  return (
    <StyledInputField className={className} htmlFor={id}>
      <span className='label'>
        {label}
      </span>

      <Input {...{ id, value, ...props }} />

      {error && (
        <span className='error'>
          {error}
        </span>
      )}
    </StyledInputField>
  )
}

export default InputField
