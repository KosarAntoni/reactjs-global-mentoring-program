import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import { GENRES, SORT_OPTIONS } from 'consts'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { fetchAllMovies, fetchSingleMovie, selectAllMovies } from 'store/moviesSlice'

import GenreSelect from 'components/GenreSelect'
import { Genre } from 'components/GenreSelect/GenreSelect.models'
import MovieCard from 'components/MovieCard'
import MovieDeleteModal from 'components/MovieDeleteModal'
import MovieEditModal from 'components/MovieEditModal'
import SortSelect from 'components/SortSelect'
import { SortOption } from 'components/SortSelect/SortSelect.models'
import SuccessModal from 'components/SuccessModal'

import { MovieListProps } from './MovieList.models'

import './MovieList.styles.scss'

const MovieList: FC<MovieListProps> = ({ className }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState<boolean>(false)

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
  const [isEditSuccessModalOpen, setIsEditSuccessModalOpen] = useState<boolean>(false)
  const [editableMovieId, setEditableMovieId] = useState<number | null>(null)

  const [sortOption, setSortOption] = useState<SortOption>(SORT_OPTIONS[0])
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0])

  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectAllMovies)

  useEffect(() => {
    if (selectedGenre === GENRES[0]) {
      void dispatch(fetchAllMovies({ sort: sortOption.id }))
    } else {
      void dispatch(fetchAllMovies({ genres: [selectedGenre.id], sort: sortOption.id }))
    }
  }, [sortOption, dispatch, selectedGenre])

  const handleDeleteClick = (): void => {
    setIsDeleteModalOpen(true)
  }

  const handleEditClick = (id: number): void => {
    setIsEditModalOpen(true)
    setEditableMovieId(id)
  }

  const handleEditSubmit = (): void => {
    setIsEditSuccessModalOpen(true)
    setEditableMovieId(null)
  }

  const handleGenreSelect = (genre: Genre): void => {
    setSelectedGenre(genre)
  }

  const handleSortSelect = (option: SortOption): void => {
    setSortOption(option)
  }

  const handleCardClick = (id: number): void => {
    void dispatch(fetchSingleMovie(id))
  }

  return (
    <>
      <div className={classNames('movie-list', className)}>
        <header>
          <GenreSelect genres={GENRES} handleSelect={handleGenreSelect} selectedGenre={selectedGenre}/>
          <SortSelect handleSelect={handleSortSelect} options={SORT_OPTIONS} selectedOption={sortOption}/>
        </header>

        <p className='movie-list__count'>
          <b>
            {movies.length}
            {' '}
          </b>
          movies found
        </p>

        <div className='movie-list__list'>
          {movies.map(({
            id,
            genres,
            poster_path: posterPath,
            release_date: releaseDate,
            title
          }) => (
            <MovieCard
              key={id}
              onClick={() => handleCardClick(id)}
                options={
                  <ul>
                    <li onClick={() => handleEditClick(id)}>Edit</li>
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
          const [movie] = movies.filter(({ id }) => id.toString() === editableMovieId.toString())

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
