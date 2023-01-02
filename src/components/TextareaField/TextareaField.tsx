import React, { FC } from 'react'
import classNames from 'classnames'

import { TextareaFieldProps } from './TextareaField.models'

const TextareaField: FC<TextareaFieldProps> = ({ className, id, label, error, value, ...props }) => {
  return (
    <label className={classNames('textarea-field', className)} htmlFor={id}>
      <span className='textarea-field__label'>
        {label}
      </span>

      <textarea {...{ id, value, ...props }}/>

      {error && (
      <span className='textarea-field__error'>
        {error}
      </span>
      )}
    </label>
  )
}

export default TextareaField
