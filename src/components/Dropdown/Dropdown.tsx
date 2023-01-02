import React, { FC, useState } from 'react'
import classNames from 'classnames'

import { StyledDropdown } from './Dropdown.styles'

import { DropdownProps } from './Dropdown.models'

const Dropdown: FC<DropdownProps> = ({ toggle, children, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <StyledDropdown className={classNames({ open: isOpen }, className)}>
      <button
        className='toggle'
        onClick={() => setIsOpen((prevState) => !prevState)}
        type='button'
      >
        {toggle}
      </button>

      {isOpen && (
        <div className='content'>
          {children}
        </div>
      )}
    </StyledDropdown>
  )
}

export default Dropdown
