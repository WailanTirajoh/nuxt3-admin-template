
export type Type = 'success' | 'info' | 'error' | 'warning'
export interface Toast {
  id: string
  message?: string
  html?: string
  lifetime?: number
  type: Type
  jsonMessage?: object | null
  title?: string | null
}
