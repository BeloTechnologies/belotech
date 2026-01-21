import type { ReactNode, AnchorHTMLAttributes } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </a>
  )
}
