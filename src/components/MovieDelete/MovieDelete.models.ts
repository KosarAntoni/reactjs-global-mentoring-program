import { ModalProps } from 'components/Modal/Modal.models'

export interface MovieDeleteProps extends Pick<ModalProps, 'handleClose' | 'isOpen'> {
  handleConfirm: () => void
}
