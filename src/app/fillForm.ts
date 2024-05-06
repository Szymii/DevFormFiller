import { click } from './helpers/click';
import { fillInput } from './helpers/fillInput';
import { selectOption } from './helpers/selectOption';
import { useFormsStore } from './useFormsStore';

export const fillForm = async (formId: string) => {
  const state = useFormsStore();
  const form = state.getForm(formId);

  if (form) {
    for (const field of form.fields) {
      switch (field.action) {
        case 'fill': {
          await fillInput(field.identifier, field.value);
          break;
        }
        case 'select': {
          await selectOption(field.identifier, field.value);
          break;
        }
        case 'click': {
          await click(field.identifier);
          break;
        }
        default:
          break; // unexpected input type notification
      }
    }
  }

  // cant find form notification
};
