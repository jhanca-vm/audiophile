import clsx from 'clsx/lite'
import Source from './source'
import SeeProduct from './see-product'

export default function ZX7() {
  return (
    <article className="relative">
      <picture>
        <Source
          srcSet="zx7-lg.webp"
          breakpoint="lg"
          width="1110"
          height="320"
        />
        <Source srcSet="zx7-sm.jpg" breakpoint="sm" width="689" height="320" />
        <img
          className="w-full rounded-lg"
          src="/images/zx7.webp"
          alt=""
          width="654"
          height="640"
          loading="lazy"
        />
      </picture>
      <div
        className={
          'absolute inset-0 flex flex-col justify-center px-6 sm:px-15 lg:px-24'
        }
      >
        <h2 className="mb-8 text-3xl font-bold uppercase tracking-[0.125rem]">
          ZX7 Speaker
        </h2>
        <SeeProduct
          className={clsx(
            'border border-neutral-550 hover:bg-neutral-550',
            'hover:text-neutral-100'
          )}
          to="/speakers/zx7"
        />
      </div>
    </article>
  )
}
