import type { ReactNode, AnchorHTMLAttributes, MouseEventHandler } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      style={onClick && !props.href ? { cursor: 'pointer' } : undefined}
      {...props}
    >
      {children}
    </a>
  )
}
