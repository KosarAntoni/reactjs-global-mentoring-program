import React, { FC } from 'react'
import classNames from 'classnames'

import Button from 'components/Button'
import Input from 'components/Input'

import { SearchProps } from './Search.models'

import './Search.styles.scss'

const Search: FC<SearchProps> = ({ className }) => (
  <div className={classNames('search', className)}>
    <Input
        placeholder='What do you want to watch?'
    />

    <Button>Search</Button>
  </div>
)

export default Search
