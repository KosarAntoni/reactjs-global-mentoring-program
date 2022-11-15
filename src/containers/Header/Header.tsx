import React, { FC, useState } from 'react'
import background from 'assets/header-background.png'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MovieEditModal from 'components/MovieEditModal'
import Search from 'components/Search'
import SuccessModal from 'components/SuccessModal'

import './Header.styles.scss'

const Header: FC = () => {
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
        <img
      alt='header-background'
      className='header__background'
      src={background}
      />

        <Logo/>
        <Button onClick={() => setIsAddModalOpen(true)} style='transparent'>+ add movie</Button>
        <Search className='header__search'/>
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
