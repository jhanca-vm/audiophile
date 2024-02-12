import clsx from 'clsx/lite'
import Source from './source'

export default function Description() {
  return (
    <section
      className={clsx(
        'mx-auto my-28 grid max-w-277.5 gap-y-10 px-6 sm:gap-y-16 sm:px-10',
        'lg:my-48 lg:flex lg:flex-row-reverse lg:items-center',
        'lg:justify-between lg:px-0'
      )}
    >
      <picture>
        <Source
          srcSet="best-gear-lg.webp"
          breakpoint="lg"
          width="540"
          height="588"
        />
        <Source
          srcSet="best-gear-sm.webp"
          breakpoint="sm"
          width="1378"
          height="600"
        />
        <img
          className="w-full rounded-lg lg:w-auto"
          src="/images/best-gear.webp"
          alt=""
          width="654"
          height="600"
          loading="lazy"
        />
      </picture>
      <div
        className={
          'mx-auto max-w-xl text-center lg:mx-0 lg:w-[27.75rem] lg:text-left'
        }
      >
        <h2
          className={clsx(
            'text-3xl font-bold uppercase leading-snug tracking-wider',
            'sm:text-[2.5rem] sm:leading-[1.1]'
          )}
        >
          Bringing you the <span className="text-primary-100">best</span> audio
          gear
        </h2>
        <p className="mt-8 opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  )
}
