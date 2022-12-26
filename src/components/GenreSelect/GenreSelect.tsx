import React, { FC } from 'react'
import classNames from 'classnames'

import { GenreSelectProps } from './GenreSelect.models'

const GenreSelect: FC<GenreSelectProps> = ({ genres, selectedGenre, handleSelect, className }) => {
  return (
    <div className={classNames('genre-select', className)}>
      {genres.map((genre) => (
        <button
            className={classNames('genre-select__genre', { 'genre-select__genre--selected': genre.id === selectedGenre?.id })}
            key={genre.id}
            onClick={() => handleSelect(genre)}
            type='button'
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default GenreSelect
