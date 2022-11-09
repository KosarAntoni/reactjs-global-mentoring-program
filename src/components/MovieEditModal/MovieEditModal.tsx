import React, { ChangeEvent, FC, FormEvent, useState } from 'react'

import Button from 'components/Button'
import InputField from 'components/InputField'
import Modal from 'components/Modal'

import { EditForm, MovieEditModalProps } from './MovieEditModal.models'

import './MovieEditModal.styles.scss'

const MovieEditModal: FC<MovieEditModalProps> = ({ isOpen, handleClose, handleSubmit, heading }) => {
  const [formData, setFormData] = useState<EditForm>({
    title: '',
    vote_average: 0,
    release_date: new Date(),
    url: '',
    overview: '',
    genres: [],
    runtime: '00:00'
  })

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault()

    handleClose()
    handleSubmit(formData)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, key: string): void =>
    setFormData((prevState) => {
      return ({
        ...prevState,
        [key]: event.target.value
      })
    })

  const handleDateInputChange = (event: ChangeEvent<HTMLInputElement>, key: string): void =>
    setFormData((prevState) => {
      return ({
        ...prevState,
        [key]: new Date(event.target.value)
      })
    })

  return (
    <Modal {...{ isOpen, handleClose }}>
      <form className='movie-edit-modal' onSubmit={handleFormSubmit}>
        <h2>
          {heading}
        </h2>

        <InputField
          className='movie-edit-modal__title'
          id={'title'}
          label={'Title'}
          onChange={(event) => handleInputChange(event, 'title')}
          type='text'
          value={formData.title}
        />

        <InputField
          className='movie-edit-modal__release-date'
          id={'release_date'}
          label={'RELEASE DATE'}
          onChange={(event) => handleDateInputChange(event, 'release_date')}
          type='date'
          value={formData.release_date.toISOString().slice(0, 10)}
        />

        <InputField
          className='movie-edit-url'
          id={'url'}
          label={'movie url'}
          onChange={(event) => handleInputChange(event, 'url')}
          type='url'
          value={formData.url}
        />

        <InputField
          className='movie-edit-modal__rating'
          id={'vote_average'}
          label={'RATING'}
          onChange={(event) => handleInputChange(event, 'vote_average')}
          step='0.1'
          type='number'
          value={`${formData.vote_average}`}
        />

        <InputField
          className='movie-edit-modal__genres'
          id={'genres'}
          label={'genre'}
          onChange={(event) => handleInputChange(event, 'genres')}
          value={formData.genres.join()}
        />

        <InputField
          className='movie-edit-modal__runtime'
          id={'runtime'}
          label={'RUNTIME'}
          onChange={(event) => handleInputChange(event, 'runtime')}
          type='time'
          value={`${formData.runtime}`}
        />

        <footer>
          <Button style='outline' type='reset'>Reset</Button>
          <Button type='submit'>Submit</Button>
        </footer>
      </form>
    </Modal>
  )
}

export default MovieEditModal
