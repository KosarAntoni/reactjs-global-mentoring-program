import React, { FC } from 'react'

import Footer from 'components/Footer'
import ErrorBoundary from 'containers/ErrorBoundary'
import Header from 'containers/Header'
import MovieList from 'containers/MovieList'

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
