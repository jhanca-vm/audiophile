import clsx from 'clsx/lite'
import Source from './source'
import SeeProduct from './see-product'

export default function YX1() {
  return (
    <article className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-3 lg:gap-x-8">
      <picture>
        <Source srcSet="yx1-lg.jpg" breakpoint="lg" width="540" height="320" />
        <Source srcSet="yx1-sm.webp" breakpoint="sm" width="678" height="640" />
        <img
          className="w-full rounded-lg"
          src="/images/yx1.webp"
          alt=""
          width="654"
          height="400"
          loading="lazy"
        />
      </picture>
      <div
        className={clsx(
          'flex h-[12.5rem] flex-col justify-center rounded-lg bg-neutral-300',
          'px-6 sm:h-auto sm:px-10 lg:px-24'
        )}
      >
        <h2 className="mb-8 text-3xl font-bold uppercase tracking-[0.125rem]">
          YX1 Earphones
        </h2>
        <SeeProduct
          className={clsx(
            'border border-neutral-550 hover:bg-neutral-550',
            'hover:text-neutral-100'
          )}
          to="/earphones/yx1"
        />
      </div>
    </article>
  )
}
