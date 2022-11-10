import React, { FC, useState } from 'react'
import classNames from 'classnames'

import GenreSelect from 'components/GenreSelect'
import MovieCard from 'components/MovieCard'
import MovieDeleteModal from 'components/MovieDeleteModal'
import MovieEditModal from 'components/MovieEditModal'
import SortSelect from 'components/SortSelect'
import { SortOption } from 'components/SortSelect/SortSelect.models'
import SuccessModal from 'components/SuccessModal'

import { genresMock, moviesMock, sortOptionsMock } from '../../mock'

import { MovieListProps } from './MovieList.models'

import './MovieList.styles.scss'

const MovieList: FC<MovieListProps> = ({ className }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState<boolean>(false)

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
  const [isEditSuccessModalOpen, setIsEditSuccessModalOpen] = useState<boolean>(false)
  const [editableMovieId, setEditableMovieId] = useState<string>('')

  const [sortOption, setSortoption] = useState<SortOption>(sortOptionsMock[0])

  const handleDeleteClick = (): void => {
    setIsDeleteModalOpen(true)
  }

  const handleEditClick = (id: string): void => {
    setIsEditModalOpen(true)
    setEditableMovieId(id)
  }

  const handleEditSubmit = (): void => {
    setIsEditSuccessModalOpen(true)
    setEditableMovieId('')
  }

  const handleGenreSelect = (): void => {
    console.log('genre selected')
  }

  const handleSortSelect = (option: SortOption): void => {
    setSortoption(option)
  }

  return (
    <>
      <div className={classNames('movie-list', className)}>
        <header>
          <GenreSelect genres={genresMock} handleSelect={handleGenreSelect} selectedGenre={genresMock[0]}/>
          <SortSelect handleSelect={handleSortSelect} options={sortOptionsMock} selectedOption={sortOption}/>
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
                  <li onClick={() => handleEditClick(id.toString())}>Edit</li>
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

      <MovieEditModal
        handleClose={() => setIsEditModalOpen(false)}
        handleSubmit={handleEditSubmit}
        heading='EDIT MOVIE'
        isOpen={isEditModalOpen}
        movieData={(() => {
          if (!editableMovieId) return
          const [movie] = moviesMock.filter(({ id }) => id.toString() === editableMovieId.toString())

          return ({
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: new Date(movie.release_date),
            url: '',
            overview: movie.overview,
            genres: movie.genres,
            runtime: '00:00'
          })
        })()}
      />

      <SuccessModal
        description='The movie has been edited successfully'
        handleClose={() => setIsEditSuccessModalOpen(false)}
        isOpen={isEditSuccessModalOpen}
      />
    </>
  )
}

export default MovieList
