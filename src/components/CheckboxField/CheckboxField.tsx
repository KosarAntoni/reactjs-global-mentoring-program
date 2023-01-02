import React, { FC } from 'react'

import { StyledCheckboxField } from './CheckboxField.styles'

import { CheckboxFieldProps } from './CheckboxField.models'

const CheckboxField: FC<CheckboxFieldProps> = ({ className, label, id, ...props }) => {
  return (
    <StyledCheckboxField className={className} htmlFor={id}>
      <input type='checkbox' {...{ id, ...props }} />
      <span className='custom-checkbox' />

      <span className='label'>
        {label}
      </span>
    </StyledCheckboxField>
  )
}

export default CheckboxField
