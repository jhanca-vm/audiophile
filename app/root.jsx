import '@fontsource-variable/manrope/index.css'
import 'tailwindcss/tailwind.css'
import font from '@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2'
import { cssBundleHref } from '@remix-run/css-bundle'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import Header from './components/header'
import Footer from './components/footer'

/** @type {import('@remix-run/node').LinksFunction} */
export const links = () => [
  {
    rel: 'preload',
    href: font,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
]

export default function App() {
  return (
    <html lang="en" className="min-w-[375px] lg:min-w-[1190px]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <Meta />
        <Links />
      </head>
      <body
        className={
          'relative bg-neutral-200 text-base font-medium text-neutral-550'
        }
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
