<script setup lang="ts">
import type { Form } from '@/app/types/Form';
import { useFormsStore } from '@/app/useFormsStore';
import FormFields from '@/components/FormFields.vue';
import TextField from '@/components/TextField.vue';
import { getParams } from '@/utils/getParams';
import { useForm } from '@vorms/core';

const params = getParams<{ id: string }>();
const state = useFormsStore();
const form = state.getForm(params.id);

const { handleSubmit } = useForm({
  initialValues: {
    id: form?.id,
    name: form?.name,
    fields: form?.fields
  },
  onSubmit(data) {
    state.editForm(form?.id!, data as Form);
    window.history.back();
  }
});
</script>

<template>
  <form class="flex flex-col gap-4 min-w-[300px]" @submit="handleSubmit">
    <TextField name="name"> Form name </TextField>
    <FormFields />
    <button type="submit" class="border p-3 w-full rounded-md">Submit</button>
  </form>
</template>
