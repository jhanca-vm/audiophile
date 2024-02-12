import clsx from 'clsx/lite'
import { Link } from '@remix-run/react'

/**
 * @param {Object} props
 * @param {string} props.className
 * @param {string} props.to
 */
export default function SeeProduct({ className, to }) {
  return (
    <Link
      className={clsx(
        className,
        'inline-grid h-12 w-40 place-items-center text-xs font-bold uppercase',
        'tracking-wider transition-colors'
      )}
      to={to}
    >
      See Product
    </Link>
  )
}
