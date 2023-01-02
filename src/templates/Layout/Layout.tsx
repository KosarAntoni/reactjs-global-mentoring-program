import React, { FC } from 'react'

import Footer from 'components/Footer'
import ErrorBoundary from 'containers/ErrorBoundary'
import Header from 'containers/Header'
import MovieList from 'containers/MovieList'

import { StyledLayout } from './Layout.styles'

const Layout: FC = () => {
  return (
    <StyledLayout>
      <ErrorBoundary>
        <Header />
        <MovieList />
        <Footer />
      </ErrorBoundary>
    </StyledLayout>
  )
}

export default Layout
