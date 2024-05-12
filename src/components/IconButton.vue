<script setup lang="ts">
import { cn } from '@/utils/cn';
const props = defineProps<{
  action: () => void;
  icon: Object;
  title: string;
  class?: string;
}>();
const Icon = props.icon;
</script>

<template>
  <button
    type="button"
    v-on:click="props.action"
    :class="cn('h-9 w-9 p-1', props.class)"
    :title="props.title"
  >
    <Icon />
  </button>
</template>
