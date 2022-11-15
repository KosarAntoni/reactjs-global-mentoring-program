import { ModalProps } from 'components/Modal/Modal.models'

export interface SuccessModalProps extends Pick<ModalProps, 'handleClose' | 'isOpen'> {
  description?: string
}
