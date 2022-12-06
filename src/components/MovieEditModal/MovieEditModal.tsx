import React, { FC } from 'react'
import { GENRES } from 'consts/index'
import { Field, FieldProps, Form, Formik } from 'formik'
import { timeToNumber } from 'utilities'

import Button from 'components/Button'
import CheckboxField from 'components/CheckboxField'
import Dropdown from 'components/Dropdown'
import InputField from 'components/InputField'
import Modal from 'components/Modal'
import TextareaField from 'components/TextareaField'

import { MovieEditModalProps } from './MovieEditModal.models'

import './MovieEditModal.styles.scss'

const initialState = {
  title: '',
  vote_average: 0,
  release_date: '',
  poster_path: '',
  overview: '',
  genres: [],
  runtime: '00:00'
}

const MovieEditModal: FC<MovieEditModalProps> = ({ isOpen, handleClose, handleSubmit, heading, movieData }) => {
  const handleFormSubmit = (values: any, actions: { setSubmitting: (arg0: boolean) => void }): void => {
    handleClose()
    const data = { ...values, runtime: timeToNumber(values.runtime) }
    console.log(data)
    handleSubmit(data)
    actions.setSubmitting(false)
  }

  // const handleDateInputChange = (event: ChangeEvent<HTMLInputElement>, key: string): void =>
  //   setFormData((prevState) => {
  //     return ({
  //       ...prevState,
  //       [key]: new Date(event.target.value)
  //     })
  //   })

  return (
    <Modal {...{ isOpen, handleClose }}>
      <Formik
        initialValues={initialState} onSubmit={handleFormSubmit}>
        <Form className='movie-edit-modal' >
          <h2>
            {heading}
          </h2>

          <Field name='title'>
            {({ field, meta }: FieldProps) => (
              <InputField
                className='movie-edit-modal__title'
                error={meta.touched && meta.error ? meta.error : undefined}
                id='title'
                label={'TITLE'}
                type='text'
                {...field} />
            )}
          </Field>

          <Field name='release_date'>
            {({ field, meta }: FieldProps) => (
              <InputField
                className='movie-edit-modal__release-date'
                error={meta.touched && meta.error ? meta.error : undefined}
                id='release_date'
                label={'RELEASE DATE'}
                type='date'
                {...field} />
            )}
          </Field>

          <Field name='poster_path'>
            {({ field, meta }: FieldProps) => (
              <InputField
                className='movie-edit__poster-path'
                error={meta.touched && meta.error ? meta.error : undefined}
                id='poster_path'
                label={'POSTER PATH'}
                type='url'
                {...field} />
            )}
          </Field>

          <Field name='vote_average'>
            {({ field, meta }: FieldProps) => (
              <InputField
                className='movie-edit-modal__rating'
                error={meta.touched && meta.error ? meta.error : undefined}
                id='vote_average'
                label={'RATING'}
                step='0.1'
                type='number'
                {...field} />
            )}
          </Field>

          <div className='movie-edit-modal__genres'>
            <span>Genre</span>

            <Dropdown toggle='Select Genre'>
              <ul role='group'>
                {GENRES.filter(({ id }) => id !== 'all').map((genre) => (
                  <li key={genre.id}>
                    <Field
                      as={CheckboxField}
                      id={genre.id}
                      label={genre.name}
                      name='genres'
                      type='checkbox'
                      value={genre.name}>
                    </Field>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </div>

          <Field name='runtime'>
            {({ field, meta }: FieldProps) => (
              <InputField
                className='movie-edit-modal__runtime'
                error={meta.touched && meta.error ? meta.error : undefined}
                id='runtime'
                label={'runtime'}
                type='time'
                {...field} />
            )}
          </Field>

          <Field name='overview'>
            {({ field, meta }: FieldProps) => (
              <TextareaField
                className='movie-edit-modal__overview'
                error={meta.touched && meta.error ? meta.error : undefined}
                id='overview'
                label={'overview'}
                rows={7}
                {...field} />
            )}
          </Field>

          <footer>
            <Button style='outline' type='reset'>Reset</Button>
            <Button type='submit'>Submit</Button>
          </footer>
        </Form>
      </Formik>

    </Modal>
  )
}

export default MovieEditModal
