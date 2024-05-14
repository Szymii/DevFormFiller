export type ToastStatus = 'success' | 'error';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  status: ToastStatus;
}
