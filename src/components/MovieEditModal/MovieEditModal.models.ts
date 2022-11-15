import { ModalProps } from 'components/Modal/Modal.models'

export interface MovieEditModalProps extends Pick<ModalProps, 'handleClose' | 'isOpen'> {
  heading: string
  handleSubmit: (data: EditForm) => void
  movieData?: EditForm
}

export interface EditForm {
  title: string
  vote_average: number
  release_date: Date
  url: string
  overview: string
  genres: string[]
  runtime: string
}
