import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

import '@testing-library/jest-dom'

test('the Footer component renders correctly with required and optional props', () => {
  render(<Footer />)

  const node = screen.getByTestId('footer-node')

  // the component has been rendered
  expect(node).toBeInTheDocument()

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(node).toMatchSnapshot()

  // has Logo componrnt
  expect(screen.getByTestId('logo-node')).toBeInTheDocument()

  // the comonent has correct classes
  expect(node).toHaveClass('footer')
})
