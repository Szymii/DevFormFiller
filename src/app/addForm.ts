import { getUId } from '@/utils/getUId';
import type { Form } from './types/Form';
import { getForms } from './getForms';
import { saveForms } from './helpers/saveForms';

export const addForm = async () => {
  const currentForms = getForms();
  const newForm: Form = {
    id: getUId(),
    name: '',
    fields: []
  };

  saveForms([...currentForms, newForm]);
};
