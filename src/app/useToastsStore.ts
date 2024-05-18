import { defineStore } from 'pinia';
import type { Toast, ToastStatus } from './types/Toast';
import { getUId } from '@/utils/getUId';

type ToastPayload = { timeout?: number; title: string; description?: string };

const createToast = (status: ToastStatus, title: string, description?: string): Toast => ({
  id: getUId(),
  status: status,
  title,
  description
});

export const useToastsStore = defineStore('toasts', {
  state: (): { toasts: Toast[] } => ({
    toasts: []
  }),
  actions: {
    updateState(payload: ToastPayload, status: ToastStatus) {
      const { title, description, timeout } = payload;
      const toast = createToast(status, title, description);

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== toast.id);
      }, timeout ?? 3000);
    },
    success(payload: ToastPayload) {
      this.updateState(payload, 'success');
    },

    error(payload: ToastPayload) {
      this.updateState(payload, 'error');
    }
  }
});
