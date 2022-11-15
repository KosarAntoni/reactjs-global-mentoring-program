import { InputHTMLAttributes } from 'react'

export interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  className?: string
}
