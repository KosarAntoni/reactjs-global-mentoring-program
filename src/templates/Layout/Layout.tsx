import React, { FC } from 'react'

import Footer from 'components/Footer'
// import { MovieDetailsProps } from 'components/MovieDetails/MovieDetails.models'
import ErrorBoundary from 'containers/ErrorBoundary'
import Header from 'containers/Header'
import MovieList from 'containers/MovieList'

import './Layout.styles.scss'

const Layout: FC = () => {
  return (
    <div className='layout'>
      <ErrorBoundary>
        <Header />
        <MovieList/>
        <Footer/>
      </ErrorBoundary>
    </div>
  )
}

export default Layout
