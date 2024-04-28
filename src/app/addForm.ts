import { getUId } from '@/utils/getUId';
import type { Form } from './types/Form';
import { getForms } from './getForms';

export const addForm = async () => {
  console.log('saved');
  const newForm: Form = {
    id: getUId(),
    name: '',
    fields: []
  };

  const currentForms = getForms();

  localStorage.setItem('forms', JSON.stringify([...currentForms, newForm]));
};
