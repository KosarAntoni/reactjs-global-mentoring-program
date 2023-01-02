import React, { FC } from 'react'

import { StyledTextareaField } from './TextareaField.styles'

import { TextareaFieldProps } from './TextareaField.models'

const TextareaField: FC<TextareaFieldProps> = ({ className, id, label, error, value, ...props }) => {
  return (
    <StyledTextareaField className={className} htmlFor={id}>
      <span className='label'>
        {label}
      </span>

      <textarea {...{ id, value, ...props }} />

      {error && (
        <span className='error'>
          {error}
        </span>
      )}
    </StyledTextareaField>
  )
}

export default TextareaField
