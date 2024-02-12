import clsx from 'clsx/lite'
import Hero from '../components/hero'
import Categories from '../components/categories'
import ZX9 from '../components/zx9'
import ZX7 from '../components/zx7'
import YX1 from '../components/yx1'
import Description from '../components/description'

/** @type {import('@remix-run/node').MetaFunction} */
export const meta = () => [{ title: 'Audiophile' }]

export default function Index() {
  return (
    <>
      <Hero />
      <Categories />
      <section
        className={clsx(
          'mx-auto my-28 grid max-w-277.5 gap-y-6 px-6 sm:my-24 sm:gap-y-8',
          'sm:px-10 lg:mt-40 lg:gap-y-12 lg:px-0'
        )}
      >
        <ZX9 />
        <ZX7 />
        <YX1 />
      </section>
      <Description />
    </>
  )
}
