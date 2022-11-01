import React, { FC } from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import Input from 'components/Input'

import { SearchProps } from './Search.models'

import './Search.styles.scss'

const Search: FC<SearchProps> = ({ className }) => (
  <div className={classNames('search', className)}>
    <h1 className='search__heading'>FIND YOUR MOViE</h1>

    <Input
        className='search__input'
        placeholder='What do you want to watch?'
    />

    <Button
        className='search__button'
    >
      Search
    </Button>
  </div>
)

export default Search
