import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { addMovie, clearSingleMovie, fetchSingleMovie, selectSingleMovie } from 'store/moviesSlice'
import { removeFromParams, urlSearchParams } from 'utilities'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MovieEditModal from 'components/MovieEditModal'
import SuccessModal from 'components/SuccessModal'

import { StyledHeader, StyledHeaderBackground, StyledHeaderDetails, StyledHeaderSearch, StyledSearchButton } from './Header.styles'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { query, push } = useRouter()
  const { searchQuery } = query

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
  const [isAddSuccessModalOpen, setIsAddSuccessModalOpen] = useState<boolean>(false)

  const movie = useAppSelector(selectSingleMovie)

  const handleAddMovie = (data: any): void => {
    void dispatch(addMovie(data))
    setIsAddSuccessModalOpen(true)
  }

  const handleSearchButtonClick = () => {
    dispatch(clearSingleMovie())
    void push({ query: removeFromParams(query as urlSearchParams, 'movie') })
  }

  const handleSearchSubmit = (value: string) => {
    void push(`/search/${value}`)
  }

  useEffect(() => {
    const id = query.movie
    if (id) { void dispatch(fetchSingleMovie(+id)) } else {
      dispatch(clearSingleMovie())
    }
  }, [dispatch, query])

  return (
    <>
      <StyledHeader>
        <Logo />

        {movie
          ? <StyledSearchButton onClick={handleSearchButtonClick} type='button' />
          : <Button onClick={() => setIsAddModalOpen(true)} variant='transparent'>+ add movie</Button>}

        {movie
          ? <StyledHeaderDetails {...movie} />
          : (
            <>
              <StyledHeaderBackground
                alt='header-background'
                height='543'
                src='/header-background.png'
                width='1000'
              />

              <StyledHeaderSearch defaultValue={searchQuery} handleSearchSubmit={handleSearchSubmit} />
            </>
          )}

      </StyledHeader>

      <MovieEditModal
        handleClose={() => setIsAddModalOpen(false)}
        handleSubmit={handleAddMovie}
        heading={'Add movie'}
        isOpen={isAddModalOpen}
      />

      <SuccessModal
        description='The movie has been added to database successfully'
        handleClose={() => setIsAddSuccessModalOpen(false)}
        isOpen={isAddSuccessModalOpen}
      />
    </>
  )
}

export default Header
