import { TextareaHTMLAttributes } from 'react'

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  value: string
  label: string
  error?: string
  className?: string
}
