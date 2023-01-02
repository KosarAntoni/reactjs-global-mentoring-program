import React, { FC, useState } from 'react'
import classNames from 'classnames'
import { formatGenres } from 'utilities'

import { MovieCardProps } from './MovieCard.models'

const MovieCard: FC<MovieCardProps> = ({ title, genres, posterPath, releaseDate, options, className, onClick }) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)

  const handleCardClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (!onClick) return

    e.stopPropagation()
    e.preventDefault()
    onClick()
  }

  return (
    <div className={classNames('movie-card', className)}>

      {options && (
      <div className={classNames('movie-card__select', { 'movie-card__select--open': isSelectOpen })}>
        <button
        onClick={() => setIsSelectOpen((prevState) => !prevState)}
      >
          {isSelectOpen ? '\u2715' : '\u22EE'}
        </button>

        {isSelectOpen && options}
      </div>
      )}

      <img alt={title} onClick={(e) => handleCardClick(e)} src={posterPath}/>

      <footer onClick={(e) => handleCardClick(e)}>
        <h3>
          {title}
        </h3>

        <p>
          {formatGenres(genres)}
        </p>

        <span>
          {new Date(releaseDate).getFullYear()}
        </span>
      </footer>

    </div>
  )
}

export default MovieCard
