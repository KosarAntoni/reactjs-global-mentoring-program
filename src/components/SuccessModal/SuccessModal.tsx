import React, { FC } from 'react'

import { StyledSuccessModal } from './SuccessModal.styles'

import { SuccessModalProps } from './SuccessModal.models'

const SuccessModal: FC<SuccessModalProps> = ({ isOpen, handleClose, description }) => {
  return (
    <StyledSuccessModal {...{ isOpen, handleClose }} >
      <div className='tick' />
      <h2>congratulations !</h2>

      {description && (
        <p>
          {description}
        </p>
      )}
    </StyledSuccessModal>
  )
}

export default SuccessModal
