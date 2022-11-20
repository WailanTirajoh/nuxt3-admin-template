export interface Toast {
  id: string
  message?: string
  html?: string
  lifetime?: number
  type: string
  jsonMessage?: object | null
  title?: string | null
}
