import React, { FC } from 'react'
import background from 'assets/header-background.png'

import Button from 'components/Button'
import Logo from 'components/Logo'
import Search from 'components/Search'

import './Header.styles.scss'

const Header: FC = () => (
  <header className='header'>
    <img
      alt='header-background'
      className='header__background'
      src={background}
    />

    <Logo/>
    <Button style='transparent'>+ add movie</Button>
    <Search className='header__search'/>
  </header>
)

export default Header
