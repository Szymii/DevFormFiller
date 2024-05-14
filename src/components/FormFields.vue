<script setup lang="ts">
import type { Field } from '@/app/types/Form';
import { useFieldArray, useFormContext } from '@vorms/core';
import IconButton from './IconButton.vue';
import BinIcon from '@/assets/BinIcon.vue';
import KebabIcon from '@/assets/KebabIcon.vue';
import { useOptionsStore } from '@/app/useOptionsStore';
import { onMounted } from 'vue';
import kebabCase from 'lodash.kebabcase';

const { setFieldValue, values } = useFormContext();
const { fields, append, remove } = useFieldArray<Field>('fields');
const options = useOptionsStore();

onMounted(async () => {
  await options.getOptions();
});

const transformNameToKebab = (name: string, index: number) => {
  const fieldValue = values.fields[index].identifier;
  setFieldValue(`${name}.identifier`, kebabCase(fieldValue));
};
</script>

<template>
  <div class="grid grid-cols-11 gap-2" v-for="(field, index) in fields" :key="field.key">
    <label class="col-span-3 flex flex-col">
      Field id
      <input
        class="bg-slate-600 p-1"
        v-model="field.value.identifier"
        type="text"
        :name="`${field.name}.name`"
        v-bind="field.attrs"
      />
    </label>
    <div class="self-end" v-if="options.settings?.kebab">
      <IconButton
        class="-ml-2 pb-0"
        title="Transform to kebab case"
        :action="() => transformNameToKebab(field.name, index)"
        :icon="KebabIcon"
      />
    </div>
    <label class="col-span-3 flex flex-col">
      Action
      <select
        class="bg-slate-600 p-1"
        v-model="field.value.action"
        :name="`${field.name}.name`"
        v-bind="field.attrs"
      >
        <option value="fill">fill</option>
        <option value="click">click</option>
        <option value="select">select</option>
      </select>
    </label>
    <label class="col-span-3 flex flex-col">
      Value
      <input v-if="field.value.action === 'click'" class="bg-slate-700 p-1" type="text" disabled />
      <input
        v-if="field.value.action === 'fill'"
        class="bg-slate-600 p-1"
        v-model="field.value.value"
        type="text"
        :name="`${field.name}.name`"
        v-bind="field.attrs"
      />
      <input
        v-if="field.value.action === 'select'"
        class="bg-slate-600 p-1"
        v-model="field.value.value[0]"
        type="text"
        :name="`${field.name}[0].name`"
        v-bind="field.attrs"
      />
    </label>
    <IconButton
      class="-ml-2 self-end pb-0"
      title="Remove fields"
      :action="() => remove(index)"
      :icon="BinIcon"
    />
  </div>
  <button
    type="button"
    class="w-full rounded-md border p-2"
    @click="() => append({ action: 'click', identifier: '' })"
  >
    Add field
  </button>
</template>
