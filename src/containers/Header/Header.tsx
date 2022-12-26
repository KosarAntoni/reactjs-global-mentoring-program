import React, { FC, useEffect, useState } from 'react'
// import background from 'assets/header-background.png'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { addMovie, clearSingleMovie, fetchSingleMovie, selectSingleMovie } from 'store/moviesSlice'
import { removeFromParams } from 'utilities'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MovieDetails from 'components/MovieDetails'
import MovieEditModal from 'components/MovieEditModal'
import Search from 'components/Search'
import SuccessModal from 'components/SuccessModal'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { searchQuery } = router.query

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
  const [isAddSuccessModalOpen, setIsAddSuccessModalOpen] = useState<boolean>(false)

  const movie = useAppSelector(selectSingleMovie)

  const handleAddMovie = (data: any): void => {
    void dispatch(addMovie(data))
    setIsAddSuccessModalOpen(true)
  }

  const handleSearchButtonClick = () => {
    dispatch(clearSingleMovie())
    void router.push({ query: removeFromParams(router.query, 'movie') })
  }

  const handleSearchSubmit = (value: string) => {
    void router.push(`/search/${value}`)
  }

  useEffect(() => {
    const id = router.query.movie
    if (id) { void dispatch(fetchSingleMovie(+id)) } else {
      dispatch(clearSingleMovie())
    }
  }, [dispatch, router.query])

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
              <img
                alt='header-background'
                className='header__background'
                // src={background}
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
