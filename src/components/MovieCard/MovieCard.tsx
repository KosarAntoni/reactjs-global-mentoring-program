import React, { FC, useState } from 'react'
import classNames from 'classnames'

import { MovieCardProps } from './MovieCard.models'

import './MovieCard.styles.scss'

const MovieCard: FC<MovieCardProps> = ({ title, genres, posterPath, releaseDate, options, className }) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)

  return (
    <div className={classNames('movie-card', className)}>

      {options && (
      <div className={classNames('movie-card__select', { 'movie-card__select--open': isSelectOpen })}>
        <button
        onClick={() => setIsSelectOpen((prevState) => !prevState)}
      >
          {isSelectOpen ? '×' : '⋮'}
        </button>

        {isSelectOpen && options}
      </div>
      )}

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
