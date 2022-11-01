import React, { FC } from 'react'
import classNames from 'classnames'

import { GenreSelectProps } from './GenreSelect.models'

import './GenreSelect.styles.scss'

const GenreSelect: FC<GenreSelectProps> = ({ genres, selectedGenre, handleSelect, className }) => {
  return (
    <div className={classNames('genre-select', className)}>
      {genres.map(({ id, name }) => (
        <button
            className={classNames('genre-select__genre', { 'genre-select__genre--selected': id === selectedGenre?.id })}
            key={id}
            onClick={() => handleSelect(id)}
            type='button'
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export default GenreSelect
