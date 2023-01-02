import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import { GENRES, SORT_OPTIONS } from 'consts'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { deleteMovie, editMovie, fetchAllMovies, Movie, selectAllMovies } from 'store/moviesSlice'
import { appendToParams, removeFromParams, urlSearchParams } from 'utilities'

import GenreSelect from 'components/GenreSelect'
import { Genre } from 'components/GenreSelect/GenreSelect.models'
import MovieCard from 'components/MovieCard'
import MovieDeleteModal from 'components/MovieDeleteModal'
import MovieEditModal from 'components/MovieEditModal'
import SortSelect from 'components/SortSelect'
import { SortOption } from 'components/SortSelect/SortSelect.models'
import SuccessModal from 'components/SuccessModal'

import { MovieListProps } from './MovieList.models'

const MovieList: FC<MovieListProps> = ({ className }) => {
  const { query, push } = useRouter()
  const { searchQuery } = query

  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectAllMovies)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState<boolean>(false)

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
  const [isEditSuccessModalOpen, setIsEditSuccessModalOpen] = useState<boolean>(false)
  const [editableMovieId, setEditableMovieId] = useState<number | null>(null)

  const [sortOption, setSortOption] = useState<SortOption>(SORT_OPTIONS[0])
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0])

  useEffect(() => {
    const sortById = query.sortBy as 'vote_average' | 'release_date' | undefined
    const genreId = query.genre || GENRES[0].id

    if (sortById) {
      const option = SORT_OPTIONS.find(({ id }) => id === sortById)

      setSortOption(option || SORT_OPTIONS[0])
    }

    if (genreId) {
      const genre = GENRES.find(({ id }) => id === genreId)

      setSelectedGenre(genre || GENRES[0])
    }

    void dispatch(fetchAllMovies({
      genres: genreId === GENRES[0].id ? [] : [genreId.toString()],
      search: searchQuery || '',
      sort: sortById
    }))
  }, [sortOption, dispatch, selectedGenre, editableMovieId, searchQuery, query])

  const handleDeleteClick = (id: number): void => {
    setIsDeleteModalOpen(true)
    setEditableMovieId(id)
  }

  const handleEditClick = (id: number): void => {
    setIsEditModalOpen(true)
    setEditableMovieId(id)
  }

  const handleEditSubmit = (body: Partial<Movie>): void => {
    if (!editableMovieId) return

    setIsEditSuccessModalOpen(true)
    void dispatch(editMovie({ ...body, id: editableMovieId } as unknown as Movie))
    setEditableMovieId(null)
  }

  const handleDeleteSubmit = () => {
    if (!editableMovieId) return

    void dispatch(deleteMovie(editableMovieId))
    setIsDeleteSuccessModalOpen(true)
    setEditableMovieId(null)
  }

  const handleGenreSelect = ({ id }: Genre): void => {
    if (id === GENRES[0].id) {
      void push({ query: removeFromParams(query as urlSearchParams, 'genre') })
    } else {
      void push({ query: appendToParams(query as urlSearchParams, { genre: id }) })
    }
  }

  const handleSortSelect = ({ id }: SortOption): void => {
    void push({ query: appendToParams(query as urlSearchParams, { sortBy: id }) })
  }

  const handleCardClick = (id: number): void => {
    void push({ query: appendToParams(query as urlSearchParams, { movie: id.toString() }) })
  }

  return (
    <>
      <div className={classNames('movie-list', className)}>
        <header>
          <GenreSelect genres={GENRES} handleSelect={handleGenreSelect} selectedGenre={selectedGenre} />
          <SortSelect handleSelect={handleSortSelect} options={SORT_OPTIONS} selectedOption={sortOption} />
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
                  <li onClick={() => handleDeleteClick(id)}>Delete</li>
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
        handleSubmit={handleDeleteSubmit}
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
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            genres: movie.genres,
            runtime: movie.runtime
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
