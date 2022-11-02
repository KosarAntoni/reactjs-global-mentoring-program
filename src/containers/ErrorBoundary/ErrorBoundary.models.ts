import { ReactElement } from 'react'

export interface ErrorBoundaryProps {
  children: ReactElement | ReactElement[]
}

export interface ErrorBoundaryState {
  hasError: boolean
}
