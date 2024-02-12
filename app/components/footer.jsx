import clsx from 'clsx/lite'
import { Link } from '@remix-run/react'

export default function Footer() {
  return (
    <footer
      className={clsx(
        'bg-neutral-500 px-6 text-center text-neutral-100 sm:px-10',
        'lg:circles-pattern sm:text-left lg:bg-right'
      )}
    >
      <div
        className={
          'mx-auto flex max-w-277.5 flex-col items-center sm:items-start'
        }
      >
        <span className="h-1 w-[6.25rem] bg-primary-100" />
        <Link className="my-12 sm:mb-8 sm:mt-14" to="/">
          <img src="/logo.svg" alt="Audiophile" width="143" height="25" />
        </Link>
        <p className="opacity-50 lg:max-w-[33.75rem]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <p className="my-12 font-bold opacity-50 sm:mt-14">
          Copyright 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
