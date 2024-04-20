<script setup lang="ts">
const props = defineProps<{
  action: () => void;
  icon: Object;
}>();
const Icon = props.icon;
</script>

<template>
  <button v-on:click="props.action" class="h-8 w-8">
    <Icon />
  </button>
</template>
