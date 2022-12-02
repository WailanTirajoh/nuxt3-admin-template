import { Component } from "nuxt/dist/app/compat/capi"

export interface Header {
  name: string
  key: string
  sortable: boolean
  width?: string
  template?: (data: Data, index: number) => string
  component?: (data: Data, index: number) => {
    component: Component
    props: [key: any],
    hook: () => {}
  }
  onHeaderClick?: () => void
  onBodyClick?: () => void
}

export interface Data {
  [key: string]: any
}
