import React, { FC } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import MovieList from 'containers/MovieList'

import './Layout.styles.scss'

const Layout: FC = () => {
  return (
    <div className='layout'>
      <Header/>
      <MovieList/>
      <Footer/>
    </div>
  )
}

export default Layout
