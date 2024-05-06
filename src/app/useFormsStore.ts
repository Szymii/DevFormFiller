import { defineStore } from 'pinia';
import type { Form } from './types/Form';
import { getUId } from '@/utils/getUId';
import { saveForms } from './helpers/saveForms';
import { forms as mocks } from '@/utils/mocks/forms.mock';
import { ref } from 'vue';
import { downloadJSON } from './helpers/downloadJSON';

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
  }

  function deleteForm(formId: string) {
    const forms = currentForms.value.filter(({ id }) => id !== formId);

    saveForms(forms);
    currentForms.value = forms;
  }

  function editForm(formId: string, formData: Form) {
    const forms = currentForms.value.map((form) => (form.id === formId ? formData : form));

    currentForms.value = forms;
    saveForms(forms);
  }

  function exportForm(formId: string) {
    const form = currentForms.value.find(({ id }) => id === formId);
    if (form) {
      downloadJSON(form);
    }
  }

  function importForm() {
    //
  }

  return {
    currentForms,
    getForm,
    addForm,
    deleteForm,
    editForm,
    exportForm,
    import: importForm
  };
});
