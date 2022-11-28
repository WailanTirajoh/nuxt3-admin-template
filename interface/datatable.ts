export interface Header {
  name: string
  key: string
  sortable: boolean
  width?: string
  bodyValue?: (data: Data, index: number) => string
  onHeaderClick?: () => void
  onBodyClick?: () => void
}

export interface Data {
  [key: string]: any
}
