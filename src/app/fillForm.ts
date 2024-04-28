import { getForm } from './getForm';
import { click } from './helpers/click';
import { fillInput } from './helpers/fillInput';
import { selectOption } from './helpers/selectOption';

export const fillForm = async (formId: string) => {
  const form = getForm(formId);

  if (form) {
    form.fields.forEach(async (field) => {
      switch (field.action) {
        case 'fill':
          return await fillInput(field.identifier, field.value);
        case 'select':
          return await selectOption(field.identifier, field.value);
        case 'click':
          return await click(field.identifier);
        default:
          return; // unexpected input type notification
      }
    });
  }

  // cant find form notification
};
