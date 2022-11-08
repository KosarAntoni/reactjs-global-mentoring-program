import React, { FC } from 'react'

import Button from 'components/Button'
import Modal from 'components/Modal'

import { MovieDeleteProps } from './MovieDelete.models'

import './MovieDelete.styles.scss'

const MovieDelete: FC<MovieDeleteProps> = ({ handleClose, handleConfirm, isOpen }) => {
  const handleConfirmClick = (): void => {
    handleConfirm()
    handleClose()
  }

  return (
    <Modal {...{ handleClose, isOpen }} className='movie-delete'>
      <h2>
        Delete MOVIE
      </h2>

      <p>
        Are you sure you want to delete this movie?
      </p>

      <Button className='movie-delete__confirm-button' onClick={handleConfirmClick} type='button'>CONFIRM</Button>
    </Modal>
  )
}

export default MovieDelete
