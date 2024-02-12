import clsx from 'clsx/lite'
import capitalize from 'just-capitalize'
import { Link } from '@remix-run/react'

export default function Categories() {
  const list = [
    ['headphones', 422],
    ['speakers', 408],
    ['earphones', 380]
  ]

  return (
    <section
      className={clsx(
        'mx-auto grid max-w-277.5 gap-y-4 px-6 sm:grid-cols-3 sm:gap-x-2.5',
        'sm:px-10 lg:gap-x-8 lg:px-0'
      )}
    >
      {list.map(([category, imageHeight]) => (
        <article
          className={clsx(
            'mt-13 flex flex-col items-center rounded-lg bg-neutral-300',
            'sm:justify-between'
          )}
          key={category}
        >
          <img
            className="-mt-13 max-w-40 lg:max-w-52"
            src={`/images/${category}.webp`}
            alt=""
            width={438}
            height={imageHeight}
            loading="lazy"
          />
          <div className="flex flex-col items-center">
            <h3
              className={clsx(
                'mb-4 font-bold uppercase tracking-wider lg:mb-5 lg:text-lg',
                'lg:leading-none'
              )}
            >
              {capitalize(category)}
            </h3>
            <Link
              className={clsx(
                'group mb-6 inline-flex items-center gap-x-3 text-xs font-bold',
                'uppercase tracking-wider hover:text-primary-100 lg:mb-7'
              )}
              to={`/${category}`}
            >
              <span className="opacity-50 transition group-hover:opacity-100">
                Shop
              </span>
              <img src="/icons/arrow-right.svg" alt="" width="8" height="12" />
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}
