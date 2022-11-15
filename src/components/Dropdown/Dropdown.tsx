import React, { FC, useState } from 'react'
import classNames from 'classnames'

import { DropdownProps } from './Dropdown.models'

import './Dropdown.styles.scss'

const Dropdown: FC<DropdownProps> = ({ toggle, children, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={classNames('dropdown', { 'dropdown--open': isOpen }, className)}>
      <button
        className='dropdown__toggle'
        onClick={() => setIsOpen((prevState) => !prevState)}
        type='button'
      >
        {toggle}
      </button>

      {isOpen && (
        <div className='dropdown__content'>
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
