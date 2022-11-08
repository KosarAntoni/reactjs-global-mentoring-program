import React, { FC } from 'react'

import Button from 'components/Button'
import Modal from 'components/Modal'

import { MovieDeleteModalProps } from './MovieDeleteModal.models'

import './MovieDeleteModal.styles.scss'

const MovieDeleteModal: FC<MovieDeleteModalProps> = ({ handleClose, handleConfirm, isOpen }) => {
  const handleConfirmClick = (): void => {
    handleConfirm()
    handleClose()
  }

  return (
    <Modal {...{ handleClose, isOpen }} className='movie-delete-modal'>
      <h2>
        Delete MOVIE
      </h2>

      <p>
        Are you sure you want to delete this movie?
      </p>

      <Button className='movie-delete-modal__confirm-button' onClick={handleConfirmClick} type='button'>CONFIRM</Button>
    </Modal>
  )
}

export default MovieDeleteModal
