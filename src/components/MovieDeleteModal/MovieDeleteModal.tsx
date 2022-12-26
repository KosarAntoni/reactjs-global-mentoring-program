import React, { FC } from 'react'
import { Form, Formik } from 'formik'

import Button from 'components/Button'
import Modal from 'components/Modal'

import { MovieDeleteModalProps } from './MovieDeleteModal.models'

const MovieDeleteModal: FC<MovieDeleteModalProps> = ({ handleClose, handleSubmit, isOpen }) => {
  const handleConfirmClick = (): void => {
    handleSubmit()
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

      <Formik initialValues={{}} onSubmit={handleConfirmClick}>
        <Form>
          <Button type='submit'>CONFIRM</Button>
        </Form>
      </Formik>
    </Modal>
  )
}

export default MovieDeleteModal
