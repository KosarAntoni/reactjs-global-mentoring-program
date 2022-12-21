import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from './Button'

import '@testing-library/jest-dom'

const testFunction = jest.fn()

test('the Button component renders correctly with required and optional props', () => {
  render(<Button className='test-class' onClick={testFunction}>Test</Button>)

  const node = screen.getByRole('button', { name: 'Test' })

  // the component has been rendered
  expect(node).toBeInTheDocument()

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(node).toMatchSnapshot()

  // after click right function is called
  fireEvent.click(node)
  expect(testFunction).toBeCalled()

  // the comonent has correct classes
  expect(node).toHaveClass('button button--solid test-class')
})
