<script setup lang="ts">
import type { Field } from '@/app/types/Form';
import { useFieldArray } from '@vorms/core';
import IconButton from './IconButton.vue';
import BinIcon from '@/assets/BinIcon.vue';

const { fields, append, remove } = useFieldArray<Field>('fields');
</script>

<template>
  <div class="grid grid-cols-10 gap-2" v-for="(field, index) in fields" :key="field.key">
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
      class="col-span-1 self-end"
      title="Remove fields"
      :action="() => remove(index)"
      :icon="BinIcon"
    />
  </div>
  <button
    type="button"
    class="border p-2 w-full rounded-md"
    @click="() => append({ action: 'click', identifier: '' })"
  >
    Add field
  </button>
</template>
