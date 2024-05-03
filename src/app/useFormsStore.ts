import { defineStore } from 'pinia';
import type { Form } from './types/Form';
import { getUId } from '@/utils/getUId';
import { saveForms } from './helpers/saveForms';
import { forms as mocks } from '@/utils/mocks/forms.mock';
import { ref } from 'vue';

function getInitialForms() {
  const raw = localStorage.getItem('forms');
  if (import.meta.env.MODE === 'development' && !raw) {
    return mocks;
  }

  if (raw) {
    const localForms = JSON.parse(raw);
    return localForms as Array<Form>;
  }

  return [] as Array<Form>;
}

export const useFormsStore = defineStore('forms', () => {
  const currentForms = ref<Array<Form>>(getInitialForms());

  function getForm(formId: string) {
    return currentForms.value.find(({ id }) => id === formId);
  }

  function addForm() {
    const newForm: Form = {
      id: getUId(),
      name: '',
      fields: []
    };

    saveForms([...currentForms.value, newForm]);
    currentForms.value = [...currentForms.value, newForm];
    console.log(currentForms.value);
  }

  function deleteForm(formId: string) {
    saveForms(currentForms.value.filter(({ id }) => id !== formId));
    currentForms.value = currentForms.value.filter(({ id }) => id !== formId);
  }

  return { currentForms, getForm, addForm, deleteForm };
});
