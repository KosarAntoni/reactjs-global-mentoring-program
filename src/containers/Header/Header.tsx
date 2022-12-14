import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import background from 'assets/header-background.png'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { addMovie, clearSingleMovie, fetchSingleMovie, selectSingleMovie } from 'store/moviesSlice'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MovieDetails from 'components/MovieDetails'
import MovieEditModal from 'components/MovieEditModal'
import Search from 'components/Search'
import SuccessModal from 'components/SuccessModal'

import './Header.styles.scss'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { searchQuery } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
  const [isAddSuccessModalOpen, setIsAddSuccessModalOpen] = useState<boolean>(false)

  const movie = useAppSelector(selectSingleMovie)

  const handleAddMovie = (data: any): void => {
    void dispatch(addMovie(data))
    setIsAddSuccessModalOpen(true)
  }

  const handleSearchButtonClick = () => {
    dispatch(clearSingleMovie())
    setSearchParams()
  }

  const handleSearchSubmit = (value: string) => {
    navigate(`/search/${value}`)
  }

  useEffect(() => {
    const id = searchParams.get('movie')
    if (id) void dispatch(fetchSingleMovie(+id))
  }, [dispatch, searchParams])

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
                src={background}
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
