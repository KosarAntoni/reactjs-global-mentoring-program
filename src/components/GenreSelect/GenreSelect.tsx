import React, { FC } from 'react'
import classNames from 'classnames'

import { StyledGenreSelect } from './GenreSelect.styles'

import { GenreSelectProps } from './GenreSelect.models'

const GenreSelect: FC<GenreSelectProps> = ({ genres, selectedGenre, handleSelect, className }) => {
  return (
    <StyledGenreSelect className={className}>
      {genres.map((genre) => (
        <button
          className={classNames('genre', { 'genre--selected': genre.id === selectedGenre?.id })}
          key={genre.id}
          onClick={() => handleSelect(genre)}
          type='button'
        >
          {genre.name}
        </button>
      ))}
    </StyledGenreSelect>
  )
}

export default GenreSelect
