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
    message: string,
    lifetime?: number
  }
  const success = (params: Success) => {
    addToast({
      id: '',
      message: params.message,
      lifetime: params.lifetime ?? 5000,
      type: 'success',
    })
  }

  return {
    toasts,
    addToast,
    removeToast,
    success
  }
})
