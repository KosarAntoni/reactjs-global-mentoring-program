import React, { FC } from 'react'
import classNames from 'classnames'

import GenreSelect from 'components/GenreSelect'
import MovieCard from 'components/MovieCard'
import SortSelect from 'components/SortSelect'

import { genresMock, moviesMock, sortOptionsMock } from '../../mock'

import { MovieListProps } from './MovieList.models'

import './MovieList.styles.scss'

const MovieList: FC<MovieListProps> = ({ className }) => {
  return (
    <div className={classNames('movie-list', className)}>
      <header>
        <GenreSelect genres={genresMock} handleSelect={console.log} selectedGenre={genresMock[0]}/>
        <SortSelect handleSelect={console.log} options={sortOptionsMock} selectedOption={sortOptionsMock[0]}/>
      </header>

      <p className='movie-list__count'>
        <b>
          {moviesMock.length}
          {' '}
        </b>
        movies found
      </p>

      <div className='movie-list__list'>
        {moviesMock.slice(0, 6).map(({ id, genres, poster_path: posterPath, release_date: releaseDate, title }) => (
          <MovieCard
            key={id}
            options={
              <>
                <div>Edit</div>
                <div>Delete</div>
              </>}
            {...{ title, genres, posterPath, releaseDate }}
        />
        ))}
      </div>
    </div>
  )
}

export default MovieList
