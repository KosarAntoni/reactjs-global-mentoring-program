import React from 'react'
import { render, screen } from '@testing-library/react'

import Logo from './Logo'

import '@testing-library/jest-dom'

test('the Logo component renders correctly with required and optional props', () => {
  render(<Logo className='test-class' />)

  const node = screen.getByTestId('logo-node')

  // the component has been rendered
  expect(node).toBeInTheDocument()

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(node).toMatchSnapshot()

  // the comonent has correct classes
  expect(node).toHaveClass('logo test-class')
})
