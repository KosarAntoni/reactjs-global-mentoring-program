import React, { FC } from 'react'
import classNames from 'classnames'

import { MovieCardProps } from './MovieCard.models'

import './MovieCard.styles.scss'

const MovieCard: FC<MovieCardProps> = ({ title, genres, posterPath, releaseDate, className }) => {
  return (
    <div className={classNames('movie-card', className)}>
      <img alt={title} src={posterPath} />

      <footer>
        <h3>
          {title}
        </h3>

        <p>
          {genres.length > 2 ? genres.join(', ') : genres.join(' & ')}
        </p>

        <span>
          {new Date(releaseDate).getFullYear()}
        </span>
      </footer>

    </div>
  )
}

export default MovieCard
