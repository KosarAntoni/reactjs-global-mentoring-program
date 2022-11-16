import React, { FC } from 'react'
import classNames from 'classnames'
import { formatGenres } from 'utilities/formatGenres'
import { formatTime } from 'utilities/formatTime'

import { MovieDetailsProps } from './MovieDetails.models'

import './MovieDetails.styles.scss'

const MovieDetails: FC<MovieDetailsProps> = ({
  title,
  overview,
  poster_path: posterPath,
  vote_average: voteAverage,
  genres, release_date:
  releaseDate,
  className,
  runtime
}) => {
  const year = new Date(releaseDate).getFullYear()

  return (
    <div className={classNames('movie-details', className)}>
      <img alt={title} src={posterPath} />

      <div>
        <div className='movie-details__heading'>
          <h2>
            {title}
          </h2>

          <span>
            {voteAverage}
          </span>
        </div>

        <p className='movie-details__genres'>
          {formatGenres(genres)}
        </p>

        <div className='movie-details__information'>
          <span>
            {year}
          </span>

          <span>
            {formatTime(runtime)}
          </span>
        </div>

        <p className='movie-details__overview'>
          {overview}
        </p>
      </div>
    </div>
  )
}

export default MovieDetails
