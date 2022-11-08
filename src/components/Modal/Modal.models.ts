import { ReactElement } from 'react'

export interface ModalProps {
  children: ReactElement | ReactElement[]
  isOpen?: boolean
  handleClose: () => void
  className?: string
}
