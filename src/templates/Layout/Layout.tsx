import React, { FC, useState } from 'react'

import Footer from 'components/Footer'
import { MovieDetailsProps } from 'components/MovieDetails/MovieDetails.models'
import ErrorBoundary from 'containers/ErrorBoundary'
import Header from 'containers/Header'
import MovieList from 'containers/MovieList'

import { moviesMock } from '../../mock'

import './Layout.styles.scss'

const Layout: FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsProps | undefined>(undefined)

  const handleMovieSelect = (id?: number): void => {
    if (!id) { setSelectedMovie(undefined) }

    const [movie] = moviesMock.filter((movie) => movie.id === id)

    if (!movie) return
    setSelectedMovie(movie)
  }

  return (
    <div className='layout'>
      <ErrorBoundary>
        <Header handleDetailsClose={() => handleMovieSelect()} movie={selectedMovie}/>
        <MovieList handleMovieSelect={(id) => handleMovieSelect(id)}/>
        <Footer/>
      </ErrorBoundary>
    </div>
  )
}

export default Layout
