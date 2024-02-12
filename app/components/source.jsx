/**
 * @param {Object} props
 * @param {string} props.srcSet
 * @param {'sm'|'lg'} props.breakpoint
 * @param {string|number} props.width
 * @param {string|number} props.height
 */
export default function Source({ srcSet, breakpoint, width, height }) {
  const breakpoints = new Map([
    ['sm', '640'],
    ['lg', '1024']
  ])

  return (
    <source
      srcSet={`/images/${srcSet}`}
      media={`(min-width: ${breakpoints.get(breakpoint)}px)`}
      width={width}
      height={height}
    />
  )
}
