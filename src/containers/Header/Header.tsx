import React, { FC, useState } from 'react'
import background from 'assets/header-background.png'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MovieDetails from 'components/MovieDetails'
import MovieEditModal from 'components/MovieEditModal'
import Search from 'components/Search'
import SuccessModal from 'components/SuccessModal'

import { HeaderProps } from './Header.models'

import './Header.styles.scss'

const Header: FC<HeaderProps> = ({ movie }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
  const [isAddSuccessModalOpen, setIsAddSuccessModalOpen] = useState<boolean>(false)

  const handleCreateCourse = (data: any): void => {
    setIsAddSuccessModalOpen(true)
    console.log(data)
    console.log('Create course')
  }

  return (
    <>
      <header className='header'>
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

        <Logo/>
        <Button onClick={() => setIsAddModalOpen(true)} style='transparent'>+ add movie</Button>
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
