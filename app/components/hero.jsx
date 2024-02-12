import clsx from 'clsx/lite'
import Source from './source'
import SeeProduct from './see-product'

export default function Hero() {
  return (
    <section className="relative mb-10 sm:mb-24 lg:mb-32">
      <picture>
        <Source
          srcSet="hero-lg.jpg"
          breakpoint="lg"
          width="2880"
          height="1458"
        />
        <Source
          srcSet="hero-sm.jpg"
          breakpoint="sm"
          width="1536"
          height="1458"
        />
        <img
          className="bg-neutral-500 object-cover lg:h-[45.5rem]"
          src="/images/hero.jpg"
          alt=""
          width="750"
          height="1200"
        />
      </picture>
      <div
        className={clsx(
          'absolute inset-0 mx-auto mt-[5.625rem] flex max-w-277.5',
          'items-center justify-center px-6 lg:mt-[5.875rem] lg:justify-start',
          'lg:px-0'
        )}
      >
        <div
          className={clsx(
            'max-w-[26rem] text-center text-neutral-100 md:mb-10 lg:mb-7',
            'lg:text-left'
          )}
        >
          <h2
            className={
              'text-sm font-normal uppercase tracking-widest opacity-50'
            }
          >
            New Product
          </h2>
          <h1
            className={clsx(
              'mb-6 mt-4 text-4xl font-bold uppercase tracking-wide sm:mt-6',
              'sm:text-6xl'
            )}
          >
            XX99 Mark II Headphones
          </h1>
          <p className="mx-auto mb-7 max-w-87 opacity-75 sm:mb-10 lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <SeeProduct
            className="bg-primary-100 hover:bg-primary-50"
            to="/headphones/1"
          />
        </div>
      </div>
    </section>
  )
}
