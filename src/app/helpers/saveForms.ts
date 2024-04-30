import type { Form } from '../types/Form';

export const saveForms = (forms: Array<Form>) => {
  localStorage.setItem('forms', JSON.stringify(forms));
};
