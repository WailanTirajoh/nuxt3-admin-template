import { Directive } from 'nuxt/dist/app/compat/capi'
import Ripple from '~~/services/ripple'

export default defineNuxtPlugin((nuxtApp) => {
  Ripple.color = 'rgba(255, 255, 255, 0.35)'
  Ripple.zIndex = '55'
  nuxtApp.vueApp.directive('ripple', Ripple as Directive<any, any>)
})
