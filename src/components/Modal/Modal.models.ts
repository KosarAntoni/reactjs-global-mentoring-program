import { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
  isOpen?: boolean
  handleClose: () => void
  className?: string
}
