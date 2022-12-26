import React, { FC } from 'react'

import Footer from 'components/Footer'
import ErrorBoundary from 'containers/ErrorBoundary'
import Header from 'containers/Header'

const NotFound: FC = () => {
  return (
    <div className='not-found'>
      <ErrorBoundary>
        <Header />
        <h2>Page not found :(</h2>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default NotFound
