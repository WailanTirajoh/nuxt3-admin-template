export const useAnimationOpenClose = () => {
  const animateEnter = (el: HTMLElement) => {
    el.style.height = 'auto'
    const height = getComputedStyle(el).height
    el.style.paddingTop = '0'
    el.style.height = '0'

    getComputedStyle(el)

    setTimeout(() => {
      el.style.height = height;
      el.style.paddingTop = '10px';
    })
  }

  const animateAfterEnter = (el: HTMLElement) => {
    el.style.height = 'auto'
  }

  const animateLeave = (el: HTMLElement) => {
    el.style.height = getComputedStyle(el).height
    el.style.paddingTop = '10px'
    getComputedStyle(el)
    setTimeout(() => {
      el.style.height = '0';
      el.style.paddingTop = '0'
    })
  }

  return {
    animateEnter,
    animateAfterEnter,
    animateLeave,
  }
}
