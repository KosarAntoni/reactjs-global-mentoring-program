import React, { FC } from 'react'

import Modal from 'components/Modal'

import { SuccessModalProps } from './SuccessModal.models'

import './SuccessModal.styles.scss'

const SuccessModal: FC<SuccessModalProps> = ({ isOpen, handleClose, description }) => {
  return (
    <Modal {...{ isOpen, handleClose }} className='success-modal'>
      <div className='success-modal__tick'/>
      <h2>congratulations !</h2>

      {description && (
        <p>
          {description}
        </p>
      )}
    </Modal>
  )
}

export default SuccessModal
