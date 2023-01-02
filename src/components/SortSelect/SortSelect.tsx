import React, { FC } from 'react'

import Dropdown from 'components/Dropdown'

import { StyledSortSelect } from './SortSelect.styles'

import { SortSelectProps } from './SortSelect.models'

const SortSelect: FC<SortSelectProps> = ({ className, selectedOption, options, handleSelect }) => {
  return (
    <StyledSortSelect className={className}>
      <span className='label'>Sort by</span>

      <Dropdown
        className='dropdown'
        toggle={
          <span>
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

    </StyledSortSelect>
  )
}

export default SortSelect
