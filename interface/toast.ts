export interface Toast {
  id: string
  message: string
  type: string
  lifetime: number
  jsonMessage?: object
  html?: string
}
