import React, { FC } from 'react'
import { Form, Formik } from 'formik'

import Button from 'components/Button'

import { StyledMovieDeleteModal } from './MovieDeleteModal.styles'

import { MovieDeleteModalProps } from './MovieDeleteModal.models'

const MovieDeleteModal: FC<MovieDeleteModalProps> = ({ handleClose, handleSubmit, isOpen }) => {
  const handleConfirmClick = (): void => {
    handleSubmit()
    handleClose()
  }

  return (
    <StyledMovieDeleteModal {...{ handleClose, isOpen }}>
      <h2>
        Delete MOVIE
      </h2 >

      <p>
        Are you sure you want to delete this movie?
      </p>

      <Formik initialValues={{}} onSubmit={handleConfirmClick}>
        <Form>
          <Button type='submit'>CONFIRM</Button>
        </Form>
      </Formik>
    </StyledMovieDeleteModal >
  )
}

export default MovieDeleteModal
