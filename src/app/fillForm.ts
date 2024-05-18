import { click } from './helpers/click';
import { fillInput } from './helpers/fillInput';
import { selectOption } from './helpers/selectOption';
import { useFormsStore } from './useFormsStore';
import { useToastsStore } from './useToastsStore';

export const fillForm = async (formId: string) => {
  const state = useFormsStore();
  const toast = useToastsStore();
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
          toast.error({
            title: 'Unexpected input type',
            // @ts-expect-error
            description: `Action ${field.action} is not supported`
          });
          break;
      }
    }

    return;
  }

  toast.error({
    title: 'Form not found',
    description: `Can't find form with id ${formId}`
  });
};
