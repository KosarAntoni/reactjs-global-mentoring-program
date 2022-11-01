import React, { FC } from 'react'
import classNames from 'classnames'

import { SortSelectProps } from './SortSelect.models'

import './SortSelect.styles.scss'

const SortSelect: FC<SortSelectProps> = ({ className, selectedOption }) => {
  return (
    <div className={classNames('sort-select', className)}>
      <span className='sort-select__label'>Sort by</span>

      <span className='sort-select__selected-option'>
        {selectedOption.name}
      </span>
    </div>
  )
}

export default SortSelect
