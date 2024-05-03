<script setup lang="ts">
import { useFormsStore } from '@/app/useFormsStore';
import { getParams } from '@/utils/getParams';

const state = useFormsStore();

const params = getParams<{ id: string }>();
const form = state.getForm(params.id);
</script>

<template>
  <div class="min-w-[300px]">{{ form?.name }}</div>
</template>
