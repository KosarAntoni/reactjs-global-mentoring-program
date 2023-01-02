import React, { FC } from 'react'
import classNames from 'classnames'

import { CheckboxFieldProps } from './CheckboxField.models'

const CheckboxField: FC<CheckboxFieldProps> = ({ className, label, id, ...props }) => {
  return (
    <label className={classNames('checkbox-field', className)} htmlFor={id}>
      <input type='checkbox' {...{ id, ...props }} className='checkbox-field__input'/>
      <span className='checkbox-field__custom-checkbox' />

      <span className='checkbox-field__label'>
        {label}
      </span>
    </label>
  )
}

export default CheckboxField
