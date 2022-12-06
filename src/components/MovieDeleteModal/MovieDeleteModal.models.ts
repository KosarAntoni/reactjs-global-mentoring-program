import { ModalProps } from 'components/Modal/Modal.models'

export interface MovieDeleteModalProps extends Pick<ModalProps, 'handleClose' | 'isOpen'> {
  handleSubmit: () => void
}
