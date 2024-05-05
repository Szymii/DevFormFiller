<script setup lang="ts">
import { useFormContext } from '@vorms/core';

const props = defineProps<{
  name: string;
}>();

const { register } = useFormContext();
const { value, attrs } = register(props.name);
</script>

<template>
  <label class="flex flex-col gap-1">
    <slot></slot>
    <input class="bg-slate-600 p-1" v-model="value" type="text" v-bind="attrs" />
  </label>
</template>
