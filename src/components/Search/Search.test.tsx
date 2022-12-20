import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Search from './Search'

import '@testing-library/jest-dom'

const testFunction = jest.fn()

test('the Search component renders correctly with required and optional props', () => {
  render(<Search className='test-class' defaultValue='input test' handleSearchSubmit={testFunction}/>)

  const node = screen.getByTestId('search-node')

  // the component has been rendered
  expect(node).toBeInTheDocument()

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(node).toMatchSnapshot()

  // has heading
  const headingNode = screen.getByText('FIND YOUR MOVIE')
  expect(headingNode).toBeInTheDocument()

  // has input with correct value
  const inputNode = screen.getByRole('textbox')
  expect(inputNode).toHaveValue('input test')
  expect(inputNode).toHaveAttribute('placeholder', 'What do you want to watch?')

  // after submit right function is called
  const buttonNode = screen.getByRole('button')
  fireEvent.click(buttonNode)
  expect(testFunction).toBeCalled()

  // while submit correct function is called
  fireEvent.submit(node)
  expect(testFunction).toBeCalled()

  // the comonent has correct classes
  expect(node).toHaveClass('search test-class')
})
