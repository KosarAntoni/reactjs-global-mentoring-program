import { InputProps } from 'components/Input/Input.models'

export interface InputFieldProps extends InputProps {
  id: string
  value: string
  label: string
  error?: string
  className?: string
}
