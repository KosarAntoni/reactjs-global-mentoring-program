import React, { FC, useState } from 'react'
import classNames from 'classnames'

import GenreSelect from 'components/GenreSelect'
import MovieCard from 'components/MovieCard'
import MovieDeleteModal from 'components/MovieDelete'
import SortSelect from 'components/SortSelect'
import SuccessModal from 'components/SuccessModal'

import { genresMock, moviesMock, sortOptionsMock } from '../../mock'

import { MovieListProps } from './MovieList.models'

import './MovieList.styles.scss'

const MovieList: FC<MovieListProps> = ({ className }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState<boolean>(false)

  const handleDeleteClick = (): void => {
    setIsDeleteModalOpen(true)
  }

  const handleGenreSelect = (): void => {
    console.log('genre selected')
  }

  const handleSortSelect = (): void => {
    console.log('sort select')
  }

  return (
    <>
      <div className={classNames('movie-list', className)}>
        <header>
          <GenreSelect genres={genresMock} handleSelect={handleGenreSelect} selectedGenre={genresMock[0]}/>
          <SortSelect handleSelect={handleSortSelect} options={sortOptionsMock} selectedOption={sortOptionsMock[0]}/>
        </header>

        <p className='movie-list__count'>
          <b>
            {moviesMock.length}
            {' '}
          </b>
          movies found
        </p>

        <div className='movie-list__list'>
          {moviesMock.slice(0, 6).map(({
            id,
            genres,
            poster_path: posterPath,
            release_date: releaseDate,
            title
          }) => (
            <MovieCard
              key={id}
              options={
                <ul>
                  <li>Edit</li>
                  <li onClick={handleDeleteClick}>Delete</li>
                </ul>}
              {...{
                title,
                genres,
                posterPath,
                releaseDate
              }}
            />
          ))}
        </div>
      </div>

      <MovieDeleteModal
        handleClose={() => setIsDeleteModalOpen(false)}
        handleConfirm={() => setIsDeleteSuccessModalOpen(true)}
        isOpen={isDeleteModalOpen}
      />

      <SuccessModal
        description='The movie has been deleted from database successfully'
        handleClose={() => setIsDeleteSuccessModalOpen(false)}
        isOpen={isDeleteSuccessModalOpen}
      />
    </>
  )
}

export default MovieList
