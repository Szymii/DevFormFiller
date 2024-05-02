import { forms } from '@/utils/mocks/forms.mock';
import type { Form } from './types/Form';

export const getForms = () => {
  const raw = localStorage.getItem('forms');
  if (import.meta.env.MODE === 'development' && !raw) {
    return forms;
  }

  if (raw) {
    const localForms = JSON.parse(raw);
    return localForms as Array<Form>;
  }

  return [] as Array<Form>;
};
