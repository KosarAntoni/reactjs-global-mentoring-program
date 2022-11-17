import { ReactElement } from 'react'

export interface MovieCardProps {
  title: string
  genres: string[]
  releaseDate: string
  posterPath: string
  options?: ReactElement
  className?: string
  onClick?: () => void
}
