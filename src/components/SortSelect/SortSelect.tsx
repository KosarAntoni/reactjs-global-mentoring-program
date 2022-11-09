import React, { FC } from 'react'
import classNames from 'classnames'

import Dropdown from 'components/Dropdown'

import { SortSelectProps } from './SortSelect.models'

import './SortSelect.styles.scss'

const SortSelect: FC<SortSelectProps> = ({ className, selectedOption, options, handleSelect }) => {
  return (
    <div className={classNames('sort-select', className)}>
      <span className='sort-select__label'>Sort by</span>

      <Dropdown
          className='sort-select__dropdown'
          toggle={
            <span className='sort-select__toggle'>
              {selectedOption.name}
            </span>
          }
        >
        <ul>
          {options.map((option) => (
            <li key={option.id}>
              <button onClick={() => handleSelect(option)} type='button'>
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      </Dropdown>

    </div>
  )
}

export default SortSelect
