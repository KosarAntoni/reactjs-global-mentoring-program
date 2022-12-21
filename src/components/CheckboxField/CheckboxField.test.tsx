import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import CheckboxField from './CheckboxField'

import '@testing-library/jest-dom'

test('the CheckboxField component renders correctly with required and optional props', () => {
  render(<CheckboxField className='test-class' id='test' label='test label'/>)

  const node = screen.getByTestId('checkbox-node')

  // the component has been rendered
  expect(node).toBeInTheDocument()

  // generating a snapshot, not for testing purposes but only to see what changes in the HTML structure during CR if the developer updates the snapshot
  expect(node).toMatchSnapshot()

  // after click on label input is checked
  const inputNode = node.firstChild
  expect(inputNode).not.toBeChecked()
  fireEvent.click(node)
  expect(inputNode).toBeChecked()

  // has correct label text
  expect(screen.getByText('test label')).toBeInTheDocument()

  // the comonent has correct classes
  expect(node).toHaveClass('checkbox-field test-class')
})
