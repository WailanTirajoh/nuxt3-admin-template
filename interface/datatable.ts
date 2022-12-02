import { Component } from "nuxt/dist/app/compat/capi"

export interface Column {
  label: string
  field: string
  sortable: boolean
  width?: string
  template?: (data: Data, index: number) => string
  component?: (data: Data, index: number) => {
    component: Component
    props: [key: any],
    hook: () => {}
  }
  onColumnClick?: () => void
  onCellClick?: () => void
}

export interface Data {
  [key: string]: any
}
