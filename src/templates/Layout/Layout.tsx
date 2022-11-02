import React, { FC } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ErrorBoundary from 'containers/ErrorBoundary'
import MovieList from 'containers/MovieList'

import './Layout.styles.scss'

const Layout: FC = () => {
  return (
    <div className='layout'>
      <ErrorBoundary>
        <Header/>
        <MovieList/>
        <Footer/>
      </ErrorBoundary>
    </div>
  )
}

export default Layout
