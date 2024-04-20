import { getForms } from './getForms';

export const getForm = (formId: string) => {
  const forms = getForms();

  return forms.find(({ id }) => id === formId);
};
