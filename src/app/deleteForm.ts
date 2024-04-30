import { getForms } from './getForms';
import { saveForms } from './helpers/saveForms';

export const deleteForm = async (formId: string) => {
  const currentForms = getForms();

  saveForms(currentForms.filter(({ id }) => id !== formId));
};
