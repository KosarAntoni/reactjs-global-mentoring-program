import React, { FC, useEffect, useState } from 'react'
// import background from 'assets/header-background.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { addMovie, clearSingleMovie, fetchSingleMovie, selectSingleMovie } from 'store/moviesSlice'
import { removeFromParams, urlSearchParams } from 'utilities'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MovieDetails from 'components/MovieDetails'
import MovieEditModal from 'components/MovieEditModal'
import Search from 'components/Search'
import SuccessModal from 'components/SuccessModal'

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
      <header className='header'>
        <Logo />

        {movie
          ? <button className='header__search-button' onClick={handleSearchButtonClick} type='button' />
          : <Button onClick={() => setIsAddModalOpen(true)} style='transparent'>+ add movie</Button>}

        {movie
          ? <MovieDetails {...movie} className='header__movie-details' />
          : (
            <>
              {/* <img
                alt='header-background'
                className='header__background'
                src={background}
              /> */}

              <Image
                alt='header-background'
                className='header__background'
                height='543'
                src='/header-background.png'
                width='1000'
              />

              <Search className='header__search' defaultValue={searchQuery} handleSearchSubmit={handleSearchSubmit} />
            </>
          )}

      </header>

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
