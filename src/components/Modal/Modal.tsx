import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import { ModalProps } from './Modal.models'

const Modal: FC<ModalProps> = function Modal ({
  children,
  isOpen,
  handleClose,
  className
}: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
 }, [])

  const onEscPress =
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') handleClose()
    }

  useEffect(() => {
    window.addEventListener('keydown', onEscPress)

    return () => {
      window.removeEventListener('keydown', onEscPress)
    }
  })

  return mounted
? (() => {
  const modalRoot = document.getElementById('modal-root')
  if (modalRoot === null) throw new Error('Failed to find the modal root element')

  return createPortal(
    isOpen && (
      <div className='modal'>
        <div className={classNames('modal__content', className)}>
          <button className='modal__close-button' onClick={handleClose} type='button'>&#x2715;</button>
          {children}
        </div>

        <div className='modal__background' onClick={handleClose}/>
      </div>
    ), modalRoot)
})()
 : null
}

export default Modal
