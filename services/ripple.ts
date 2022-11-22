/**
 * Convert from js package vue ripple to ts
 * Ref: https://github.com/PygmySlowLoris/vue-ripple-directive (JS)
 */

interface Props {
  event: string
  transition: number
}

interface RippleInterface {
  color: string
  zIndex: string

  beforeMount: (
    el: HTMLElement,
    binding: {
      modifiers: object,
      value: string
    }
  ) => void
}

const setProps = (modifiers: Array<any>, props: Props): void => {
  modifiers.forEach(function (item: any) {
    if (isNaN(Number(item))) props.event = item
    else props.transition = item
  })
}

const Ripple: RippleInterface = {
  color: '',
  zIndex: '',
  beforeMount(el: HTMLElement, binding: {
    modifiers: object
    value: string
  }) {
    // Default values.
    const props = {
      event: 'mousedown',
      transition: 600,
    }

    setProps(Object.keys(binding.modifiers), props)

    el.addEventListener(props.event, function (event: Event) {
      rippler(event as MouseEvent, el)
    })

    const bg = binding.value || Ripple.color || 'rgba(0, 0, 0, 0.35)'
    const zIndex = Ripple.zIndex || '9999'

    function rippler(event: MouseEvent, el: HTMLElement) {
      const target = el
      // Get border to avoid offsetting on ripple container position
      const targetBorder = parseInt(
        getComputedStyle(target).borderWidth.replace('px', '')
      )

      // Get necessary variables
      const rect = target.getBoundingClientRect()
      const left = rect.left
      const top = rect.top
      const width = target.offsetWidth
      const height = target.offsetHeight
      const dx = event.clientX - left
      const dy = event.clientY - top
      const maxX = Math.max(dx, width - dx)
      const maxY = Math.max(dy, height - dy)
      const style = window.getComputedStyle(target)
      const radius = Math.sqrt(maxX * maxX + maxY * maxY)
      const border = targetBorder > 0 ? targetBorder : 0

      // Create the ripple and its container
      const ripple = document.createElement('div')
      const rippleContainer = document.createElement('div')
      rippleContainer.className = 'ripple-container'
      ripple.className = 'ripple'

      // Styles for ripple
      ripple.style.marginTop = '0px'
      ripple.style.marginLeft = '0px'
      ripple.style.width = '1px'
      ripple.style.height = '1px'
      ripple.style.transition = 'all ' + props.transition + 'ms cubic-bezier(0.4, 0, 0.2, 1)'
      ripple.style.borderRadius = '50%'
      ripple.style.pointerEvents = 'none'
      ripple.style.position = 'relative'
      ripple.style.zIndex = zIndex
      ripple.style.backgroundColor = bg

      // Styles for rippleContainer
      rippleContainer.style.position = 'absolute'
      rippleContainer.style.left = 0 - border + 'px'
      rippleContainer.style.top = 0 - border + 'px'
      rippleContainer.style.height = '0'
      rippleContainer.style.width = '0'
      rippleContainer.style.pointerEvents = 'none'
      rippleContainer.style.overflow = 'hidden'

      // Store target position to change it after
      const storedTargetPosition =
        target.style.position.length > 0
          ? target.style.position
          : getComputedStyle(target).position
      // Change target position to relative to guarantee ripples correct positioning
      if (storedTargetPosition !== 'relative') {
        target.style.position = 'relative'
      }

      rippleContainer.appendChild(ripple)
      target.appendChild(rippleContainer)

      ripple.style.marginLeft = dx + 'px'
      ripple.style.marginTop = dy + 'px'

      rippleContainer.style.width = width + 'px'
      rippleContainer.style.height = height + 'px'
      rippleContainer.style.borderTopLeftRadius = style.borderTopLeftRadius
      rippleContainer.style.borderTopRightRadius = style.borderTopRightRadius
      rippleContainer.style.borderBottomLeftRadius =
        style.borderBottomLeftRadius
      rippleContainer.style.borderBottomRightRadius =
        style.borderBottomRightRadius

      rippleContainer.style.direction = 'ltr'

      setTimeout(function () {
        ripple.style.width = radius * 2 + 'px'
        ripple.style.height = radius * 2 + 'px'
        ripple.style.marginLeft = dx - radius + 'px'
        ripple.style.marginTop = dy - radius + 'px'
      }, 0)

      function clearRipple() {
        setTimeout(function () {
          ripple.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        }, 250)

        // Timeout set to get a smooth removal of the ripple
        setTimeout(function () {
          rippleContainer.parentNode?.removeChild(rippleContainer)
        }, 850)

        el.removeEventListener('mouseup', clearRipple, false)

        setTimeout(function () {
          let clearPosition = true
          for (let i = 0; i < target.children.length; i++) {
            if (target.children[i].className === 'ripple-container') {
              clearPosition = false
            }
          }

          if (clearPosition) {
            if (storedTargetPosition !== 'static') {
              target.style.position = storedTargetPosition
            } else {
              target.style.position = ''
            }
          }
        }, props.transition + 250)
      }

      if (event.type === 'mousedown') {
        el.addEventListener('mouseup', clearRipple, false)
      } else {
        clearRipple()
      }
    }
  },
}

export default Ripple
