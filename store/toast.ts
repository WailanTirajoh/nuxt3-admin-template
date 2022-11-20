// Pinia Store
import { defineStore } from 'pinia';
import { Toast } from '~~/interface/toast';

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Array<Toast>>([])

  const addToast = (params: Toast) => {
    params.id = generateId()
    toasts.value.push(params)
  }

  const removeToast = (id: string) => {
    const index = toasts.value.findIndex((toast) => toast.id === id)
    toasts.value.splice(index, 1)
  }

  interface Success {
    message: string
    lifetime?: number
    title?: string
  }
  const success = (params: Success) => {
    addToast({
      id: '',
      message: params.message,
      lifetime: params.lifetime ?? 5000,
      type: 'success',
      title: params.title || 'Success'
    })
  }

  interface Error {
    message: string
    lifetime?: number
    title?: string
  }
  const error = (params: Error) => {
    addToast({
      id: '',
      message: params.message,
      lifetime: params.lifetime ?? 5000,
      type: 'error',
      title: params.title || 'Error'
    })
  }

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
  }
})
