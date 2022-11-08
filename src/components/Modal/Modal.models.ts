import { ReactElement } from 'react'

export interface ModalProps {
  children: ReactElement
  isOpen?: boolean
  handleClose: () => void
  className?: string
}
