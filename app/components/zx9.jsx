import clsx from 'clsx/lite'
import Source from './source'
import SeeProduct from './see-product'

export default function ZX9() {
  return (
    <article
      className={clsx(
        'circles-pattern overflow-y-hidden rounded-lg bg-primary-100 px-6',
        'py-14 text-neutral-100 sm:bg-auto sm:bg-[center_bottom_4rem]',
        'sm:pb-16 lg:flex lg:h-[35rem] lg:items-center',
        'lg:bg-[-9.25rem_-2.25rem] lg:pl-0 lg:pr-24'
      )}
    >
      <picture className="lg:mx-auto lg:-mb-[4.75rem] lg:self-end">
        <Source srcSet="zx9-lg.webp" breakpoint="lg" width="756" height="918" />
        <img
          className="mx-auto mb-8 w-40 sm:mb-16 sm:w-48 lg:mb-0 lg:w-96"
          src="/images/zx9.webp"
          alt=""
          width="320"
          height="388"
          loading="lazy"
        />
      </picture>
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-bold uppercase tracking-wide sm:text-6xl">
          <span className="block">ZX9</span>
          Speaker
        </h2>
        <p className="mx-auto my-6 max-w-87 opacity-75 sm:mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProduct
          className="bg-neutral-550 hover:bg-neutral-400"
          to="/speakers/zx9"
        />
      </div>
    </article>
  )
}
