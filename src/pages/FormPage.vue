<script setup lang="ts">
import { getForm } from '@/app/getForm';
import { getParams } from '@/utils/getParams';
const params = getParams<{ id: string }>();
const form = getForm(params.id);
</script>

<template>
  <div class="min-w-[300px]">{{ form?.name }}</div>
</template>
