import clsx from 'clsx/lite'
import { Link, useLocation } from '@remix-run/react'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header
      className={
        pathname === '/' ? 'absolute inset-x-0 z-10' : 'bg-neutral-550'
      }
    >
      <div
        className={clsx(
          'flex max-w-277.5 items-center justify-between px-6 py-8',
          pathname === '/' && 'border-b border-neutral-100/10',
          'sm:mx-10 sm:px-0 lg:mx-auto lg:pb-9'
        )}
      >
        <Link to="/">
          <img src="/logo.svg" alt="Audiophile" width="143" height="25" />
        </Link>
        <button>
          <img src="/icons/cart.svg" alt="Cart" width="23" height="20" />
        </button>
      </div>
    </header>
  )
}
