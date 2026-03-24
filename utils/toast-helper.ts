type ToastOptions = {
  title: string
  description?: string
  action?: 'error' | 'warning' | 'success' | 'info' | 'muted'
}

class ToastEvent {
  private listener: ((options: ToastOptions) => void) | null = null

  subscribe(listener: (options: ToastOptions) => void) {
    this.listener = listener
  }

  show(options: ToastOptions) {
    if (this.listener) {
      this.listener(options)
    }
  }

  error(title: string, description?: string) {
    this.show({ title, description, action: 'error' })
  }

  success(title: string, description?: string) {
    this.show({ title, description, action: 'success' })
  }
}

export const toast = new ToastEvent()
