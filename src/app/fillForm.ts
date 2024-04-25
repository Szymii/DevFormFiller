import { getForm } from './getForm';
import { fillInput } from './helpers/fillInput';
import { selectOption } from './helpers/selectOption';

export const fillForm = async (formId: string) => {
  const form = getForm(formId);

  if (form) {
    form.fields.forEach(async (field) => {
      console.log(field);
      switch (field.action) {
        case 'fill':
          return await fillInput(field.identifier, field.value);
        case 'select':
          return await selectOption(field.identifier, field.value);
        case 'click':
          return;
        default:
          return; // unexpected input type notification
      }
    });
  }

  // cant find form notification
};
