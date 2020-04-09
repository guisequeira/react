export const BreakingPoint = (width) => {
  let viewport;
    if (width < 576) {
      viewport = 'xs'
    } else if (width >= 576 && width < 768) {
      viewport = 'sm'
    } else if (width >= 768 && width < 992) {
      viewport = 'md'
    } else if (width >= 992 && width < 1200) {
      viewport = 'lg'
    } else if (width >= 1200 && width < 1600) {
      viewport = 'xl'
    } else if (width >= 1600) {
      viewport = 'xxl'
    }
  return viewport
}