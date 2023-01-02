import React, { FC } from 'react'

import Button from 'components/Button'
import Input from 'components/Input'

import { StyledSearch } from './Search.styles'

import { SearchProps } from './Search.models'

const Search: FC<SearchProps> = ({ className, handleSearchSubmit, defaultValue }) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!handleSearchSubmit) return

    const target = event.target as typeof event.target & {
      search: { value: string }
    }
    handleSearchSubmit(target.search.value)
  }

  return (
    <StyledSearch className={className} onSubmit={handleSubmit}>
      <h1 className='heading'>FIND YOUR MOViE</h1>

      <Input
        className='input'
        defaultValue={defaultValue || ''}
        name='search'
        placeholder='What do you want to watch?'

      />

      <Button
        className='button'
        type='submit'
      >
        Search
      </Button>
    </StyledSearch>
  )
}

export default Search
