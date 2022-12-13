import React, { FC } from 'react'
import { GENRES } from 'consts/index'
import { Field, FieldProps, Form, Formik } from 'formik'
import { numberToFormTime, timeToNumber } from 'utilities'
import * as Yup from 'yup'

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

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  vote_average: Yup.number()
    .min(0, 'Min vote is 0')
    .max(10, 'Max vote is 10')
    .required('Required'),
  release_date: Yup.string()
    .required('Required'),
  poster_path: Yup.string()
    .url('Invalid path')
    .required('Required'),
  overview: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  genres: Yup.array()
    .of(Yup.string())
    .min(1, 'Should have at least one genre'),
  runtime: Yup.string()
    .test(
      'time length',
      'Should be longer than 1 minute',
      (time) => time ? timeToNumber(time) > 0 : false
    )
    .required('Required')
})

const defaultGenres = GENRES.map(({ name }) => name)

const MovieEditModal: FC<MovieEditModalProps> = ({ isOpen, handleClose, handleSubmit, heading, movieData }) => {
  const handleFormSubmit = (values: any, actions: { setSubmitting: (arg0: boolean) => void }): void => {
    handleClose()
    const data = { ...values, runtime: values.runtime && timeToNumber(values.runtime) }
    handleSubmit(data)
    actions.setSubmitting(false)
  }

  const movieGenres = movieData?.genres || []
  const genres = new Set([...defaultGenres, ...movieGenres])

  const initialValues = movieData
    ? { ...movieData, runtime: movieData.runtime && numberToFormTime(movieData.runtime) }
    : initialState

  return (
    <Modal {...{ isOpen, handleClose }}>
      <Formik
        initialValues={initialValues} onSubmit={handleFormSubmit}
        validationSchema={MovieSchema}
      >
        {({
          values
        }) => (
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
              {({ field, meta }: FieldProps) => {
                return (
                  <InputField
                    className='movie-edit-modal__rating'
                    error={meta.touched && meta.error ? meta.error : undefined}
                    id='vote_average'
                    label={'RATING'}
                    max={10}
                    min={0}
                    step='0.1'
                    type='number'
                    {...field} />
                )
              }}
            </Field>

            <div className='movie-edit-modal__genres'>
              <span>Genre</span>

              <Dropdown toggle={values.genres?.join(', ') || 'Select Genre'}>
                <ul role='group'>
                  {Array.from(genres).filter((genre) => genre.toLowerCase() !== 'all').map((genre) => (
                    <li key={genre}>
                      <Field
                        as={CheckboxField}
                        id={genre}
                        label={genre}
                        name='genres'
                        type='checkbox'
                        value={genre}>
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
        )}
      </Formik>

    </Modal>
  )
}

export default MovieEditModal
