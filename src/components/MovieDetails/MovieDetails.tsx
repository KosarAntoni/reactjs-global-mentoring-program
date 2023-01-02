import React, { FC } from 'react'
import { formatGenres, numberToTime } from 'utilities'

import { StyledMovieDetails } from './MovieDetails.styles'

import { MovieDetailsProps } from './MovieDetails.models'

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
    <StyledMovieDetails className={className}>
      <img alt={title} src={posterPath} />

      <div>
        <div className='heading'>
          <h2>
            {title}
          </h2>

          <span>
            {voteAverage}
          </span>
        </div>

        <p className='genres'>
          {formatGenres(genres)}
        </p>

        <div className='information'>
          <span>
            {year}
          </span>

          <span>
            {numberToTime(runtime)}
          </span>
        </div>

        <p className='overview'>
          {overview}
        </p>
      </div>
    </StyledMovieDetails>
  )
}

export default MovieDetails
