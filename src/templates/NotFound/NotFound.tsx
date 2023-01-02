import React, { FC } from 'react'

import Footer from 'components/Footer'
import ErrorBoundary from 'containers/ErrorBoundary'
import Header from 'containers/Header'

import { StyledNotFound } from './NotFound.styles'

const NotFound: FC = () => {
  return (
    <StyledNotFound>
      <ErrorBoundary>
        <Header />
        <h2>Page not found :(</h2>
        <Footer />
      </ErrorBoundary>
    </StyledNotFound>
  )
}

export default NotFound
