import React, { FC, useState } from 'react'
import background from 'assets/header-background.png'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { clearSingleMovie, selectSingleMovie } from 'store/moviesSlice'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MovieDetails from 'components/MovieDetails'
import MovieEditModal from 'components/MovieEditModal'
import Search from 'components/Search'
import SuccessModal from 'components/SuccessModal'

import './Header.styles.scss'

const Header: FC = () => {
  const dispatch = useAppDispatch()

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
  const [isAddSuccessModalOpen, setIsAddSuccessModalOpen] = useState<boolean>(false)

  const movie = useAppSelector(selectSingleMovie)

  const handleCreateCourse = (data: any): void => {
    setIsAddSuccessModalOpen(true)
    console.log(data)
    console.log('Create course')
  }

  const handleSearchButtonClick = () => {
    dispatch(clearSingleMovie())
  }

  return (
    <>
      <header className='header'>
        <Logo/>

        {movie
          ? <button className='header__search-button' onClick={handleSearchButtonClick} type='button'/>
          : <Button onClick={() => setIsAddModalOpen(true)} style='transparent'>+ add movie</Button>}

        {movie
          ? <MovieDetails {...movie} className='header__movie-details'/>
          : (
            <>
              <img
                alt='header-background'
                className='header__background'
                src={background}
              />

              <Search className='header__search'/>
            </>
            )
        }

      </header>

      <MovieEditModal
        handleClose={() => setIsAddModalOpen(false)}
        handleSubmit={handleCreateCourse}
        heading={'Add course'}
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
