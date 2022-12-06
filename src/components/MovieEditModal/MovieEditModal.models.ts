import { Movie } from 'store/moviesSlice'

import { ModalProps } from 'components/Modal/Modal.models'

export interface MovieEditModalProps extends Pick<ModalProps, 'handleClose' | 'isOpen'> {
  heading: string
  handleSubmit: (data: Partial<Movie>) => void
  movieData?: Partial<Movie>
}
