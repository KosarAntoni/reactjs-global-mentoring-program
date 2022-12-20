import React, { FC } from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import Input from 'components/Input'

import { SearchProps } from './Search.models'

import './Search.styles.scss'

const Search: FC<SearchProps> = ({ className, handleSearchSubmit, defaultValue }) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!handleSearchSubmit) return

    const target = event.target as typeof event.target & {
      search: { value: string }
    }
    handleSearchSubmit(target.search?.value)
  }

  return (
    <form className={classNames('search', className)} data-testid='search-node' onSubmit={handleSubmit}>
      <h1 className='search__heading'>FIND YOUR MOVIE</h1>

      <Input
        className='search__input'
        defaultValue={defaultValue || ''}
        name='search'
        placeholder='What do you want to watch?'

      />

      <Button
        className='search__button'
        type='submit'
      >
        Search
      </Button>
    </form>
  )
}

export default Search
