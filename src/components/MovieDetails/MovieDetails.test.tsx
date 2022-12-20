import React from 'react'
import { render, screen } from '@testing-library/react'
import { formatGenres } from 'utilities/formatGenres'
import { numberToTime } from 'utilities/formatTime'

import MovieDetails from './MovieDetails'
import { movieMock } from './MovieDetails.mock'

import '@testing-library/jest-dom'

test('the MovieDetails component renders correctly with required and optional props', () => {
  render(<MovieDetails className='test-class' {...movieMock} />)

  const node = screen.getByTestId('movie-details-node')

  // the component has been rendered
  expect(node).toBeInTheDocument()

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(node).toMatchSnapshot()

  // has image
  const imageNode = screen.getByAltText(movieMock.title)
  expect(imageNode).toBeInTheDocument()
  expect(imageNode).toHaveAttribute('src', movieMock.poster_path)

  // has correct rintime
  const runtimeNode = screen.getByText(numberToTime(movieMock.runtime))
  expect(runtimeNode).toBeInTheDocument()

  // has correct formated genres
  const genresNode = screen.getByText(formatGenres(movieMock.genres))
  expect(genresNode).toBeInTheDocument()

  // the comonent has correct classes
  expect(node).toHaveClass('movie-details test-class')
})
